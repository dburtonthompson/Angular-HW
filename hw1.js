function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, state, occupation, age, phoneNumber, zipCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.state = state;
        this.occupation = occupation;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
    }
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.getState = function () {
        return this.state;
    };
    Employee.prototype.setState = function (state) {
        this.state = state;
    };
    Employee.prototype.getOccupation = function () {
        return this.occupation;
    };
    Employee.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Employee.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Employee.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Employee.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.getLocation = function () {
        return this.state + " " + this.zipCode;
    };
    Employee.prototype.getPersonData = function () {
        return this.getFullName() + " " + this.phoneNumber;
    };
    return Employee;
}());
var cardelia = new Employee("Cardelia", "Burton", "NC", "Sales", 62, 9807134486, 28215);
var dexter = new Employee("Dexter", "Thompson", "NC", "Scientist", 64, 7045668130, 28215);
var ivana = new Employee("Ivana", "Burton-Thompson", "NC", "Medic", 23, 7047772524, 28227);
document.getElementById("para2").innerHTML = cardelia.getFullName();
document.getElementById("para3").innerHTML = dexter.getLocation();
