import React, { useState } from "react";

const kanban = () => {
  const [startTask, setStartTask] = useState([
    {
      id: 1,
      description: "Task1"
    },
    {
      id: 2,
      description: "Task2"
    },
    {
      id: 3,
      description: "Task3"
    }
  ]);

  const [inprogress, setInprogress] = useState([
    {
      id: 4,
      description: "Task4"
    }
  ]);

  const [completed, setCompleted] = useState([
    {
      id: 5,
      description: "Task5"
    }
  ]);

  const inprogressHandler = (task) => {
    const filterData = startTask.filter((val) => val !== task);
    setStartTask(filterData);
    setInprogress([...inprogress, task]);
  };

  const completehandler = (task) => {
    const filterData = inprogress.filter((val) => val !== task);
    setInprogress(filterData);
    setCompleted([...completed, task]);
  };
  return (
    <>
      {/* strat task starts from here */}
      <h1>Task section</h1>
      {startTask?.map((ele, index) => {
        return (
          <div key={index}>
            <h2
              style={{ marginBottom: "10px", cursor: "pointer" }}
              onClick={() => inprogressHandler(ele)}
            >
              {" "}
              {ele.description}
            </h2>
          </div>
        );
      })}

      {/* inprogress task starts from here */}
      <h1>Inprogess Task </h1>
      {inprogress?.map((ele, index) => {
        return (
          <div key={index}>
            <h2
              style={{ marginBottom: "10px", cursor: "pointer", color: "red" }}
              onClick={() => completehandler(ele)}
            >
              {" "}
              {ele.description}
            </h2>
          </div>
        );
      })}

      {/* completed task starts from here */}
      <h1>Completed Task </h1>
      {completed?.map((ele, index) => {
        return (
          <div key={index}>
            <h2
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                color: "green"
              }}
            >
              {" "}
              {ele.description}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default kanban;
