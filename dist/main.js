/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/character_info.js":
/*!*******************************!*\
  !*** ./src/character_info.js ***!
  \*******************************/
/*! exports provided: createCharacterMenu, getCharDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCharacterMenu\", function() { return createCharacterMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCharDetails\", function() { return getCharDetails; });\n//all character names\r\nconst FLAPPY_BIRD = \"flappyBird\";\r\nconst MARIO_FISH = \"marioFish\";\r\nconst NYAN_CAT = \"nyanCat\";\r\nconst ANGRY_BIRD = \"angryBird\";\r\nconst MARIO_CAPE = \"marioCape\";\r\nconst BANANYA_CAT = \"bananyaCat\";\r\n\r\n//all character image info\r\nconst allCharInfo = {\r\n    [FLAPPY_BIRD]: {\r\n        link: \"assets/images/flappyBird.png\",     // 51x36\r\n        width: 51,\r\n        height: 36,\r\n        callback: null\r\n    },\r\n    [MARIO_FISH]: {\r\n        link: \"assets/images/Fish.png\",           // 40x40\r\n        width: 40,\r\n        height: 40,\r\n        callback: null\r\n    },\r\n    [NYAN_CAT]: {\r\n        link: \"assets/images/NyanCat.png\",        // 65x40\r\n        width: 65,\r\n        height: 40,\r\n        callback: (ctx, loc, metaData) => trailRainbow(ctx, loc, metaData)\r\n    },\r\n    [ANGRY_BIRD]: {\r\n        link: \"assets/images/angryBird.png\",      // 50x46\r\n        width: 50,\r\n        height: 46,\r\n        callback: null\r\n    },\r\n    [MARIO_CAPE]: {\r\n        link: \"assets/images/marioCape.png\",      // 56x56\r\n        width: 56,\r\n        height: 56,\r\n        callback: null\r\n    },\r\n    [BANANYA_CAT]: {\r\n        link: \"assets/images/Bananya.png\",        // 32x55\r\n        width: 32,\r\n        height: 55,\r\n        callback: null\r\n    }\r\n}\r\n\r\nconst _getCharImage = imgSource => {\r\n    //creates and returns an image element\r\n    const pic = new Image();\r\n    pic.src = imgSource;\r\n    return pic;\r\n}\r\n\r\n//create array of image elements w/ event listeners\r\nconst createCharacterMenu = (charSelectionBox, callback) => {\r\n    const characterNames = Object.keys(allCharInfo);\r\n    characterNames.forEach( (name, idx) => {\r\n        const charImage = _getCharImage(allCharInfo[name].link);\r\n        charImage.setAttribute(\"id\", `${name}`);\r\n        charImage.addEventListener(\"click\", callback);\r\n        charSelectionBox.appendChild(charImage);\r\n    });\r\n}\r\n\r\n//retrieve individual character details and return as an object\r\nconst getCharDetails = name => {\r\n    return allCharInfo[name];\r\n}\r\n\r\nconst trailRainbow = (ctx, location, pastHeights) => {\r\n    //receives canvas context and player location object\r\n    //draws rainbow trail behind the character image on the canvas\r\n    const [x, y] = location;\r\n    const xStartBuffer = 15;\r\n    let xWalker = x + xStartBuffer;\r\n    \r\n    //callback effects\r\n    const rainbowColors = [\"255,0,0\", \"255,153,0\", \"255,255,0\", \"0,255,0\", \"0,102,255\", \"153,0,255\"];\r\n    const motionTrailLength = 50;\r\n    const colorHeight = 6;\r\n    const colorWidth = 4;\r\n    let opacity = 0;\r\n    let temp = 0;\r\n    \r\n    //maintain array of past heights\r\n    if (pastHeights.length >= motionTrailLength) temp = pastHeights.shift();\r\n    pastHeights.push(y);\r\n\r\n    //draw trail length\r\n    for (let i = pastHeights.length - 1; i >= 0; i--){\r\n        let colorLevel = 0;\r\n        opacity = (i + 1) / motionTrailLength;\r\n        \r\n        //draw all colors in trail slice\r\n        for (let j = 0; j < rainbowColors.length; j++){ \r\n            ctx.beginPath();\r\n            ctx.fillStyle = `rgba(${rainbowColors[j]},${opacity})`;\r\n            ctx.fillRect(xWalker, pastHeights[i] + colorLevel, colorWidth, colorHeight);\r\n            ctx.fill();\r\n            colorLevel += colorHeight;\r\n        }\r\n        xWalker -= colorWidth;\r\n    }\r\n}\r\n\r\nfunction trailJetpack(){\r\n    let yPos = player.y;\r\n    for (let i = 20; i >= 0; i--){\r\n        opacity = ((i + 1)/(40));\r\n        if (player.v <= 0){\r\n            ctx.beginPath();\r\n            ctx.fillStyle = \"rgba(255,102,153, \"+ opacity + \")\";\r\n            ctx.arc(player.x, yPos + (player.pHeight / 2), 7, 0, 2*Math.PI, true);\r\n            ctx.fill();\r\n        }\r\n        yPos += 3;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/character_info.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _character_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character_info */ \"./src/character_info.js\");\n/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbox */ \"./src/toolbox.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(canvas){\r\n        this.tools = new _toolbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        this.ctx = canvas.getContext(\"2d\");\r\n        this.dimensions = {\r\n            width: canvas.width,\r\n            height: canvas.height\r\n        };\r\n        this.level = null;\r\n        this.player = null;\r\n        this.selectedChar = \"\";\r\n        this.running = false;\r\n        this.score = 0;\r\n        this.highScore = 0;\r\n        this.addEvents();\r\n        this.reset();\r\n        this.toggleTitleScreen();\r\n    }\r\n\r\n    _toggleVisibility(element){\r\n        //receives reference to element, toggles visibility\r\n        element.id = (element.id !== \"show\") ? \"show\" : \"no-show\";\r\n    }\r\n\r\n    _showMenu(menuElement, titleElement){\r\n        //receives menu and title elements, toggles background and menu visibility\r\n        const backBoxElement = document.querySelector(\".backBox\");\r\n        [menuElement, titleElement, backBoxElement].forEach( ele => {\r\n            this._toggleVisibility(ele);\r\n        });\r\n    }\r\n\r\n    toggleTitleScreen(){\r\n        //runs title screen animation, starting game goes to character selection screen\r\n        this._toggleVisibility(document.querySelector(\".startButton\")); //show start button\r\n        \r\n        //run pipe animation until start button clicked\r\n    }\r\n\r\n    toggleCharacterSelectionScreen(){\r\n        //presents character selection, initializes player object and calls startGame\r\n        const charSelection = document.querySelector(\".charSelection\");\r\n        const menuTitle = document.querySelector(\".menuTitle\");\r\n        menuTitle.innerHTML = \"Choose your character!\";\r\n        this._showMenu(charSelection, menuTitle);\r\n    }\r\n\r\n    toggleEndGameScreen(){\r\n        //presents end game screen and options to try again or choose character\r\n        const endScreen = document.querySelector(\".endScreen\");\r\n        const menuTitle = document.querySelector(\".menuTitle\");\r\n        menuTitle.innerHTML = \"GAME OVER\";\r\n        this.showFinalScore();\r\n        this._showMenu(endScreen, menuTitle);\r\n    }\r\n\r\n    handleStartButton(){\r\n        //closes start screen, opens character selection, plays background music\r\n        return (e) => {\r\n            e.preventDefault();\r\n            this._toggleVisibility(document.querySelector(\".startButton\"));\r\n            this.toggleCharacterSelectionScreen();\r\n            this.tools.audio.startMusic();\r\n        }\r\n    }\r\n\r\n    handleSelection(){\r\n        return (e) => {\r\n            e.preventDefault();\r\n            //retrieve selected char details and initialize player instance\r\n            this.selectedChar = e.target.id;\r\n\r\n            //close character selection menu\r\n            this.toggleCharacterSelectionScreen();\r\n\r\n            //start game\r\n            this.play();\r\n        }\r\n    }\r\n\r\n    handleEndScreen(option){\r\n        return (e) => {\r\n            e.preventDefault();\r\n            \r\n            //close end screen menu\r\n            this.toggleEndGameScreen();\r\n\r\n            //redirect based on option chosen\r\n            this.reset();\r\n            if (option === \"restart\"){  //restart with same character\r\n                this.play();\r\n            } else {                    //reselect character\r\n                this.toggleCharacterSelectionScreen();\r\n            }\r\n        }\r\n    }\r\n\r\n    handleCanvasClick(){\r\n        //clicking makes player fly up if game is running\r\n        if (this.running) this.player.flap();\r\n    }\r\n\r\n    addEvents(){\r\n        //adds all event listeners to the appropriate elements\r\n\r\n        //click on canvas makes player fly\r\n        this.ctx.canvas.addEventListener(\"mousedown\", () => this.handleCanvasClick());\r\n\r\n        //start button leads to character selection screen\r\n        const startButton = document.querySelector(\".startButton\");\r\n        startButton.addEventListener(\"click\", this.handleStartButton());\r\n\r\n        //load characters to character selection menu\r\n        const charSelection = document.querySelector(\".charSelection\");\r\n        _character_info__WEBPACK_IMPORTED_MODULE_2__[\"createCharacterMenu\"](charSelection, this.handleSelection());\r\n\r\n        //endscreen buttons, options to restart or choose characer\r\n        const restartButton = document.getElementById(\"restart\");\r\n        restartButton.addEventListener(\"click\", this.handleEndScreen(\"restart\"));\r\n        const changeCharButton = document.getElementById(\"charSelect\");\r\n        changeCharButton.addEventListener(\"click\", this.handleEndScreen(\"charSelect\"));\r\n\r\n        //prevent double clicking from highlighting text\r\n        this.ctx.canvas.onselectstart = () => { return false; };\r\n    }\r\n\r\n    drawScore() {\r\n        //draws the score at the top of the canvas\r\n        const currentScore = document.querySelector(\".show-score\");\r\n        currentScore.innerHTML = this.score;\r\n    }\r\n\r\n    showFinalScore(){\r\n        //adds current score and high score to end game screen\r\n        const currentScoreBox = document.querySelector(\".currentScore\");\r\n        const highScoreBox = document.querySelector(\".highScore\");\r\n\r\n        //get score texts\r\n        const currentScoreText = `Score: ${this.score}`;\r\n        let highScoreText = `Best: ${this.highScore}`;\r\n        if (this.score > this.highScore){\r\n            //update high score\r\n            this.highScore = this.score;\r\n            highScoreText = `[NEW] Best: ${this.highScore}`;\r\n        }\r\n\r\n        //add to box element\r\n        currentScoreBox.innerHTML = currentScoreText;\r\n        highScoreBox.innerHTML = highScoreText;\r\n    }\r\n\r\n    reset(){\r\n        //reset the level, player, running status, then call animate\r\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\r\n        this.player = null;\r\n        this.score = 0;\r\n        this.running = false;\r\n        this.animate();\r\n    }\r\n\r\n    play(){\r\n        //begin playing game: set running status, initializes character, and start animation\r\n        this.running = true;\r\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions, _character_info__WEBPACK_IMPORTED_MODULE_2__[\"getCharDetails\"](this.selectedChar));\r\n        this.animate();\r\n    }\r\n\r\n    gameOver(){\r\n        //returns true if player collides with pipe\r\n        return this.level.collidesWith(this.player.getBounds());\r\n    }\r\n\r\n    animate(){\r\n        //creates images on canvas while the game is running\r\n        if (!this.running) return;\r\n        this.level.animate(this.ctx);\r\n        this.player.animate(this.ctx);\r\n\r\n        //draw fps counter if activated\r\n        if (this.tools.frameCounter.showFPS) this.tools.frameCounter.drawFPS(this.ctx);\r\n\r\n        //check for collisions, end game if player hits pipe\r\n        if (this.gameOver()){\r\n            this.toggleEndGameScreen();\r\n            return;\r\n        }\r\n\r\n        //update and draw score\r\n        this.level.updateScore(this.player.getBounds(), () => this.score++ );\r\n        this.drawScore();\r\n\r\n        //get next animation frame\r\n        requestAnimationFrame(() => this.animate());\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\nconst canvas = document.getElementById('canvas');\r\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\r\n    GAP_HEIGHT: 150,\r\n    PIPE_WIDTH: 50,\r\n    PIPE_SPACING: 220,\r\n    EDGE_BUFFER: 50,\r\n    PIPE_SPEED: 2,\r\n    FOREGROUND_HEIGHT: 30,\r\n    PIPE_IMAGE_HEIGHT: 480\r\n};\r\n\r\nclass Level {\r\n    constructor(dimensions){\r\n        this.dimensions = dimensions;\r\n        this.backgroundImage = this.getImage(\"assets/images/bgDay.png\");  // 600x480\r\n        this.foregroundImage = this.getImage(\"assets/images/fgDay.png\");  // 480x60\r\n        this.topPipeImage = this.getImage(\"assets/images/pipesTop2.png\"); // 52x480\r\n        this.btmPipeImage = this.getImage(\"assets/images/pipesBtm2.png\"); // 52x480\r\n        //pipe images\r\n        const initialSpawn = this.dimensions.width + (60 * CONSTANTS.PIPE_SPEED);\r\n        this.pipes = [\r\n            this.getRandomPipe(initialSpawn),\r\n            this.getRandomPipe(initialSpawn + CONSTANTS.PIPE_SPACING),\r\n            this.getRandomPipe(initialSpawn + 2 * CONSTANTS.PIPE_SPACING)\r\n        ];\r\n        //background scrolling\r\n        this.backgroundX = 0;\r\n    }\r\n\r\n    getImage(link){\r\n        //receives a link to an image asset, returns image element\r\n        const newImage = new Image();\r\n        newImage.src = link;\r\n        return newImage;\r\n    }\r\n\r\n    collidesWith(birdBounds){\r\n        //returns true if bird collides with any pipe, false otherwise\r\n        let hitDetection = false;\r\n        this.pipes.forEach( pipeSet => {\r\n            const topHit = this._overlap(pipeSet.topPipe, birdBounds);\r\n            const bottomHit = this._overlap(pipeSet.bottomPipe, birdBounds);\r\n            if (topHit || bottomHit) hitDetection = true; \r\n        });\r\n\r\n        //if bird hits foreground, return true\r\n        const groundLevel = this.dimensions.height - CONSTANTS.FOREGROUND_HEIGHT;\r\n        if (birdBounds.bottom >= groundLevel) hitDetection = true;\r\n\r\n        return hitDetection;\r\n    }\r\n\r\n    _overlap(box1, box2){\r\n        //returns true if box1 overlaps with box2, false otherwise\r\n        if (box1.left > box2.right || box1.right < box2.left) return false; //no overlap in x direction\r\n        if (box1.top > box2.bottom || box1.bottom < box2.top) return false; //no overlap in y direction\r\n        return true;\r\n    }\r\n\r\n    getRandomPipe(x){\r\n        //receives starting x coord, returns new pipe object\r\n        const heightRange = this.dimensions.height - (2 * CONSTANTS.EDGE_BUFFER) - CONSTANTS.GAP_HEIGHT;\r\n        const gapTop = (Math.random() * heightRange) + CONSTANTS.EDGE_BUFFER;\r\n        const pipe = {\r\n            topPipe: {\r\n                left: x,\r\n                right: x + CONSTANTS.PIPE_WIDTH,\r\n                top: 0,\r\n                bottom: gapTop\r\n            },\r\n            bottomPipe: {\r\n                left: x,\r\n                right: x + CONSTANTS.PIPE_WIDTH,\r\n                top: gapTop + CONSTANTS.GAP_HEIGHT,\r\n                bottom: this.dimensions.height\r\n            },\r\n            passed: false\r\n        };\r\n        return pipe;\r\n    }\r\n\r\n    movePipes(){\r\n        //moves pipes across screen\r\n        this.pipes.forEach ( pipe => {\r\n            pipe.topPipe.left -= CONSTANTS.PIPE_SPEED;\r\n            pipe.topPipe.right -= CONSTANTS.PIPE_SPEED;\r\n            pipe.bottomPipe.left -= CONSTANTS.PIPE_SPEED;\r\n            pipe.bottomPipe.right -= CONSTANTS.PIPE_SPEED;\r\n        });\r\n\r\n        //remove from array when offscreen and add new pipe w/ new gap\r\n        if (this.pipes[0].topPipe.right <= 0){\r\n            this.pipes.shift();\r\n            const nextX = this.pipes[1].topPipe.left + CONSTANTS.PIPE_SPACING;\r\n            this.pipes.push(this.getRandomPipe(nextX));\r\n        }\r\n    }\r\n\r\n    drawPipes(ctx){\r\n        //receives cavnas context, draws pipes onto canvas\r\n        this.pipes.forEach( pipe => {\r\n            ctx.drawImage(                  //draw top pipe image\r\n                this.topPipeImage,          //image\r\n                pipe.topPipe.left,          //left edge of image\r\n                pipe.topPipe.bottom - CONSTANTS.PIPE_IMAGE_HEIGHT, //top edge of image \r\n                CONSTANTS.PIPE_WIDTH,       //image width\r\n                CONSTANTS.PIPE_IMAGE_HEIGHT //image height\r\n            );\r\n            ctx.drawImage(                  //draw bottom pipe image\r\n                this.btmPipeImage,          //image\r\n                pipe.bottomPipe.left,       //left edge of image\r\n                pipe.bottomPipe.top,        //top edge of image\r\n                CONSTANTS.PIPE_WIDTH,       //image width\r\n                CONSTANTS.PIPE_IMAGE_HEIGHT //image height\r\n            );\r\n        })\r\n    }\r\n\r\n    drawBackground(ctx){\r\n        //receives canvas context, draws background twice to maintain infinte scrolling effect\r\n        this.backgroundX--;\r\n        if (Math.abs(this.backgroundX) >= this.dimensions.width) this.backgroundX = 0;\r\n        ctx.drawImage(this.backgroundImage, this.backgroundX, 0);\r\n        ctx.drawImage(this.backgroundImage, this.backgroundX + this.dimensions.width, 0);\r\n    }\r\n\r\n    drawForeground(ctx){\r\n        //receives canvas context, draws foreground\r\n        ctx.drawImage(this.foregroundImage, 0, this.dimensions.height - CONSTANTS.FOREGROUND_HEIGHT);\r\n    }\r\n\r\n    updateScore(birdBounds, addToScore){\r\n        //receives bird hitbox and addToScore function, adds 1 to score if pipe is successfully passed\r\n        this.pipes.forEach( pipeSet => {\r\n            if (pipeSet.topPipe.right < birdBounds.left){\r\n                if (!pipeSet.passed){\r\n                    pipeSet.passed = true;\r\n                    addToScore();\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    animate(ctx){\r\n        //receives canvas context, draws structures in the level\r\n        this.drawBackground(ctx);\r\n\r\n        //update and draw pipes\r\n        this.movePipes();\r\n        this.drawPipes(ctx);\r\n\r\n        //draw foreground\r\n        this.drawForeground(ctx);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nconst CONSTANTS = {\r\n    FLAP_SPEED: 7,\r\n    GRAVITY: 0.4,\r\n    TERMINAL_VELOCITY: 12\r\n};\r\n\r\nclass Player {\r\n    constructor(dimensions, charDetails){\r\n        this.dimensions = dimensions;\r\n        this.image = this.getImage(charDetails.link);\r\n        this.width = charDetails.width;\r\n        this.height = charDetails.height;\r\n        this.x = this.dimensions.width / 3;\r\n        this.y = 0;\r\n        this.velocity = 0;\r\n        this.callback = charDetails.callback;\r\n        this.metaData = []; //general purpose storage helper for character trail callbacks\r\n    }\r\n\r\n    getImage(link){\r\n        //receives image source link, creates and returns an image element\r\n        const charImage = new Image;\r\n        charImage.src = link;\r\n        return charImage;\r\n    }\r\n\r\n    getBounds(){\r\n        //returns an object with the current bounds of the player\r\n        return {\r\n            left: this.x,\r\n            right: this.x + this.width,\r\n            top: this.y,\r\n            bottom: this.y + this.height\r\n        };\r\n    }\r\n\r\n    drawPlayer(ctx){\r\n        //receives canvas context, draws player\r\n        const loc = [this.x, this.y];\r\n        if (this.callback) this.callback(ctx, loc, this.metaData);\r\n        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\r\n    }\r\n\r\n    movePlayer(){\r\n        //updates player velocity and position for each frame\r\n        this.y = Math.max(0, this.y + this.velocity);   //update vertical position, prevent from going above top of canvas\r\n        this.velocity += CONSTANTS.GRAVITY              //update acceleration due to gravity\r\n\r\n        //prevent player from exceeding terminal velocity in positive and negative directions\r\n        if (Math.abs(this.velocity) > CONSTANTS.TERMINAL_VELOCITY){\r\n            if (this.velocity > 0){\r\n                this.velocity = CONSTANTS.TERMINAL_VELOCITY;\r\n            } else {\r\n                this.velocity = -1 * CONSTANTS.TERMINAL_VELOCITY;\r\n            }\r\n        }\r\n    }\r\n\r\n    flap(){\r\n        //adjusts velocity for player to fly up\r\n        this.velocity = -1 * CONSTANTS.FLAP_SPEED;\r\n    }\r\n\r\n    animate(ctx){\r\n        //receives canvas context, animates player movement and physics\r\n        this.movePlayer();\r\n        this.drawPlayer(ctx);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/toolbox.js":
/*!************************!*\
  !*** ./src/toolbox.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbox; });\n/* harmony import */ var _tools_frame_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/frame_counter */ \"./src/tools/frame_counter.js\");\n/* harmony import */ var _tools_game_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/game_audio */ \"./src/tools/game_audio.js\");\n\r\n\r\n\r\nclass Toolbox{\r\n    //contains functions for game tools, such as volume adjust/mute, fps counter, tutorial screen, and more info\r\n    constructor(){\r\n        const toolBoxContainer = document.querySelector(\".toolbox\");\r\n        this.frameCounter = new _tools_frame_counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](toolBoxContainer);\r\n        this.audio = new _tools_game_audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"](toolBoxContainer);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/toolbox.js?");

