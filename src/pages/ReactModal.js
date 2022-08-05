import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export default function ReactModal({ modalIsOpen, closeModal, component: Component, state }) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        {/* <button onClick={closeModal}>X</button> */}
        <br></br>
        <Component data={state} />
      </Modal>
    </div>
  );
}
