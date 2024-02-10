import React from 'react';
import "../css/Modal.scss";
import {popupWindow} from "../js/popupWindow";

export function Modal() {
  return (
    <>
      <div className="modal-btn">
        <button className="black-btn" onClick={popupWindow}>Modal</button>
      </div>
      <div className="popupWindow" id="popupWindow">
        <h1>
            Благодарю за предоставленную возможность 
        </h1>
        <button
        className="black-btn" onClick={popupWindow}>Закрыть окно</button>
      </div>
    </>
  );
}
