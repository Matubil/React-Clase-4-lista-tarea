import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";


const TodoList = (props) => {

    const [tareas, setTareas] = useState([ //el setTareas, hace que cada vez que se llame se actualice nuevamente
        { id: 1, nombre: "Mirar el partido de la Escaloneta", done: false },
        { id: 2, nombre: "Programar el Todo List", done: false },
        { id: 3, nombre: "Practicar React ❤", done: false }
    ]);

    const [nuevaTarea, setNuevaTarea] = useState("")

    return (
        <ul className="list-group text-center">
            <li className="list-group-item active">Lista de Tareas</li>
            <li className="list-group-item">
                <div className="input-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Ingrese una tarea nueva"
                        onChange={(evt) => {
                            setNuevaTarea(evt.target.value);
                        }}
                        value={nuevaTarea} //esto es para que muestre el input el ultimo valor de nueva tarea, o sea que lo ponga en blanco
                    />
                    <button className="btn btn-outline-primary" onClick={() => {
                        // if (nuevaTarea.length > 0) { //Pregunta si el input esta vacio
                        //     setTareas([
                        //         ...tareas, //...tareas es un express operator: cuando escribo los 3 puntitos y el nombre, es como agarrar el objeto o el arreglo y copiar y pegar lo de adentro, entonces podrias poner un { y agregarle una linea mas}, es como hacer un push pero de manera mas directa
                        //         {
                        //             id: tareas.length + 1,
                        //             nombre: nuevaTarea,
                        //             done: false
                        //         }
                        //     ]);
                        // }

                        // setNuevaTarea("") //lo seteo en vacio

                        //O se puede escribir de la siguiente forma
                        (nuevaTarea.length > 0) && setTareas([...tareas,
                        {
                            id: tareas.length + 1,
                            nombre: nuevaTarea,
                            done: false
                        }]);
                        setNuevaTarea("") //lo seteo en vacio
                    }}>
                        Agregar
                    </button>
                </div>
            </li>
            {
                tareas.map((tarea) => (
                    <li key={tarea.id} className="list-group-item">
                        {tarea.nombre}

                        <button className="btn btn-danger float-end" 
                                style={{textShadow: "2px 2px 3px black"}}
                                onClick={()=>{
                                    setTareas([
                                        ...tareas.filter((t)=>(t.id !== tarea.id)) //Lo que hace aca es que cada boton tiene su propio on click, el filter es para obtener un array nuevo pero con menos elementos, si lo que esta del otro lado del elemento es true se queda con el elemento, sino lo elimina, se le pone un !== ya que si fuese un == lo que haria el boton es quedarse solamente con el seleccionado
                                    ])
                                }}>
                            &#128465;&#65039; {/*es un HTML del emoji */}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;