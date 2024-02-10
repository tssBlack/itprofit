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
        <div className='social-media'>
        <a href='https://github.com/tssBlack'>GitHub</a>
        <a href='https://www.linkedin.com/in/takich/'>LinkedIn</a>
        </div>
        <button
        className="black-btn" onClick={popupWindow}>Закрыть окно</button>
      </div>
    </>
  );
}
