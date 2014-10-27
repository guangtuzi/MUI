/**
 * @author : matthewsun
 * @mail : matthew-sun@foxmail.com
 * @date : 2014/10/21
 */
define(function(require, exports, module){
    var $ = require('./zepto/zepto');
    
    var fastclick = require('./core/fastclick');
    var router = require('./core/router');

    fastclick.attach(document.body);

    router().when('/',{
        templateUrl : 'tpl/index.html'
    }).when('/list',{
        templateUrl : 'tpl/list.html'
    }).otherwise({
        templateUrl : 'tpl/404.html'
    })

})