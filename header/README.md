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

- `body` 영역 컬러 조정 및 폰트 설정

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

```css
.view-size{width: 1168px; margin:0 auto;}
.flex{display: flex;}
.center{justify-content: center;}
.between{justify-content: space-between;}
.al-center{align-items: center;}
```

- `.view-size`: 해당 `div`의 넓이를 주고 페이지 중앙으로 정렬합니다. 내부에 있는 텍스트는 아직 정렬하지 않았습니다.
- `display: flex;`: 요소를 Flexbox 레이아웃으로 설정합니다. Flexbox는 요소들을 유연하게 배치하고, 크기 조정 및 정렬을 쉽게 관리할 수 있게 해줍니다.
- `justify-content: center;`: Flexbox 레이아웃에서 주축 방향으로 자식 요소를 가운데 정렬합니다. 주축은 기본적으로 가로 방향입니다.
- `justify-content: space-between;`: Flexbox 레이아웃에서 주축 방향으로 자식 요소를 동일한 간격으로 배치합니다. 첫 번째 요소는 시작점에, 마지막 요소는 끝점에 위치하고, 나머지 요소들은 균일한 간격으로 배치됩니다.

## 헤더 부분

```css
#header>div{
  height: 69px;
  line-height: 69px;
}
```

- `line-height: 69px;`: CSS에서 줄 높이를 설정하는 속성입니다. 줄 높이는 텍스트의 한 줄이 차지하는 수직 공간을 의미합니다. 이 속성은 주로 텍스트의 가독성을 높이거나, 텍스트와 요소의 레이아웃을 조정할 때 사용됩니다.

```css
#euib > div > ul > li:not(:last-child){
  margin-right: 30px;
}
```

- `li:not(:last-child)`: CSS에서 가상 클래스를 사용하여 특정 조건을 만족하는 <li> 요소를 선택하는 방법입니다. 이 코드는 **마지막 자식이 아닌 모든 <li> 요소를 선택**합니다.

```css
#euib > div > ul > li> a{
  display: flex;
  position: relative;
}
```

- `display: flex;`: <a> 요소를 Flexbox 레이아웃으로 설정합니다. 이는 <a> 요소 내의 자식 요소를 유연하게 배치하고, 크기 조정 및 정렬을 쉽게 관리할 수 있게 해줍니다.
- `position: relative;`: <a> 요소의 위치를 상대적으로 설정합니다. 이는 <a> 요소가 자신의 원래 위치를 기준으로 다른 요소가 절대 위치를 설정할 수 있게 합니다. 예를 들어, <a> 요소 내에 절대 위치가 설정된 자식 요소를 사용할 때 유용합니다.

### 헤더 nav 목록 hover 및 동작

마우스 올릴 시 글자색 변경

```css
#euib > div > ul > li > a:hover{
  color: #03c161;
}
```

