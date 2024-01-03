import React from 'react';
import works from './Works.module.css';

const Works = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={works.works}>
      <h1>Works</h1>
      <div className={works.container1}>
        <div className={works.project1}>
          <p className={works.title}>
            식재료 보관 앱<span>팀프로젝트</span>
          </p>
          <p className={works.text}>리액트를 이용하여 만든 홈페이지 입니다.</p>
        </div>
        <img className={works.gifSize} src={path + '/videos/싱싱고.gif'} alt="프로젝트 GIF" />
      </div>

      <div className={works.container2}>
        <div className={works.project2}>
          <img src={path + '/images/싱싱고.png'} alt="다른 프로젝트 이미지 설명" />
          <p>다른 프로젝트명</p>
          <p>팀프로젝트</p>
          <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
        </div>

        <div className={works.project3}>
          <img src={path + '/images/싱싱고.png'} alt="다른 프로젝트 이미지 설명" />
          <p>다른 프로젝트명</p>
          <p>팀프로젝트</p>
          <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
        </div>

        <div className={works.project4}>
          <img src={path + '/images/싱싱고.png'} alt="추가 프로젝트 이미지 설명" />
          <p>추가 프로젝트명</p>
          <p>팀프로젝트</p>
          <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
