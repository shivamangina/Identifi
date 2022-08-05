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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export default function ReactModal({ modalIsOpen, closeModal, component: Component }) {
  console.log("Component: ", Component);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        {/* <button onClick={closeModal}>close</button> */}
        <br></br>
        <Component />
      </Modal>
    </div>
  );
}
