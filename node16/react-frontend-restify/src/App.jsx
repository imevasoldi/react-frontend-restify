import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import ShowData from './Components/showData'
import FormData from './Components/formData'

function App() {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [token, setToken] = useState(null)
  
  function buildData(newUser){
    //receive user array from backend
    //receive just one user fron UI
    //push that one user to user array
    //updateUI with the custom users array
    let newUsersArr = [...data]
    newUsersArr.push(newUser)
    setData(newUsersArr)
  }
  
  useEffect(()=>{
    fetch("http://localhost:8081/auth",
    { 
      headers: {
        "Content-Type": "application/json"
      },
      method: 'post', 
      body: JSON.stringify({
        "username": "sarah",
        "password": "connor"
      })
      })
      .then(res => {
        if (res.status !== 200) return null;
        return res.json()
      })
      .then(data => setToken(data.token))
      .catch(error => setError(error.message))
    },[])

  useEffect(()=>{
    console.log("token", token)
    fetch("http://localhost:8081/api/members",{
      method: 'get',
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => token ? setData(data) : console.log("withToken",data))
    .catch(error => setError(error.message))
  },[token])
  
  return (
    <div className="App">
      <Nav/>
      <div className='container'>
        <FormData updateUI={buildData} token={token} sendError={setError}/>
        <ShowData data={data}/>
      </div>
      {error && <div>{error}</div>}
    </div>
  )
}

export default App
