import fetch from 'node-fetch';

const appId='76386f5934703247664355377846493735494749393466615351463475346348'
const appSecret='3644566736594266494549616f32535a5f796845414b47396c4d6172514a31542d78746f7339426c3051324b726e345436364d5a6c7034717a7555366f4a386d'

async function generateToken()
{
const fetchResponse = await fetch('https://api.symbl.ai/oauth2/token:generate', {
  method: 'post',
  headers: {
    'Content-Type': "application/json",
  },
  body: JSON.stringify({
    type: 'application',
    appId: appId,
    appSecret: appSecret
  })
});

const responseBody = await fetchResponse.json();

console.log(responseBody);
}

generateToken()