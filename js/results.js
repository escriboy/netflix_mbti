import { results, mbtis } from './data.js';

const mbti = new URLSearchParams(location.search).get('mbti');

const result = results[mbtis[mbti]];

const titleEl = document.querySelector('.page-title');
const characterEl = document.querySelector('.character');
const boxEls = document.querySelectorAll('.box');
const characterTextEl = document.querySelector('.character-text');
const subCharacterEls = document.querySelectorAll('.sub_character');
const subCharacterTextEls = document.querySelectorAll('.sub_character_text');
const pairCharacterEls = document.querySelectorAll('.pair_character');
const pairCharacterTextEls = document.querySelectorAll('.pair_character_text');

titleEl.innerHTML = result.title;
characterTextEl.innerHTML = result.mainCharacter;
// characterEl.src = result.character;
boxEls.forEach((boxEl, index) => {
  boxEl.innerHTML = result.results[index];
});

characterEl.src = `/images/characters/${result.mainCharacter}.png`;

subCharacterEls.forEach((subEl, index) => {
  subEl.src = `/images/characters/${result.subCharacter[index]}.png`;
});

subCharacterTextEls.forEach((subText, index) => {
  subText.innerHTML = result.subCharacter[index];
});

pairCharacterEls.forEach((subEl, index) => {
  subEl.src = `/images/characters/${result.goodChemistry[index]}.png`;
});

pairCharacterTextEls.forEach((pairText, index) => {
  pairText.innerHTML = result.goodChemistry[index];
});
