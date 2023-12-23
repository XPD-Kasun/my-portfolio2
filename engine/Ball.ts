import { Entity, Size } from "./types";

export default class Ball implements Entity {

       private ctx : CanvasRenderingContext2D = null;
       private size: Size = null;
       private r = 0;
       private curR = 0;
       private increasing = false;
       private rafId = 0;

       color: string = '';
       x = 0;
       y = 0;

       constructor(radius: number) {
              
              this.r = radius;
              this.curR = radius;
       }

       init(ctx:CanvasRenderingContext2D, size: Size) {
              this.ctx = ctx;
              this.size = size;
       }

       unmount() {

       }

       draw() {

              this.ctx.beginPath();
              this.ctx.arc(this.x, this.y, this.curR, 0, 2 * Math.PI);
              this.ctx.closePath();             
              this.ctx.fillStyle = this.color;
              this.ctx.fill();
       }

       update() {

              this.ctx.clearRect(0, 0, this.size.width, this.size.height);

              if(this.increasing) {
                     this.curR += 1;
                     if(this.curR > this.r) {
                            this.increasing = false;
                     }
              }
              else {
                     this.curR -= 1;
                     if(this.curR <= 1) {
                            this.increasing = true;
                     }
              }

              this.draw();
       }
}