/**
 * Created by chkui on 2016/11/16.
 */

//requirejs AMD
define(function(require, exports, module) {
    require("!style!css!./style.css");
    document.write('<h1>hello react!</h1>');
    document.write(require('./module.js'));
});
