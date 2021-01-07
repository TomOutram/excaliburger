
var carouselSlide = document.querySelector('.slider-slides');
var carouselImages = document.querySelectorAll('.slider-slides img');

// Buttons
var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

// Counter
var counter = 1;

// Size
var size;

while (!size) {
	if (carouselImages[0].width) {
		size = carouselImages[0].width;
	} else if (carouselImages[1].width) {
		size = carouselImages[1].width;
	} else if (carouselImages[2].width) {
		size = carouselImages[2].width;
	}
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

//Button Listeners

nextBtn.addEventListener('click',function() {
	if (counter >= carouselImages.length -1) return;
	size = carouselImages[0].clientWidth;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter ++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',function() {
	if (counter <= 0) return;
	size = carouselImages[0].clientWidth;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter --;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';	
});

// Transition Listener

carouselSlide.addEventListener('transitionend', function() {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length -2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length -counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
})

// Resize Listener
window.addEventListener('resize', function() {
	carouselSlide.style.transition = 'none';
	size = carouselImages[0].clientWidth;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});




