let offset = 0; // смещение от левого края
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
	offset = offset + 400;
	if (offset > 1600) {
		offset = 0;
	}
	sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
	offset = offset - 400;
	if (offset < 1600) {
		offset = 0;
	}
	sliderLine.style.left = -offset + "px";
});



/* 
//Второй вариант с переиспользованием функции
let offset = 0; //смещение от левого края
const sliderLine= document.querySelector(".slider-line");

//Функция moveSlider принимает направление движения (1 - вправо, -1 - влево)
const moveSlider = (direstion) =>{
	const sliderWidth = 400;
	offset = (offset + sliderWidth * direstion + 2000) % 2000; //Вычисление нового смещения с учетом границ
sliderLine.style.left = -offset + "px";//Установка нового значения свойства left у блока .slider-line
};

document.querySelector(".slider-next").addEventListener("click", () => moveSlider(1));
document.querySelector(".slider-prev").addEventListener("click", () => moveSlider(-1));
 */