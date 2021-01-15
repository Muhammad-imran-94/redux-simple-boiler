import { useState, useEffect } from "react";
import {useSelector , useDispatch } from "react-redux";
import {increment} from './actions';
import {decrement} from './actions';
import axios from './axios'

function App() {
  const counter= useSelector(state => state.counter);
  const dispatch = useDispatch();
  const [user , setUser]=useState();

  useEffect(()=>{
    axios.get(`/users`)
    .then(res => {
        const data = res.data
        console.log(data)
        setUser(data);
    })
    .catch((error) => {
        console.log(error)
    })},[]);

    console.log("this is state",user);
  return (
    <div className="App">
      Counter : {counter}
      <div>
      <button onClick={()=>{dispatch(increment()) }}>+</button>
      <button onClick={()=>{dispatch(decrement()) }}>-</button>
    </div>
    <div>
      {user && user.length >0 && user.map((item,index)=>
      <div key={index}>
       {item.name}
      </div>
      )}
    </div>
    </div>
  );
}

export default App;
