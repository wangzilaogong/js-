/**
 * Created by wk on 2017-07-05.
 */
var inputValidate = {
    isInt:function(a){
        var reg = /^[0-9]*$/;
        return reg.test(a);
    },
    isChinese:function(a){//中文的
        var reg = /^[\u4e00-\u9fa5]{0,}$/;
        return reg.test(a);
    },
    isEngNumber:function(a){//英文和数字的
        var reg = /^[A-Za-z0-9]+$/;
        return reg.test(a);
    },
    //isUnusual:function(a){// 可以输入含有^%&',;=?$\" 输入%返回false
    //    var reg = /[^%&',;=?$\x22]+/;
    //    return reg.test(a);
    //}
    isEmail:function(a){
        var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reg.test(a);
    },
    isphoneNum:function(a){
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        return reg.test(a);
    },
    isCNE:function(a){
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        return reg.test(a);
    }




};