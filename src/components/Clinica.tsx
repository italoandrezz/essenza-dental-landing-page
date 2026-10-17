import './Clinica.css'

export function Clinica() {
  return (
    <section className="clinica" aria-labelledby="titulo-clinica">
      <div className="container" id="clinica">
        <div className="clinica-conteudo">
          <div>
            <p className="sobretitulo">A Essenza</p>
            <h2 id="titulo-clinica">Odontologia com alma,<br />cuidado em cada detalhe</h2>
          </div>
          <p className="descricao">Criamos um espaço onde você pode respirar fundo e se sentir à vontade. Aqui, cada escolha foi pensada para tornar sua jornada mais leve.</p>
        </div>
        <div className="clinica-mosaico">
          <figure className="clinica-ambiente">
            <img src="/imagens/ambiente-provisorio.jpg" alt="Ambiente odontológico claro e acolhedor." width="1000" height="668" loading="lazy" />
            <figcaption>Ambientes que convidam à calma</figcaption>
          </figure>
          <article className="clinica-filosofia">
            <span className="clinica-numero" aria-hidden="true">01</span>
            <h3>Precisão técnica.<br />Presença humana.</h3>
            <p>Combinamos recursos modernos a uma escuta genuína. Antes de qualquer procedimento, queremos entender sua história, seus receios e o sorriso que você deseja construir.</p>
            <ul>
              <li>Planejamento individualizado</li>
              <li>Explicações claras em cada etapa</li>
              <li>Protocolos de segurança rigorosos</li>
            </ul>
          </article>
          <figure className="clinica-consultorio">
            <img src="/imagens/clinica-provisoria.jpg" alt="Consultório com cadeira odontológica e equipamentos." width="1100" height="735" loading="lazy" />
          </figure>
          <figure className="clinica-detalhe">
            <img src="/imagens/ambiente-provisorio.jpg" alt="Detalhes dos equipamentos e da cadeira do consultório." width="1000" height="668" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  )
}

