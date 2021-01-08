
var carouselSlideSmall = document.querySelector('.slider-slides-small');
var carouselImagesSmall = document.querySelectorAll('.slider-slides-small img');

// Buttons
var prevBtnSmall = document.querySelector('#prevBtn-small');
var nextBtnSmall = document.querySelector('#nextBtn-small');

//Counter
var counterSmall = 1;

//Size
var size;
size = carouselImages[0].width;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/*while (!sizeSmall) {
	if (carouselImagesSmall[0].width) {
		sizeSmall = carouselImagesSmall[0].width;
	} else if (carouselImagesSmall[1].width) {
		sizeSmall = carouselImagesSmall[1].width;
	} else if (carouselImagesSmall[2].width) {
		sizeSmall = carouselImagesSmall[2].width;
	}
	carouselSlideSmall.style.transform = 'translateX(' + (-sizeSmall * counter) + 'px)';
}*/


//Button Listeners

nextBtnSmall.addEventListener('click',function() {
	if (counterSmall >= carouselImagesSmall.length -1) return;
	sizeSmall = carouselImagesSmall[0].clientWidth;
	carouselSlideSmall.style.transition = 'transform 0.4s ease-in-out';
	counterSmall ++;
	carouselSlideSmall.style.transform = 'translateX(' + (-sizeSmall * counterSmall) + 'px)';
});

prevBtnSmall.addEventListener('click',function() {
	if (counterSmall <= 0) return;
	sizeSmall = carouselImagesSmall[0].clientWidth;
	carouselSlideSmall.style.transition = 'transform 0.4s ease-in-out';
	counterSmall --;
	carouselSlideSmall.style.transform = 'translateX(' + (-sizeSmall * counterSmall) + 'px)';	
});

// Transition Listener

carouselSlideSmall.addEventListener('transitionend', function() {
	if (carouselImagesSmall[counterSmall].id === 'lastClone-small') {
		carouselSlideSmall.style.transition = 'none';
		counterSmall = carouselImagesSmall.length -2;
		carouselSlideSmall.style.transform = 'translateX(' + (-sizeSmall * counterSmall) + 'px)';
	}
	if (carouselImagesSmall[counterSmall].id === 'firstClone-small') {
		carouselSlideSmall.style.transition = 'none';
		counterSmall = carouselImagesSmall.length -counterSmall;
		carouselSlideSmall.style.transform = 'translateX(' + (-sizeSmall * counterSmall) + 'px)';
	}
})

// Resize Listener

window.addEventListener('resize', function() {
	carouselSlideSmall.style.transition = 'none';
	sizeSmall = carouselImagesSmall[0].clientWidth;
	carouselSlideSmall.style.transform = 'translateX(' + (-sizeSmall * counterSmall) + 'px)';
});

