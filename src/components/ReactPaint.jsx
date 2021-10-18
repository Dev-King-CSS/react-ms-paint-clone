//! Imports 📲
import { Component } from "react"
import MenuBar from "./MenuBar"
import Content from "./Content"
import ColorPanel from "./ColorPanel"
//! Images Imports 📃
import pencil from "../images/pencil.svg"
import line from "../images/line.svg"
import brush from "../images/brush.svg"
import fill from "../images/fill.svg"
import rectangle from "../images/rectangle.svg"
import text from "../images/text.svg"
import erase from "../images/erase.svg"

// Defaults
const defaultColor = "black"
const defaultTool = "Pencil"

//* Tools' names and images
const toolbarItems = [
  { name: "Pencil", image: pencil },
  { name: "Line", image: line },
  { name: "Brush", image: brush },
  { name: "Fill", image: fill },
  { name: "Text", image: text },
  { name: "Rectangle", image: rectangle },
  { name: "Erase", image: erase },
]

//! The main ReactPaint class 🤯
class ReactPaint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: defaultColor,
      selectedItem: defaultTool,
      toolbarItems: toolbarItems,
    }
    this.changeColor = this.changeColor.bind(this)
    this.changeTool = this.changeTool.bind(this)
  }

  changeColor(event) {
    this.setState({ color: event.target.style.backgroundColor })
  }

  changeTool(event, tool) {
    this.setState({ selectedItem: tool })
    console.log(event.timeStamp)
  }

  //! JSX code </>
  render() {
    return (
      <>
        <MenuBar />
        <Content
          items={this.state.toolbarItems}
          activeItem={this.state.selectedItem}
          handleClick={this.changeTool}
          color={this.state.color}
        />
        <ColorPanel
          selectedColor={this.state.color}
          handleClick={this.changeColor}
        />
      </>
    )
  }
}

export default ReactPaint
