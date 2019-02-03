var f = function() {
  console.log("배열과 객체에 함수 담기");
  console.log(1+2);
}

var a = [f];
a[0]();


var o = {
  func:f
};

o.func();
