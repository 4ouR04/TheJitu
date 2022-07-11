let text = "Amos is a resilient programmer";
let speech = new SpeechSynthesisUtterance();

const textToSpeech = () => {
  speech.text = text;
  speech.rate = 1;
  speech.volume = 3;
  speech.pitch = 1;
  speech.lang = "en-US";
  speechSynthesis.speak(speech);
};

textToSpeech();
