import { Cabecalho } from './components/Cabecalho'
import { Icone } from './components/Icone'
import { Inicio } from './components/Inicio'
import { contato } from './config/contato'
import './App.css'

function App() {
  return (
    <div className="pagina">
      <a className="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo" tabIndex={-1}>
        <Inicio />
        <section className="clinica" id="clinica" aria-labelledby="titulo-clinica">
          <div className="container clinica-conteudo">
            <div>
              <p className="sobretitulo">A Essenza</p>
              <h2 id="titulo-clinica">Odontologia com alma,<br />cuidado em cada detalhe</h2>
            </div>
            <p className="descricao">Criamos um espaço onde você pode respirar fundo e se sentir à vontade. Aqui, cada escolha foi pensada para tornar sua jornada mais leve.</p>
          </div>
        </section>
      </main>
      <a className="whatsapp-flutuante" href={contato.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Essenza pelo WhatsApp (abre em outra aba)"><Icone nome="whatsapp" /></a>
    </div>
  )
}

export default App
