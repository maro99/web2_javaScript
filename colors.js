var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }
}

/*제이쿼리 쓰면 반복문 안쓰고 한줄로 기능 가능.
$('a') : 이 웹페이지의 모든 a 테그를 제이쿼리로 제어 하겠다.

제이쿼리가 훨씬 직관적이다.
새로운 언어가 아니라 자바스크립트 이용해서 css 라는 함수를 제이쿼리가 만들어 놨고
주석처리한 과정을 우리대신 해 주는 것이다.
*/
var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
