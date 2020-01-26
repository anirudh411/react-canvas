/*Returns a HTMLCanvasElement*/
const getCanvasElement = (id: string): HTMLCanvasElement => document.getElementById(id) as HTMLCanvasElement;

/*Get DOMRect object of the element*/
const getElementBoundCoordinateObject = (element: HTMLCanvasElement | HTMLElement): DOMRect => element.getBoundingClientRect();

const getRelativeCoordinates = (x: number, y: number, parentX: number, parentY: number) => [parentX + x, parentY + y];

const computeShapePositionBasedOnParent = (x: number, y: number, parentX: number = 0, parentY: number = 0, position: 'center'): number[] => {
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


const createShape = (shapeType: string, ctx: any, config: any) => {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.beginPath();
    switch (shapeType) {
        case 'circle':
            ctx.arc(config.x, config.y, config.radius || 20, 0, 2 * Math.PI);
            ctx.fillStyle = config.fill;
            ctx.fill();
            ctx.strokeStyle = '#ff0f22';
            ctx.stroke();
            break;
        case 'rect':
            ctx.fillRect(config.x1, config.y1, config.x2, config.y2);
        default:
    }
    ctx.fillStyle = config.fill;
};
export {
    createShape,
    computeShapePositionBasedOnParent,
    getRelativeCoordinates,
    getCanvasElement,
    getElementBoundCoordinateObject
}
