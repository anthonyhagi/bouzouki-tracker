import promptSync from "prompt-sync";
import { z } from "zod";

const prompt = promptSync({ sigint: true });

const schema = z.string();

/**
 * The master switch whether to continue running the app.
 */
let runProgram = true;

const main = async () => {
  while (runProgram) {
    const command = prompt("What would you like to do? ");

    if (command === "q" || command === "quit") {
      runProgram = false;
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