/***/ }),

/***/ "./src/tools/frame_counter.js":
/*!************************************!*\
  !*** ./src/tools/frame_counter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FrameCounter; });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/tools/utility.js\");\n\r\n\r\nconst CONSTANTS = {\r\n    NAME: \"FPS\",\r\n    FPS_CORNER: {\r\n        x: 10,\r\n        y: 20\r\n    }\r\n};\r\n\r\nclass FrameCounter {\r\n    constructor(container){\r\n        this.toolbox = container;               //parent container element for all tools\r\n        this.button = this.addFpsButton();      //create and add fps button to toolbox\r\n        this.showFPS = false;                   //tracks visibility\r\n        this.startTime = 0;\r\n        this.frameNumber = 0;\r\n    }\r\n\r\n    addFpsButton(){\r\n        //creates button to toggle frame counter, adds button to the toolbox element, then returns button\r\n        const newButton = this._createFpsButton();\r\n        this.toolbox.appendChild(newButton);\r\n        return newButton;\r\n    }\r\n\r\n    _createFpsButton(){\r\n        //creates and returns button to toggle fps counter\r\n        const newButton = document.createElement(\"button\");\r\n        newButton.innerHTML = CONSTANTS.NAME;\r\n        newButton.addEventListener(\"click\", this.handleFpsClick());\r\n        _utility__WEBPACK_IMPORTED_MODULE_0__[\"toggleSelectedStatus\"](newButton);        //add initial styling\r\n        return newButton;\r\n    }\r\n\r\n    handleFpsClick(){\r\n        //when fps button is clicked, fps counter is drawn to upper left corner of canvas\r\n        return (e) => {\r\n            e.preventDefault();\r\n            const fpsButton = e.target;\r\n            this.showFPS = !this.showFPS;\r\n            \r\n            //change styling to indicate button is selected\r\n            _utility__WEBPACK_IMPORTED_MODULE_0__[\"toggleSelectedStatus\"](fpsButton);\r\n        }\r\n    }\r\n    \r\n    getFPS(){\r\n        //calculates and returns frames per second\r\n        this.frameNumber++;\r\n        const d = new Date().getTime();\r\n        const currentTime = (d - this.startTime) / 1000;\r\n        const result = Math.floor(this.frameNumber / currentTime);\r\n        if (currentTime > 1){\r\n            this.startTime = new Date().getTime();\r\n            this.frameNumber = 0;\r\n        }\r\n        return result;\r\n    }\r\n\r\n    drawFPS(ctx){\r\n        //receives canvas context, prints current frames per second\r\n        ctx.font = \"18px Helvetica\";\r\n        ctx.fillStyle = \"black\";\r\n        ctx.fillText(\"FPS : \" + this.getFPS(), CONSTANTS.FPS_CORNER.x, CONSTANTS.FPS_CORNER.y);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/tools/frame_counter.js?");

/***/ }),

