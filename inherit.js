class Parent {
    hello(){
    console.log("Hello");
    }
}


let DATA = "Secret information";
// let obj =  new hello();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    ViewData() {
        return `<p>Name: ${this.name}</p>
        <p>Email: ${this.email}</p>`;
    }
}

let student1 = new User("arslan", "arman40591@gmail.com");
let student2 = new User("farhan", "farhan@gmail.com");

document.getElementById("userData").innerHTML = student1.ViewData() + student2.ViewData();

let yourname = document.getElementById("yname");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const input = document.getElementById('yname');
        const showName = document.getElementById('showName');
        const name = input.value.trim();

        if (name !== "") {
            showName.textContent = "Your name: " + name;
            input.value = ""; 
        } else {
            showName.textContent = "Please fill the form";
        }
    });
});