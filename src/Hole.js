import { CustomPIXIComponent } from "react-pixi-fiber"
import * as PIXI from "pixi.js"

const TYPE = "Hole"
export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { fill, x, y, width, height, visible } = newProps
    instance.clear()
    instance.beginFill(fill)
    instance.drawEllipse(x, y, width, height)
    instance.setTransform(0, 40)
    if (visible == false) { instance.destroy() }
  }
}
export default CustomPIXIComponent(behavior, TYPE)
