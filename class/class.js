/**
 * es5 创建类和继承
 */
function Parent (name) {
  // 实例属性
  this.name = name
}

// 原型方法
Parent.prototype.getName = function () {
  console.log(this.name)
}

/**
 * es5继承
 * 继承什么？
 * 1.实例的属性和方法
 * 2.原型上的属性和方法
 */
function Child (name) {
  // 继承父类属性 => this指的是Child
  Parent.call(this, name)
  this.age = 19
}

// 继承原型
// 不推荐 1.原型链上多个name 2.子类没有constructor
// Child.prototype = new Parent('小小')
// ************************推荐************************
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child
  }
})

/**
 * es6  class关键字（语法糖）创建类和继承
 */
// 创建一个父类
class Par {
  constructor(name) {
    this.name = name
  }
  getName () {
    console.log(this.name)
  }
}

// 继承=>使用extends关键字
// class Chi extends Par { }
class Chi extends Par {
  // 构造器里面定义的属性和方法是实例属性和方法
  constructor(name) {
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // 如果写了constructor，必须写全，里面必须写super
    super(name)
    this.age = 20 // 实例属性
    this.fn = () => { // 实例方法
      console.log(this)
    }
  }

  // 属性？实例属性 =>相当于在constructor里面写：this.xxx = xxx
  test = 200

  // 实例方法
  fnc = () => {
    console.log(this)
  }
  // =号赋值的是实例属性和方法
  //******************************end*********************************** */

  // 原型方法
  getAge () {
    console.log(this.age)
  }
}
var ch = new Chi('小天')
console.log(ch);