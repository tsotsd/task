function getRectangleArea() {
    return this.width * this.height; 
}

function getRectanglePerimeter () {
    return (this.width * this.height) ** 2
}
const square1 = {
    width: 1,
    height: 2,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
}

const square2 = {
    width: 90,
    height: 190,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
}

console.log(square1.getRectangleArea());
console.log(square1.getRectanglePerimeter());
console.log(square2.getRectangleArea());
console.log(square2.getRectanglePerimeter());