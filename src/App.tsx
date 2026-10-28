import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'
const data:Array<PacoteType> = [{
  id: 'dab70d83-9f69-449f-85e5-b28897b84b63',
  largura: 20.0,
  altura: 30.0,
  profundidade: 10.0,
  peso: 2.34
}]
export default function App() {
  return (
    <section>
      <div className="pacotes">
        <Pacote pacote={data[0]}></Pacote>
      </div>
    </section>
  )
}