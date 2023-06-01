const express = require("express")
const app = express();

app.get('/', (req, res) => {        
    res.send("I'm testing CI/CD with this web app, i hope this works");
}); 

app.get('/jake', (req, res) => {
    res.send("Hello Jake");
});

app.get('/testing', (req, res) => {
    res.send("Hi test, i am server");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080')
});
