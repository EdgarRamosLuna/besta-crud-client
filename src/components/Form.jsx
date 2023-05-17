import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MainContext } from "../context/MainContext";
import { toast } from "sonner";

const Form = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { tasks, setTasks, setShowModal } = useContext(MainContext);
  const onSubmmit = handleSubmit(async (data) => {
    const dbData = data;
    if (id) {
      axios
        .put(`http://3.12.127.240/api/tasks/${id}`, data)
        .then((response) => {
          // Handle the response
          //Delete from array
          toast.success("Tarea actualizada", {
            duration: 4000,
          });
          //update done form array
          setTasks(
            tasks.map((task) =>
              task.id === id ? { ...task, task: data.task, description:data.description } : task
            )
          );
          setShowModal(false);
        })
        .catch((error) => {
          // Handle the error
        });
    } else {
      axios
        .post("http://3.12.127.240/api/tasks", dbData)
        .then((response) => {
          // Handle the response
          const data = response.data;
          setShowModal(false);
          setTimeout(() => {
            setTasks([...tasks, data]);
          }, 100);
          toast.success("Tarea agregada", {
            duration: 4000,
          });
          //console.log(dbData);
        })
        .catch((error) => {
          // Handle the error
        });
    }
   
    //e.preventDefault()
    // const res = await fetch("http://3.12.127.240/tasks", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // console.log(res.data);
  });
  useEffect(() => {
      if(id){
          const task = tasks.find(task => task.id === id);
          setValue("task", task.task);
          setValue("description", task.description);
      }
  }, [id]);
  return (
    <form onSubmit={onSubmmit} className="flex flex-col gap-[10px]">
      <h1>{id ? "Editar" : "Crear"} tarea</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Tarea"
          {...register("task", {
            validate: (value) => value !== "0" && value !== "",
          })}
          className={`w-full bg-transparent border-[1px] border-zinc-500 p-[5px] ${
            errors.task && "border-red-500"
          } outline-0	rounded-md`}
        />
        {errors.task && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Descripcion"
          {...register("description", {
            validate: (value) => value !== "0" && value !== "",
          })}
          className={`w-full bg-transparent border-[1px] border-zinc-500 p-[5px] ${
            errors.description && "border-red-500"
          } outline-0	rounded-md`}
        />
        {errors.description && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>
      <div className="w-full flex items-center justify-end ">
        {id ? (
          <button className="rounded-lg border-blue-500 hover:border-transparent hover:bg-blue-500 border-[2px] box-border px-[15px] py-1 ease-in duration-200 hover:text-white">
            Editar
          </button>
        ) : (
          <button className="rounded-lg border-blue-500 hover:border-transparent hover:bg-blue-500 border-[2px] box-border px-[15px] py-1 ease-in duration-200 hover:text-white">
            Guardar
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
