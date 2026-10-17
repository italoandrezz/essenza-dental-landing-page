import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { contato } from '../config/contato'
import { perguntasFrequentes } from '../dados/perguntasFrequentes'
import { Icone } from './Icone'
import './PerguntasFrequentes.css'

export function PerguntasFrequentes() {
  const [perguntaAberta, definirPerguntaAberta] = useState<string | null>(perguntasFrequentes[0].id)
  const botoes = useRef<Array<HTMLButtonElement | null>>([])

  function navegarPerguntas(evento: KeyboardEvent<HTMLButtonElement>, indice: number) {
    if (evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey) return
    let destino: number
    switch (evento.key) {
      case 'ArrowDown': destino = (indice + 1) % perguntasFrequentes.length; break
      case 'ArrowUp': destino = (indice - 1 + perguntasFrequentes.length) % perguntasFrequentes.length; break
      case 'Home': destino = 0; break
      case 'End': destino = perguntasFrequentes.length - 1; break
      default: return
    }
    evento.preventDefault()
    botoes.current[destino]?.focus()
  }

  return (
    <section className="perguntas" id="perguntas-frequentes" aria-labelledby="titulo-perguntas">
      <div className="container perguntas-conteudo">
        <div className="perguntas-introducao">
          <p className="sobretitulo">Perguntas frequentes</p>
          <h2 id="titulo-perguntas">Informação<br className="perguntas-quebra" /> também é uma<br className="perguntas-quebra" /> forma de<br className="perguntas-quebra" /> cuidado</h2>
          <p className="descricao">Reunimos respostas para deixar sua experiência mais tranquila desde o primeiro contato.</p>
          <a className="link-texto" href={contato.whatsapp} target="_blank" rel="noopener noreferrer">Ainda tem dúvidas? Fale conosco <Icone nome="seta" /><span className="somente-leitor"> pelo WhatsApp (abre em outra aba)</span></a>
        </div>
        <div className="perguntas-lista">
          {perguntasFrequentes.map((item, indice) => {
            const aberta = perguntaAberta === item.id
            const idBotao = `pergunta-${item.id}`
            const idResposta = `resposta-${item.id}`
            return (
              <div className="perguntas-item" key={item.id}>
                <h3>
                  <button type="button" id={idBotao} aria-expanded={aberta} aria-controls={idResposta} ref={elemento => { botoes.current[indice] = elemento }} onClick={() => definirPerguntaAberta(aberta ? null : item.id)} onKeyDown={evento => navegarPerguntas(evento, indice)}>
                    <span className="perguntas-numero" aria-hidden="true">{String(indice + 1).padStart(2, '0')}</span>
                    <span>{item.pergunta}</span>
                    <svg className="perguntas-seta" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                </h3>
                <div className="perguntas-resposta" id={idResposta} role="region" aria-labelledby={idBotao} hidden={!aberta}><p>{item.resposta}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
