import kb from "./kb";
import Matrix from "./Matrix";
import Rabbit from "./Rabbit";
import { IStage, Size } from "./types";

class Stage1 implements IStage {

       private ctx: CanvasRenderingContext2D;
       private size: Size;
       private canvasEl: HTMLCanvasElement;
       private promiseResolveFn: () => void;
       private level: number = 0;
       private notify: (msg: string) => void;
       private clickHandler: (ev: MouseEvent) => void;

       matrix: Matrix;
       rabbit: Rabbit;
       stageResult: Promise<void> = new Promise((res) => {
              this.promiseResolveFn = () => {
                     res();
              };
       });

       constructor(options) {
              this.level = options.level || 0;
       }

       getLevel() {
              return this.level;
       }

       complete() {
              this.promiseResolveFn();
       }

       mount(ctx: CanvasRenderingContext2D, size: Size, canvasEl: HTMLCanvasElement, notify) {
              this.ctx = ctx;
              this.size = size;
              this.canvasEl = canvasEl;
              this.notify = notify;

              this.matrix = new Matrix(ctx, size);
              this.rabbit = new Rabbit(ctx, size, canvasEl);

              this.clickHandler = (evt) => {
                     this.level = 1;
                     if (this.notify) {
                            this.notify('level');
                     }
              };

              canvasEl.addEventListener('click', this.clickHandler);
       }

       unmount() {
              this.canvasEl.removeEventListener('click', this.clickHandler);
              this.matrix.unmount();
       }

       draw() {
              switch (this.level) {
                     case 0:
                            this.rabbit.draw();
                            break;
                     case 1:
                            this.matrix.draw();
                            break;
              }
       }

       update(delta) {
              switch (this.level) {
                     case 0:
                            this.rabbit.update(delta);
                            break;
                     case 1:
                            this.matrix.update(delta);
                            break;
              }
       }
}

export default Stage1;