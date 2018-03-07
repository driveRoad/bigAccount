window.onload=function(){
  var Hei=document.body.clientHeight;
  document.getElementById("money_deposit_agreement").height = Hei-130; 
  var window_wid=document.body.clientWidth+17;
  document.getElementById("bookImg").width = window_wid;
}


window.onresize = function(){
  var Hei=document.body.clientHeight;
  document.getElementById("money_deposit_agreement").height = Hei-130;
  var window_wid=document.body.clientWidth+17;
  document.getElementById("bookImg").width = window_wid;
}


