import React from "react";
import Typing from "react-typing-effect";
import main from "./Main.module.css";

const Main = () => {
  return (
    <div id="main" className={main.header}>
      <h1>
        현재에 안주하지 않고
        <br />
        <span>
          끊임없이 앞으로 나아가는
          <br /> 이성수
        </span>
        입니다
      </h1>

      <div className={main.typing}>
        <Typing
          speed={70}
          loop
          text="꾸준한 노력과 책임감 있는 태도로 끊임없이 성장하는 사람"
        />
      </div>
    </div>
  );
};

export default Main;
