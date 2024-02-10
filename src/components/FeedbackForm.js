import React from 'react';
import "../css/FeedbackForm.scss";
import InputMask from "react-input-mask";
import { validation } from "../js/validation";

export function FeedbackForm() {
  return (
    <>
      <form
        method="post"
        id="feedBackForm"
        onSubmit={(e) => validation(e)}
        noValidate
      >
        <div className="div-inp" style={{ display: "relative" }}>
          <label>Имя</label>
          <input
            className="default-inp"
            placeholder="Имя"
            type="text"
            name="name"
          ></input>
          <span>Введите Имя</span>
        </div>
        <div className="div-inp">
          <label>Email</label>
          <input
            className="default-inp"
            placeholder="Email"
            type="email"
            name="email"
          ></input>
          <span>Некорректный ввод Email</span>
        </div>
        <div className="div-inp">
          <label>Телефон</label>
          <InputMask
            className="default-inp"
            mask="+375 (99) 999-99-99"
            placeholder="+375 (22) 222-22-22"
            name="phone"
          />
          <span>Введите Телефон</span>
        </div>
        <div className="div-inp">
          <label>Сообщение</label>
          <textarea
            className="default-inp"
            placeholder="text"
            type="text"
            name="text"
          ></textarea>
          <span>Введите сообщение</span>
        </div>
        <button type="submit" className="black-btn">
          Submit
        </button>
      </form>
    </>
  );
}
