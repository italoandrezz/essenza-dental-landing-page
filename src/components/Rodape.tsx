import { contato } from '../config/contato'
import { informacoesClinica } from '../dados/informacoesClinica'
import { Icone } from './Icone'
import './Rodape.css'

const anoAtual = new Date().getFullYear()

const secoes = [
  { nome: 'A clínica', destino: '#clinica' },
  { nome: 'Tratamentos', destino: '#tratamentos' },
  { nome: 'Equipe', destino: '#equipe' },
  { nome: 'Dúvidas', destino: '#perguntas-frequentes' },
]

export function Rodape() {
  const instagram = <><Icone nome="instagram" /><span>Instagram</span></>

  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-colunas">
          <div className="rodape-apresentacao">
            <a className="marca" href="#inicio"><span className="marca-simbolo"><Icone nome="brilho" /></span><span>essenza<small>ODONTOLOGIA</small></span></a>
            <p>Odontologia sensível, moderna e feita para você.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h2 className="rodape-titulo">Navegue</h2>
            <ul>{secoes.map(secao => <li key={secao.destino}><a href={secao.destino}>{secao.nome}</a></li>)}</ul>
          </nav>
          <div className="rodape-contato">
            <h2 className="rodape-titulo">Contato</h2>
            <a href={`tel:${contato.telefone.replace(/[^+\d]/g, '')}`}>{contato.telefone}</a>
            <a href={`mailto:${contato.email}`}>{contato.email}</a>
            <p>{informacoesClinica.endereco[1]}</p>
          </div>
          <div className="rodape-acompanhe">
            <h2 className="rodape-titulo">Acompanhe</h2>
            {contato.instagram
              ? <a className="rodape-instagram" href={contato.instagram} target="_blank" rel="noopener noreferrer">{instagram}<span className="somente-leitor"> (abre em outra aba)</span></a>
              : <span className="rodape-instagram">{instagram}</span>}
          </div>
        </div>
        <div className="rodape-base">
          <p>© {anoAtual} Essenza Odontologia. Projeto demonstrativo.</p>
          <p>Feito com cuidado, do início ao sorriso.</p>
        </div>
      </div>
    </footer>
  )
}
