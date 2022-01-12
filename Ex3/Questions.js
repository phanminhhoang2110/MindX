import Answer from './Answer.js';
export default class Questions {
    questionList;
    container
    questionDiv;
    answersListDiv;
    constructor(){
        this.setupData()
        this.setupScreen(this.questionList);
    }

    async setupData(){
        // await axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
        // .then((data) => {
        //     this.questionList = data.data.results;
        // })
        // .catch(()=>[])
        const data = [
            {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
            "correct_answer": "Nico Rosberg",
            "incorrect_answers": [
            "Lewis Hamilton",
            "Max Verstappen",
            "Kimi Raikkonen"
            ]
            },
            {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which boxer was banned for taking a bite out of Evander Holyfield&#039;s ear in 1997?",
            "correct_answer": "Mike Tyson",
            "incorrect_answers": [
            "Roy Jones Jr.",
            "Evander Holyfield",
            "Lennox Lewis"
            ]
            },
            {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What team did England beat to win in the 1966 World Cup final?",
            "correct_answer": "West Germany",
            "incorrect_answers": [
            "Soviet Union",
            "Portugal",
            "Brazil"
            ]
            },
            {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who did Steven Gerrard win the Champions League with?",
            "correct_answer": "Liverpool",
            "incorrect_answers": [
            "Real Madrid",
            "Chelsea",
            "Man City"
            ]
            },
            {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
            "correct_answer": "1-7",
            "incorrect_answers": [
            "1-5",
            "1-6",
            "2-6"
            ]
            }
            ];
            this.questionList = data;
    }

    setupScreen(questionList){
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'overflow-auto')

        questionList.forEach(question => {
            this.questionDiv = document.createElement('div');
            this.questionDiv.setAttribute('class', 'mt-3 bg-red-300 text-center mx-5 border-double border-2 border-indigo-600')
            this.questionDiv.innerHTML = question.question;
            this.container.appendChild(this.questionDiv)

            question.incorrect_answers.push(question.correct_answer);
            const isAdded = [];
            let index = 0;
            for(let i = 0; i< 4; i++){
                index = this.getRndInteger(0,4);
                while(true){
                    index = this.getRndInteger(0,4);
                    if(isAdded.includes(index) == false || isAdded == []){
                        break
                    }
                }
                isAdded.push(index)
                const answer = new Answer(question.incorrect_answers[index], question.incorrect_answers[index] == question.correct_answer);

                answer.render(this.container);
            }

        });
        
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render(container){
        container.appendChild(this.container);
    }


}