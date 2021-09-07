import React, { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const req =  await fetch('http://localhost:8000/api')
      const data = await req.json()
      setName(data.name)
    }
    fetchData()
  },[])
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}

export default App;
