/*Returns a HTMLCanvasElement*/
const getCanvasElement = (id) => document.getElementById(id);

const computeShapePositionBasedOnParent = (config) => {
    const {x, y, parentX = 0, parentY = 0} = config;
    //console.log(x, y, parentX, parentY);
    // const parentCoordinates = getElementBoundCoordinateObject(element);
    //const parentX = Math.ceil(parentCoordinates.x);
    //const parentY = Math.ceil(parentCoordinates.y);
    let _x = 0, _y = 0;
    /*  if (!(x && y)) {
		  _x = Math.ceil(parentX + (parentCoordinates.width / 2));
		  _y = Math.ceil(parentY + (parentCoordinates.height / 2));
		  return [_x, _y];
	  }*/
    //  if (position === 'center') {
    return [Math.ceil(parentX + x), Math.ceil(parentY + y)];
    //}

    //  return [parentCoordinates.x, parentCoordinates.y];
};


const renderShape = (canvasConfig, config) => {
    console.log(config);
    const {shapeType = "circle"} = config;
    const canvas = getCanvasElement(canvasConfig.id);
    const ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.globalCompositeOperation = 'destination-over';
        const [x, y] = computeShapePositionBasedOnParent(config);
        ctx.beginPath();
        switch (shapeType) {
            case 'circle':
                ctx.arc(x, y, config.radius || 20, 0, 2 * Math.PI);
                ctx.fillStyle = config.fill;
                ctx.fill();
                ctx.strokeStyle = '#ff0f22';
                ctx.stroke();
                break;
            case 'rect':
                ctx.fillStyle = config.fill;
                ctx.strokeStyle = '#ff0f22';
                console.log(x, y, config);
                ctx.fillRect(x, y, config.radius, config.radius);

            default:
        }
    }

};
export {
    renderShape,
    computeShapePositionBasedOnParent,

    getCanvasElement,
}
