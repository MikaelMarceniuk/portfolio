import { NextRequest, NextResponse } from 'next/server'

export function authenticateRequest(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const token = authHeader.split(' ')[1]

  if (token !== process.env.API_SECRET) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  return null
}
