import React from "react";

interface CanvasConfig {
    id?: string,
    fill?: string | CanvasGradient | CanvasPattern,
    stroke?: string,
    height?: number,
    width?: number;
}

const canvasConfig = {
    id: `1`,
    width: 400,
    height: 400
};
export const CanvasContext = React.createContext(canvasConfig);
