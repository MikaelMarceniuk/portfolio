import fs from 'fs'
import path from 'path'
import { del, put } from '@vercel/blob'
import { BLOB_FOLDERS } from '@/constants/blob-folders.contants'

function slugifyFilename(name: string) {
  return name
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/ç/g, 'c') // trata cedilha
    .replace(/[^a-zA-Z0-9.]+/g, '-') // troca não-alfanumérico por "-"
    .replace(/-+/g, '-') // remove múltiplos "-"
    .replace(/^-|-$/g, '') // tira "-" do começo/fim
    .toLowerCase()
}

type WriteFileParams = {
  image: File
}

type WriteFileResponse = {
  filepath: string
  filename: string
}

export async function writeFile({
  image,
}: WriteFileParams): Promise<WriteFileResponse> {
  let filepath: string
  const filename = slugifyFilename(image.name)

  if (process.env.NODE_ENV === 'development') {
    // Cria pasta public/uploads se não existir
    const dir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const filepathToWrite = path.join(
      process.cwd(),
      'public',
      'uploads',
      filename
    )

    // Salva o arquivo
    const buffer = Buffer.from(await image.arrayBuffer())
    fs.writeFileSync(filepathToWrite, buffer)

    filepath = `/uploads/${filename}`
  }

  if (process.env.NODE_ENV === 'production') {
    filepath = `${BLOB_FOLDERS.projects}/`

    const blob = await put(`${BLOB_FOLDERS.projects}/${filename}`, image, {
      access: 'public',
    })

    filepath = blob.url
  }

  return {
    filepath: filepath!,
    filename: filename!,
  }
}

type DeleteFileParams = {
  filepath: string
}

export async function deleteFile({ filepath }: DeleteFileParams) {
  if (process.env.NODE_ENV === 'development') {
    if (filepath && fs.existsSync(filepath)) {
      fs.unlinkSync(filepath)
    }
  }

  if (process.env.NODE_ENV === 'production') {
    try {
      await del(filepath, {
        token: process.env.BLOB_READ_WRITE_TOKEN!,
      })
      return true
    } catch (err) {
      console.error('Erro ao deletar blob:', err)
      return false
    }
  }
}

export function getOldFilepath(imagePath: string): string | null {
  if (process.env.NODE_ENV == 'development') {
    return path.join(process.cwd(), 'public', imagePath)
  }

  if (process.env.NODE_ENV == 'production') {
    return imagePath
  }

  return null
}
