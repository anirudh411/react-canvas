import React, {useEffect, useState} from 'react';
import './App.css';
import {Circle} from "./Circle/Circle";

interface CanvasConfig {
    id?: string,
    fill?: string | CanvasGradient | CanvasPattern,
    stroke?: string,
    height?: number,
    width?: number;
}

export const COLORS = {
    DARK_GRAY: '#6161B1'
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
    const [radius, updateR] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            updateR((r) => changeRadius(r));
        }, 10);
        return () => clearInterval(interval);
    }, []);
    const changeRadius = (r: any) => {
        if (r <= 100) return ++r;
        return r;
    };
    return (
        <Canvas>
            <Circle x={100} y={-60} radius={radius} position={'center'} fill={COLORS.DARK_GRAY}/>
            <Circle x={-100} y={-60} radius={radius} position={'center'} fill={COLORS.DARK_GRAY}/>
            <Circle x={0} y={-60} radius={radius} position={'center'} fill={COLORS.DARK_GRAY}/>
            <Circle x={-40} y={60} radius={radius} position={'center'} fill={'#000'}/>
            <Circle x={40} y={60} radius={radius} position={'center'} fill={'#000'}/>
        </Canvas>
    )
};
export default App;
