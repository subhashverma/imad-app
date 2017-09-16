var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;


var config = {
    user: 'subhashverma446',
    database: 'subhashverma446',
    host: 'db.imad.hasura-app.io',
    
    port: '5432',
    password: 'db-subhashverma446-70639'
    
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
    
};
function createtemplate (data){
    
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmltemplate = `<html>
  <head>
    <title>
      ${title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
    <style>
        
    </style>
  </head>
  <body>
      <div class="container">
      
    <div>
      <a href="/">home</a>
      
    
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
  
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);

app.get('/test-db',function(req,res){
    // make a select request
    // return a response with the result
     pool.query('SELECT * FROM test',function(err,result){
       if(err)  {
           res.status(500).send(err.toString());
       }else{
       res.send(JSON.stringify(result.rows));
       }  
     });
});

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req,res){ //URL:/submit-name=xxxxx
    // get the name from request 
    var name = req.query.name;
    
    names.push(name);
    // json = java script object notation
    
    res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function (req, res) {
    //articlename = article-one
    //articles[articlename] = {}  content object for article-one
    
    // SELECT * FROM article WHERE title = 'article-one'
    pool.query("SELECT * FROM article WHERE title = '" + req.params.articleName + "'", function(err,result){
       if (err){
           res.status(500).send(err.toString());
           } else
           {
               if(res.rows.length === 0){
                   res.status(404).send('Article not found');
                   
               }else{
                   var articleData = result.rows[0];
                   res.send(createtemplate(articleData));
               }
           }
       
    });
    
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
