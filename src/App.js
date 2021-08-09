import React, {useState} from 'react'
import Axios from './components/Utils/Axios'
import {Header, Lists, Inputs, Buttons } from './components'
import {HeaderContext, InputContext, ListContext} from './context/context'
import './App.css';

function App() {
  
  const [grocery, setGrocery] = useState("")
  const [groceryArray, setGroceryArray] = useState ([]);

  console.log("this is ", grocery)

  console.log(groceryArray)

  function handleOnChange (value){
    setGrocery(value)
    console.log(value)
  }

  async function handleOnSubmit (e){
    e.preventDefault();
   if(grocery.length === 0)return;
   try{
     let createdGrocery = await Axios.post('/create-new-grocery', {
       grocery,
       purchased: false,
     })
   setGroceryArray(createdGrocery, grocery)
   }catch(e){
     console.log(e)
   }
  }

  async function handleDelete(index){
    try{
     let deletedGrocery = await Axios.delete('/delete-grocery-by-id/:id');
     let newGroceryArray = [...groceryArray];
     newGroceryArray.splice(index, 1);
     setGroceryArray(newGroceryArray);
    }catch(e){
      console.log(e)
    }
  }
 
 const InputContextValue ={
   grocery,
   handleOnChange,
   handleOnSubmit,
 }

 const ListContextValue ={
   handleDelete,
   groceryArray,
 }

  return (
    <div className="App">
    <Header/>


    <InputContext.Provider value={InputContextValue}>
    <Inputs />
    </InputContext.Provider>

    <Buttons/>
    
    <ListContext.Provider value={ListContextValue}>
    <Lists/>
    </ListContext.Provider>

    </div>
  );
}

export default App;
