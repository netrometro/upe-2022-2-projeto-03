const { default: mongoose } = require('mongoose');
const moongose = require('../database');

const QuizzSchema = new moongose.Schema({
  questions:[
    {
      questionDescription: "",
      options:[
        {
          description: "",
          isRight: false,          
        }
      ],
      correctAnswer: "",      
    }
  ]
})

const Quizz = mongoose.model('quizz', QuizzSchema)

module.exports = Quizz;