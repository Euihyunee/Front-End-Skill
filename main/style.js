// 요구사항에 맞게 구현하세요
// 1. 아이디입력요소를 클릭했을 때
// 2. 패스워드 입력요소를 클릭했을 때 


// JQuery 사용
$(function() {
  $("#id").click(function(){
    // parnet()는 해당 선택에서 바로 위 요소, siblings()는 해당 블럭에서 찾기, next()는 다음 요소
    // 아래 예시 input 요소 -> 부모 div -> 부모 요소 다음 = <p>
    // 상대 경로 
    // $(this).parent().siblings(".msg")
    // .html("아이디는 영문자/숫자 조합 8글자 이상")
    // .show();
    $("#id-msg").show().text("아이디는 영문자/숫자 조합 8글자 이상");
  });
  // document.querySelector("#id").addEventListener("click", function(){});
  $("#password").click(function(){
    $("#pw-msg").show().text("아이디는 영문자/숫자 조합 8글자 이상");
  });
  // blur 메시지가 입력되지 않았을 때
  $("#id").blur(function(){
    let idValue=$(this).val().trim();
    if(idValue.length==0){
      $("#id-msg").show().text("필수항목");
    }
  });
});

// 태그에서 이벤트를 적용한 경우
function pwClicked(){
  // document.querySelector("#pw-msg").style.display = "block";
  // document.querySelector("#pw-msg").innerText = "비밀번호는 8~20자, 영문/문자/특수문자 포함";
}