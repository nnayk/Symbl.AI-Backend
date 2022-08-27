import request from 'request';

const options = {
  method: 'POST',
  url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '575506426fmsh01fe650ed825257p188688jsne505a83f06c2',
    'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com',
    useQueryString: true
  },
  form: {language: 'en-US', text: 'My name Jeff.'}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});