import React, { useEffect, useState } from 'react';
import { TextField , Container} from '@material-ui/core'
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState("");

  function handleChangeInput(e) {
    let d = ["10", "12", "13", "14", "15"]
    let arr1 = []
    let arr2 = e.split('')
    let last = e.slice(-1)
    let lastXY = ""

    for (let i = 0; i < e.length - 1; i++) {
      lastXY = e.slice(i, i + 2)
      arr1.push(lastXY)
      i += 1
    }

    setInputNumber(e)
    if (d.includes(lastXY)) {
      if (arr1.filter(n => n === lastXY).length < 3
      ) {
        setInputNumber(e)
      }
      else {
        setInputNumber(e.slice(0, -1))
      }
    }
    if (arr2.filter(n => n === last).length > 1) {
      if (last === "1" && arr2.filter(n => n === "1").length <= 8) {
        if (e.match(/11[^\D1]*1111/) || e.match(/11111/) || e.match(/1111[^\D1]*11/) || last === "0") {
          setInputNumber(e.slice(0, -1))
        } else {
          setInputNumber(e)
        }
      } else {
        if (arr2.filter(n => n === last).length > 1 && last.match(/[6-9]|0/)) {
          setInputNumber(e.slice(0, -1))
        }
        if (arr2.filter(n => n === last).length > 1 && e.slice(-2,-1)!=="1") {
          console.log(1)
          setInputNumber(e.slice(0, -1))
        }
        if (arr2.filter(n => n === "1").length > 8) {
          setInputNumber(e.slice(0, -1))
        }
      }
    } else {
      if (last === "0" && e.slice(-2, -1) !== "1") {
        setInputNumber(e.slice(0, -1))
      } else {
        setInputNumber(e)
      }
    }
  }

  useEffect(() => {
  }, [inputNumber])
  return (
    <Container>
      <TextField
        fullWidth variant='filled' placeholder="Insira número" label="Número" 
        style={{ margin: 16 }} 
        value={inputNumber}
        onChange={e => handleChangeInput(e.target.value)} >

      </TextField>
      {inputNumber}
    </Container>
  );
}

export default App;
