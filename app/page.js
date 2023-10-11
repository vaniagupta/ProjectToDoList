"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle] = useState("");
  const[desc,setdesc] = useState("");
  const[mainTask,setMainTask] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");

  }
  let renderTask = <h2> No Task Available</h2>;
  
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li>
          <div className = "flex justify-between mb-5">
          <h5 className ="text-2xl font-semibold">{t.title}</h5>
          <h5 className ="text-2xl font-semibold">{t.desc}</h5>
  
      </div>
        </li>
      );
    })

  }
  
  return (
    <div>
      <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit = {submitHandler}>
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder="Enter Title here" value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}></input>
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder="Enter Description here" value={desc} onChange={(e)=>{
          setdesc(e.target.value);
        }}></input>

        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add task</button>

      </form>
      <hr/>
      <div className= "p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
      </>
    </div>
  )
}

export default page
