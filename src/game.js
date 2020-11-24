import Bird from "./bird";
import Level from "./level";

export default class Game {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {
            width: canvas.width,
            height: canvas.height
        };
        this.level = null;
        this.bird = null;
        this.running = false;
        this.score = 0;
        this.addEvents();
        this.restart();
        //run title screen until press start --> char select
    }

    titleScreen(){
        //runs title screen animation, starting game goes to character selection screen
        
        //run pipe animation until start button clicked
    }

    characterSelectionScreen(){
        //presents character selection, initializes bird object and calls startGame

        //show char selection, selected char attributes loaded into bird instance
            //send bird attributes to startGame
            //call addEvents (flap listener lol)
    }

    startGame(){
        //starts game by setting running status and calling restart

        //initializes bird, level, running, score
            //basically the current restart()
    }

    endGameScreen(){
        //presents end game screen and options to try again or choose character

        //called when gameOver
        //presents score, high score, options
            //Restart
                //call start game w/ current bird details --> getBirdAttributes()
            //change character
                //call characterSelectionScreen()
    }

    click(){
        //clicking makes bird fly up, or starts the game if not running
        if (!this.running) this.play();
        this.bird.flap();
    }

    addEvents(){
        //add events to canvas
        this.ctx.canvas.addEventListener("mousedown", () => this.click());  //mousedown calls click()
    }

    drawScore() {
        //draws the score at the top of the canvas
        const currentScore = document.querySelector(".show-score");
        currentScore.innerHTML = this.score;
    }

    restart(){
        //reset the level, bird, running status, then call animate
        this.level = new Level(this.dimensions);
        this.bird = new Bird(this.dimensions);
        this.score = 0;
        this.running = false;
        this.animate();
    }

    play(){
        //begin playing game, set running status and start animation
        this.running = true;
        this.animate();
    }

    gameOver(){
        //returns true if bird collides with pipe
        return this.level.collidesWith(this.bird.getBounds());
    }

    animate(){
        //creates images on canvas while the game is running
        this.level.animate(this.ctx);
        this.bird.animate(this.ctx);

        //check for collisions, end game if bird hits pipe
        if (this.gameOver()){
            this.restart();
        }

        //update and draw score
        this.level.updateScore(this.bird.getBounds(), () => this.score++ );
        this.drawScore();

        if (this.running) requestAnimationFrame(() => this.animate());
    }

}