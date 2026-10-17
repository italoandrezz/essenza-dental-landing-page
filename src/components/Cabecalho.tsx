import { useEffect, useRef, useState } from 'react'
import { contato } from '../config/contato'
import { Icone } from './Icone'
import './Cabecalho.css'

export function Cabecalho() {
  const [menuAberto, definirMenuAberto] = useState(false)
  const botaoMenu = useRef<HTMLButtonElement>(null)
  const cabecalho = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuAberto) return

    function fecharComEscape(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        definirMenuAberto(false)
        botaoMenu.current?.focus()
      }
    }

    function fecharFora(evento: PointerEvent) {
      if (evento.target instanceof Node && !cabecalho.current?.contains(evento.target)) {
        definirMenuAberto(false)
      }
    }

    const telaGrande = window.matchMedia('(min-width: 1024px)')
    function fecharAoAmpliar() {
      if (telaGrande.matches) definirMenuAberto(false)
    }

    document.addEventListener('keydown', fecharComEscape)
    document.addEventListener('pointerdown', fecharFora)
    telaGrande.addEventListener('change', fecharAoAmpliar)
    return () => {
      document.removeEventListener('keydown', fecharComEscape)
      document.removeEventListener('pointerdown', fecharFora)
      telaGrande.removeEventListener('change', fecharAoAmpliar)
    }
  }, [menuAberto])

  return (
    <header className="cabecalho container" ref={cabecalho}>
      <a className="marca" href="#inicio" aria-label="Essenza Odontologia — início" onClick={() => definirMenuAberto(false)}>
        <span className="marca-simbolo"><Icone nome="brilho" /></span>
        <span>essenza<small>ODONTOLOGIA</small></span>
      </a>
      <button className="alternar-menu" type="button" ref={botaoMenu} aria-expanded={menuAberto} aria-controls="navegacao-principal" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => definirMenuAberto(!menuAberto)}>
        <Icone nome={menuAberto ? 'fechar' : 'menu'} />
      </button>
      <nav id="navegacao-principal" className={`navegacao ${menuAberto ? 'navegacao-aberta' : ''}`} aria-label="Navegação principal">
        <a href="#inicio" onClick={() => definirMenuAberto(false)}>Início</a>
        <a href="#clinica" onClick={() => definirMenuAberto(false)}>A clínica</a>
        <a href="#tratamentos" onClick={() => definirMenuAberto(false)}>Tratamentos</a>
        <a href="#diferenciais" onClick={() => definirMenuAberto(false)}>Diferenciais</a>
        <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => definirMenuAberto(false)}>Contato <span className="somente-leitor">pelo WhatsApp (abre em outra aba)</span></a>
        <a className="botao agendar-cabecalho" href={contato.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => definirMenuAberto(false)}>Agendar consulta <Icone nome="seta" /><span className="somente-leitor">pelo WhatsApp (abre em outra aba)</span></a>
      </nav>
    </header>
  )
}


