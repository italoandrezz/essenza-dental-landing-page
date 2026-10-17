import { Imagem } from './Imagem'
import { contato, whatsappDoTratamento } from '../config/contato'
import { tratamentos } from '../dados/tratamentos'
import { Icone } from './Icone'
import './Tratamentos.css'

export function Tratamentos() {
  return (
    <section className="tratamentos" aria-labelledby="titulo-tratamentos">
      <div className="container" id="tratamentos">
        <div className="tratamentos-cabecalho">
          <div>
            <p className="sobretitulo">Nossos tratamentos</p>
            <h2 id="titulo-tratamentos">Cuidado completo para o<br className="tratamentos-quebra" /> seu sorriso</h2>
            <p className="descricao">Da prevenção à transformação estética, cada tratamento respeita seu tempo, suas necessidades e a naturalidade do seu sorriso.</p>
          </div>
          <a className="link-texto" href={contato.whatsapp} target="_blank" rel="noopener noreferrer">Tire suas dúvidas <Icone nome="seta" /><span className="somente-leitor"> pelo WhatsApp (abre em outra aba)</span></a>
        </div>
        <ul className="tratamentos-grade">
          {tratamentos.map((tratamento, indice) => (
            <li key={tratamento.nome}>
              <a className="tratamento-cartao" href={whatsappDoTratamento(tratamento.nome)} target="_blank" rel="noopener noreferrer">
                <div className="tratamento-foto">
                  <Imagem sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 72px) / 2), 360px" src={`/imagens/${tratamento.imagem}`} alt="" width={tratamento.largura} height={tratamento.altura} style={{ objectPosition: tratamento.posicao }} loading="lazy" />
                  <span className="tratamento-numero" aria-hidden="true">{String(indice + 1).padStart(2, '0')}</span>
                </div>
                <div className="tratamento-conteudo">
                  <h3>{tratamento.nome}</h3>
                  <p>{tratamento.descricao}</p>
                  <span className="tratamento-seta"><Icone nome="seta" /></span>
                  <span className="somente-leitor"> Saiba mais pelo WhatsApp (abre em outra aba).</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


