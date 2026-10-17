import { Cabecalho } from './components/Cabecalho'
import { Icone } from './components/Icone'
import { Inicio } from './components/Inicio'
import { Clinica } from './components/Clinica'
import { Tratamentos } from './components/Tratamentos'
import { Diferenciais } from './components/Diferenciais'
import { Experiencias } from './components/Experiencias'
import { PerguntasFrequentes } from './components/PerguntasFrequentes'
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
        <Tratamentos />
        <Diferenciais />
        <Experiencias />
        <PerguntasFrequentes />
      </main>
      <a className="whatsapp-flutuante" href={contato.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Essenza pelo WhatsApp (abre em outra aba)"><Icone nome="whatsapp" /></a>
    </div>
  )
}

export default App





