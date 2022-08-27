// import fetch from 'node-fetch';
// // import { process } from './processAudio.js'

// // const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY1Nzc3MDM3NTgwNjk3NjAiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoidjhvWTRwMkdmQ1U3eEZJNzVJR0k5NGZhU1FGNHU0Y0hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxMzkyNjczLCJleHAiOjE2NjE0NzkwNzMsImF6cCI6InY4b1k0cDJHZkNVN3hGSTc1SUdJOTRmYVNRRjR1NGNIIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.DY1PDmQNx94UgT3eLPA-GT8fhZm5PoxNnaRzpEEf6hWEn5G1Tn0lbl50M_0VCYMOgJhqU9a3c-DMvug7l1cFlgJagWfAXoc9u5V_QGoF577_u5rYzb6mriX1x19Xfel2xj_d6Ec3seJTFzWZXTUP92-hS7eNoh3m-jlGbKhi-_zKqQMDorXxz6CaQc8LH7pvEt0ROXsFD4pLKQMNlR0ftuYW1Ds3Ji9gmqDhbGuPUjZv3EN3cALPzHrbXWinkCUxSQinKOXMJA-MiM3-GN9vraIxpVwtdtBq4EWKR9i5QgV-4EXiuRi8HA-15Vf2DtxDCizhT607HFXmd660c2WIRQ';
// const filePath = 'speech.mp3';
// // process(filePath);

// // const analytics = await fetch('https://api.symbl.ai/v1/conversations/{5548705225637888}/analytics')
// // console.log(analytics)
// const fetchResponse = await fetch('https://api.sapling.ai/api/v1/edits', {
// //   'method': 'post',
//   'key':'F0B9UO1LXR96VQU06B56SF2TRO74D4JA',
//   'text':'Hi my name Jeff',
// //   session_id="Test Document UUID"
//   });

// console.log(fetchResponse)


import { Client } from "@saplingai/sapling-js/client";

const apiKey = '<API_KEY>';
const client = new Client('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY1Nzc3MDM3NTgwNjk3NjAiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoidjhvWTRwMkdmQ1U3eEZJNzVJR0k5NGZhU1FGNHU0Y0hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxMzkyNjczLCJleHAiOjE2NjE0NzkwNzMsImF6cCI6InY4b1k0cDJHZkNVN3hGSTc1SUdJOTRmYVNRRjR1NGNIIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.DY1PDmQNx94UgT3eLPA-GT8fhZm5PoxNnaRzpEEf6hWEn5G1Tn0lbl50M_0VCYMOgJhqU9a3c-DMvug7l1cFlgJagWfAXoc9u5V_QGoF577_u5rYzb6mriX1x19Xfel2xj_d6Ec3seJTFzWZXTUP92-hS7eNoh3m-jlGbKhi-_zKqQMDorXxz6CaQc8LH7pvEt0ROXsFD4pLKQMNlR0ftuYW1Ds3Ji9gmqDhbGuPUjZv3EN3cALPzHrbXWinkCUxSQinKOXMJA-MiM3-GN9vraIxpVwtdtBq4EWKR9i5QgV-4EXiuRi8HA-15Vf2DtxDCizhT607HFXmd660c2WIRQ');
client
  .edits('Lets get started!')
  .then(function (response) {
    console.log(response.data);
  })
