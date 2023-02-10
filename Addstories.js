import React , {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const getData = ()=>{
  return JSON.parse(localStorage.getItem("task")) || []
}

const AddStories = () => {
  const navigate = useNavigate();
  const [addTask , setAddTask] = useState("");
  const [data,setData] = useState(getData());
  const submitHnadler = ()=>{
  setData([...data , addTask])
  }

  useEffect(()=>{
localStorage.setItem("task", JSON.stringify(data))
  },[data])

  return (
    <>
      <h1>Add task </h1>
      <input type="text" value={addTask} onChange={(e)=> setAddTask(e.target.value)} />
      <button onClick={submitHnadler}>Add Task</button>
     
      <button onClick={() => navigate("/task")}>Go to Task</button>
    </>
  );
};

export default AddStories;
