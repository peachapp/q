# -> 、=>、::、$this->四种符号

## ->用来引用一个类的属性（变量）、方法（函数）

可以把`->`理解成调用的意思

```php
<?php
  Class a {
    Var $id;
    Function add(){
      $this->id="test";
      echo "abc";
    }
  }
  $b = new a;
  $b->add(); // 调用类a中的add方法，输出为abc
  Echo $b->id; // 调用类a中的属性id，输出为test
?>
```

## =>是用来定义数组用的

```php
<?php
  $arr1 = array(0=>"php",1=>"is",the=>"the");
  Echo $arr1[0],$arr1[1],$arr1['the']; // 对应输出设置的值
?>
```

## :: 用来直接调用类中的属性或方法，没有实例化

正常的情况我们用实例化方法来调用类中的属性或方法，但使用`::`可以不需要实例化对象，直接调用即可。

```php
<?php
  Class b {
    Var $name = "test";
    Function Getname() {
      Echo "test is good";
    }
  }
  // 直接调用
  Echo b::Getname(); // 输出为test is good
?>
```

## $this->表示实例化后调用具体对象

我们一般在一个类的内部使用本类的属性或方法时，就使用`$this->`

```php
<?php
  Class a {
    Var $name;
    Function Getname() {
      Echo $this->name;
    }
  }
  $name1 = new a;
  $name1->name = "赋值给name1";
  $name1->Getname(); // 输出结果为 赋值给name1
?>
```
