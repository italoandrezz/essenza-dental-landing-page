import type { SVGProps } from 'react'

type NomeIcone = 'seta' | 'whatsapp' | 'coracao' | 'escudo' | 'brilho' | 'menu' | 'fechar' | 'tecnologia' | 'localizacao' | 'relogio' | 'calendario' | 'instagram'

const desenhos: Record<NomeIcone, React.ReactNode> = {
  seta: <><path d="M4 12h16M14 6l6 6-6 6" /></>,
  whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 21l1.7-4.9A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8 7.5c-.6 3.8 2.7 7 6.5 7.5l1.5-2-2.5-1-1 1c-1.5-.6-2.4-1.5-3-3l1-1L9 7.5Z" /></>,
  coracao: <path d="M20.5 5.5a5 5 0 0 0-7 0L12 7l-1.5-1.5a5 5 0 0 0-7 7L12 21l8.5-8.5a5 5 0 0 0 0-7Z" />,
  escudo: <><path d="m12 3 8 3v6c0 4-5 7.5-8 9-3-1.5-8-5-8-9V6Z" /><path d="m8 12 3 3 5-6" /></>,
  brilho: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="M21 2v4M19 4h4" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  tecnologia: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M9 10h6M12 7v6" /></>,
  localizacao: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  relogio: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
  calendario: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 11h16" /></>,
  fechar: <path d="m6 6 12 12M6 18 18 6" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
}

export function Icone({ nome, ...props }: SVGProps<SVGSVGElement> & { nome: NomeIcone }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{desenhos[nome]}</svg>
}


