import './App.css'

function App() {
  return (
    <>
      <a className="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
      <div className="abertura">
        <header className="cabecalho container">
          <a className="marca" href="#inicio" aria-label="Essenza Odontologia — início">
            <span className="marca-simbolo" aria-hidden="true">✧</span>
            <span>essenza<small>ODONTOLOGIA</small></span>
          </a>
          <a className="link-clinica" href="#clinica">A clínica <span aria-hidden="true">↗</span></a>
        </header>
        <main id="conteudo">
          <section className="inicio container" id="inicio" aria-labelledby="titulo-inicio">
            <p className="sobretitulo">Odontologia feita para você</p>
            <h1 id="titulo-inicio">Seu sorriso<br />começa com<br />um <span>cuidado especial</span></h1>
            <p className="descricao">Uma experiência odontológica acolhedora, onde tecnologia, atenção e delicadeza se encontram para cuidar de você por inteiro.</p>
            <a className="botao" href="#clinica">Conheça a Essenza <span aria-hidden="true">→</span></a>
          </section>
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
      </div>
    </>
  )
}

export default App
