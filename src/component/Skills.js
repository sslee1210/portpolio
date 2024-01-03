import React from 'react';
import skills from './Skills.module.css';
const Skills = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={skills.skills}>
      <h1>Skills</h1>
      <div className={skills.text}>
        <div className={skills.head}>
          <img src={path + '/images/front-icon.png'} alt="프론트 아이콘" className={skills.icon} />
          <h2>Front</h2>
        </div>
        <div className={skills.textbox}>
          <p>HTML5&CSS3</p>
          <ul>
            <li>웹 표준과 웹 접근성을 고려한 시맨틱 마크업</li>
            <li>폼 요소를 이용한 입력 양식 구성</li>
            <li>미디어쿼리를 이용한 반응형 웹 구현</li>
            <li>@keyframe을 활용한 애니메이션 제어</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>JAVASCRIPT</p>
          <ul>
            <li>ES6+ 문법</li>
            <li>BOM, DOM 조작</li>
            <li>변수 및 함수의 유효 범위, 호이스팅, event.target 등의 실행 컨텍스트 이해</li>
            <li>비동기 함수 setTimeout, setInterval 실행 순서 관리를 위한 이벤트 루프의 이해</li>
            <li>Promise, fetch, async/await를 이용한 데이터 처리 및 통신 구현 및 작업의 효율성 향상</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>REACT</p>
          <ul>
            <li>함수 컴포넌트로 웹사이트 구축</li>
            <li>useState, useContext, useReducer를 활용하여 상태 관리</li>
            <li>React Router를 사용하여 페이지 라우팅 관리</li>
            <li>Axios를 이용한 외부 API 및 백엔드와 통신, 상태를 업데이트</li>
            <li>css-modules, Styled-Component, Bootstrap</li>
            <li>Node.js, Express와 연결</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>STYLE FRAMEWORK</p>
          <ul>
            <li>SCSS</li>
            <li>STYLED-COMPONENTS</li>
          </ul>
        </div>
      </div>

      <div className={skills.text}>
        <div className={skills.head}>
          <img src={path + '/images/back-icon.png'} alt="프론트 아이콘" className={skills.icon} />
          <h2>Back</h2>
        </div>
        <div className={skills.textbox}>
          <p>Express</p>
          <ul>
            <li>Express 프레임워크를 이용한 서버 구축 및 API를 통한 클라이언트와의 데이터 통신</li>
            <li>express-session, cors, static, json 등 다양한 Express의 미들웨어 활용</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>Express Session</p>
          <ul>
            <li>동적 웹 페이지 쉽게 생성</li>
            <li>초기 페이지 로딩 시 필요한 데이터를 포함하여 페이지를 전달</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>SHA256</p>
          <ul>
            <li>비밀번호나 중요 정보를 데이터베이스에 저장</li>
            <li>해시 함수를 사용하여 보안성을 높임</li>
          </ul>
        </div>
      </div>

      <div className={skills.text}>
        <div className={skills.head}>
          <img src={path + '/images/data-icon.png'} alt="프론트 아이콘" className={skills.icon} />
          <h2>DATABASE&DEPLOY</h2>
        </div>
        <div className={skills.textbox}>
          <p>MongoDB</p>
          <ul>
            <li>데이터 저장, 관리</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>CloudType</p>
          <ul>
            <li>애플리케이션 배포</li>
          </ul>
        </div>
      </div>

      <div className={skills.text}>
        <div className={skills.head}>
          <img src={path + '/images/tool-icon.png'} alt="프론트 아이콘" className={skills.icon} />
          <h2>TOOL</h2>
        </div>
        <div className={skills.textbox}>
          <p>Figma</p>
          <ul>
            <li>프로토타입 제작</li>
          </ul>
        </div>

        <div className={skills.textbox}>
          <p>Git, GITHUB</p>
          <ul>
            <li>Git Bash로 git 파일 백업 및 버전 관리</li>
            <li>GitHub 프로젝트 백업, 복구, 로컬 폴더 연동</li>
            <li>GitHub Organizations을 통한 팀 프로젝트 경험</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
