import clientPromise from '@/lib/mongo.db'
import { NextResponse } from 'next/server'
import { createProjectSchema } from './schemas/create-project.schema'

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

// POST → cria um novo projeto
export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const projectRaw = {
      name: formData.get('name')?.toString(),
      description: {
        en: formData.get('descriptionEn')?.toString(),
        'pt-br': formData.get('descriptionPt')?.toString(),
      },
      impact: {
        en: formData.get('impactEn')?.toString(),
        'pt-br': formData.get('impactPt')?.toString(),
      },
      stack: formData.getAll('stack').map(String),
      image: formData.get('image')?.toString(),
      githubLink: formData.get('githubLink')?.toString(),
      liveLink: formData.get('liveLink')?.toString(),
    }

    // Validação
    const parseResult = createProjectSchema.safeParse(projectRaw)

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: parseResult.error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    const project = parseResult.data

    // Persistência no Mongo
    const client = await clientPromise
    const db = client.db('portfolio')

    const result = await db.collection('projects').insertOne({
      ...project,
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
