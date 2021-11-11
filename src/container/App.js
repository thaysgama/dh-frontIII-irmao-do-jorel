import React, {Fragment} from "react";
import "../styles/App.css";
import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponent";

function App() {
  const [inputs, setInputs] = React.useState([
    {
      id: 1,
      nome: "Vovó Juju",
      estaNaLista: true,
      tarefa: "abacate",
    },
    { 
      id:2,
      nome: "Lara",
      estaNaLista: false,
      tarefa: "pizza",
    },
    {
      id:3,
      nome: "Ana Catarina",
      estaNaLista: true,
      tarefa: "bebidas",
    },
  ]);
  const [count, setCount] = React.useState(4);
  const [input, setInput] = React.useState({
    id: "",
    nome: "",
    estaNaLista: true,
    tarefa: "",
  });
  

  function handleSubmit(e) {
    e.preventDefault();
    setCount(count + 1);
    const newConvidado = {
      id: count,
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
            {
              inputs.map((aluno)=>{
                return (
                  <Fragment key={aluno.id}>
                  <ClassComponent aluno={aluno} />
                  </Fragment>
                  )
              })
            }
            
          </ul>
          <h3>Tarefas: </h3>
          <ul>
            {
              inputs.map((aluno)=>{
                return (
                  <Fragment key={aluno.id}>
                  <FunctionComponent aluno={aluno} />
                  </Fragment>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
