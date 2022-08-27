import pkg from '@deepgram/sdk';
const {Deepgram} = pkg;
import fs from 'fs';

// The API key you created in step 1
const deepgramApiKey = 'c633a6900ecbdcbb4e0e91d0950932afcdd32dd5';

// Replace with your file path and audio mimetype
const pathToFile = 'fillerWords.mp3';
const mimetype = 'audio/mp3';

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

console.log('Requesting transcript...')
console.log('Your file may take up to a couple minutes to process.')
console.log('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.')
console.log('To learn more about customizing your transcripts check out developers.deepgram.com.')

deepgram.transcription.preRecorded(
  { buffer: fs.readFileSync(pathToFile), mimetype },
  { punctuate: true, language: 'en', model: 'general-enhanced' },
)
.then((transcription) => {
  console.dir(transcription, {depth: null});
})
.catch((err) => {
  console.log(err);
});