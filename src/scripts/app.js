// 引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./lib/iscroll-probe.js');

// 引入views
require('./views/guide.js');
require('./views/nearby.js');
require('./views/car.js');
require('./views/my.js');
require('./views/home.js');
require('./views/index.js');

// SPA设置
SPA.config({
  indexView: 'guide'
});
