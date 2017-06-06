/**
 * Created by wk on 2017-06-06.
 */
//标识符的基本形式
var abc=[];//字母开头
var _abc =[];//下划线开头
var $abc = [];//美元符号开头的，感觉一般不用到
//ECMAScript 中采用驼峰命名法
var fireSecond = [];
var myCar = ['BMW','AUTO'];
var doSomethingImportant = [];
/*
* ture or false and null can not to be Identifier!
* */

//3.1.4
/*
* 严格模式
* 在脚本的顶端的使用 "use strict";
* 也可以在函数里使用这个模式
* function doSomething(){
*   "use strict";
*
* }
*
* 兼容性IE10+,firefox4+,safari5.1+,Opera12+和Chrome
*
*
*
*/
//3.1.5
var sum = a + b  //无分号结尾
var diff = a - b; // 有分号结尾 建议！
if (test) {
    test = false;
    alert(test);
}

if (test)//易出错
    alert(test);

if (test){//建议使用花括号包围起来所要执行的代码块
    alert(test);
}

