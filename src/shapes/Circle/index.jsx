import React, {cloneElement, Component} from "react";
import {computeShapePositionBasedOnParent, getCanvasElement} from "../../utils";

class Circle extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.id) {
			const canvas = getCanvasElement(this.props.id);
			const ctx = canvas.getContext('2d');
			const [x, y] = computeShapePositionBasedOnParent(this.props.x, this.props.y, this.props.parentX, this.props.parentY, 'center');

			if (ctx) {
				if (this.props.fill) {
					ctx.globalCompositeOperation = 'destination-over';
					ctx.beginPath();
					ctx.arc(x, y, this.props.radius || 20, 0, 2 * Math.PI);
					ctx.fillStyle = this.props.fill;
					ctx.fill();
					ctx.strokeStyle = '#ff0f22';
					ctx.stroke();
				}
			}
		}
	}

	render() {
		const {children, ...rest} = this.props;

		const [x, y] = computeShapePositionBasedOnParent(this.props.x, this.props.y, this.props.parentX, this.props.parentY, 'center');
		// noinspection JSCheckFunctionSignatures
		return this.props.children ? cloneElement(children, {
			...rest,
			...children.props,
			parentX: x,
			parentY: y
		}) : null;
	}
}

export default Circle;

































