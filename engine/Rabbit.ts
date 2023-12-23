import { Size, Entity } from "./types";

export default class Rabbit implements Entity {

       private ctx: CanvasRenderingContext2D;
       private size: Size;
       private blockSize: number;
       private array = null;
       private fontFamily;
       private currentLine: number = 0;
       private currentChar: number = 0;
       private canvasEl: HTMLCanvasElement;
       private lineCount: number;
       private hasUpdate: boolean = false;
       private cursorUp: boolean = false;
       private totalDelta: number = 0;
       private lineTotal: number = 0;
       private completed: boolean = false;

       fontSize = 23;
       color = '#00f600';
       str = [
              "Wake up, Visitor ...",
              "You are in good hands ...",
              "Tap on anywhere on the screen"
       ];


       constructor(ctx: CanvasRenderingContext2D, size: Size, canvasEl: HTMLCanvasElement, fontFamily = 'consolas') {
              this.fontFamily = fontFamily;

              this.ctx = ctx;
              this.size = size;
              this.canvasEl = canvasEl;
              if(size.width < 768) {
                     this.fontSize = 18;
              }
              this.ctx.font = `bold ${this.fontSize}px ${this.fontFamily}`;
              this.blockSize = this.ctx.measureText('X').width + 10;

              this.lineCount = this.str[0].length;
       }


       draw() {

              // if (!this.hasUpdate) {
              //        return;
              // }

              const text = this.str[this.currentLine].slice(0, this.currentChar);

              let offsetY = 40;
              let offsetX = 20;

              if (this.completed) {
                     let x = this.ctx.measureText(text).width + offsetX + 3;
                     let y = this.blockSize * this.currentLine + 20;

                     if (this.cursorUp) {
                            this.ctx.beginPath();
                            this.ctx.strokeStyle = "#00f600";
                            this.ctx.moveTo(x, y);
                            this.ctx.lineTo(x, y + this.blockSize);
                            this.ctx.closePath();
                            this.ctx.stroke();
                     }
                     else {
                            this.ctx.clearRect(x - 1, y - 1, 2, this.blockSize);
                     }
                     return;
              }

              this.ctx.clearRect(0, 0, this.size.width, this.size.height);

              this.ctx.fillStyle = "#00f600";
              for (let i = 0; i <= this.currentLine; i++) {

                     let minY = this.blockSize * i;

                     if (i === this.currentLine) {
                            this.ctx.fillText(text, offsetX, minY + offsetY);
                            continue;
                     }
                     else {
                            this.ctx.fillText(this.str[i], offsetX, minY + offsetY);
                     }
              }

              let cursorX = this.ctx.measureText(text).width + offsetX + 3;
              let minY = this.blockSize * this.currentLine + 20;

              if (this.cursorUp) {
                     this.ctx.beginPath();
                     this.ctx.strokeStyle = "#00f600";
                     this.ctx.moveTo(cursorX, minY);
                     this.ctx.lineTo(cursorX, minY + this.blockSize);
                     this.ctx.closePath();
                     this.ctx.stroke();
              }


       }

       update(delta) {

              this.totalDelta += delta;

              if (this.totalDelta > 300) {
                     this.cursorUp = !this.cursorUp;
                     this.totalDelta = 0;
              }

              if (this.completed) { return; }

              if (this.currentChar === this.lineCount) {
                     if (this.lineTotal < 3000) {
                            this.lineTotal += delta;
                            return;
                     }

                     if (this.currentLine >= this.str.length - 1) {
                            this.completed = true;
                            return;
                     }
                     this.currentLine++;
                     this.currentChar = 0;
                     this.lineTotal = 0;
                     this.lineCount = this.str[this.currentLine].length;
              }
              else {
                     this.currentChar++;
              }




       }

       unmount() {

       }

}