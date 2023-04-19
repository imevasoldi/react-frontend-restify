import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import ShowData from './Components/showData'
import FormData from './Components/formData'

function App() {
  const [count, setCount] = useState(0)
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
      .then(res => res.json())
      .then(data => setToken(data.token))
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
    // .then(data => console.log("withToken",data))
    .then(data => token ? setData(data) : console.log("withToken",data))
  },[token])
  
  return (
    <div className="App">
      <Nav/>
      <div className='container'>
      <FormData updateUI={buildData} token={token}/>
      <ShowData data={data}/>
        
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
