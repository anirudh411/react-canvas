import React, {Children, cloneElement, useEffect} from "react";
import {computeShapePositionBasedOnParent, renderShape} from "../../utils";
import {CanvasContext} from "../../Contexts";


function Shape({type = "circle", children, ...props}) {
	const canvasConfig = React.useContext(CanvasContext);
	useEffect(() => {
		renderShape(canvasConfig, {
			shapeType: type,
			radius: props.radius,
			fill: props.fill,
			x,
			y,
			...props
		});
	});


	const [x, y] = computeShapePositionBasedOnParent({...props, shapeType: type});
	// noinspection JSCheckFunctionSignatures
	return children ? Children.map(children, (element) => cloneElement(element, {
		...props,
		...element.props,
		parentX: x,
		parentY: y
	})) : null;
}

export default Shape;

































