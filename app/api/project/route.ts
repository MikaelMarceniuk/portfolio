import clientPromise from '@/lib/mongo.db'
import { NextResponse } from 'next/server'

// GET → lista todos os projetos
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('portfolio')
    const projects = await db.collection('projects').find({}).toArray()
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar projetos' },
      { status: 500 }
    )
  }
}

// TODO Protect this route
// POST → cria um novo projeto
export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // TODO Validar com zod
    const name = formData.get('name')?.toString()
    const descriptionEn = formData.get('descriptionEn')?.toString()
    const descriptionPt = formData.get('descriptionPt')?.toString()
    const impactEn = formData.get('impactEn')?.toString()
    const impactPt = formData.get('impactPt')?.toString()
    const stack = formData.getAll('stack') as string[]
    const image = formData.get('image')?.toString() || '' // placeholder
    const githubLink = formData.get('githubLink')?.toString() || ''
    const liveLink = formData.get('liveLink')?.toString() || ''

    if (!name || !descriptionEn || !descriptionPt) {
      return NextResponse.json(
        { error: 'Name and descriptions are required' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('portfolio')

    const result = await db.collection('projects').insertOne({
      name,
      description: { en: descriptionEn, 'pt-br': descriptionPt },
      impact: { en: impactEn || '', 'pt-br': impactPt || '' },
      stack,
      image,
      githubLink,
      liveLink,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao criar projeto' },
      { status: 500 }
    )
  }
}
