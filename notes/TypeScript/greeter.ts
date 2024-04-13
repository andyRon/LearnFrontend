
interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    return "hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Andy", "M.", "Ron");
document.body.innerHTML = greeter(user);