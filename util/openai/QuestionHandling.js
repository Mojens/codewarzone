import fetch from 'node-fetch';

const askedQuestions = [];

async function createQuestion(language, subject, difficulty) {
  let question;
  do {
    const prompt = {
      prompt: `Suppose you are working on a project in ${language} and you need to do the subject: ${subject} with the ${difficulty} level of complexity. Write a new question that prompts the reader to provide a code snippet that solves this problem. Your question should be specific enough to ensure that the code snippet provided from the user will address the given task.`,
      n: 1,
      stop: 'User:',
      max_tokens: 200,
    };
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(prompt)
    });
    const data = await response.json();
    question = data.choices[0].text.trim();
  } while (askedQuestions.includes(question));
  askedQuestions.push(question);
  return question;
}

async function validateQuestion(question, answer) {
  const prompt = `Question: ${question}\nAnswer: ${answer}\nIs this answer true or false? only answer with true or false.`;

  const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      stop: 'User:',
    })
  });

  const data = await response.json();
  const givenAnswer = data.choices[0].text.trim();

  const correctAnswerPattern = /true|yes/i;
  if (correctAnswerPattern.test(givenAnswer)) {
    return 'Answer is correct!';
  } else {
    return 'Answer is incorrect.';
  }
}




export default {
  createQuestion,
  validateQuestion,
}

