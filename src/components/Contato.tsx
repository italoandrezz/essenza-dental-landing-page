import { contato } from '../config/contato'
import { informacoesClinica } from '../dados/informacoesClinica'
import { Icone } from './Icone'
import './Contato.css'

export function Contato() {
  return (
    <section className="contato" aria-labelledby="titulo-contato">
      <div className="container contato-conteudo" id="contato">
        <div className="contato-introducao">
          <p className="sobretitulo">Seu novo sorriso começa aqui</p>
          <h2 id="titulo-contato">Vamos cuidar de<br className="contato-quebra" /> você?</h2>
          <p>Agende uma conversa com nossa equipe. Será um prazer conhecer sua história e fazer parte da sua transformação.</p>
          <a className="botao contato-botao" href={contato.whatsapp} target="_blank" rel="noopener noreferrer"><Icone nome="whatsapp" />Agendar pelo WhatsApp<span className="somente-leitor"> (abre em outra aba)</span></a>
        </div>
        <div className="contato-cartao">
          <div className="contato-informacao">
            <span className="contato-icone"><Icone nome="localizacao" /></span>
            <div><h3>Onde estamos</h3><address>{informacoesClinica.endereco.map(linha => <span key={linha}>{linha}</span>)}</address></div>
          </div>
          <div className="contato-informacao">
            <span className="contato-icone"><Icone nome="relogio" /></span>
            <div><h3>Horários</h3>{informacoesClinica.horarios.map(linha => <p key={linha}>{linha}</p>)}</div>
          </div>
          <div className="contato-informacao">
            <span className="contato-icone"><Icone nome="calendario" /></span>
            <div><h3>Atendimento</h3><p>{informacoesClinica.atendimento}</p><a href={`tel:${contato.telefone.replace(/[^+\d]/g, '')}`}>{contato.telefone}</a></div>
          </div>
          <p className="contato-observacao">Endereço e horários demonstrativos.</p>
        </div>
      </div>
    </section>
  )
}
