const mongoose = require('mongoose');

const QuizzSchema = new mongoose.Schema({
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