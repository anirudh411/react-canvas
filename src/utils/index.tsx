/*Returns a HTMLCanvasElement*/
export const getCanvasElement = (id: string): HTMLCanvasElement => document.getElementById(id) as HTMLCanvasElement;

/*Get DOMRect object of the element*/
export const getElementBoundCoordinateObject = (element: HTMLCanvasElement | HTMLElement): DOMRect => element.getBoundingClientRect();

export const computeShapePositionBasedOnParent = (x: number, y: number, element: HTMLCanvasElement, position: 'center'): number[] => {

    const parentCoordinates = getElementBoundCoordinateObject(element);

    if (position === 'center') {
        const parentX = Math.ceil(parentCoordinates.x);
        const parentY = Math.ceil(parentCoordinates.y);
        return [Math.ceil(parentX + (parentCoordinates.width / 2)) + x, Math.ceil(parentY + (parentCoordinates.height / 2) + y)];
    }

    return [parentCoordinates.x, parentCoordinates.y];
};


