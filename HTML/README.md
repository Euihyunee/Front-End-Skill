## HTML 학습

### [form.html](https://github.com/Euihyunee/Front-End-Skill/blob/main/HTML/form.html) 설명

- `<form>` 데이터 학습
- `<table>` 요소 학습 

<style>
  .img_container_box {
    display: flex;
    flex-wrap: wrap;
  }
  .left-div-example, .right-div-example {
    flex: 1;
    min-width: 300px; /* 최소 너비 설정 */
  }
  .left-div-example img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    .right-div-example {
      flex-basis: 100%;
      order: 2;
    }
  }
</style>

<div class="img_container_box">

  <div class="left-div-example">
    <img src="https://www.w3schools.com/html/img_sem_elements.gif" alt="html 레이아웃">
  </div>

  <div markdown="1" class="right-div-example">

- `<header>` 문서 또는 섹션의 헤더를 정의합니다.
- `<nav>` 탐색 링크 세트를 정의합니다
- `<section>` 문서의 섹션을 정의합니다
- `<article>` 독립적이고 자체 포함되는 콘텐츠를 정의합니다.
- `<aside>` 콘텐츠 외의 콘텐츠(사이드바 등)를 정의합니다.
- `<footer>` 문서 또는 섹션의 바닥글을 정의합니다.
- `<details>` 사용자가 필요에 따라 열고 닫을 수 있는 추가 세부 정보를 정의합니다.
- `<summary>` `<details>` 요소 의 제목을 정의합니다.

</div>
</div>
