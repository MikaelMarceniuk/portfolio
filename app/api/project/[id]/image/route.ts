import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongo.db'
import { deleteFile, getOldFilepath, writeFile } from '@/lib/file.utils'
import path from 'path'
import { Project } from '@/types/project.types'

type Params = {
  params: { id: string }
}

export async function POST(req: Request, { params }: Params) {
  let newFilepath: string | null = null
  let oldFilepath: string | null = null

  try {
    const { id } = params
    const formData = await req.formData()
    const image = formData.get('image') as File

    if (!image) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('portfolio')

    // Busca o projeto
    const project = await db
      .collection<Project>('projects')
      .findOne({ _id: new ObjectId(id) })
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    if (project.image) {
      oldFilepath = getOldFilepath(project.image)
    }

    // Faz upload da nova imagem
    const uploadData = await writeFile({ image })
    newFilepath = uploadData.filepath

    // Atualiza o projeto
    const result = await db
      .collection('projects')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { image: newFilepath, updatedAt: new Date() } }
      )

    if (result.matchedCount === 0) {
      // rollback: deleta nova imagem
      await deleteFile({ filepath: newFilepath })
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Deleta a imagem antiga só depois do update ter sucesso
    if (oldFilepath) {
      await deleteFile({ filepath: oldFilepath })
    }

    return NextResponse.json(
      { success: true, imageUrl: newFilepath },
      { status: 200 }
    )
  } catch (error) {
    // rollback: deleta nova imagem se já tiver sido salva
    if (newFilepath) {
      await deleteFile({ filepath: newFilepath })
    }

    console.error(error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}
