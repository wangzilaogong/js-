/**
 * Created by wk on 2017-06-08.
 */
/*
* 数据类型
* */
 //typeof操作
   var message = "some string";
   alert(typeof (message)); //string
   alert(typeof message); //string
   alert(typeof 95); //num

// 3.4.2 Undefined类型
    var amessage ;
    alert(amessage);//undefined

    var bmessage = undefined;
    alert(bmessage== undefined);//true
    //没有必要特意去设置他的值为undefined，一般默认是的，不过我们主要用来显示的去区分空指针与未经过初始化的变量。

    var cmessage ;
    alert(cmessage);//undefined

    alert(age);//未定义要报错的

    alert(typeof age);//undefined

    //但是在值得注意的是，使用typeof时候没有声明的也是undefined，对于P25页tips我的理解是我们每次声明一个变量的时候需要去尽量做到
    //显示的去声明，这样方便以后使用typeof 去判断变量是否初始化

//3.4.3 NULL类型
    var car = null;
    alert(typeof car);//object null 空指针对象，对象实际上就是object

