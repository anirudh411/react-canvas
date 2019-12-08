import React, {Component, useContext, useEffect, useLayoutEffect, useState} from "react";
import {CanvasContext, ShapeContext} from "../../Contexts";
import {computeShapePositionBasedOnParent, getCanvasElement, getRelativeCoordinates} from "../../utils";
import {COLORS} from "../../App";

const Circle = (props) => {
	let shapeConfigContext = useContext(ShapeContext);
	let [computedX, updateComputedX] = useState(props.x || shapeConfigContext.y);
	let [computedY, updateComputedY] = useState(props.y || shapeConfigContext.y);
	const getShapeConfig = (args = {}) => {
		return {
			...shapeConfigContext,
			...props,
			...args
		}
	};
	let {id, stroke, radius, position, x, y} = getShapeConfig();
	console.log(props);

	let fill = COLORS.WHITE;
	if (props.fill) {
		fill = props.fill;
	}

	useLayoutEffect(() => {
		if (id) {
			const canvas = getCanvasElement(id);
			const ctx = canvas.getContext('2d');
			const [_x, _y] = computeShapePositionBasedOnParent(x, y, canvas, position);
			console.log(_x, _y, shapeConfigContext, props);
			updateComputedX(_x);
			updateComputedY(_y);
			if (ctx) {
				if (fill) {
					ctx.globalCompositeOperation = 'destination-over';
					ctx.beginPath();
					ctx.arc(shapeConfigContext.x, shapeConfigContext.y, radius, 0, 2 * Math.PI);
					ctx.fillStyle = fill;
					ctx.fill();
					ctx.strokeStyle = stroke;
					ctx.stroke();
				}
			}
		}
	}, [computedX, computedY]);
	return <>{props.children}</>

};
export default Circle;

































