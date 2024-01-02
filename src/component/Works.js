import React from 'react';
import works from './Works.module.css';

const Works = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div>
      <div className={works.container1}>
        <img src={path + '/images/싱싱고.svg'} alt="싱싱고" />
        <p>식재료 보관 앱</p>
        <p>팀프로젝트</p>
        <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
      </div>

      <div className={works.container2}>
        <img src={path + '/images/your-image-name.png'} alt="프로젝트 이미지 설명" />

        <p>프로젝트명</p>
        <p>팀프로젝트</p>
        <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
      </div>

      <div className={works.container3}>
        <img src={path + '/images/another-image-name.png'} alt="다른 프로젝트 이미지 설명" />

        <p>다른 프로젝트명</p>
        <p>팀프로젝트</p>
        <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
      </div>

      <div className={works.container4}>
        <img src={path + '/images/yet-another-image-name.png'} alt="추가 프로젝트 이미지 설명" />

        <p>추가 프로젝트명</p>
        <p>팀프로젝트</p>
        <p>리액트를 이용하여 만든 홈페이지 입니다.</p>
      </div>
    </div>
  );
};

export default Works;
