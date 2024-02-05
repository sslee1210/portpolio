# 포트폴리오 작업 일지
## 포트폴리오 개요
 - 간단한 자기 소개와 함께 그동안 진행했던 프로젝트들과 내 기술 스택들을 소개했다.

## 사용기술

* 툴 : `vscode` `Github` `figma`
* 디자인 : `css`

## 페이지 구성
### 헤더
 - NAV로 이루어져있고 메뉴를 누르면 각 컴포넌트 별로 이동이 되게 구현을 하였다.
 - 로고를 누르면 첫화면으로도 가게 구현을 해놓았다.

---

### MAIN
 - 나를 간단하게 소개하는 문장으로 구성되어있다.
 - 타이핑 효과로 포트폴리오에 더 집중할 수 있게 효과를 주었다.
```
<div className={main.typing}>
  <Typing
    speed={70}
    loop
    eraseDelay={5000}
    startDelay={-1000}
    text="꾸준한 노력과 책임감 있는 태도로 끊임없이 성장하는 사람"
   />
</div>
   ```

---

### WORKS
 - 그동안 배웠던 기술들을 활용하여 만들었던 프로젝트들로 구성되어있다.
 - 프로젝트별로 자세한 설명을 볼 수 있는 링크를 걸어두었고 마우스 호버 효과를 주어 눈에 잘 띌 수 있게 설계했다.
```
transform: scale(1.03);
```

---

### SKILLS
 - 국비교육을 들으며 배운 기술들을 나열했다.
 - react-intersection-observer 라이브러리를 사용하여 스킬 리스트들이 화면 안에 들어오면 왼쪽에서 오른쪽으로 슬라이딩하는 효과를 주었다.
```
npm i react-intersection-observer
```
---

### CONTACT
- 내 깃허브 페이지와 블로그로 이동할 수 있게 링크를 걸어두었다.
- 글씨에 마우스를 올리면 배경색이 왼쪽에서 오른쪽으로 스르륵 생기고 글씨 색이 바뀌는 효과를 주었다.
```
.contact .all .pages a {
  color: #000;
  background: linear-gradient(to right, rgba(2, 167, 229, 1) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}

.contact .all .pages:hover a {
  background-position: left bottom;
  color: #fff;
}
```

---

### FOOTER
 - 이름과 이메일을 남겨두었다.

---

## 디렉토리 구조
![포트폴리오 디렉토리 구조](https://github.com/sslee1210/portpolio/assets/142865231/c37e4ad9-6905-4996-9820-ab470cbc71a3)


## 느낀점
 - 그동안 내가 배웠던 기술 스택들을 정리하는데 도움이 많이 되었다.
 - 웹 개발 자체가 너무 즐겁고 재밌다.
 - 빠르게 변해가는 시대에 맞춰 평생 공부를 해야 할 것이다.

## 포트폴리오 바로가기
### <a href="https://sslee1210.github.io/portpolio/" target="_blank">성수 포트폴리오</a>
