import React from 'react';
import works from './Works.module.css';

const Works = () => {
    const path = process.env.PUBLIC_URL;

    return (
        <div className={works.works} id="Works">
            <h1>Works</h1>
            <div
                className={`${works.container1} ${works.imageContainer1}`}
                onClick={() => window.open('https://github.com/sslee1210/Enoch', '_blank')}
            >
                <div className={works.project1}>
                    <p className={works.title}>
                        이노치코리아 대표 홈페이지<span>팀프로젝트</span>
                    </p>
                    <p className={works.text}>회사 소개 및 제품 소개를 위한 대표 홈페이지 입니다. </p>
                    <p className={works.text2}>프로젝트 명: Enoch Korea / 팀원: 이성수, 정주이 , 김은영</p>
                    <div className={works.read}>
                        <p>React</p>
                        <p>Java Script</p>
                        <p>CSS3</p>
                    </div>
                </div>
                <a href="https://github.com/sslee1210/Enoch" target="_blank" rel="noopener noreferrer">
                    <img className={works.gifSize} src={path + '/images/메인.png'} alt="main" />
                </a>
            </div>

            <div className={works.container2}>
                <div className={works.project2}>
                    <p className={works.big}>
                        식재료 보관 웹앱<span>팀프로젝트</span>
                    </p>
                    <div className={`${works.imageContainer2} imageContainer`}>
                        <a
                            href="https://github.com/sslee1210/ReactTeamProject"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={path + '/images/싱싱고.png'} alt="singsinggo" />
                        </a>
                    </div>
                    <div className={works.read}>
                        <p>React</p>
                        <p>Java Script</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                </div>

                <div className={works.project3}>
                    <p className={works.big}>
                        부산 스토리텔링<span>팀프로젝트</span>
                    </p>
                    <div className={`${works.imageContainer2} imageContainer`}>
                        <a
                            href="https://github.com/sslee1210/JavaScriptTeamProject"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={path + '/images/busan.png'} alt="부산스토리텔링" />
                        </a>
                    </div>
                    <div className={works.read}>
                        <p>Java Script</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                </div>

                <div className={works.project4}>
                    <p className={works.big}>
                        Soo Playlist<span>개인프로젝트</span>
                    </p>
                    <div className={`${works.imageContainer2} imageContainer`}>
                        <a href="https://github.com/sslee1210/SooPlaylist" target="_blank" rel="noopener noreferrer">
                            <img src={path + '/images/sooplay.png'} alt="포트폴리오" />
                        </a>
                    </div>
                    <div className={works.read}>
                        <p>React</p>
                        <p>Java Script</p>
                        <p>CSS3</p>
                        <p>API</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
