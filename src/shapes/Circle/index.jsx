import React, {Children, cloneElement, Component, useEffect} from "react";
import {computeShapePositionBasedOnParent, getCanvasElement, renderShape} from "../../utils";
import {CanvasContext} from "../../Contexts";


function Shape({type = "circle", children, ...props}) {
	const canvasConfig = React.useContext(CanvasContext);
	useEffect(() => {
		renderShape(type, canvasConfig, {
			radius: props.radius,
			fill: props.fill,
			x,
			y,
			...props
		});
	});


	const [x, y] = computeShapePositionBasedOnParent(props.x, props.y, props.parentX, props.parentY, 'center');
	// noinspection JSCheckFunctionSignatures
	return children ? Children.map(children, (element) => cloneElement(element, {
		...props,
		...element.props,
		parentX: x,
		parentY: y
	})) : null;
}


/**/
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
					renderShape('circle', ctx, {
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

export default Shape;

































