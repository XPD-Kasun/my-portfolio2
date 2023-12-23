import React, { Children, useEffect, useState } from 'react';
import { IEngine } from '../../../engine/types';
import { CanvasContextType, PlayControl } from './types';

class ContextValue {

       engine: IEngine;
       fn: () => void;
       promise: Promise<void> = new Promise((res) => {
              
              this.fn = () => {
                     res();
              };
              
       })

       constructor() {

       }

       register(engine) {
              this.engine = engine;
              if(engine) {
                     this.fn();
              }
       }

       play() {
              this.engine && this.engine.start();
       }

       pause() {
              this.engine && this.engine.pause();
       }

       getEngine() {
              return this.engine;
       }
}

const contextValue = new ContextValue();


const CanvasContext = React.createContext<CanvasContextType>(contextValue);

function CanvasProvider({ children }) {

       let [ctx, setCtx] = useState(contextValue);

       useEffect(() => {
              
              contextValue.promise.then(() => {
                     setCtx(ctx => {
                            let context = new ContextValue();
                            context.engine = ctx.engine;
                            return context;
                     });
              });

              
       }, []);

       return (
              <CanvasContext.Provider value={ctx}>
                     {children}
              </CanvasContext.Provider>
       )
}

export { CanvasContext };
export default CanvasProvider;