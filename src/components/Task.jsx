import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";
import { toast } from "sonner";

const Task = ({ task, description, idDb, done }) => {
  const { setUserId, setShowModal, tasks, setTasks } = useContext(MainContext);
  const showModalDiv = (id) => {
    setUserId(id);
    setShowModal(true);
  };
  const [loading, setLoading] = useState(false);
  const deleteTask = async (id) => {

    const confirm = window.confirm("¿Estás seguro de eliminar esta tarea?");
    if (!confirm) {
        return;
    }
    setLoading(true);
    axios
      .delete(`http://3.12.127.240/api/tasks/${id}}`)
      .then((response) => {
        // Handle the response
        //Delete from array
        toast.success("Tarea eliminada", {
          duration: 4000,
        });
        setTasks(tasks.filter((task) => task.id !== id));
        setShowModal(false);
        setLoading(false);
        //console.log(dbData);
      })
      .catch((error) => {
        // Handle the error
      });
    //e.preventDefault()
    // const res = await fetch("http://3.12.127.240/tasks", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // console.log(res.data);
  };
  const statusTask = async (done) => {    
    axios
      .put(`http://3.12.127.240/api/tasks/${idDb}`, { done: done === "1" ? "0" : "1" })
      .then((response) => {
        // Handle the response
        //Delete from array
        if(done !== "1"){
            toast.success("Tarea completada", {
              duration: 4000,
            });
        }
        //update done form array
        setTasks(tasks.map((task) => task.id === idDb ? {...task, done: done === "1" ? "0" : "1"} : task));
      })
      .catch((error) => {
        // Handle the error
      });
  };

  return (
    <>
      <i
        className={`${
          done === "1"
            ? "fa-solid fa-circle-check text-green-600"
            : "fa-regular fa-circle-check"
        } ml-auto cursor-pointer`}
        onClick={() => statusTask(done)}
      />
      <h2>{task}</h2>
      <p className="break-all">{description}</p>
      <div className="flex gap-2">
        <button
          className="bg-lime-600 text-white box-border p-[5px] rounded-md w-[80px]"
          onClick={() => showModalDiv(idDb)}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="bg-red-600 text-white box-border p-[5px] rounded-md w-[80px] flex justify-center items-center"
          onClick={() => deleteTask(idDb)}
        >
          {loading ? (
            <img src="/assets/loader.svg" className=" h-[20px]" />
          ) : (
            <i className="fa-solid fa-trash"></i>
          )}
        </button>
      </div>
    </>
  );
};

export default Task;
