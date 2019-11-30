import React, {useEffect, useState} from 'react';
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


const Canvas = (props: any) => {
    const {fill, stroke, height, width, children} = props;
    return (
        <CanvasContext.Provider value={canvasContextConfig}>
            <canvas id={`1`} width={width || 400} height={height || 400}/>
            {children}
        </CanvasContext.Provider>)
};

const App: React.FC = () => {
    // const [radius, updateR] = useState(10);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateR((r) => changeRadius(r));
    //     }, 10);
    //     return () => clearInterval(interval);
    // }, []);
    // const changeRadius = (r: any) => {
    //     if (r <= 100) return ++r;
    //     return r;
    // };
    return (
        <Canvas width={800} height={800}>
            <Circle value={{position: 'left'}} x={100} y={10} radius={200} position={'center'}
                    fill={COLORS.LIGHT_PINK}>

                {/* EYES start*/}
                <Circle value={{position: 'left'}} x={0} y={-50} radius={20} position={'center'}
                        fill={COLORS.DARK_GRAY}>
                    <Circle value={{position: 'left'}} x={0} y={-50} radius={5} position={'center'}
                            fill={COLORS.WHITE}/>
                </Circle>

                <Circle value={{position: 'left'}} x={200} y={-50} radius={20}
                        position={'center'}
                        fill={COLORS.DARK_GRAY}>
                    <Circle value={{position: 'left'}} x={200} y={-50} radius={5}
                            position={'center'}
                            fill={COLORS.WHITE}/>
                </Circle>
                {/* EYES end*/}


                <Circle value={{position: 'left'}} x={100} y={80} radius={50}
                        position={'center'}
                        fill={COLORS.DARK_GRAY}/>

            </Circle>
        </Canvas>
    )
};
export default App;
