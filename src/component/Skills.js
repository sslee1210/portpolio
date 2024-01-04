import React from "react";
import { useInView } from "react-intersection-observer";
import skills from "./Skills.module.css";

const Skills = () => {
  const path = process.env.PUBLIC_URL;

  const SkillList = ({ title, items }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
    });

    return (
      <div
        className={skills.textbox}
        ref={ref}
        style={{
          transform: inView ? "translateX(0)" : "translateX(-250px)",
          transition: "transform 1s",
        }}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={skills.skills} id="Skills">
      <h1>Skills</h1>
      <div className={skills.text}>
        <div className={skills.head}>
          <h2 className={skills.front}>Front</h2>
        </div>
        <div className={skills.textbox}>
          <p>HTML5&CSS3</p>
          <SkillList
            items={[
              "웹 표준과 웹 접근성을 고려한 시맨틱 마크업",
              "폼 요소를 이용한 입력 양식 구성",
              "미디어쿼리를 이용한 반응형 웹 구현",
              "@keyframe을 활용한 애니메이션 제어",
              "css를 이용한 스타일의 다양한 활용",
            ]}
          />
        </div>

        <div className={skills.textbox}>
          <p>JAVASCRIPT</p>
          <SkillList
            items={[
              "ES6+ 문법",
              "BOM, DOM 조작",
              "변수 및 함수의 유효 범위, 호이스팅, event.target 등의 실행 컨텍스트 이해",
              "효율적인 웹페이지 동작을 위한 비동기 처리 이해 및 활용",
              "비동기 통신 AJAX 활용",
            ]}
          />
        </div>

        <div className={skills.textbox}>
          <p>REACT</p>
          <SkillList
            items={[
              "React-router-dom을 활용한 웹 구축",
              "useState, useEffect를 활용하여 상태 관리",
              "useRef를 활용한 DOM요소 제어, 변수 관리, 리렌더링 제어",
              "useEffect를 활용한 함수 제어 및 데이터 통신",
              "Axios를 이용한 외부 API 및 백엔드와 통신",
              "Node.js Express 프레임워크 서버와 React 연결",
              "Styled-Components를 이용한 스타일 구현",
            ]}
          />
        </div>
      </div>

      <div className={skills.text}>
        <div className={skills.head}>
          <h2 className={skills.back}>Back</h2>
        </div>
        <div className={skills.textbox}>
          <p>Node.js</p>
          <SkillList
            items={[
              "Express 프레임워크 서버 구축 및 API를 통한 클라이언트와의 데이터 통신",
              "다양한 Express의 미들웨어 활용",
              "RESTful API를 이용한 CRUD",
            ]}
          />
        </div>

        <div className={skills.textbox}>
          <p>SHA256</p>
          <SkillList items={["비밀번호, 중요 정보 저장", "해시 함수 활용"]} />
        </div>
      </div>

      <div className={skills.text}>
        <div className={skills.head}>
          <h2 className={skills.data}>DATABASE</h2>
        </div>
        <div className={skills.textbox}>
          <p>MongoDB</p>
          <SkillList items={["데이터베이스 연결, 저장, 관리"]} />
        </div>

        <div className={skills.textbox}>
          <p>CloudType</p>
          <SkillList items={["애플리케이션 배포"]} />
        </div>
      </div>

      <div className={skills.text}>
        <div className={skills.head}>
          <h2 className={skills.tool}>TOOL</h2>
        </div>
        <div className={skills.textbox}>
          <p>PHOTOSHOP, ILLUSTRATOR</p>
          <SkillList
            items={["UI/UX 이미지 소스 제작", "이미지 편집 및 디자인"]}
          />
        </div>

        <div className={skills.textbox}>
          <p>Figma</p>
          <SkillList items={["웹 앱 프로토타입 제작", " 와이어프레임 제작"]} />
        </div>

        <div className={skills.textbox}>
          <p>GIT, GITHUB</p>
          <SkillList
            items={[
              "Git Bash로 git 파일 백업 및 버전 관리",
              "GitHub 프로젝트 백업, 복구, 로컬 폴더 연동",
              "GitHub Organizations을 통한 팀 프로젝트 경험",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
