//вызов ф-ции при нажатии на кнопку с id="button"
//синтаксис: имя_id.имя_события = function(){};
button.onclick = function(){
  
  button.style.fontSize = "30px";
  button.style.color = "red";
  
}
button.oncontextmenu = function(){
  button.style.fontSize = "15px";
  button.style.color = "blue";
}
number.onclick = function(){
  number.classList.add("animate");/*вызывает при клике анимацию*/ 
}

text.onclick = function(){
  /*Сjздаем обулт который получает управление внутренностью тега p */
  const objP = document.getElementsByTagName("p")[0];
  /*Меняем текст внутри тега p*/
 /* objP.textContent = "Click on the number to start the countdown";*/
  if (objP.textContent == "Click on the number to start the countdown"){
    objP.textContent = "Кликните и начнется отчет";
  }
  else{
    objP.textContent = "Click on the number to start the countdown";
  }
}