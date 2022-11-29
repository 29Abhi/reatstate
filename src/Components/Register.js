import React, { useEffect, useState } from 'react'
import './Register.css'

const Register = () => {

  const [name , setName] = useState("");
  const [price , setPrice] = useState("");
  const [image , setImage] = useState("");
  const [bhk , setBhk] = useState("");
  const [saveData, setSaveData] = useState([])
  console.log(saveData)
  
  const additem = (e) => {
   e.preventDefault();
   if(!name){

   } else{
    setSaveData([...saveData, name, price, bhk, image])
    setName("")
    setPrice("")
    setImage("")
    setBhk("")
    alert("Your property is added")
   }
   
  }

  useEffect(() => {
    localStorage.setItem("Property", JSON.stringify(saveData))
   }, [saveData])
  return (
    <>
    <div className='headdiv' >
    <h1 className='heading' >Add your Property</h1>
    </div>
    <div className='maindiv' >
      <div className='formdiv' >
      <form>
        <input placeholder='Property Name' type={"text"}  value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='Total BHK'  type={"text"} value={bhk}  onChange={(e) => setBhk(e.target.value)} />
        <input placeholder='Price'  value={price}  onChange={(e) => setPrice(e.target.value)} />
        <input placeholder='Image url' type='url' value={image} onChange={(e) => setImage(e.target.value)}  />
        <button onClick={additem} ><span>Submit</span></button>
        </form>
      </div>
      <div className='datadiv' >

      </div>
    </div>
    </>
  )
}

export default Register
