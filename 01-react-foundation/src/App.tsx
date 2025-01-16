import { BasicTypes } from "./typescript"

function App() {

  const nombre: string = 'Denzel';
  const apellido:string = 'Zuñiga';
  const edad:number = 22;

  const lenguajes: Array<String> = ['php','typeScript', 'java'];

  return (
    <main>
      <h1>Introduccion de react</h1>
      <BasicTypes />

      {nombre + ' '}
      {apellido}
      <br />
      {edad + ' años'}
      <br />
      {lenguajes.join(', ')}

    </main>
  )
}

export default App
