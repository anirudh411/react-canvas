import React, {cloneElement, Component, useContext, useEffect, useLayoutEffect, useState} from "react";
import {CanvasContext, ShapeContext} from "../../Contexts";
import {computeShapePositionBasedOnParent, getCanvasElement, getRelativeCoordinates} from "../../utils";
import {COLORS} from "../../App";

const Circle = (props) => {
	const {children, ...rest} = props;
	if (props.x && props.y) {
	}
	let [computedX, updateComputedX] = useState(props.x || 0);
	let [computedY, updateComputedY] = useState(props.y || 0);
	useLayoutEffect(() => {
		if (rest.id) {
			const canvas = getCanvasElement(rest.id);
			const ctx = canvas.getContext('2d');
			const [_x, _y] = computeShapePositionBasedOnParent(rest.x, rest.y, canvas, 'center');
			updateComputedX(_x);
			updateComputedY(_y);
			if (ctx) {
				if (rest.fill) {
					ctx.globalCompositeOperation = 'destination-over';
					ctx.beginPath();
					ctx.arc(rest.x, rest.y, rest.radius || 10, 0, 2 * Math.PI);
					ctx.fillStyle = rest.fill;
					ctx.fill();
					ctx.strokeStyle = rest.stroke;
					ctx.stroke();
				}
			}
		}
	}, [computedX, computedY]);
	const newProps = () => {
		return {
			...rest,
			...children,
			parentX: rest.x,
			parentY: rest.y
		}
	}
	if (children)
		return React.cloneElement(children, {...newProps()});
	else return null;

};
export default Circle;

































