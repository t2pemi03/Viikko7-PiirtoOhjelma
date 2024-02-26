import { Shape } from "./Shape.js";

export class Rectangle extends Shape{
    

    constructor(x,y){
        super(x,y)
        
    }

    draw(ctx){
        ctx.beginPath()
        ctx.strokeSyle = "red"
        ctx.rect(20,20,150,100)
        ctx.lineWidth = this._lineWidth
        ctx.stroke()
    }
}
