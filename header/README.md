## 전체 페이지 조정

```css
*{padding: 0; margin: 0; box-sizing: border-box;}
```

- `padding: 0;`: 모든 요소의 기본 패딩을 제거합니다. 패딩은 요소의 내용과 테두리 사이의 공간을 의미합니다. 이를 0으로 설정하면 요소 주변의 불필요한 공간이 제거됩니다.
- `margin: 0;`: 모든 요소의 기본 여백을 제거합니다. 여백은 요소와 다른 요소 사이의 공간을 의미합니다. 이를 0으로 설정하면 요소 간의 기본적인 간격이 제거됩니다.
- `box-sizing: border-box;`: 요소의 너비와 높이를 계산할 때 패딩과 테두리를 포함하도록 설정합니다. 이는 요소의 크기를 더 쉽게 제어할 수 있게 해줍니다. 예를 들어, 요소의 너비를 100px로 설정하면, 패딩과 테두리가 추가되어도 요소의 총 너비는 여전히 100px로 유지됩니다.

```css
body{color: #333; font-family: "Noto Sans KR", "Roboto";}
```

`body` 영역 컬러 조정 및 폰트 설정

```css
a{color: #333; text-decoration: none;}
li{list-style: none;}
button{border: none; outline: none; background-color: transparnet;}
```

- `text-decoration: none;`: <a> 요소의 기본 밑줄을 제거합니다. 이는 링크가 더 깔끔하게 보이도록 합니다.
- `list-style: none;`: <li> 요소의 기본 목록 스타일(예: 점, 숫자 등)을 제거합니다. 이는 목록을 더 깔끔하게 표시하거나, 목록 아이템을 다른 형태로 스타일링할 때 유용합니다.
- `border: none;`: <button> 요소의 기본 테두리를 제거합니다. 이는 버튼의 외곽선을 없애고, 다른 스타일을 적용할 수 있게 합니다.
- `outline: none;`: <button> 요소가 포커스될 때 나타나는 기본 아웃라인을 제거합니다. 이는 버튼이 포커스되었을 때도 깔끔하게 보이도록 합니다.
- `background-color: transparent;`: <button> 요소의 배경색을 투명으로 설정합니다. 이는 버튼이 배경 요소와 잘 어울리도록 하거나, 다른 배경 스타일을 적용할 수 있게 합니다.