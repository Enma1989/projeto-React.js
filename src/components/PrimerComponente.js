import React from 'react'

export const PrimerComponente = () => {

  let nombre = "Enmanuel Perdomo";
  let web = "mimo.lds.07@gmail.com";
  let cursos = [
    "Programacion Web",
    "JavaScript",
    "Aprende React",
    "El mejor del Mundo Mundial"
  ];

  return (
    <div>
      <h1>Mi primer componente</h1>
      <p> este parrafo esta dentro de mi primer componente!</p>
      <p>Mi nombre es: {nombre} </p>
      <p>mi web es: {web} </p>
      <h1>Cursos:</h1>
      <ul>
        {
          cursos.map((cursos, indice) => {
            return (<li key={indice}>
              {cursos}
            </li>);
          })
        }
      </ul>



    </div>
  )
}


