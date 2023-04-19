import { useState } from 'react'

const FormData = ( { updateUI, token } ) => {
    const [count, setCount] = useState(0)
    const [userInputs, setUserInputs] = useState ({firstName: "john", lastName:"smith", address: "", ssn: ""})
    
    function handleChange(event){
      setUserInputs(prevInputs => {return {...prevInputs, [event.target.name]: event.target.value}})
    }

    async function sendUser(){
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "firstName": userInputs.firstName,
         "lastName": userInputs.lastName,
         "address": userInputs.address,
         "ssn": userInputs.ssn
       });
       
       let response = await fetch("http://localhost:8081/api/members", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
       updateUI(data)

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
        <button onClick={() => setUserInputs({firstName:"", lastName:"", address:"", ssn: ""})}>
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