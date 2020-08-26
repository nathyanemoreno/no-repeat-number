import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core'
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState("");

  function handleChangeInput(e) {
    let oldNumber = e.slice(-2, -1)

    // console.log("old number ->", oldNumber)
    // console.log("actual number ->", actualNumber)
    // console.log("e -> ", e);
    // console.log(e.split(actualNumber).length - 1)
    // let a = ["1", ""]
    // let b = ["0", "2", "3", "4", "5"]
    // let c = ["6", "7", "8", "9"]
    let d = ["10", "12", "13", "14", "15"]

    // let ver = oldNumber + actualNumber

    let arr1 = []
    let arr2 = []
    let last = ""
    let lastXY = ""

    for (let i = 0; i < e.length - 1; i++) {
      lastXY = e.slice(i, i + 2)
      arr1.push(lastXY)
      i += 1
    }
    arr2 = e.split('')
    last = e.slice(-1)
    // console.log(last)
    setInputNumber(e)
    if (d.includes(lastXY)) {
      if (arr1.filter(n => n === lastXY).length < 2
      ) {
        console.log(1)
        setInputNumber(e)
      }
      else {
        console.log(2)
        setInputNumber(e.slice(0, -1))
      }
    }
    if (arr2.filter(n => n === last).length > 1) {
      if (last === "1" && arr2.filter(n => n === "1").length < 7) {
        // if ((e.slice(-5, e.length) === "11111") && (arr1.filter(n => n === lastXY).length > 1 )){
          if (e.match(/11[^\D1]*1111/) || e.match(/11111/) || e.match(/1111[^\D1]*11/) || last==="0"){
          console.log(3)
          setInputNumber(e.slice(0, -1))
        } else {
          console.log(4)
          setInputNumber(e)
        }
      } else {
        console.log(5)
        setInputNumber(e.slice(0, -1))
      }
    } else {
      if (last==="0" && e.slice(-2,-1)!=="1"){
      console.log(6)
        setInputNumber(e.slice(0,-1))
      }else{
      console.log(7)
      setInputNumber(e)
      }
    }
    // if (last === "1" && arr2.filter(n => n === "1").length <= 6) {
    //   console.log(5)
    //   setInputNumber(e)
    // }
    // else {
    //   console.log(6)
    //   setInputNumber(e.slice(0, -1))
    // }

    console.log(arr1, arr2)
    // console.log(arr1.filter(n => n === lastXY).length < 2)
    // console.log(arr1[arr1.length - 2] !== lastXY )
    // console.log(arr2.filter(n => n === last).length > 1)


    // console.log(((a.includes(oldNumber) && b.includes(actualNumber)) && e.split(ver).length - 1 <= 2))
    // if (e.includes(actualNumber) && e.length > 1){
    // console.log("oi")
    // if ((a.includes(oldNumber) && b.includes(actualNumber)) || (a.includes(actualNumber) && b.includes(oldNumber)) 
    // && ((e.split(actualNumber).length - 1 <= 2) )){

    // || (actualNumber === "1" && e.split(actualNumber).length - 1 <= 6)
    // ){
    //     setInputNumber(e)
    //   } else { 
    //   setInputNumber(e.slice(0, -1))
    // }



    // e = ((e.split("1") <= 6) && (ver < 89) 
    //       && (((9<ver<16) && (e.split(ver).length -1 < 3)) 
    //       || ((15<ver<20) && (e.split(ver).length -1 < 2) )))? e:e.slice(0,-1) 

    // console.log(e.split(ver).length -1  > 1 )
    // console.log(e.split(actualNumber).length -1 > )

    // e = (e.split(actualNumber).length -1 > 2 &&
    // ver<99 &&
    // 9<ver<16 && e.split(ver).length - 2 > 1) 
    // ? e.slice(0, -1) 
    // : e


    // e = ((e.split(actualNumber).length - 1) > 1 && actualNumber!="1") ? e.slice(0,-1) : e
    // e = ((oldNumber == "1") && e.includes(oldNumber + actualNumber )) ? e.slice(0,-1) :e
    // ("12345".includes(actualNumber) 
    // e = (e.includes(oldNumber + actualNumber)) ? e.slice(0,-1) : e
    // setInputNumber(e)
  }

  useEffect(() => {
  }, [inputNumber])
  return (
    <div>
      <TextField
        fullWidth variant='filled' placeholder="Insira número" label="Número" style={{ margin: 8 }} value={inputNumber}
        onChange={e => handleChangeInput(e.target.value)} >

      </TextField>
      {inputNumber}
    </div>

  );
}

export default App;
