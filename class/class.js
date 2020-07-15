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

// 定义静态属性和方法 => 静态 => 不需要new
Parent.ts1 = 1
Parent.tsfn = function () {
  // this输出是谁？
  console.log('es5中静态方法', this)
  return '调用了Parent静态方法tsfn'
}
console.log('es5中调用静态属性和方法', Parent.ts1, Parent.tsfn())



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

  // *****************************************
  // 方式二：定义静态属性和方法=>使用关键字 static
  static sta2 = [1, 2, 3]
  static fn2 = () => {
    console.log('使用关键字 static方式定义静态属性和方法', Chi.sta2)
  }
}

// es6的静态属性和方法
// 方式一：传统方式
Chi.sta = 2
Chi.staFn = () => {
  console.log('调用了Chi.staFn方法', Chi.sta);
  return 100
}

var ch = new Chi('小天')
console.log(ch, Chi.staFn());