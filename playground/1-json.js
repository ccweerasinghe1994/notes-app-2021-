// import the fs module
const fs = require("fs");

// getting the binary data as the buffer
const jsonBuffer = fs.readFileSync("1-json.json");

// convert the data to string
const jsonString = jsonBuffer.toString();

// convert the data to javascript object
const javascriptObject = JSON.parse(jsonString);

// overidding the previous values
const newObject = {
  ...javascriptObject,
  name: "gagani",
  age: 12,
};

// converting the jsObject to a JSON
const newJsonString = JSON.stringify(newObject);

// Writing the JSON file
fs.writeFileSync("1-json.json", newJsonString);

// printing the output
console.log(newJsonString);
