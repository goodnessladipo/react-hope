import React from "react";
import { useState } from "react";


function App() {

  let [user, changeUser] = useState({
    name:"Henshaw Samuel",
    score:200,
    location:"The Netherlands"
  })

  let [arr, changeArr] = useState(["Goodness", "Desire"])

  const onChangeName = () => {
    changeUser({...user, name:"Ladipo Goodness"})

    changeArr([ ...arr, "Candid"])
  }

    return(
      <main>
        <h1>User details</h1>
        <h1>Name:{user.name}</h1>
        <h1>Score:{user.score}</h1>
        <h1>Location:{user.location}</h1>
        <h2>{arr.toString()}</h2>
        <button onClick = {onChangeName}>Change</button>
      </main>
    )
}

export default App;