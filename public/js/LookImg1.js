window.onload=function(){
  var Hei=document.body.clientHeight;
  var window_wid=document.body.clientWidth+17;
  document.getElementById("imgBox").height = Hei-92;
  document.getElementById("imgBox").width = window_wid;
}


window.onresize = function(){
  var Hei=document.body.clientHeight;
  var window_wid=document.body.clientWidth+17;
  document.getElementById("imgBox").height = Hei-92;
  document.getElementById("imgBox").width = window_wid;
}


