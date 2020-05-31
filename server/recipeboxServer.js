const express = require('express')
const app = express();
const port = 4000;

app.get('/', function(req, res){
	res.send('<h1> Index Page </h1>');
});

app.get('/api/:recipe', function(req, res){
    res.status(200).json(
        {
            name: req.params.recipe,
            cookTime: "10-15min",
            temperature: "400F",
            ingredients: "Sugar, Flower",
            instructions: "Mix the stuff together"
        }
    );
    // res.send('<h1>' + req.params.recipe + '</h1>')
});


app.listen(port, function(err) {
	if (err) { conosle.log('error starting server')}
	console.log('server running on port: ' + port + '!')
});