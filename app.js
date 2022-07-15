const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const https = require('https');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  

    const apiKey = "bnarl45f693e0soi9pmeu153hcbw7v8rvhq72qsmavvdwda2w";
    const url = "https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key="+apiKey;


    https.get(url, function(response) {
        console.log(response.statusCode)


        //JSON response
        response.on("data", function(data) {
            const myWord = JSON.parse(data);
            const word = myWord.word;
            const definitions = myWord.definitions[0].text;
            const partOfSpeech = myWord.definitions[0].partOfSpeech;

            console.log(word);
            console.log(definitions);
            console.log(partOfSpeech);

            res.write("<p style = text-align:center>Word of the day</p>")
            res.write("<h1 style = text-align:center> Word: " +word +"</h1>")
            res.write("<h1 style = text-align:center> Part of Speech: " +partOfSpeech +"</h1>")
            res.write("<h1 style = text-align:center Difinition:> "+definitions+ "</h1>")
            

            res.send();
        })
    })
})





app.listen(3000, function(){
    console.log('listening on port 3000');
})