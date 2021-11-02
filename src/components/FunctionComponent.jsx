import React from 'react'
 
const FunctionComponent = (props) => {
   return (
       props.inputs.map(element=> <li>{element.nome} trará {element.tarefa}</li>)
   )
}
export default FunctionComponent
