import readline from 'readline';

const getInterface = () => readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string) => new Promise((resolve) => {
  const rl = getInterface();
  rl.question(question, (answer) => {
    rl.close();
    resolve(answer);
  });
});

const main = async () => {
  while (true) {
    const name = await askQuestion('What is your name? ');
    console.log(`Hello ${name}!`);
    if (name === 'done') {
      console.log('Exiting...');
      break;
    }
  }
}

main();