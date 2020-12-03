const lessons = [
    {
        name: 'General OOP',
        questions: [{
            type: 'Multiple choice where only one answer is correct',
            text: 'What OOP stands for?',
            score: 20,
            answers: [
                {
                    text: 'Object Oriented Programming',
                    isCorrect: true
                }, 
                {
                    text: 'Ornamental Orientation Protocol',
                    isCorrect: false
                }
            ]
        }]
    },
    {
        name: 'General Algorithms',
        questions: [{
            type: 'Multiple choice where only one answer is correct',
            text: 'What is an algorithm?',
            score: 10,
            answers: [
                {
                    text: 'A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.',
                    isCorrect: true
                }, 
                {
                    text: 'Tool to build houses',
                    isCorrect: false
                }
            ]
        }]
    }
]

module.exports = lessons