import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Page.module.css";
export default function Page() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.innerbox}>
          <h3>
            <span className={style.wlcm}> Welcome to Terribly Tiny Tales</span>
          </h3>
          <h3>Stories at scale for ambitious brands.</h3>
          <h3>Storytelling is an art, and we're masters of our craft!</h3>
          {/* <h3>A variety of creative capabilities under one roof. </h3> */}
          <button onClick={handleSubmit}>Submit </button>
        </div>
      </div>
    </>
  );
}
