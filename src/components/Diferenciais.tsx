import { contato } from '../config/contato'
import { Icone } from './Icone'
import './Diferenciais.css'

const diferenciais = [
  { titulo: 'Atendimento personalizado', descricao: 'Tempo para ouvir, compreender e criar um plano tão único quanto você.', icone: 'coracao' },
  { titulo: 'Tecnologia moderna', descricao: 'Recursos modernos para apoiar o planejamento e tornar cada etapa mais confortável.', icone: 'tecnologia' },
  { titulo: 'Conforto em cada visita', descricao: 'Ambientes tranquilos e pequenos gestos que fazem você se sentir em casa.', icone: 'brilho' },
  { titulo: 'Cuidado humanizado', descricao: 'Respeito, transparência e delicadeza em todos os momentos.', icone: 'escudo' },
] as const

export function Diferenciais() {
  return (
    <section className="diferenciais" aria-labelledby="titulo-diferenciais">
      <div className="container diferenciais-conteudo" id="diferenciais">
        <div className="diferenciais-introducao">
          <p className="sobretitulo">O jeito Essenza</p>
          <h2 id="titulo-diferenciais">O extraordinário<br className="diferenciais-quebra" /> mora nos<br className="diferenciais-quebra" /> detalhes</h2>
          <p className="descricao">Mais do que tratar sorrisos, queremos transformar a forma como você se sente ao cuidar da sua saúde.</p>
          <a className="botao diferenciais-botao" href={contato.whatsapp} target="_blank" rel="noopener noreferrer">Viva essa experiência <Icone nome="seta" /><span className="somente-leitor"> pelo WhatsApp (abre em outra aba)</span></a>
        </div>
        <ol className="diferenciais-lista">
          {diferenciais.map((diferencial, indice) => (
            <li key={diferencial.titulo}>
              <span className="diferenciais-icone"><Icone nome={diferencial.icone} /></span>
              <span className="diferenciais-numero" aria-hidden="true">{String(indice + 1).padStart(2, '0')}</span>
              <div>
                <h3>{diferencial.titulo}</h3>
                <p>{diferencial.descricao}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