/***/ "./src/tools/game_audio.js":
/*!*********************************!*\
  !*** ./src/tools/game_audio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameAudio; });\nconst CONSTANTS = {\r\n    VOL_SLIDER_SETTINGS: {\r\n        class: \"vol-slider\",\r\n        type: \"range\",\r\n        min: 0,\r\n        max: 0.1,\r\n        step: 0.001,\r\n        value: 0.05\r\n    },\r\n    DEFAULT_AUDIO_SRC: \"assets/audio/rick_astley.mp3\"\r\n};\r\n\r\nclass GameAudio {\r\n    constructor(container){\r\n        this.toolbox = container;               //parent container element for all tools\r\n        this.button = this.addVolumeControls(); //create and add audio element and button to toolbox\r\n        this.showSlider = false;                //tracks visibility\r\n    }\r\n\r\n    addVolumeControls(){\r\n        //adds button to adjust and/or mute game volume\r\n        const audioElement = this._createAudioElement();\r\n        const muteButton = this._createMuteButton();\r\n        this.toolbox.appendChild(audioElement);\r\n        this.toolbox.appendChild(muteButton);\r\n    }\r\n\r\n    _createAudioElement(){\r\n        //creates and return button to toggle audio controls\r\n\r\n        //create audio element\r\n        const audioElement = document.createElement(\"audio\");\r\n        audioElement.setAttribute(\"id\", \"audio\");\r\n\r\n        //add default audio\r\n        const defaultAudioSource = CONSTANTS.DEFAULT_AUDIO_SRC;\r\n        this._addAudioSource(audioElement, defaultAudioSource);        \r\n        \r\n        //set default audio properties        \r\n        audioElement.autoplay = true;\r\n        audioElement.loop = true;\r\n        audioElement.volume = CONSTANTS.VOL_SLIDER_SETTINGS.value;\r\n        this.audioElement = audioElement;\r\n\r\n        return audioElement;\r\n    }\r\n\r\n    _addAudioSource(bgAudio, sourcePath){\r\n        //receives audio element and a url path string, sets string as the audio element source\r\n        const bgSource = document.createElement(\"source\");\r\n        bgSource.src = sourcePath;\r\n        bgSource.type = \"audio/mp3\";\r\n        bgAudio.appendChild(bgSource);\r\n    }\r\n\r\n    _createMuteButton(){\r\n        //creates mute button for audio element\r\n        \r\n        //create container for button and slider\r\n        const container = document.createElement(\"div\");\r\n        container.setAttribute(\"class\", \"audio-controls\");\r\n\r\n        //create button\r\n        const muteButton = document.createElement(\"button\");\r\n        muteButton.setAttribute(\"id\", \"mute-button\");\r\n        \r\n        //create default button icon\r\n        muteButton.innerHTML = \"OFF\";\r\n\r\n        //add event listeners for mute and volume controls\r\n        muteButton.addEventListener(\"click\", this.toggleMute(muteButton));\r\n        container.addEventListener(\"mouseover\", this.toggleVolumeSlider());\r\n        container.addEventListener(\"mouseout\", this.toggleVolumeSlider());\r\n\r\n        //add volume slider to mute button element\r\n        const volSlider = this._createVolumeSlider();\r\n        \r\n        //add button and slider to container\r\n        container.appendChild(muteButton);\r\n        container.appendChild(volSlider);\r\n\r\n        return container;\r\n    }\r\n\r\n    _createVolumeSlider(){\r\n        //create volume slider\r\n        const volSlider = document.createElement(\"input\");\r\n        \r\n        //apply default slider settings\r\n        Object.keys(CONSTANTS.VOL_SLIDER_SETTINGS).forEach( attribute => {\r\n            volSlider.setAttribute(attribute, CONSTANTS.VOL_SLIDER_SETTINGS[attribute]);\r\n        })\r\n\r\n        //add event listener to change volume\r\n        volSlider.addEventListener(\"change\", this.setVolume(volSlider.value));\r\n\r\n        return volSlider;\r\n    }\r\n\r\n    toggleVolumeSlider(){\r\n        //toggles volume slider visibility\r\n        return () => {\r\n            const volSlider = document.querySelector(\".vol-slider\");\r\n            if (volSlider.id !== \"slide-in\"){\r\n                volSlider.setAttribute(\"id\", \"slide-in\");\r\n            } else {\r\n                volSlider.removeAttribute(\"id\", \"slide-in\");\r\n            }\r\n        }\r\n    }\r\n\r\n    toggleMute(muteButton){\r\n        //toggles audio muted status\r\n        return (e) => {\r\n            e.preventDefault();\r\n            if (this.audioElement.muted){\r\n                this.audioElement.muted = false;\r\n                muteButton.innerHTML = \"ON\"\r\n            } else {\r\n                this.audioElement.muted = true;\r\n                muteButton.innerHTML = \"OFF\"\r\n            }\r\n        }\r\n    }\r\n\r\n    setVolume(val){\r\n        //sets audio volume to the selected range value\r\n        return (e) => {\r\n            e.preventDefault();\r\n            const chosenVal = e.target.value;\r\n            this.audioElement.volume = chosenVal;\r\n        }\r\n    }\r\n\r\n    startMusic(){\r\n        //unmutes audio and updates mute button text\r\n        document.getElementById(\"audio\").play();\r\n        document.getElementById(\"mute-button\").innerHTML = \"ON\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/tools/game_audio.js?");

/***/ }),

/***/ "./src/tools/utility.js":
/*!******************************!*\
  !*** ./src/tools/utility.js ***!
  \******************************/
/*! exports provided: toggleSelectedStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleSelectedStatus\", function() { return toggleSelectedStatus; });\n//contains functions to toggle styling of tools\r\n\r\nconst toggleSelectedStatus = (element) => {\r\n    //receives element, toggles css class to indicate button is activated/deactivated\r\n    element.id = (element.id && element.id !== \"button-on\") ? \"button-on\" : \"button-off\";\r\n}\n\n//# sourceURL=webpack:///./src/tools/utility.js?");

/***/ })

/******/ });