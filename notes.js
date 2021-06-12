// import fs module
const fs = require("fs");
// importing chalk
const chalk = require("chalk");

// function to add notes
const addNotes = (title, body) => {
  const notes = loadNotes();
  const DuplicateArray = findDuplicate(notes, title);
  if (DuplicateArray.length < 1) {
    const newNotes = JSON.stringify([...notes, { title, body }]);
    writeToNote(newNotes);
    const message = chalk.green("SUCCESS : This Title is added to the notes");
    console.log(message);
  } else {
    const message = chalk.red("ERROR : This Title is taken");
    console.log(message);
  }
};

// function to remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const findNote = findDuplicate(notes, title);
  if (findNote.length > 0) {
    const removedList = notes.filter((note) => note.title !== title);
    const removedListJSON = JSON.stringify(removedList);
    writeToNote(removedListJSON);
    const message = chalk.green("SUCCESS : THIS NOTE IS REMOVED FROM NOTES");
    console.log(message);
  } else {
    const message = chalk.red("ERROR : This NOTE DOESN'T EXIST ON YOUR NOTES");
    console.log(message);
  }
};

// this function will look for duplicate title in the array
const findDuplicate = (notes, title) =>
  notes.filter((note) => note.title === title);

// this function will write the note to the json file
const writeToNote = (notes) => {
  fs.writeFileSync("notes.json", notes);
};

// this function will load previous notes
const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJson = notesBuffer.toString();
    const noteJSObject = JSON.parse(notesJson);
    return noteJSObject;
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNotes,
  removeNote,
};
