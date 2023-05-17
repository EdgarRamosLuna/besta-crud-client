import React from "react";

const Modal = ({ children, setShowModal }) => {
  return (
    <div className="bg-[#433e3e54] backdrop-blur-sm	 w-full fixed z-30 h-screen top-0 flex items-center justify-center ">
      <div className="w-80 bg-slate-200 flex flex-col p-[25px] gap-[10px]">
        <div className="modal-header w-full flex items-start justify-end">
           <button className="bg-transparent text-gray-800" onClick={(e) => setShowModal(false)}>&#10005;</button>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
