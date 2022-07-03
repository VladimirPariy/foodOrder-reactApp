import React, {Fragment} from 'react';
import cl from './Modal.module.css'
import {createPortal} from "react-dom";

const BackDrop = (props) => {
  return (
  <div className={cl.backdrop} onClick={props.onHideCart}></div>
  )
}

const ModalWindow = (props) => {
  return (
    <div className={cl.modal}>
      <div className={cl.content}>
        {props.children}
      </div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop onHideCart={props.onHideCart}/>, portalElement)}
      {createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </Fragment>
  );
};

export default Modal;