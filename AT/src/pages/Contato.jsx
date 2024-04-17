import Direita from '../Componentes/ContactForm/Direita'
import Esquerda from '../Componentes/ContactForm/Esquerda'

const Contato = ()=>{
    return(
        <main>
      <div className="direita">
        <div className="direita2">
          <Esquerda/>
        </div>
        <div className="esquerda">
        </div>
        <div>
          <Direita/>
        </div>
      </div>
    </main>
    )
}

export default Contato;