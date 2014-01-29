// 日付、時間を表示する(同期しないと更新されない)
var time = function(){
  var hiduke=document.lastModified;
  document.write(hiduke);
};


// 画像を白黒にする
var img = new Image();
img.src = "image.jpg";
img.onload = function(){
  context.drawImage(img, 0, 0);
};

var convert_for_image = function (){
         Pixastic.process(document.getElementById('img'), "desaturate", {average : false});
};


var change_tst_color = function(newColor) {
  elem = document.getElementById("img");
  elem.style.color = newColor;
};
