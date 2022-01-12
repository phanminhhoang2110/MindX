import Questions from "./Questions.js";

class App {
    activeScreen;
    container;

    constructor(container){
        this.container = container;
        const questions = new Questions();
        this.setActiveScreen(questions)
    }

    setActiveScreen(screen){
        if(this.activeScreen != undefined){
            this.container.innerHTML = "";
        }
        this.activeScreen = screen;
        this.activeScreen.render(this.container)
    }
}


const appContainer = document.getElementById('app');
const app = new App(appContainer)

export default app;
