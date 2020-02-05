import React from 'react';
import './App.css';
import Shape from "./shapes/Circle/index";
import {CanvasContext} from "./Contexts";


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
		<CanvasContext.Provider value={rest}>
			<canvas id={rest.id} width={rest.width} height={rest.height}/>
			{React.cloneElement(children, rest)}
		</CanvasContext.Provider>)
};
Canvas.defaultProps = {
	...canvasContextConfig
};

const App = () => {
	return (
		<Canvas fill={COLORS.PRIMARY_BLUE}>
			<Shape x={200} y={200} radius={120} fill={COLORS.DARK_GRAY}>
				<Shape x={0} y={0} radius={60} fill={COLORS.LIGHT_PINK}>
					<Shape type={"rect"} x={0} y={0} radius={20} position={"center"} fill={COLORS.PRIMARY_BLUE}/>
				</Shape>
			</Shape>
		</Canvas>
	)
};
export default App;
