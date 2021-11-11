import React from 'react'
 
const FunctionComponent = ({aluno}) => {
   return (
       <li>{aluno.nome} trará {aluno.tarefa}</li>
   )
}
export default FunctionComponent
