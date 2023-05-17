//context
import { useEffect } from "react";
import { createContext, useState } from "react";

export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {    
    if(showModal !== true){
      setUserId(null);
    }
  }, [showModal]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://3.12.127.240/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <MainContext.Provider
      value={{ userId, setUserId, showModal, setShowModal, tasks, setTasks }}
    >
      {children}
    </MainContext.Provider>
  );
};
