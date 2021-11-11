import React, { Component } from 'react'
export default class ClassComponent extends Component {
   render() {
       return (
        
            <li>{this.props.aluno.nome} {this.props.aluno.estaNaLista ? "está" : "não está"} convidado(a) para a festa</li>
           
       )
   }
}
