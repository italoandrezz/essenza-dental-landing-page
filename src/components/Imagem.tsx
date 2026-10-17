import type { ImgHTMLAttributes } from 'react'

type Propriedades = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'width' | 'height'> & {
  src: string
  sizes: string
  width: number
  height: number
}

export function Imagem({ src, sizes, width, height, ...propriedades }: Propriedades) {
  const variantes = [
    `${src.replace('.webp', '-480.webp')} 480w`,
    ...(width > 800 ? [`${src.replace('.webp', '-800.webp')} 800w`] : []),
    `${src} ${width}w`,
  ].join(', ')

  return <img src={src} srcSet={variantes} sizes={sizes} width={width} height={height} decoding="async" {...propriedades} />
}
