import { GameEngine } from './game/gameEngine';

const gameEngine = new GameEngine();

function gameLoop() {
    gameEngine.update();
    requestAnimationFrame(gameLoop);
}

gameEngine.start();
gameLoop();