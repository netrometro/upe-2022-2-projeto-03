const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')

const port = 3000;
var path = require('path');
const app = express();

app.use(express.json());

const cadastros = [];

// cadastro de usuario temporario - sem BD

app.post('/cadastros',(req, res) =>
{
  const {user} = req.body;
  const {password} = req.body;
  const {email} = req.body;
  const {nickname} = req.body;
  cadastros.push(user,password,email,nickname);

  return res.json(cadastros);

})




var login = "admin";
var password = "123456"

app.use(session({secret: 'chavealeatoria'}))
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/',(req, res)=>{

  if(req.body.password == password && req.body.login == login){
    //Logado com sucesso!
    req.session.login = login;
    res.render('logado',{login: login});
  }else{
    res.render('index');
  }
})

app.get('/', (req, res)=>{
  if(req.session.login){  //Se existir o login, será redirecionado para uma página de logado
    req.render('logado', {login: login});
    // console.log('O meu usuário logado é: '+  req.session.login);
  }else{  //Caso não exista será redirecionado para o index inicial
    res.render('index');
  }
})





app.listen(port, ()=>{
  console.log('servidor rodando');
})
