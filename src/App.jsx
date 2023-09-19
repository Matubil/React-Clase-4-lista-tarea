import Cabecera from './components/Cabecera'
import TodoList from './components/TodoList'

function App() {
  return (
    <> {/*Este elemento se llama fragment*/}
      <Cabecera titulo="Bienvenidos a otra clase de React" subtitulo="Hoy programaremos un ToDo List"/>
      <main className="container w-50">
        <TodoList/>
      </main>
    </>
  );
}

export default App;
