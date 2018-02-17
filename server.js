var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;


var config = {
    user: 'subhashverma446',
    database: 'subhashverma446',
    host: 'db.imad.hasura-app.io',
    
    port: '5432',
    password: process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));
 
var articles = {
    'article-one': {
        
        title: 'article one subhash verma',
        heading:'article one',
        date:'august august 23',
        content:`
        <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>`
        
    },
    'article-two':{
         title: 'article two subhash verma',
        heading:'article two',
        date:'august august 23',
        content:`
        <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>`
        
    },
    'article-three':{
        title: 'article three subhash verma',
        heading:'article three',
        date:'august 23',
        content:`
        <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>
      <p>
    this is d content. this is d content. this is d content. this is d content. this is d content. this is d content.
      </p>`
        
        }
};
function createTemplate (data) {
    
    var title = data.title;
    
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
      <head>
        <title>
          ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />

      </head>
      <body>
          <div class="container">
                <div>
                  <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                ${heading}
                </h3>
                <div>
                ${date}
                </div>
                <div>
                ${content}
                </div>
          </div>
      </body>
      
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
