import clientPromise from '@/lib/mongo.db'
import { NextRequest, NextResponse } from 'next/server'
import { createProjectSchema } from './schemas/create-project.schema'
import { authenticateRequest } from '../_utils/authenticated-request.utils'

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
export async function POST(req: NextRequest) {
  const authError = authenticateRequest(req)
  if (authError) return authError

  try {
    const data = await req.json()

    // Validação
    const parsed = createProjectSchema.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json({
        error: 'Validation failed',
        details: parsed.error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      })
    }

    const project = parsed.data

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
