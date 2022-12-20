import { questions } from './data.js';

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = '';

function renderQuestion() {
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * (100 / 12) + '%';
}

function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
  }
  const question = questions[currentNumber];
  mbti += question.choices[choiceNumber].value;
  currentNumber += 1;
  renderQuestion();
}

function findMbti(word) {
  const text = mbti;
  let count = 0;
  let searchChar = word;
  let pos = text.indexOf(searchChar);

  while (pos !== -1) {
    count++;
    pos = text.indexOf(searchChar, pos + 1);
  }

  return count;
}

function showResultPage() {
  let finalMbti = '';

  findMbti('i') > findMbti('e') ? (finalMbti += 'i') : (finalMbti += 'e');
  findMbti('n') > findMbti('s') ? (finalMbti += 'n') : (finalMbti += 's');
  findMbti('f') > findMbti('t') ? (finalMbti += 'f') : (finalMbti += 't');
  findMbti('p') > findMbti('j') ? (finalMbti += 'p') : (finalMbti += 'j');

  location.href = '/results.html?mbti=' + finalMbti;

  // location.href = '/results.html?mbti=' + mbti; // query string
}

choice1El.addEventListener('click', () => nextQuestion(0));
choice2El.addEventListener('click', () => nextQuestion(1));

renderQuestion();
