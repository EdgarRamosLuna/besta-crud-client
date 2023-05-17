import React, { useContext } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "./Modal";
import Form from "./Form";
import { MainContext } from "../context/MainContext";

const Header = () => {
  
  const {userId, showModal, setShowModal} = useContext(MainContext)
  return (
    <>
      <header className="w-full h-16 bg-zinc-800 text-white border-white flex items-center p-[5px] justify-center">
        <button onClick={(e) => setShowModal(true)} className="rounded-lg border-white border-[0] box-border px-[15px] py-1 text-[22px]"><i className="fa-solid fa-circle-plus hover:text-gray-200 ease-in	"></i></button>
      </header>

      {showModal === true && (
        <Modal setShowModal={setShowModal}>            
            <Form id={userId} />
        </Modal>
      )}
      <Outlet />
    </>
  );
};

export default Header;
