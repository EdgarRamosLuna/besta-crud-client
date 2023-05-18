//context
import { useEffect } from "react";
import { createContext, useState } from "react";

export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (showModal !== true) {
      setUserId(null);
    }
  }, [showModal]);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://3.12.127.240/api/tasks");
        const data = await response.json();
        console.log(data)
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [sort]);
  
  const [filter, setFilter] = useState(false);
  const filterByCompleted = () => {
    setSort(true);
    
    const completed = tasks.filter((task) => task.done === "1");
    setTasks(completed);
  };
  const filterByUnCompleted = () => {
    setSort(false);
    const completed = tasks.filter((task) => task.done === "0");
    console.log(completed);
    setTasks(completed);
  };
  return (
    <MainContext.Provider
      value={{
        userId,
        setUserId,
        showModal,
        setShowModal,
        tasks,
        setTasks,
        filterByCompleted,
        sort,
        setSort,
        filterByUnCompleted,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
