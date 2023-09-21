import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Swal from "sweetalert2";

const TodoList = (props) => {

    const [tareas, setTareas] = useState([ //el setTareas, hace que cada vez que se llame se actualice nuevamente
        { id: 1, nombre: "Mirar el partido de la Escaloneta", done: false },
        { id: 2, nombre: "Programar el Todo List", done: false },
        { id: 3, nombre: "Practicar React ❤", done: false }
    ]);

    const [nuevaTarea, setNuevaTarea] = useState("")

    return (
        <ul className="list-group ">
            <li className="list-group-item text-center active">Lista de Tareas</li>
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
                            id: Math.max(...tareas.map((t) => (t.id)), 0) + 1, //dentro del parentesis de Math.max lo que se esta haciendo es que de un arreglo de tareas se esta mapeando un nuevo vector pero solamente de ids de las tareas y le tenemos que poner los 3 puntos, porque si no se lo ponemos recibe los valores separados por coma entonces le tenemos que copiar lo que tenemos adentro del array, se le pone ,0 para que calcule en caso de que no haya un valor que lo compare con 0 y ahi  si le suma un valor
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
                        <input className="form-check-input me-2"
                            type="checkbox"
                            value={tarea.done}
                            onChange={()=>{
                                setTareas([
                                    //lo que hace el ternario, es que si el id de la tarea coincide, va a devolver el mismo objeto pero que en la propiedad done, tiene el contenido inverso, o sea si tiene false va a devolver true y sino devuelve la tarea tal cual esta
                                    ...tareas.map((t)=>(t.id === tarea.id) ? {...t,done:!t.done} : t )
                                ])
                            }}
                        /> {/* me es margin end */}
                        {tarea.done ? <s>{tarea.nombre}</s> : tarea.nombre} {/*Lo que hace es que si esta en done lo tacha*/}

                        <button className="btn btn-danger float-end"
                            style={{ textShadow: "2px 2px 3px black" }}
                            onClick={() => {
                                Swal.fire({
                                    title: 'Eliminar',
                                    text: `¿Está seguro que quiere eliminar la tarea "${tarea.nombre}"?`,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    cancelButtonColor: '#d33',
                                    cancelButtonText: 'Cancelar',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'Borrar'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        setTareas([
                                            ...tareas.filter((t) => (t.id !== tarea.id)) //Lo que hace aca es que cada boton tiene su propio on click, el filter es para obtener un array nuevo pero con menos elementos, si lo que esta del otro lado del elemento es true se queda con el elemento, sino lo elimina, se le pone un !== ya que si fuese un == lo que haria el boton es quedarse solamente con el seleccionado
                                        ])
                                        Swal.fire(
                                            'Borrado!',
                                            `La tarea "${tarea.nombre}" fue eliminada.`,
                                            'success'
                                        )

                                    }
                                })
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