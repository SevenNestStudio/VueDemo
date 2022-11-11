
var width = document.documentElement.clientWidth || document.body.clientWidth;;
var rem = width * 100 / 1920;

//获取视窗
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = rem + "px";

