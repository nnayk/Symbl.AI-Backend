import fetch from 'node-fetch';
import { process } from './processAudio.js'

const filePath = 'speech.mp3';


const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY1Nzc3MDM3NTgwNjk3NjAiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoidjhvWTRwMkdmQ1U3eEZJNzVJR0k5NGZhU1FGNHU0Y0hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNTc2MDEyLCJleHAiOjE2NjE2NjI0MTIsImF6cCI6InY4b1k0cDJHZkNVN3hGSTc1SUdJOTRmYVNRRjR1NGNIIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.KOu9zkUtCfP7QpJitr9HdOVhL2MdHMvhOKR9969RI18yWZ1XMO0uPAumotDlIl0QotukLKsTzE0KCelXLfOy7hH-NmEVR7SXCZdr9VdEuCk4Ig6PCtlnwqdoT6DvV9_sKWLrCPbKqsIG1divYtM5FdgDgovwg-vHveTSbDwzu6o0rnUTOCubgCk7zaoFK0RrQEFuepxPeMZ5VYIHXSwfHzMepkQDeQcH50j-WVZhzgjl5sdc_Tn_Sf_kLLVrPScHq-4uYIqyDbUQ73KFKYAkbrFE5_cwF8JdCvuxv1CVpSk-4cq3N7wiLwNm1P8QOlz3z2ZiBKdAOuf97tTQShHLzQ'
const conversationId = '5096896142508032';

async function getTranscript()
{
  let tData=[]
const fetchResponse = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages?sentiment=true`, {
  method: 'get',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const responseBody = await fetchResponse.json();
const rawSummary = responseBody['messages']
for (const val of rawSummary)
{
  tData.push(val['text'])
}

console.log(tData.join('\n'))

return tData

}



async function summary()
{
let sumData = []
const fetchResponse = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/summary`, {
  method: 'get',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const rawSummary = responseBody['summary']
for (const val of rawSummary)
{
  sumData.push(val['text'])
}

console.log(sumData.join('\n'))

return sumData
}

async function topics()
{
  let tData=[]
  const fetchResponse = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/topics?sentiment=true&parentRefs=true`, {
  method: 'get',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const rawSummary = responseBody['topics']
for (const val of rawSummary)
{
  tData.push(val['text'])
}

console.log(tData.join('\n'))

return tData
}

async function questions()
{
  let qData=[]
  const fetchResponse = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/questions`, {
  method: 'get',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const responseBody = await fetchResponse.json();

// const rawData = JSON.stringify(responseBody2, null, 2);
console.log(responseBody)
// console.log("YELAY")
// console.log(typeof responseBody2)
// console.log(responseBody2['summary']['text'])
const rawSummary = responseBody['questions']
for (const val of rawSummary)
{
  qData.push(val['text'])
}

console.log(qData.join('\n'))

return qData
}

async function analytics()
{
  let aData = []
  const fetchResponse = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/analytics`, {
  method: 'get',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const responseBody = await fetchResponse.json();

return responseBody
}
}

async function actionItems()
{
  let atData=[]
  const fetchResponse = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/action-items`, {
  method: 'get',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const responseBody = await fetchResponse.json();

console.log(responseBody)

const rawSummary = responseBody['actionItems']
for (const val of rawSummary)
{
  atData.push(val['text'])
}

console.log(atData.join('\n'))

return atData
}

async function getWPM()
{
  let metrics = await analytics()
  return metrics['members'][0]['pace']['wpm']
}

async function getTalkTime()
{
  let metrics = await analytics()
  return metrics['metrics'][1]['seconds'] 
}

async function getSilenceTime()
{
  let metrics = await analytics()
  return metrics['metrics'][0]['seconds'] 
}

// transcript()
// summary()
// topics()
// questions()
// analytics()
// actionItems()
getWPM().then((val)=>console.log(val))
getTalkTime().then((val)=>console.log(val))
getSilenceTime().then((val)=>console.log(val))

