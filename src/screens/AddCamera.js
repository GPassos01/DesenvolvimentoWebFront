import { useState } from 'react'; 

/*
{
  name:
  price:
  type:
  brand:
}
*/
function AddItems(props){

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [type, setType] = useState("")
    const [classification, setClassification] = useState("")
    const [capacity, setCapacity] = useState("")

    const addItemsButtonPressed = () => {
      props.addItems({
            "name": name,
            "description": description,
            "date" : date,
            "time" : time,
            "type": type,
            "classification": classification,
            "capacity": capacity
        })

    setName("")
    setDescription("")
    setDate("")
    setTimeout("")
    setType("")
    setClassification("")
    setCapacity("")

    }

  return (
    <div> 
      <div className='container'>
        <div className='row'>
          <h2>Adicionar Evento</h2>
        </div>
        <div className='row'>
          <label>Nome do Evento: </label>
          <input id="name-field" className='form-control' type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
        </div>          
        <div className='row'>
          <label>Descrição: </label>
          <input id="description-field" className='form-control' type="text" value={description} onChange={ (e) => setDescription(e.target.value) }/>
        </div>  
        <div className='row'>
          <label>Data: </label>
          <input id="date-field" className='form-control' type="text" placeholder="XX/YY/NNNN..."value={date} onChange={ (e) => setDate(e.target.value)}/>
        </div>  
        <div className='row'>
          <label>Horário: </label>
          <input id="time-field" className='form-control' type="text" value={time} onChange={ (e) => setTime(e.target.value)}/>
        </div>       
        <div className='row'>
          <label>Tipo: </label>
          <input id="type-field" className='form-control' type="text" value={type} onChange={ (e) => setType(e.target.value) }/>
        </div>
        <div className='row'>
          <label>Classificação indicativa: </label>
          <input id="classification-field" className='form-control' type="text" value={classification} onChange={ (e) => setClassification(e.target.value) }/>      
        </div> 
        <div className='row'>
          <label>Lotação máxima: </label>
          <input id="capacity-field" className='form-control' type="text" value={capacity} onChange={ (e) => setCapacity(e.target.value) }/>      
        </div>      
        <div className='row'>
          <button type="button" className='btn btn-dark mt-3' onClick={addItemsButtonPressed}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default AddItems;