import Link from "next/link";
import React, { useEffect, useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      {modal ? (
        <div className="modal-container">
          <div className="frame">
            <div className="modal-close absolute text-6xl border-solid border-4 border-black text-white -top-6 -right-12">
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="menu-modal-container">
              <img src="/new-years-menu.jpg" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
