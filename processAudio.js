import fetch from 'node-fetch';
import fs from 'fs';

export async function process(filePath)
{
const fetchResponse = await fetch(`https://api.symbl.ai/v1/process/audio?`, {
  method: 'post',
  body: fs.createReadStream(filePath),
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    // 'Content-Type': 'audio/mp3',
  }
});

const responseBody = await fetchResponse.json();

console.log(responseBody);
}
// process(filePath)