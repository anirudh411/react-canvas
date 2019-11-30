import React from "react";

interface CanvasConfig {
    id?: string,
    fill?: string | CanvasGradient | CanvasPattern,
    stroke?: string,
    height?: number,
    width?: number;
}

interface ShapeConfig extends CanvasConfig {
    position?: 'center' | 'left' | 'right' | 'top' | 'bottom',
}

interface Circle extends ShapeConfig {
    x: string,
    y: string,
    radius: number
}

const canvasConfig = {
    id: `1`,
    width: 1400,
    height: 1400,
    fill: '#000',
    stroke: '#fff',
};

const shapeConfig = {
    ...canvasConfig,

};

export const CanvasContext = React.createContext(canvasConfig);
export const ShapeContext = React.createContext(shapeConfig);
