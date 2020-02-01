import React from 'react';
import './App.css';
import Circle from "./shapes/Circle/index";
import Shape from "./shapes/Circle/index";


export const COLORS = {
	DARK_GRAY: '#000',
	WHITE: '#fff',
	LIGHT_PINK: '#f3b2c3',
	PRIMARY_BLUE: '#255ca8'
};

const canvasContextConfig = {
	id: `1`,
	fill: COLORS.DARK_GRAY,
	stroke: COLORS.DARK_GRAY,
	width: 400,
	height: 400,

};


const Canvas = (props) => {
	const {children, ...rest} = props;
	return (
		<div>
			<canvas id={`1`} width={rest.width} height={rest.height}/>
			{React.cloneElement(children, rest)}
		</div>)
};
Canvas.defaultProps = {
	...canvasContextConfig
};

const App = () => {

	return (
		<Canvas fill={COLORS.PRIMARY_BLUE}>
			<Shape type={"rect"} x={200} y={200} radius={120} fill={COLORS.DARK_GRAY}>
				<Shape x={10} y={0} radius={60} fill={COLORS.LIGHT_PINK}/>
			</Shape>
		</Canvas>
	)
};
export default App;
