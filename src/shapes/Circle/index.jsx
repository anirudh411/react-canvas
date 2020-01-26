import React, {Children, cloneElement, Component} from "react";
import {computeShapePositionBasedOnParent, createShape, getCanvasElement} from "../../utils";

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
					createShape('circle', ctx, {
						radius: this.props.radius,
						fill: this.props.fill,
						x,
						y
					});
				}
			}
		}
	}

	render() {
		const {children, ...rest} = this.props;

		const [x, y] = computeShapePositionBasedOnParent(this.props.x, this.props.y, this.props.parentX, this.props.parentY, 'center');
		// noinspection JSCheckFunctionSignatures
		return this.props.children ? Children.map(children, (c) => cloneElement(c, {
			...rest,
			...c.props,
			parentX: x,
			parentY: y
		})) : null;
	}
}

export default Circle;

































