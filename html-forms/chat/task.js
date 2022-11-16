class Chat {
    constructor(container) {
        this.container = container;
        this.input = container.querySelector('.chat-widget__input');
        this.chatWidgetMessages = container.querySelector('.chat-widget__messages');
        this.chatWidgetMessagesContainer = container.querySelector('.chat-widget__messages-container')
        this.openChat();
        this.closeChat();
        this.showMessage()
    }

    openChat() {
         this.container.addE
         this.container.addEventListener('click',()=> {
            if(!this.container.classList.contains('chat-widget_active')) {
                this.container.classList.add('chat-widget_active');
                this.createTimet();
            } 
        });
    }

    closeChat() {
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.chat-widget')){
                this.container.classList.remove('chat-widget_active');
            }
        })
    }

    showMessage() {
        this.container.addEventListener('keyup', e => {
            if(e.key ==='Enter') {
                if(this.input.value) {
                    this.chatWidgetMessages.innerHTML += `<div class="message message_client"><div class="message__time">${this.getCurrentTime()}</div><div class="message__text">${this.input.value}</div></div>`;
                    this.input.value = '';
                    this.showMessageBot(this.getBotChat());
                    if(this.interval) {
                        clearInterval(this.interval);
                    };
                    this.createTimet();
                    this.getScroll()
                }                
            }
        })        
    }

    showMessageBot(text) {
        this.chatWidgetMessages.innerHTML += `<div class="message"><div class="message__time">${this.getCurrentTime()}</div><div class="message__text">${text}</div></div>`
    }
   
    getBotChat() {
        const chatBot = [
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
        ]
        let index = Math.floor(Math.random() * chatBot.length);
        return chatBot[index];
    }

    getCurrentTime() {
        const currentdate = new Date(); 
        const datetime = currentdate.getHours() + ":"  + currentdate.getMinutes()
        return datetime;
    }

    createTimet() {
        let timer = 30;
        this.interval = setInterval(() => {
            if(timer === 0) {
                this.showMessageBot('Почему ты не пишешь, пес?') 
                clearInterval(this.interval);
            }
            timer--
        },1000)
        
    }
    //Метод скролла до последнего элемента 
    getScroll() {
        this.chatWidgetMessagesContainer.scrollTop = this.chatWidgetMessagesContainer.scrollHeight;
    }

}

new Chat(document.getElementById('chat-widget'));






