const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser')
// const crypto = require('crypto');
// const mailer = require('mail')

const port = 3000;
// var path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extends:false}))
require('./src/controllers/authController')(app);
require('./src/controllers/projectController')(app);












// esquecer senha basico

// app.post('/esqueceu-senha',(req, res) => {
//   const {email} = req.body;

//   try {
//   const user = await user.findOne({ email});

//    if (!user)
//      res.status(400).send( { error: 'Erro, tente novamente'});

//    const token = crypto.randomBytes(15).toString('hex');
    
//    const now = new Date();
//    now.setHours(now.getHours() + 1);

//    await user.findByidAndUpdate(user.id, {
//     $set: {
//       passwordResetToken: token,
//       passwaordResetExpires: now,
//     }
//    });

//  } catch (err) {
//     res.status(400).send( { error: 'Erro, tente novamente'});
//   }

// });


// //Enviar email estrutura basica (Falta configurar)

// mailer.sendMail({
//   to: email,
//   from: '************',
//   template: '*****',
//   context:  {token },
//  }), (err) => {
//   if (err)
//    return res.status(400).send( { error: 'Erro, tente novamente'});
//    return res.send();
// }

// //resetar senha basico

// app.post('/esqueceu-senha',(req, res) => {
//   const { email, token, password} = req.body;

//  try {
//   const user = await user.findOne({ email})
//    .select('+passwordResetToken passwordResetExpires');

//   if (!user)
//    res.status(400).send( { error: 'Erro, tente novamente'});

//   if (token !== user.passwordResetToken)
//    return res.status(400).send( { error: 'Erro, tente novamente'});

//   const now = new Date();

//   if(now > user.passwaordResetExpires) 
//   return res.status(400).send( { error: 'Erro, tente novamente'});


//   user.password = password;

//   res.send();

//  } catch (err) {
//     res.status(400).send( { error: 'Erro, tente novamente'});
//   }
// })

//Api de search ***TROCAR VALORES QUANDO O BANCO DE DADOS ESTIER PRONTO***


app.get("/search/:key",async (req,resp)=>{
  let data = await Quiz.find(
      {
          "$or":[
              {Nome:{$regex:req.params.key}},
              {ID:{$regex:req.params.key}}
          ]
      }
      )
      resp.send(data);
  })



// var login = "admin";
// var password = "123456"

// app.use(session({secret: 'chavealeatoria'}))
// app.use(bodyParser.urlencoded({extended:true}));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use('/public', express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, '/views'));

// app.post('/',(req, res)=>{

//   if(req.body.password == password && req.body.login == login){
//     //Logado com sucesso!
//     req.session.login = login;
//     res.render('logado',{login: login});
//   }else{
//     res.render('index');
//   }
// })

// app.get('/', (req, res)=>{
//   if(req.session.login){  //Se existir o login, será redirecionado para uma página de logado
//     req.render('logado', {login: login});
//     // console.log('O meu usuário logado é: '+  req.session.login);
//   }else{  //Caso não exista será redirecionado para o index inicial
//     res.render('index');
//   }
// })





app.listen(port, ()=>{
  console.log('servidor rodando');
})
