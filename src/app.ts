// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason

import Canvas from './ux/canvas.ux.js';
import GameLoop from './utils/gameLoop.js';
import Movement from './engine/movement.engine.js';
import CollisionDetector from './engine/collisionDetector.engine.js';
import Pokemon from './class/parent/pokemon.parentClass.js';

const { movement } = new Movement();
const canvas = new Canvas();
const { detectCollision, setWorldBoundaries } = new CollisionDetector();

export default class App extends GameLoop {
  private player: Pokemon;

  constructor() {
    super(60);
    this.player = new Pokemon('p1', 10, 100, 100, 100, canvas);
  }

  public init() {
    canvas.init(document.getElementById('canvas') as HTMLCanvasElement);

    console.log('initialized');

    console.log('looping...');
    this.paused = false;
    this.startLoop();
  }

  update(): void {
    // console.log('updated');
    // update physics
    movement(this.player);

    // collisions handler
    setWorldBoundaries(this.player, 500, 500);
  }

  render(): void {
    // console.log('updated');
    // renders the image after update finished calculating
    this.player.draw();
  }
}
