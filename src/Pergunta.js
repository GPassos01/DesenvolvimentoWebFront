
                             //  {par}  
export default function Pergunta(props){
    const par = props.par
    
    return (
      <div>
        <h1>Pergunta: </h1>
        <p>{par}</p>
        <AddCorrecao />
      </div>
    )
  }


  function AddCorrecao(){
    return (
      <div>
        <p>Adicione uma correção à pergunta</p>
        <input type="text" name="correcao" />
      </div>
    )
  }