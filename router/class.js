/**
 * Created by wk on 2017-08-21.
 */
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type +'say' +say)
    }
}

let animal = new Animal()
    animal.says('ssss');

  class Cat extends Animal{
      constructor (){
          super()
          this.type = 'cat'
      }
  }

  let cat = new Cat()
  cat.says('hello');
//function animal(type){
//    type = type || 'cat'
//    console.log(type)
//}
//animal()
//function animal(type = 'cat'){
//    console.log(type)
//}
