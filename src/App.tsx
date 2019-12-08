import React, {FunctionComponent, useEffect, useState} from 'react';
import './App.css';
import {Circle} from "./shapes/Circle";

interface CanvasConfig {
    id?: string,
    fill?: string | CanvasGradient | CanvasPattern,
    stroke?: string,
    height?: number,
    width?: number;
}

export const COLORS = {
    DARK_GRAY: '#000',
    WHITE: '#fff',
    LIGHT_PINK: '#f3b2c3',
    PRIMARY_BLUE: '#255ca8'
};

const canvasContextConfig: CanvasConfig = {
    id: `1`,
    fill: COLORS.DARK_GRAY,
    stroke: COLORS.DARK_GRAY,
    width: 400,
    height: 400,
};


export const CanvasContext = React.createContext(canvasContextConfig);


const Canvas: any = (props: any) => {

    const {fill, stroke, height, width, children} = props;
    return (
        <CanvasContext.Provider value={canvasContextConfig}>
            <canvas id={`1`} width={width} height={height}/>
            {children}
        </CanvasContext.Provider>)
};
Canvas.defaultProps = {
    ...canvasContextConfig
}

const App: React.FC = () => {
    const [radius, updateR] = useState(10);
    /*  useEffect(() => {
          const interval = setInterval(() => {
              updateR((r) => changeRadius(r));
          }, 10);
          return () => clearInterval(interval);
      }, []);
      const changeRadius = (r: any) => {
          if (r <= 200) return ++r;
          return r;
      };*/
    return (
        <Canvas>
            <Circle fill={COLORS.DARK_GRAY}>
                <Circle x={30} y={20} fill={COLORS.LIGHT_PINK} radius={20}>
                    <Circle x={30} y={20} fill={COLORS.PRIMARY_BLUE} radius={20}/>
                </Circle>
            </Circle>

        </Canvas>
    )
};
export default App;
