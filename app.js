const yargs = require("yargs");
// importing notes functions
const { addNotes, removeNote, listNotes } = require("./notes");
// we can specify the version using args
yargs.version("1.0.23");

// add command

yargs.command({
  command: "add",
  describe: "this will add notes to the appllication",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: "true",
      type: "string",
    },
  },
  handler: ({ title, body }) => addNotes(title, body),
});

// remove command

yargs.command({
  command: "remove",
  describe: "removing notes from the application",
  builder: {
    title: {
      describe: "note title",
      demandOption: "true",
      type: "string",
    },
  },
  handler: ({ title }) => removeNote(title),
});

// read notes

yargs.command({
  command: "read",
  describe: "reading a note from the application",
  handler: () => console.log("reading a note"),
});

// list notes

yargs.command({
  command: "list",
  describe: "listing all the notes from the application",
  handler: () => listNotes(),
});

yargs.parse();
