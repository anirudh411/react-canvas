import React from 'react';
import './App.css';
import Circle from "./shapes/Circle/index";

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


const Canvas: any = (props: any) => {
    const {children, ...rest} = props;
    return (
        <div>
            <canvas id={`1`} width={rest.width} height={rest.height}/>
            {React.cloneElement(children, rest)}
        </div>)
};
Canvas.defaultProps = {
    ...canvasContextConfig
};

const App: React.FC = () => {

    return (
        <Canvas fill={COLORS.PRIMARY_BLUE}>
            <Circle x={200} y={200} radius={120} fill={COLORS.DARK_GRAY}>
                <Circle x={10} y={0} radius={20} fill={COLORS.LIGHT_PINK}>
                    <Circle x={0} y={0} radius={10} fill={COLORS.PRIMARY_BLUE}/>
                </Circle>
            </Circle>
        </Canvas>
    )
};
export default App;
