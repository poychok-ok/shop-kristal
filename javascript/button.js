let button = document.getElementById('btn1')
// let name - это объявление переменной 

let flag = true

function changeColor(){
	if (flag == true) {
		button.style.background = 'blue';
		button.textContent = 'В корзине';
		flag = false
	} else {
		button.textContent = 'Купить';
		button.style.background = 'crimson' //первоночальный цвет указать
		flag = true
	}	
}







let a = 5;

function name() { 

	if ( a > 5 ) {              // if (условие) 
		console.log('Даниил')
	} else {                    // else - иначе
		console.log('Беляев')
	}

}

name(); // вызов функции 
