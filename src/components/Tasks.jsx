import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";
import { toast } from "sonner";
import Task from "./Task";

const Tasks = () => {
  const {tasks} = useContext(MainContext)    
  return (
    <div className="w-full flex items-center flex-col overflow-y-auto h-screen pb-[50px]">
      <h1 className="text-2xl font-bold text-white mb-1"><i className="fa-solid fa-list-check"/> Lista de tareas</h1>
      <ul className="flex flex-col gap-[10px]">
        {tasks.map((task, i) => (
          <li
            key={task.id}
            className={`w-80 bg-blue-100 flex flex-col items-center box-border p-[25px] gap-[10px] rounded-sm animate-fadeUp ease-in delay-${i}000 ${i === tasks.length -1 ? "mb-10" : ""}`}
          >
            <Task task={task.task} description={task.description} idDb={task.id} done={task.done} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
