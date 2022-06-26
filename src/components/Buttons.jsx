
function Buttons({setId, id}) {

  const handleNext = () =>{
    setId(id+1);
  }

  const handleBefore = () => {
    if(id==1){
      setId(id)
    } else {
      setId(id-1)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center pb-5'>  
        <button 
          className='btn btn-primary mx-auto'
          onClick={ handleBefore }
        >Anterior</button>
        <h6> Pagina actual: {id} </h6>
        <button 
          className='btn btn-primary mx-auto'
          onClick={ handleNext }
        >Siguiente</button>
    </div>
  )
}

export default Buttons