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

    if(car !=null){ //如果car =null 这个操作是把变量初始化为null，而不是其他的值
        //对car 进行操作
    }
    alert(unll == undefined);//true
    //其实undefined 是从null 派生出来的，所以相等
    //只要意在保存对象的变量的时候，我们要设置null初值，体现null作为空指针的惯例，而且进一步区分了undefined和null的区别，因为undefined没有必要初始一个变量的时候就赋值

//3.4.4 Boolean类型
    var found = true;
    var lost = false;

    var dmessage ="hello world!";
    var messageBoolean = Boolean(dmessage);
    //Number  非0 true  0和NAN false
    //Object  任何对象 true   null false
    //Undefined   不适用Boolean   undefined false

    var emessage = "hello world!";
    if (emessage){
        alert("value is true");
    }

//3.4.5Number类型
    var intNum = 55;//int整型
    //8进制
    var num1 = 070;//56
    var num2 = 079//无效的八进制 ，显示79
    var num3 = 08 //显示为8
//严格模式下八进制是无效的，JavaScript会抛出错误

    //16进制
    var hexNum1 = 0xA;//10
    var hexNum2 = 0x1f; // 31
//进行数据操作的时候，最终8和16都是转换为十进制的使用

//！！！！！+0 与 -0 被认为是相等的(鉴于保存数值的方式？？？)
    //1.浮点数
    var floatNum1 = 1.1;
    var floatNum2 = 0.1;
    var floatNum3 = .1;

    