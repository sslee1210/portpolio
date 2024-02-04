import React from "react";
import works from "./Works.module.css";

const Works = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={works.works} id="Works">
      <h1>Works</h1>
      <div
        className={`${works.container1} ${works.imageContainer1}`}
        onClick={() =>
          window.open("https://github.com/sslee1210/ReactTeamProject", "_blank")
        }
      >
        <div className={works.project1}>
          <p className={works.title}>
            식재료 보관 앱<span>팀프로젝트</span>
          </p>
          <p className={works.text}>
            식품 관리를 효율적으로 돕기 위한 식료품 관리 앱 입니다.
          </p>
          <p className={works.text2}>
            프로젝트 명: 신선하조 / 팀원: 이성수, 성영은, 정하솔, 조유빈
          </p>
          <div className={works.read}>
            <p>React</p>
            <p>Java Script</p>
            <p>CSS3</p>
          </div>
        </div>
        <a
          href="https://github.com/sslee1210/ReactTeamProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={works.gifSize}
            src={path + "/images/singsinggo.png"}
            alt="싱싱고"
          />
        </a>
      </div>

      <div className={works.container2}>
        <div className={works.project2}>
          <p className={works.big}>
            부산 스토리텔링<span>팀프로젝트</span>
          </p>
          <div className={`${works.imageContainer2} imageContainer`}>
            <a
              href="https://github.com/sslee1210/JavaScriptTeamProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={path + "/images/busan.png"} alt="부산스토리텔링" />
            </a>
          </div>
          <div className={works.read}>
            <p>Java Script</p>
            <p>HTML5</p>
            <p>CSS3</p>
          </div>
        </div>
        <div className={works.project3}>
          <p className={works.big}>
            Soo Playlist<span>개인프로젝트</span>
          </p>
          <div className={`${works.imageContainer2} imageContainer`}>
            <a
              href="https://github.com/sslee1210/SooPlaylist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={path + "/images/sooplay.png"} alt="포트폴리오" />
            </a>
          </div>
          <div className={works.read}>
            <p>React</p>
            <p>Java Script</p>
            <p>CSS3</p>
          </div>
        </div>

        <div className={works.project4}>
          <p className={works.big}>
            Lee Map<span>개인프로젝트</span>
          </p>
          <div className={`${works.imageContainer2} imageContainer`}>
            <a
              href="https://github.com/sslee1210/LeeMap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={path + "/images/cafe.png"} alt="포트폴리오" />
            </a>
          </div>
          <div className={works.read}>
            <p>React</p>
            <p>Java Script</p>
            <p>CSS3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
