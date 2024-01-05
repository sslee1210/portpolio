import React from 'react';
import works from './Works.module.css';

const Works = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={works.works} id="Works">
      <h1>Works</h1>
      <div
        className={`${works.container1} ${works.imageContainer1}`}
        onClick={() => window.open('https://github.com/sslee1210/singsinggo', '_blank')}
      >
        <div className={works.project1}>
          <p className={works.title}>
            식재료 보관 앱<span>팀프로젝트</span>
          </p>
          <p className={works.text}>리액트를 이용하여 만든 홈페이지 입니다.</p>
        </div>
        <a href="https://github.com/sslee1210/singsinggo" target="_blank" rel="noopener noreferrer">
          <img className={works.gifSize} src={path + '/images/singsinggo.png'} alt="싱싱고" />
        </a>
      </div>

      <div className={works.container2}>
        <div className={works.project2}>
          <p className={works.big}>
            부산 스토리텔링<span>팀프로젝트</span>
          </p>
          <div className={`${works.imageContainer2} imageContainer`}>
            <a href="https://github.com/sslee1210/busan_storytelling" target="_blank" rel="noopener noreferrer">
              <img src={path + '/images/busan.png'} alt="부산스토리텔링" />
            </a>
          </div>
          <div className={works.read}>
            <p>React</p>
            <p>Java Script</p>
          </div>
        </div>
        <div className={works.project3}>
          <p className={works.big}>
            포트폴리오<span>개인프로젝트</span>
          </p>
          <div className={`${works.imageContainer2} imageContainer`}>
            <a href="https://github.com/sslee1210/busan_storytelling" target="_blank" rel="noopener noreferrer">
              <img src={path + '/images/portpolio.png'} alt="포트폴리오" />
            </a>
          </div>
          <div className={works.read}>
            <p>React</p>
            <p>Java Script</p>
          </div>
        </div>

        <div className={works.project4}>
          <p className={works.big}>
            미정<span>개인프로젝트</span>
          </p>
          <div className={`${works.imageContainer2} imageContainer`}>
            <a href="https://github.com/sslee1210/busan_storytelling" target="_blank" rel="noopener noreferrer">
              <img src={path + '/images/미정.png'} alt="개인프로젝트" />
            </a>
          </div>
          <div className={works.read}>
            <p>React</p>
            <p>Java Script</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
