import { contato } from '../config/contato'
import { Icone } from './Icone'
import './Inicio.css'

export function Inicio() {
  return (
    <section className="faixa-inicio" aria-labelledby="titulo-inicio">
      <div className="inicio container">
        <div className="inicio-texto" id="inicio">
          <p className="sobretitulo"><Icone nome="brilho" /> Odontologia feita para você</p>
          <h1 id="titulo-inicio">Seu sorriso<br />começa com<br />um <span>cuidado<br className="quebra-titulo" /> especial</span></h1>
          <p className="descricao">Uma experiência odontológica acolhedora, onde tecnologia, atenção e delicadeza se encontram para cuidar de você por inteiro.</p>
          <div className="inicio-acoes">
            <a className="botao" href={contato.whatsapp} target="_blank" rel="noopener noreferrer"><Icone nome="whatsapp" />Agendar pelo WhatsApp<span className="somente-leitor"> (abre em outra aba)</span></a>
            <a className="link-texto" href="#clinica">Conheça a Essenza <Icone nome="seta" /></a>
          </div>
          <div className="indicadores">
            <dl>
              <div><dt>Anos de experiência</dt><dd>12+</dd></div>
              <div><dt>Sorrisos cuidados</dt><dd>3 mil</dd></div>
              <div><dt>Avaliação média</dt><dd>4,9</dd></div>
            </dl>
          </div>
        </div>
        <div className="inicio-visual">
          <figure className="foto-clinica">
            <img src="/imagens/clinica-provisoria.jpg" alt="Consultório odontológico iluminado, com cadeira e equipamentos — imagem ilustrativa." width="1100" height="735" fetchPriority="high" />
            <figcaption className="somente-leitor">Imagem provisória; não representa as instalações da Essenza.</figcaption>
          </figure>
          <div className="selo-atendimento"><Icone nome="escudo" /><span>Atendimento seguro</span></div>
          <div className="cartao-cuidado"><span className="icone-cuidado"><Icone nome="coracao" /></span><div><span>Cuidado que acolhe</span><p>Você no centro de tudo</p></div></div>
        </div>
      </div>
    </section>
  )
}

