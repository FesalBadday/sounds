"use strict";
// import sounds module
import { sounds } from './sounds.mjs';

// forEach to bulid the btns from the sounds array
sounds.forEach(sound => {
  document.querySelector('section').innerHTML +=
    `<button class="${sound.color}" value="${sound.value}">${sound.name}</button>`;
});

// select all btns and add click event
document.querySelectorAll('button').forEach(btn => {
  // get audio based on btn value
  const audio = new Audio(`sounds/${btn.value}.mp3`);

  btn.addEventListener("click", () => {

    if (audio.paused) { // play
      audio.play();
    } else { // pause
      audio.pause();
      audio.currentTime = 0;
    }

  });
});