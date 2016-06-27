var tplNearby = require('../templates/nearby.string');

SPA.defineView('nearby', {
  html: tplNearby,
  bindEvents:{
  	'show':function(){
  		var mySwiper = new Swiper('.near-swiper',
  		{
       		 slidesPerView: 3,
  		     paginationClickable: true,
  		     spaceBetween: -50
  		});
  	}
  }
});
