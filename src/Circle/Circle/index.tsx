import React, {useContext, useEffect} from "react";
import {CanvasContext} from "../../Contexts";
import {computeShapePositionBasedOnParent, getCanvasElement} from "../../utils";

export const Circle = (props: any) => {
    const {fill, stroke, radius, position, x, y, children} = props;
    const {height, id, width} = useContext(CanvasContext);

    useEffect(() => {
        if (id) {
            const canvas = getCanvasElement(id);
            const [_x, _y] = computeShapePositionBasedOnParent(x, y, canvas, position);
            const ctx = canvas.getContext('2d');
            if (ctx) {
                if (fill) {
                    ctx.beginPath();
                    ctx.arc(_x, _y, radius, 0, 2 * Math.PI);
                    // ctx.fillStyle = fill;
                    // ctx.fill();
                    ctx.strokeStyle = fill;
                    ctx.stroke();
                }
            }
        }
    });
    return null
};
