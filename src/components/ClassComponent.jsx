import React, { Component } from 'react'
export default class ClassComponent extends Component {
   render() {
       console.log(this.props.inputs)
       return (
           this.props.inputs.map(element => { 
            return <li>{element.nome} {element.estaNaLista ? "está" : "não está"} convidado(a) para a festa</li>
           })
       )
   }
}
