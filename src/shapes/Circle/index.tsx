import React, {useContext, useEffect, useState} from "react";
import {CanvasContext, ShapeContext} from "../../Contexts";
import {computeShapePositionBasedOnParent, getCanvasElement} from "../../utils";
import {COLORS} from "../../App";

export const Circle = (props: any) => {
    let shapeConfigContext = useContext(ShapeContext);
    const getShapeConfig = (args = {}): any => {
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

    useEffect(() => {
        if (id) {
            const canvas = getCanvasElement(id);
            const [_x, _y] = computeShapePositionBasedOnParent(x, y, canvas, position);
            const ctx = canvas.getContext('2d');
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

    });
    return <ShapeContext.Provider value={{...getShapeConfig()}}>
        {props.children}
    </ShapeContext.Provider>

};
