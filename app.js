const yargs = require("yargs");

// we can specify the version using args
yargs.version("1.0.23");

// add command

yargs.command({
  command: "add",
  describe: "this will add notes to the appllication",
  handler: () => console.log("adding notes"),
});

// remove command

yargs.command({
  command: "remove",
  describe: "removing notes from the application",
  handler: () => console.log("removing notes"),
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
  handler: () => console.log("listong all the notes"),
});

console.log(yargs.argv);
