export type Size = {
       width: number,
       height: number
}

export interface Entity {
       draw: () => void,
       update: (delta) => void,
       unmount: () => void
}

export type OnNotification = (msg: string) => void;

export interface IStage {
       complete: () => void,
       stageResult: Promise<void>;
       mount: (ctx: CanvasRenderingContext2D, size: Size, canvasEl: HTMLCanvasElement, notify: OnNotification) => void,
       unmount: () => void,
       draw: () => void,
       getLevel:()=> number,
       update: (delta) => void
}

export interface IEngine {
       add: (IStage) => void,
       start: () => void,
       pause: () => void,
       getCurrentState: () => IStage,
       nextStage: ()=> void,
       addNotificationListener: (callback: OnNotification) => void;
}
