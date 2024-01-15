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


---

### SKILLS
 - 국비교육을 들으며 배운 기술들을 나열했다.
 - react-intersection-observer 라이브러리를 사용하여 스킬 리스트들이 화면 안에 들어오면 왼쪽에서 오른쪽으로 이동시키는 효과를 주었다.
```
npm i react-intersection-observer
```
---

### CONTACT
- 내 깃허브 페이지와 블로그로 이동할 수 있게 링크를 걸어두었다.
- 글씨에 마우스를 올리면 배경색이 왼쪽에서 오른쪽으로 스르륵 생기고 글씨 색이 바뀐다.
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

### FOOTER
 - 


## 디렉토리 구조
![포폴디렉토리](https://github.com/kimgs1234/portfolio/assets/142865411/b332ad7d-a46c-4bc4-bd0f-f8ea0d875f7a)

## 문제 및 해결
*상황: 헤더의 메뉴중 skill 과 project 페이지를 누르면 페이지로 넘어가면서 맨위로 넘어가져야 하는데 넘어가기 전 페이지 중간에서 넘어가면 <br>
페이지의 중간부분으로 이동현상이 발생함

*해결: 우선 스크롤이 맨위로 부드럽게 이동하는 컴포넌트를  
``` react
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

```
와 같이 만들고 project컴포넌트와 skill컴포넌트에  scrolltoTop 컴포넌트를 넣었더니 페이지를 누르면 맨위로 가졌다.

*상황: 헤더의 메뉴중 About페이지를 누르면 맨 처음 메인 페이지의 맨 밑 about쪽으로 넘어가야 하는데 <br>
마찬가지로 이동하기전 높이값과 같은 위치로 스크롤이 됨

*해결: 
``` react
const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const location = useLocation();

  useEffect(() => {
    if (location.search === "?scrollTo=bottom") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]); 

```
about부분이 있는 컴포넌트에 저 코드를 추가하고 링크부분에 다음과 같이 path를 수정하니 문제가 해결됨 <br>
![링크 작성 방식](https://github.com/kimgs1234/portfolio/assets/142865411/b28f5ec3-9e17-4129-94ac-0a795326f823)

## 느낀점
이번 국비를 수료하게 되면서 많은 것을 배웠다고 생각했지만 실제로 활용하는데에는 어려움이 많았고 <br>

이것들을 실제로 활용 하려면 많이 써보고 따로 공부도 더 열심히 해야겠다는 생각이 들었다. <br>

수료를 하고도 좋은 개발자가 되기 위해 공부 꾸준히 해야 겠다고 느꼈다.

## 포트폴리오 바로가기
<a href="https://kimgs1234.github.io/portfolio/" target="_blank">포트폴리오 바로가기</a>
