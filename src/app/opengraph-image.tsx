import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mikael Marceniuk | Fullstack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  // -------------------------------------------------------
  // Quando tiver sua foto:
  // 1. Coloca a imagem em /public/og-photo.jpg
  // 2. Substitui o bloco de placeholder pelo código abaixo:
  //
  // const photoUrl = 'https://mmarceniuk.dev/og-photo.jpg'
  // const photo = await fetch(photoUrl).then((r) => r.arrayBuffer())
  // const photoBase64 = `data:image/jpeg;base64,${Buffer.from(photo).toString('base64')}`
  //
  // E no JSX troca o bloco do placeholder por:
  // <img src={photoBase64} style={{ width: 280, height: 280, borderRadius: 999, objectFit: 'cover', border: '3px solid #334155' }} />
  // -------------------------------------------------------

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#0a0d14',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(51,65,85,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Left — text content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '640px',
          zIndex: 1,
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '999px',
              background: '#22c55e',
            }}
          />
          <span style={{ color: '#22c55e', fontSize: '16px', fontWeight: 500 }}>
            Available for new opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#f8fafc',
            lineHeight: 1.1,
          }}
        >
          Mikael Marceniuk
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 400,
            color: '#94a3b8',
          }}
        >
          Fullstack Developer
        </div>

        {/* Divider */}
        <div
          style={{
            width: '48px',
            height: '2px',
            background: '#334155',
          }}
        />

        {/* Tags */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['Node.js', 'React', 'Next.js', 'AWS', 'TypeScript'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: '1px solid #1e293b',
                background: '#0f172a',
                color: '#64748b',
                fontSize: '15px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ color: '#475569', fontSize: '16px' }}>mmarceniuk.dev</div>
      </div>

      {/* Right — photo placeholder */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '280px',
          height: '280px',
          borderRadius: '999px',
          border: '2px dashed #334155',
          background: '#0f172a',
          color: '#334155',
          fontSize: '14px',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {/* Substituir por <img> quando tiver a foto */}
        photo
      </div>
    </div>,
    { ...size }
  )
}
