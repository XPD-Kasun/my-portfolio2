import kb from "./kb";
import { Entity, IEngine, IStage, OnNotification, Size } from "./types";


class Engine implements IEngine {

       canvasEl: HTMLCanvasElement;
       size: Size;

       private stages: IStage[];
       private ctx: CanvasRenderingContext2D = null;
       private rafId: number = -1;
       private lastTimestamp: number = 0;
       private totalDelta: number;
       private stopped: boolean = false;
       private hasSetup: boolean = false;
       private currentStage: IStage;
       private currentStageId: number = -1;
       private notificationCallbacks: OnNotification[] = [];
       private notify: OnNotification;

       constructor(canvasEl: HTMLCanvasElement, size: Size) {
              this.canvasEl = canvasEl;
              this.size = size;

              this.notify = (msg)=> {

                     for(let callback of this.notificationCallbacks) {
                            callback(msg);
                     }
              }
              this.stages = [];
       }

       addNotificationListener(callback: OnNotification) {
              this.notificationCallbacks.push(callback);
       }

       getCurrentState() {
              return this.currentStage;
       }

       add(stage: IStage) {
              this.stages.push(stage);
       }

       private setupCtx() {

              if (this.ctx) {
                     return;
              }

              this.ctx = this.canvasEl.getContext('2d');

              this.canvasEl.width = this.size.width;
              this.canvasEl.height = this.size.height;

              this.ctx.imageSmoothingEnabled = true;
              //ctx.imageSmoothingQuality = 'high'

              window.addEventListener('keydown', (evt) => {
                     kb.trigger(evt);
              });

       }

       private mountStage() {

              if (this.stages.length === 0) {
                     return false;
              }

              this.currentStageId++;
              if (this.currentStageId >= this.stages.length) {
                     this.pause();
                     this.stopped = true;
                     return false;
              }
              this.currentStage = this.stages[this.currentStageId];

              this.currentStage.mount(this.ctx, this.size, this.canvasEl, this.notify);
              this.currentStage.stageResult.then(() => {
                     this.currentStage.unmount();
                     this.mountStage();
              });

              return true;
       }

       nextStage() {
              this.currentStage.complete();
       }

       start() {

              if(this.stages.length === 0 || this.stopped) {
                     return;
              }

              if (!this.hasSetup) {
                     this.setupCtx();
                     this.hasSetup = true;

                     if (!this.mountStage()) {
                            return;
                     }
              }

              this.totalDelta = 0;

              if (this.rafId === -1) {
                     this.loop();
              }

       }

       private loop(timestamp = 0) {

              let delta = timestamp - this.lastTimestamp;
              this.totalDelta += delta;
              this.lastTimestamp = timestamp;

              if (this.totalDelta > 60) {

                     this.currentStage.update(this.totalDelta);
                     this.currentStage.draw();
                     this.totalDelta = 0;

              }

              this.rafId = requestAnimationFrame(this.loop.bind(this));
       }

       pause() {
              cancelAnimationFrame(this.rafId);
              this.rafId = -1;
       }

}

export default Engine;