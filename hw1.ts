function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

interface EmployeeOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  state?: string;
  zip?: number;
  occupation?: string;
  hourlyWage?: number;
  hours?: number;
}

class Employee {
  private firstName: string;
  private lastName: string;
  private state: string;
  private occupation: string;
  private certs: string[];

  private age: number;
  private phoneNumber: number;
  private zipCode: number;
  private hours: number;
  private hourlyWage: number;

  constructor(
    firstName: string,
    lastName: string,
    state?: string,
    occupation?: string,
    age?: number,
    phoneNumber?: number,
    zipCode?: number,
    hours?: number,
    hourlyWage?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.state = state;
    this.occupation = occupation;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.zipCode = zipCode;
    this.hours = hours;
    this.hourlyWage = hourlyWage;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  getOccupation(): string {
    return this.occupation;
  }

  setOccupation(occupation: string): void {
    this.occupation = occupation;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getPhoneNumber(): number {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: number): void {
    this.phoneNumber = phoneNumber;
  }

  getZipCode(): number {
    return this.zipCode;
  }

  setZipCode(zipCode: number): void {
    this.zipCode = zipCode;
  }

  getCerts(): string[] {
    return this.certs;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  getLocation(): string {
    return this.state + " " + this.zipCode;
  }

  getPersonData(): string {
    return this.getFullName() + " " + this.phoneNumber;
  }
  wageCalc(): string {
    if (this.hours) {
      this.hours = this.hours;
    } else {
      this.hours = 40;
    }
    let weeklyWage = this.hourlyWage * this.hours;

    return (
      "My name is " +
      this.getFullName +
      ", and I make $" +
      weeklyWage +
      " weekly"
    );
  }

  addCerts(...certs: string[]): void {
    for (let cert in certs) {
      certs.push(cert);
    }
    this.certs = certs;
  }
  static createEmployee(options: EmployeeOptions): Employee {
    return new Employee(options.firstName, options.lastName);
  }
}
let cardelia = new Employee(
  "Cardelia",
  "Burton",
  "NC",
  "Sales",
  62,
  9807134486,
  28215
);
let dexter = new Employee(
  "Dexter",
  "Thompson",
  "NC",
  "Scientist",
  64,
  7045668130,
  28215
);
let ivana = new Employee(
  "Ivana",
  "Burton-Thompson",
  "NC",
  "Medic",
  23,
  7047772524,
  28227
);

document.getElementById("para2").innerHTML = cardelia.getFullName();
document.getElementById("para3").innerHTML = dexter.getLocation();
document.getElementById("para4").innerHTML = ivana.wageCalc();
document.getElementById("para5").innerHTML = Employee.createEmployee({
  firstName: "Robert",
  lastName: "Freeman Jr",
}).getFullName();
