document.write("<div id='demo'></div>");

let element = document.getElementById('demo');
element.innerHTML = "Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник.";

element.style.backgroundColor='yellow';
element.style.color='black';
element.style.width='256px';
element.style.height='256px';
element.style.overflow='scroll';
element.style.outline='1px dashed red';
element.className='resetFont';

let elemClass = document.getElementsByClassName("resetFont")[0];
elemClass.style.fontSize='20pt';
elemClass.style.fontWeight='400';
elemClass.style.textDecoration='underline';