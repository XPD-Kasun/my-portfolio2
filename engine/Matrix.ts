import { Size, Entity } from "./types";

export default class Matrix implements Entity{

       private ctx: CanvasRenderingContext2D;
       private size: Size;
       private blockSize: number;
       private nCols = 0;
       private nRows = 0;
       private array = null;
       private fontFamily;

       fontSize = 23;
       color = '#00f600';
       chars = 'ｱAｲBｳCｴDｵEｿFｷGｸHｹJｺIｻKｼLｽMｾNｿO!@#$%^&*<>{}|\\:';


       constructor(ctx: CanvasRenderingContext2D, size: Size, fontFamily = 'consolas') {              
              this.fontFamily = fontFamily;
              
              this.ctx = ctx;
              this.size = size;
              this.ctx.font = `bold ${this.fontSize}px ${this.fontFamily}`;
              this.blockSize = this.ctx.measureText('X').width + 10;
              this.nCols = Math.floor(size.width / this.blockSize);
              this.nRows = Math.floor(size.height / this.blockSize);

              this.array = new Array(this.nCols).fill(0);
       }

       draw() {

              this.ctx.fillStyle = 'rgba(7,20,10,0.1)';
              this.ctx.fillRect(0, 0, this.size.width, this.size.height);

              this.ctx.fillStyle = this.color;

              for (let i = 0; i < this.nCols; i++) {

                     

                     const randIndex = Math.floor(Math.random() * this.chars.length);
                     this.ctx.fillText(this.chars[randIndex], i * this.blockSize + 5, this.blockSize * this.array[i] + this.blockSize);
                     this.array[i]++;

                     if (this.array[i] > this.nRows && Math.random() > 0.95) {
                            this.array[i] = 0;

                     }
              }


       }

       update(delta) {

              
       }

       unmount() {

       }

}