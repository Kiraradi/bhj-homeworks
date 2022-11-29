class Survey{
    constructor(container){
        this.pollTitle = container.querySelector('#poll__title');
        this.pollAnswers = container.querySelector('#poll__answers');
        this.getQuestions();
    }

    getQuestions() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            const currencyData = JSON.parse(xhr.responseText);
            this.displayQuestion(currencyData.data.title, currencyData.data.answers, currencyData.id);
        }
        })
        
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhr.send(); 
    }

    displayQuestion(question, answers, id) {
        this.pollTitle.textContent = question; 
        for(let i = 0; i < answers.length; i++) {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = answers[i];
            this.pollAnswers.insertAdjacentElement('beforeend', button);
            button.addEventListener('click', el => {
                alert('Спасибо за ответ');
                this.getResponseStatistics(id, i);
                //location.reload()
            })    
        }    
    }

    getResponseStatistics(id, index) {
        const xhr = new XMLHttpRequest;
        xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
        xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
        xhr.send( `vote=${id}&answer=${index}`);
        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === xhr.DONE) {
                const currencyData = JSON.parse(xhr.responseText);
                this.displayResponseStatistics(currencyData.stat);
            }
        }) 
    }

    displayResponseStatistics(arr) {
        this.pollAnswers.textContent = '';
        console.log(arr);
        arr.forEach(el => {
            const statistics = document.createElement('div');
            const percentageOfVotes = this.calculateThePercentageOfResponses(arr,el.votes )
            statistics.innerHTML =`<div>${el.answer}:${percentageOfVotes}%</div> `;
            this.pollAnswers.insertAdjacentElement('beforeend', statistics);
        })
        
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = 'reset';
        this.pollAnswers.insertAdjacentElement('beforeend', button);
        button.addEventListener('click', () => {
            location.reload();
        })
    }


    calculateThePercentageOfResponses(arr, votes) {
        let totalResponses = 0;
        arr.forEach(e => totalResponses += e.votes);
        return (votes / (totalResponses / 100)).toFixed(2);
    }
}

new Survey(document.querySelector('.content'));