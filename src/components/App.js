import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) return {...sushi, eaten: true};
        return sushi;
      })
    })
  })

  const eatenSushi = sushis.filter( sushi => sushi.eaten)
  
  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
}

export default App;
