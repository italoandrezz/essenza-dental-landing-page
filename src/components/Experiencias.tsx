import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { experiencias } from '../dados/experiencias'
import { Icone } from './Icone'
import './Experiencias.css'

export function Experiencias() {
  const [indice, definirIndice] = useState(0)
  const experiencia = experiencias[indice]

  function avancar(direcao: number) {
    definirIndice(atual => (atual + direcao + experiencias.length) % experiencias.length)
  }

  function navegarComTeclado(evento: KeyboardEvent<HTMLDivElement>) {
    if (evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey) return
    if (evento.key === 'ArrowLeft' || evento.key === 'ArrowRight') {
      evento.preventDefault()
      avancar(evento.key === 'ArrowRight' ? 1 : -1)
    }
  }

  return (
    <section className="experiencias" aria-labelledby="titulo-experiencias">
      <div className="container experiencias-conteudo" id="experiencias">
        <p className="sobretitulo">Experiências que inspiram</p>
        <h2 id="titulo-experiencias">Cuidado que deixa marcas<br className="experiencias-quebra" /> bonitas</h2>
        <div className="experiencias-carrossel" role="group" aria-roledescription="carrossel" aria-label="Depoimentos demonstrativos" onKeyDown={navegarComTeclado}>
          <span className="experiencias-ornamento" aria-label="Avaliação demonstrativa de cinco estrelas">★★★★★</span>
          <div className="experiencias-relato" aria-live="polite" aria-atomic="true">
            <figure>
              <blockquote><p>“{experiencia.texto}”</p></blockquote>
              <figcaption>
                <span className="experiencias-marca" aria-hidden="true">{experiencia.assinatura.split(' ').map(nome => nome[0]).join('')}</span>
                <span><strong>{experiencia.assinatura}</strong><span className="experiencias-contexto">{experiencia.contexto}</span></span>
              </figcaption>
            </figure>
            <span className="somente-leitor">Depoimento {indice + 1} de {experiencias.length}.</span>
          </div>
          <div className="experiencias-controles">
            <button className="experiencias-anterior" type="button" onClick={() => avancar(-1)} aria-label="Depoimento anterior"><Icone nome="seta" /></button>
            <div className="experiencias-indicadores" role="group" aria-label="Selecionar depoimento">
              {experiencias.map((item, posicao) => (
                <button key={item.id} type="button" aria-label={`Exibir depoimento ${posicao + 1}: ${item.assinatura}`} aria-pressed={posicao === indice} onClick={() => definirIndice(posicao)}><span /></button>
              ))}
            </div>
            <button type="button" onClick={() => avancar(1)} aria-label="Próximo depoimento"><Icone nome="seta" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}


