/**
 * Created by wk on 2017-06-07.
 */
//变量
    var message ; //不赋值
    var amessage = "hi"; //赋值

     //有效不推荐
    var bmessage = "hi";
    bmessage =100;

//在函数中。
    function test(){
        var message = "hi";
    }
    test();
    alert(message); //error 因为message已经被销毁

    var cmessage = "hi"
        found = false,
        age = 29;


