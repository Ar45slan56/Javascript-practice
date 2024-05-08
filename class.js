const student = {
    fullname : "Muhammad Arslan",
    Department : "BSSE",
    RollNo : "129",
    marks : 2230,
    printmarks : function (){
        console.log("Marks is :",marks);
    }
}
// method 
const employee = {
    calctax(){
        console.log("tax is 10%");
    },
}

const arslan = {
 salary : 3000
};
arslan.__proto__ = employee;
console.log(arslan);


// class and object

class ToyotaCar{

  constructor(brand){
    this.brand = brand;
    console.log("brand by constructor: ",brand);
  }
 

  Start(){
    console.log("Start");

  }
  Stop(){
    console.log("Stop");
  }
  Nothing(){
    console.log("Do Nothing");
  }

}

let mehran = new ToyotaCar("mehran");
let suzuki = new ToyotaCar("suzukiBrand");