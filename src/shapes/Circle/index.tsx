import React, {useContext, useEffect} from "react";
import {CanvasContext, ShapeContext} from "../../Contexts";
import {computeShapePositionBasedOnParent, getCanvasElement} from "../../utils";

export const Circle = (props: any) => {
    let {height, id, width, fill, stroke} = useContext(CanvasContext);
    let {radius, position, x, y, children, value} = props;
    if (props.fill) {
        fill = props.fill;
    }
    console.log(props, id);

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
    return <ShapeContext.Provider value={props}>
        {props.children}
    </ShapeContext.Provider>
};
