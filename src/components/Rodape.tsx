import { contato, whatsappDoTratamento } from '../config/contato'
import { tratamentos } from '../dados/tratamentos'
import { Icone } from './Icone'
import './Rodape.css'

const anoAtual = new Date().getFullYear()

const secoes = [
  { nome: 'A clínica', destino: '#clinica' },
  { nome: 'Tratamentos', destino: '#tratamentos' },
  { nome: 'Equipe', destino: '#equipe' },
  { nome: 'Diferenciais', destino: '#diferenciais' },
  { nome: 'Experiências', destino: '#experiencias' },
  { nome: 'Dúvidas', destino: '#perguntas-frequentes' },
  { nome: 'Contato', destino: '#contato' },
]

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-colunas">
          <div className="rodape-apresentacao">
            <a className="marca" href="#inicio" aria-label="Essenza Odontologia — voltar ao início"><span className="marca-simbolo"><Icone nome="brilho" /></span><span>essenza<small>ODONTOLOGIA</small></span></a>
            <p>Odontologia sensível, moderna e feita para você.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h2 className="rodape-titulo">Navegue</h2>
            <ul>{secoes.map(secao => <li key={secao.destino}><a href={secao.destino}>{secao.nome}</a></li>)}</ul>
          </nav>
          <nav aria-label="Tratamentos no rodapé">
            <h2 className="rodape-titulo">Tratamentos</h2>
            <ul>{tratamentos.map(tratamento => <li key={tratamento.nome}><a href={whatsappDoTratamento(tratamento.nome)} target="_blank" rel="noopener noreferrer">{tratamento.nome}<span className="somente-leitor"> pelo WhatsApp (abre em outra aba)</span></a></li>)}</ul>
          </nav>
          <div className="rodape-contato">
            <h2 className="rodape-titulo">Fale conosco</h2>
            <a href={`tel:${contato.telefone.replace(/[^+\d]/g, '')}`}>{contato.telefone}</a>
            <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer"><Icone nome="whatsapp" />Conversar pelo WhatsApp<span className="somente-leitor"> (abre em outra aba)</span></a>
            <p>Será um prazer receber você.</p>
          </div>
        </div>
        <div className="rodape-base">
          <p>© {anoAtual} Essenza Odontologia. Todos os direitos reservados.</p>
          <a href="#inicio">Voltar ao início <Icone nome="seta" /></a>
        </div>
      </div>
    </footer>
  )
}

