import { IEngine } from "../../../engine/types"

export interface PlayControl {
       play: () => void,
       pause: () => void
}

export interface CanvasContextType extends PlayControl {
       register: (arg: IEngine) => void,
       getEngine: () => IEngine
}

