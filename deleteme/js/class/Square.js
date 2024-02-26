import { Rectangle } from "./Rectangle.js";

export class Square extends Rectangle{
    constructor(x, y, sidelength){
        super(x, y, sidelength, sidelength)
    }

    draw(ctx){
        ctx.beginPath()
        ctx.rect(this._x, this._y, this._width, this._height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeSyle = "red"
        ctx.stroke()
    }
}