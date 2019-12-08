/*Returns a HTMLCanvasElement*/
export const getCanvasElement = (id: string): HTMLCanvasElement => document.getElementById(id) as HTMLCanvasElement;

/*Get DOMRect object of the element*/
export const getElementBoundCoordinateObject = (element: HTMLCanvasElement | HTMLElement): DOMRect => element.getBoundingClientRect();

export const getRelativeCoordinates = (x: number, y: number, parentX: number, parentY: number) => [parentX + x, parentY + y];

export const computeShapePositionBasedOnParent = (x: number, y: number, element: HTMLCanvasElement, position: 'center'): number[] => {

    const parentCoordinates = getElementBoundCoordinateObject(element);
    const parentX = Math.ceil(parentCoordinates.x);
    const parentY = Math.ceil(parentCoordinates.y);
    let _x = 0, _y = 0;
    if (!(x && y)) {
        _x = Math.ceil(parentX + (parentCoordinates.width / 2));
        _y = Math.ceil(parentY + (parentCoordinates.height / 2));
        return [_x, _y];
    }
    if (position === 'center') {
        return [Math.ceil(parentX + (parentCoordinates.width / 2)) + x, Math.ceil(parentY + (parentCoordinates.height / 2) + y)];
    }

    return [parentCoordinates.x, parentCoordinates.y];
};


