export default class Answer {
    container;
    constructor(content, isTrue){
        this.container = document.createElement('div');

        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'border-solid bg-blue-300 border-2 my-1 mx-5')
        contentDiv.innerHTML = content;

        this.container.appendChild(contentDiv);
        if(isTrue){
            this.container.addEventListener('click',this.isTrueAnswer)
        }else{
            this.container.addEventListener('click', this.isFailAnswer)
        }
    }

    isTrueAnswer(e){
        alert('Đáp án đúng! Bạn đã được 10 điểm')
    }

    isFailAnswer(e){
        alert('Đáp án sai! Bạn đuọc 0 điểm')
    }

    render(container){
        container.appendChild(this.container)
    }
}