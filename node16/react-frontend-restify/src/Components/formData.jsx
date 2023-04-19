import { useState } from 'react'

const FormData = ( { updateUI, token, sendError } ) => {
    const [userInputs, setUserInputs] = useState ({firstName: "john", lastName:"smith", address: "", ssn: ""})
    
    function reset(){
      setUserInputs({firstName:"", lastName:"", address:"", ssn: ""})
      sendError(null)
    }
    
    function handleChange(event){
      setUserInputs(prevInputs => {return {...prevInputs, [event.target.name]: event.target.value}})
    }

    function sendUser(){
      let headersList = {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "firstName": userInputs.firstName,
         "lastName": userInputs.lastName,
         "address": userInputs.address,
         "ssn": userInputs.ssn
       });
       
       fetch("http://localhost:8081/api/members", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       })
       .then(res => {
          return res.json()
        })
        .then(data => {
          console.log("despues de json",data);
          if (data.code) {
            sendError(data.message)
          }else{
            sendError(null)
            updateUI(data)
          }
       })
       .catch(error => sendError(error.message))
    }
    
    return(
    <div>
      <form className='formData'>
        <label>First Name:
          <input 
            type='text'
            name='firstName'
            value={userInputs.firstName}
            onChange={handleChange}
          />
        </label>
        <label>Last Name:
          <input 
            type='text'
            name='lastName'
            value={userInputs.lastName}
            onChange={handleChange}
          />
        </label>
        <label>address:
          <input 
            type='text'
            name='address'
            value={userInputs.address}
            onChange={handleChange}
          />
        </label>
        <label>ssn:
          <input 
            type='text'
            name='ssn'
            value={userInputs.ssn}
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="card">
        <button onClick={() => reset()}>
          Reset
        </button>
        <button onClick={() => sendUser()}>
          Save
        </button>
      </div>
    </div>
    )
}

export default FormData