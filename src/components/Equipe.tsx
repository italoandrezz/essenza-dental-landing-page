import { Imagem } from './Imagem'
import { equipe } from '../dados/equipe'
import './Equipe.css'

export function Equipe() {
  return (
    <section className="equipe" aria-labelledby="titulo-equipe">
      <div className="container" id="equipe">
        <div className="equipe-introducao">
          <p className="sobretitulo">Quem cuida de você</p>
          <h2 id="titulo-equipe">Especialistas que escutam,<br className="equipe-quebra" /> acolhem e cuidam</h2>
          <p className="descricao">Uma equipe multidisciplinar unida pelo mesmo propósito: oferecer uma odontologia mais humana e consciente.</p>
        </div>
        <ul className="equipe-grade" aria-label="Apresentação da equipe" aria-describedby="equipe-observacao">
          {equipe.map((profissional, indice) => (
            <li key={profissional.id}>
              <figure>
                <div className="equipe-retrato">
                  <Imagem sizes="(max-width: 599px) min(400px, calc(100vw - 32px)), (max-width: 1023px) calc((100vw - 72px) / 2), 360px" src={`/imagens/${profissional.imagem}`} alt={`Foto ilustrativa para o perfil fictício de ${profissional.nome}.`} width={profissional.largura} height={profissional.altura} style={{ objectPosition: profissional.posicao }} loading="lazy" />
                  <span className="equipe-numero" aria-hidden="true">{String(indice + 1).padStart(2, '0')}</span>
                </div>
                <figcaption><h3>{profissional.nome}</h3><p>{profissional.especialidade}</p></figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="equipe-observacao" id="equipe-observacao">Perfis fictícios e imagens ilustrativas para apresentação.</p>
      </div>
    </section>
  )
}

