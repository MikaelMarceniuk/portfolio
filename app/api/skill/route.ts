import clientPromise from '@/lib/mongo.db'
import { Skill } from '@/types/skills.type'
import { NextRequest, NextResponse } from 'next/server'
import { createSkillsSchema } from './schemas/create-skill.schema'

// GET: retorna todas as skills
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('portfolio')
    const skills = await db.collection('skills').find({}).toArray()
    return NextResponse.json(skills, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: 'Failed to fetch skills' },
      { status: 500 }
    )
  }
}

// POST: cria nova skill
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const parsed = createSkillsSchema.parse(data)
    const skills: Skill[] = parsed

    const client = await clientPromise
    const db = client.db('portfolio')

    await db.collection('skills').insertMany(skills)

    return NextResponse.json(skills, { status: 201 })
  } catch (err) {
    console.error(err)

    if (err instanceof Error && 'issues' in err) {
      return NextResponse.json(
        { message: 'Validation failed', errors: (err as any).issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Failed to create skills' },
      { status: 500 }
    )
  }
}
