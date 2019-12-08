import React, {useContext, useEffect, useLayoutEffect, useState} from "react";
import {CanvasContext, ShapeContext} from "../../Contexts";
import {computeShapePositionBasedOnParent, getCanvasElement} from "../../utils";
import {COLORS} from "../../App";

export const Circle = (props: any) => {
    let shapeConfigContext = useContext(ShapeContext);
    let [computedX, updateComputedX] = useState(0);
    let [computedY, updateComputedY] = useState(0);
    const getShapeConfig = (args = {}): any => {
        console.log(args);
        return {
            ...shapeConfigContext,
            ...props,
            ...args
        }
    };
    let {id, stroke, radius, position, x, y} = getShapeConfig();
    let fill = COLORS.WHITE;
    if (props.fill) {
        fill = props.fill;
    }

    useLayoutEffect(() => {
        if (id) {
            const canvas = getCanvasElement(id);
            const ctx = canvas.getContext('2d');
            const [_x, _y] = computeShapePositionBasedOnParent(x, y, canvas, position);
            updateComputedX(_x);
            updateComputedY(_y);
            if (ctx) {
                if (fill) {
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.arc(_x, _y, radius, 0, 2 * Math.PI);
                    ctx.fillStyle = fill;
                    ctx.fill();
                    ctx.strokeStyle = stroke;
                    ctx.stroke();
                }
            }
        }
    }, [computedX, computedY]);
    return <ShapeContext.Provider value={{...getShapeConfig({x: computedX, y: computedY})}}>
        {props.children}
    </ShapeContext.Provider>

};
