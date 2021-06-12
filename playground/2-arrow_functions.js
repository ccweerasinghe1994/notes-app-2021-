// regular function
const square = function (x) {
  return x * x;
};

// basic arrow function

const squareBasicArrow = (x) => {
  return x * x;
};

// simplified arrow function

const simplifiedArrowFunction = (x) => x * x;

// let's define an object
// and use the basic function inside
const newEvent = {
  name: "birthday",
  printGuestlist: function () {
    console.log("guest list for " + this.name);
  },
};

// let's define an object
// and use the arrow function inside
const newEvent2 = {
  name: "birthday",
  printGuestlist: () => {
    console.log("guest list for " + this.name);
  },
};

// let's define an object
// and use regular more concise function inside
const newEvent3 = {
  name: "birthday",
  printGuestlist() {
    console.log("guest list for " + this.name);
  },
};

// let's define an object
// let's add more functions inside
const newEvent4 = {
  name: "birthday",
  guestList: ["chamara", "gagani", "shan"],
  printGuestlist() {
    console.log("guest list for " + this.name);
    const that = this;
    this.guestList.forEach(function (guest) {
      console.log(guest + "  is attending " + that.name);
    });
  },
};

// let's define an object
// let's add more functions inside
// let's use arrow function insted
const newEvent5 = {
  name: "birthday",
  guestList: ["chamara", "gagani", "shan"],
  printGuestlist() {
    console.log("guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + "  is attending " + this.name);
    });
  },
};

newEvent5.printGuestlist();
