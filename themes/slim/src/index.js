import styles from './styles.css';
import 'amoicons/build/sprite.amoicons.svg';

// Loading 
var ajax = new XMLHttpRequest();
ajax.open("GET", "/images/sprite.amoicons.svg", true);
ajax.send();
ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  div.style.width = 0;
  div.style.height = 0;
  div.style.position = "absolute";
  div.style.visibility = "hidden";
  document.body.insertBefore(div, document.body.childNodes[0]);
}