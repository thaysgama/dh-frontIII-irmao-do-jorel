import React from "react";
import "../styles/App.css";
import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponent";
import image from "../img/irmaoJorel1.png";

function App() {
  const [inputs, setInputs] = React.useState([
    {
      nome: "Vovó Juju",
      estaNaLista: true,
      tarefa: "abacate",
    },
    {
      nome: "Lara",
      estaNaLista: false,
      tarefa: "pizza",
    },
    {
      nome: "Ana Catarina",
      estaNaLista: true,
      tarefa: "bebidas",
    },
  ]);
  const [input, setInput] = React.useState({
    nome: "",
    estaNaLista: true,
    tarefa: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newConvidado = {
      nome: input.nome,
      estaNaLista: input.estaNaLista,
      tarefa: input.tarefa,
    };
    setInputs([...inputs].concat(newConvidado));
  }

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInput({ ...input, [e.target.name]: value });
  }

  return (
    <div className="App">
      <div className="App-image">
        <div className="container-convidados">
          <h1>
            Ajude o <span>Irmão do Jorel</span> a montar a lista de convidados da festa
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="float-container">
              <input
                type="text"
                onChange={handleChange}
                value={input.nome}
                name="nome"
                placeholder=" "
              />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="float-container">
              <input
                type="text"
                onChange={handleChange}
                value={input.tarefa}
                name="tarefa"
                placeholder=" "
              />
              <label htmlFor="tarefa">Tarefa</label>
            </div>
            <div className="check-container">
              <label htmlFor="estaNaLista">Convidar</label>
              <input
                type="checkbox"
                onChange={handleChange}
                value={input.estaNaLista}
                name="estaNaLista"
                defaultChecked
              />
              <button type="submit">Adicionar</button>
            </div>
          </form>

          <h3>Convidado:</h3>
          <ul>
            <ClassComponent inputs={inputs} />
          </ul>
          <h3>Tarefas: </h3>
          <ul>
            <FunctionComponent inputs={inputs} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
