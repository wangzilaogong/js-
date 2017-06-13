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
    //8进制 一般0-7来表示，就和二进制差不多的，只是换了个数值范围
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

    //2.数值范围
    var min = Number.MIN_VALUE //5e-324
    var max = Number.MAX_VALUE //
    //在这个范围之外的数值将自动转换为infinity值有正负且无法参加正常的运算
    var result = min+max;
    alert(isFinite(result));//false

    //3.NaN(NOT a Number)
    //任何涉及到NaN的操作都会返回NaN 如NaN/10 且NaN与任何值不相等包括自己本身。
    alert(NaN == NaN); //false

    alert(isNaN(NaN));//true
    alert(isNaN(10));//false  10当然是个数字了
    alert(isNaN("10"));//false  字符串10当然不是数字了但是被转换成10...这就很好玩了。应该是括号内的被转换后的值进行函数操作
    alert(isNaN("blue"));//true  blue 也是字符串
    alert(isNaN(true));//false   被转换成1 妈的，不然都不知道。竟然还有这种操作的
    //isNaN 还可以对对象进行操作，感觉还是有点莫名其妙，在对象操作过程中，先调用valueOf方法，确定返回值之后，是否可以转为数值，如果不能，则toString方法判断
    //~这也就解释了上面的对于字符10的操作过程，这样就一目了然了。

    //4.数值转换 Number() parseInt() parseFloat()
    //4.1 Number()
         //Boolean true 和false 分别转换为1和0
         //数值  即便 是 传入和返回
         //null  0
         //undefined NaN Number(undefined) NaN
         //字符串 的话比较复杂 "1" -> 1 "1243"->1243 "011"->11 忽略前面的0
                  // "0.11"?忽略前面的0？等等去测试下  "1.1"->1.1
                  //字符串里面包含16进制的话，也直接转换成16进制的然后在变成十进制;
                  //如果是空字符串的话，当然是了
                  //除此之外都是NaN

    var num1 = Number("Hello World!"); //除此外系列所以是NaN
    var num2 = Number(""); //0
    var num3 = Number("000011"); //11
    var num4 = Number(true); //1
    //鉴于这个函数不够合理，所以我们经常用的是parseInt处理整数的时候。
    var num5 = parseInt("12345blue"); //12345
    var num6 = parseInt(""); //NaN
    var num7 = parseInt("0xA"); //10
    var num8 = parseInt("22.5"); //22
    var num9 = parseInt("070"); //56 8进制
    var num10 = parseInt("70"); //70 10进制
    var num11 = parseInt("0xf"); //15 16进制
    //parseInt在解析字符串的时候，尤其是八进制的时候ECMA3和5存在分歧。
    //ECMA3
     var numa = parseInt("070")//56 8进制
    //ECMA5
     var numa = parseInt("070")//70 10进制

