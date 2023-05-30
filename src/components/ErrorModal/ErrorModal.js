import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ErrorModal.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ErrorModal = (props) => {
  const navigate = useNavigate();
  const notification = useSelector((state) => state.box.notification);
  const notification_title = useSelector((state) => state.box.notification_title);
  const refreshPage = () => {
    console.log(props.retryUrl)
    if (props.retryUrl){
      window.location.href = props.retryUrl;
    } else {
      window.location.reload();
    }
  };

  return (
    <Modal
      {...props}
      // size="xl"
      backdrop
      fullscreen
      size="xl"
      centered
      className="warning-modal"
    >
      <ModalHeader closeButton className="">
        {/* <Modal.Title id="contained-modal-title-vcenter"></Modal.Title> */}
      </ModalHeader>
      <ModalBody>
        <div className="modal-body-content">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-danger"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <h4 className="modal-title w-100">{notification_title}</h4>
        </div>
        <div className="modal-des">
          <p>{notification}</p>
        </div>
      
      {notification_title && notification_title.includes("Unfinished Spin Detected") ? null : 
      <div className="justify-content-center" style={{display: "flex"}}>
        {/* <button onClick={props.toggle} type="button" class="btn btn-secondary">
          Cancel
        </button> */}
        <button type="button" className="btn btn-success" onClick={() => refreshPage()} style={{margin: 5, padding: 10}}>
          Retry
        </button>
        <button type="button" className="btn btn-danger" onClick={()=> props.toggle()}  style={{margin: 5, padding: 10}}>
          Close
        </button>        
      </div>
      }
      </ModalBody>
    </Modal>
  );
};

export default ErrorModal;
