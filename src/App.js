import React from 'react';
import './css/App.scss';
import { FeedbackForm } from "./components/FeedbackForm";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>

    <div className="container">
      <div style={{height:'100vh'}}>
        <FeedbackForm/>
      </div>
      <div style={{height:'100vh'}}>
        <Modal/>
      </div>
    </div>

    </>
  );
}

export default App;
