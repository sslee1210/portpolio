import React from 'react';
import main from './Main.module.css';
const Main = () => {
  return (
    <div className={main.header}>
      <h1>
        현재에 안주하지 않고
        <br /> 끊임없이 앞으로 나아가는
        <br /> <strong>이성수</strong>
        입니다
      </h1>

      <p>
        실패를 두려워하지 않고 무한한 도전을 통해 어제의 나보다 성장하는 사람
        <br />
        꾸준한 노력과 책임감 있는 태도로 끊임없이 성장하는 사람
        <br />
        넘치는 배려와 경청하는 자세로 팀원과의 화합에 화음을 쌓을 수 있는 사람
      </p>
    </div>
  );
};

export default Main;
