import {
  volumeCoffee,
  volumeFireplace,
  volumeForest,
  volumeRain,
} from "./elements.js";

export default function Sound() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  const KitchenTimer = new Audio(
    "../sound/audios_kichen-timer.mp3"
  );

  const bgForest = new Audio(
    "../sound/forest.wav"
  );

  bgForest.volume = volumeForest.value;

  bgForest.loop = true;

  const bgRain = new Audio(
    "../sound/rain.wav"
  );

  bgRain.volume = volumeRain.value;

  bgRain.loop = true;

  const bgCoffee = new Audio(
    "../sound/shop-voices.wav"
  );

  bgCoffee.volume = volumeCoffee.value;

  bgCoffee.loop = true;

  const bgFireplace = new Audio(
    "../sound/fire.wav"
  );

  bgFireplace.volume = volumeFireplace.value;

  bgFireplace.loop = true;

  function pressSound() {
    buttonPressAudio.play();
  }

  function timeOut() {
    KitchenTimer.play();
  }

  return {
    bgForest,
    bgRain,
    bgCoffee,
    bgFireplace,
    pressSound,
    timeOut,
  };
}
