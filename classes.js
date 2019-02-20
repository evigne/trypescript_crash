"use strict";
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created" + " " + this.name);
    }
    register() {
        console.log(this.name + " is registered");
    }
    diaplay() {
        console.log(this.name + " is registered");
    }
    payInvoice() {
        console.log("This Returns the PaySlip of " + this.name);
    }
}
// let usr1 = new User("Vigneshwaran", "vigneshwaranethirajan@gamil.com", 27);
// console.log(usr1.age);
// usr1.register();
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let men1 = new Member(1, "Billy", "billy@gmail.com", 25);
men1.payInvoice();
let mem2 = new Member(2, "Hope", "hope@mail", 26);
mem2.payInvoice();
////////////////////////////////   Creating interface for class
/*
interface UserInterFace {
  name: string;
  email: string;
  age: null;
  register();
  payInvoice();
}

class User implements UserInterFace{
  private name: string; // cant access outside the class
  protected email: string; //cant access outside but we can access it by any class inherites this class
  public age: number; // can access from outside
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log("User Created" + " " + this.name);
  }
  register() {
    console.log(this.name + " is registered");
  }
  private diaplay() {
    console.log(this.name + " is registered");
  }
  payInvoice() {
    console.log("This Returns the PaySlip of " + this.name);
  }
}
*/
