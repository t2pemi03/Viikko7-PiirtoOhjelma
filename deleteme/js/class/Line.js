import { Shape } from "./Shape.js";

export class Line extends Shape{
    
    
    constructor(x,y){
        super(x,y)      
    }

    draw(ctx){
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this._x2, this._y2)
        ctx.lineWidth = this._lineWidth
        ctx.strokeSyle = "red"
        ctx.stroke()

}
}