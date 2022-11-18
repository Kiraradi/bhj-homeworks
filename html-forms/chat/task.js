class Chat {
    chatBotAnswers = [
        'Как тебя звать?',
        'И что?',
        'Я не хочу тебе помогать',
        'Не пиши мне ',
        'Почему ты еще тут?',
        'Может ты лучше пойдешь учить JS',
        'Я думал ты будешь умнее',
        'Не надо мне угрожать',
        'Ой все',
        'Давай давай...',
        'Не сегодня пес',
        'Шёл бы ты на MDN',
        'А ты точно программист ',
    ];

    constructor(container) {
        this.container = container;
        this.input = container.querySelector('.chat-widget__input');
        this.chatWidgetMessages = container.querySelector('.chat-widget__messages');
        this.chatWidgetMessagesContainer = container.querySelector('.chat-widget__messages-container');
        this.addToggleEventListener();
        this.showMessage();
    }

    addToggleEventListener() {
        document.addEventListener('click', event => {
            if (!event.target.closest('.chat-widget')) {
                this.container.classList.remove('chat-widget_active');
            }
            else {
                if (!event.target.closest('.chat-widget_active')) {
                    this.container.classList.add('chat-widget_active');
                    this.setWaitingMessage();
                } 
            }
        });
    }


    showMessage() {
        this.container.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                if (this.input.value) {
                    this.addMessage(this.input.value, true);
                    this.input.value = '';
                    this.addMessage(this.getChatBotMessage(), false);
                    if (this.interval) {
                        clearInterval(this.interval);
                    };
                    this.setWaitingMessage();
                    this.scroll();
                }                
            }
        });  
    }

    addMessage(text, isFromClient) {
        this.chatWidgetMessages.innerHTML += `<div class="message ${isFromClient ? 'message_client' : ''}"><div class="message__time">${this.getCurrentTime()}</div><div class="message__text">${text}</div></div>`;
        /*const divElement = document.createElement('div');
        divElement.classList.add('message');

        if (isFromClient) {
            divElement.classList.add('message_client');
        }

        const timeDivElement = document.createElement('div');
        timeDivElement.classList.add('message__time');
        timeDivElement.textContent = this.getCurrentTime();
        divElement.appendChild(timeDivElement);

        const textDivElement = document.createElement('div');
        textDivElement.classList.add('message__text');
        textDivElement.textContent = text;
        divElement.appendChild(textDivElement);

        this.chatWidgetMessages.appendChild(divElement);*/
    }
   
    getChatBotMessage() {
        let index = Math.floor(Math.random() * this.chatBotAnswers.length);
        return this.chatBotAnswers[index];
    }

    getCurrentTime() {
        const currentDate = new Date(); 
        return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    }

    setWaitingMessage() {
        let timer = 30;
        this.interval = setInterval(() => {
            if (timer === 0) {
                this.addMessage('Почему ты не пишешь, пес?', false);
                clearInterval(this.interval);
            }
            timer--;
        }, 1000);
    }

    // Метод скролла до последнего элемента 
    scroll() {
        this.chatWidgetMessagesContainer.scrollTop = this.chatWidgetMessagesContainer.scrollHeight;
    }

}

new Chat(document.getElementById('chat-widget'));






