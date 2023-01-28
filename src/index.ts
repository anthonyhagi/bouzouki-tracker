import inquirer from "inquirer";
// const questions = [{}];

const main = async () => {
  const answers = await inquirer.prompt([
    {
      name: "Select",
      type: "list",
      message: "Please select an answer: ",
      choices: ["One", "two", "three"],
    },
  ]);

  console.dir(answers);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error: unknown) => {
    console.error(error);

    process.exit(1);
  });
