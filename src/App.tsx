import { Cabecalho } from './components/Cabecalho'
import { Icone } from './components/Icone'
import { Inicio } from './components/Inicio'
import { Clinica } from './components/Clinica'
import { contato } from './config/contato'
import './App.css'

function App() {
  return (
    <div className="pagina">
      <a className="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo" tabIndex={-1}>
        <Inicio />
        <Clinica />
      </main>
      <a className="whatsapp-flutuante" href={contato.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Essenza pelo WhatsApp (abre em outra aba)"><Icone nome="whatsapp" /></a>
    </div>
  )
}

export default App