- `:hover`: <a> 요소에 마우스를 올렸을 때 적용되는 스타일입니다.
- `color: #03c161;`: 호버 상태에서 <a> 요소의 텍스트 색상을 밝은 초록색(#03c161)으로 변경합니다.



```css
#euib > div > ul > li > a::after{
  content: "";
  border-bottom: 2px solid #03c161;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  transition: all 0.2s;
}
```

- `::after`: <a> 요소의 끝에 가상 요소를 생성합니다.
- `content: "";`: 가상 요소의 내용을 빈 문자열로 설정합니다. 이는 가상 요소가 비어 있지만 여전히 레이아웃에 영향을 미칠 수 있게 합니다.
- `border-bottom: 2px solid #03c161;`: 가상 요소의 하단에 2px 두께의 밝은 초록색 테두리를 추가합니다.
- `position: absolute;`: 가상 요소의 위치를 절대적으로 설정하여, 부모 요소의 상대 위치를 기준으로 배치됩니다.
- `bottom: 0;`: 가상 요소를 부모 요소의 하단에 고정합니다.
- `left: 50%;`: 가상 요소를 부모 요소의 왼쪽에서 50% 위치에 배치합니다. 이는 가상 요소가 부모 요소의 중간에 위치하도록 합니다.
- `width: 0;`: 가상 요소의 초기 너비를 0으로 설정하여, 애니메이션 시작 시점에 보이지 않게 합니다.
- `transition: all 0.2s;`: 가상 요소의 모든 속성이 0.2초 동안 부드럽게 전환되도록 애니메이션 효과를 추가합니다.

호버했을 때 밑줄 나오게 하기

```css
#euib > div > ul > li > a::after{
  content: "";
  border-bottom: 2px solid #03c161;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  transition: all 0.2s;
}
#euib > div > ul > li > a:hover::after{
  left: 0;
  width: 100%;
}
```

- `content: "";`: <a> 요소의 끝에 빈 내용의 가상 요소를 생성합니다.
- `border-bottom: 2px solid #03c161;`: 가상 요소의 하단에 2px 두께의 밝은 초록색 테두리를 추가합니다.
- `position: absolute;`: 가상 요소의 위치를 절대적으로 설정하여, 부모 요소의 상대 위치를 기준으로 배치됩니다.
- `bottom: 0;`: 가상 요소를 부모 요소의 하단에 고정합니다.
- `left: 50%;`: 가상 요소를 부모 요소의 왼쪽에서 50% 위치에 배치합니다. 이는 가상 요소가 부모 요소의 중간에 위치하도록 합니다.
- `width: 0;`: 가상 요소의 초기 너비를 0으로 설정하여, 애니메이션 시작 시점에 보이지 않게 합니다.
- `transition: all 0.2s;`: 가상 요소의 모든 속성이 0.2초 동안 부드럽게 전환되도록 애니메이션 효과를 추가합니다.

| 여기서 밑줄을 추가했지만 `::after` 요소의 `width, content`를 추가하지 않았으므로 아무것도 나오지 않습니다. 여기서 hover 했을 때 밑줄이 나오도록 `a:hover::after` 요소를 추가합니다.

- `:hover::after`: <a> 요소에 마우스를 올렸을 때 가상 요소에 적용되는 스타일입니다.
- `left: 0;`: 가상 요소를 부모 요소의 왼쪽 끝으로 이동시킵니다.
- `width: 100%;`: 가상 요소의 너비를 부모 요소의 전체 너비로 확장시킵니다.

### 헤더 li 요소 포지션 설정

```css
#euib > div > ul > li > .sub{
  position: fixed;
  background-color: #fff;
  left: 0;
  top: 70px;
  width: 100%;
  line-height: 1.6;
  font-size: 15px;
  letter-spacing: -1px;
  z-index: 100;
  height: 0;
  overflow: hidden;
  transition: height 0.4s ease-out;
}
```

- `position: fixed;`: 요소를 고정 위치로 설정하여, 화면의 특정 위치에 고정시킵니다. 이는 스크롤 시에도 위치가 변하지 않습니다.
- `background-color: #fff;`: 요소의 배경색을 흰색으로 설정합니다.
- `left: 0;`: 요소를 화면의 왼쪽 끝에 위치시킵니다.
- `top: 70px;`: 요소를 화면의 위쪽에서 70px 아래에 위치시킵니다.
- `width: 100%;`: 요소의 너비를 부모 요소의 너비와 동일하게 설정합니다.
- `line-height: 1.6;`: 텍스트의 줄 높이를 설정하여 가독성을 향상시킵니다.
- `font-size: 15px;`: 텍스트의 크기를 15px로 설정합니다.
- `letter-spacing: -1px;`: 텍스트의 문자 간격을 줄여서 더紧密하게 보이도록 합니다.
- `z-index: 100;`: 요소의 层 순서를 설정하여, 다른 요소 위에 나타나도록 합니다. 이는 다른 요소가 이 요소를 가리지 않도록 하기 위해 사용됩니다.
- `height: 0;`: 요소의 초기 높이를 0으로 설정하여, 내용이 보이지 않게 합니다.
- `overflow: hidden;`: 요소의 내용이 높이보다 넘어갈 경우, 넘어가는 부분을 숨깁니다.
- `transition: height 0.4s ease-out;`: 요소의 높이가 변경될 때, 0.4초 동안 부드럽게 전환되도록 애니메이션 효과를 추가합니다. ease-out은 애니메이션이 끝날 때 속도가 줄어드는 효과를 줍니다.
