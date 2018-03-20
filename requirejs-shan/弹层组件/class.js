function Cat(){//构造函数
    this.name = name;
}
Cat.prototype.eat = function(){//原型*****
    console.log(this.name+"is eating");
};

//js定义函数类的时候在构造函数中定义属性，在原型中定义方法
var cat1 = new Cat();
cat1.eat();
var cat2 = new Cat();
cat2.eat();