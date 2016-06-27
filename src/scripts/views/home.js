var tplHome = require('../templates/home.string');

SPA.defineView('home', {
  html: tplHome,
  bindEvents:{
  	'show':function(){
  		var mySwiper = new Swiper('#ms-swiper',
  		{
       		 slidesPerView: 3,
  		     paginationClickable: true,
  		     spaceBetween: -50
  		});
  	}
  }
});