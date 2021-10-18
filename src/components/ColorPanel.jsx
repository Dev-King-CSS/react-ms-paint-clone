//! Imports 📲
import { Component } from "react"

//* Color Palette's Colors 🎨
const colors = [
  "#000000",
  "#464646",
  "#787878",
  "#980031",
  "#ed1d25",
  "#ff7d01",
  "#ffc30e",
  "#a7e71d",
  "#23b14c",
  "#03b8ef",
  "#4c6cf3",
  "#303699",
  "#6e3198",
  "#ffffff",
  "#dcdcdc",
  "#9c593c",
  "#ffa3b1",
  "#e5aa7a",
  "#f5e59c",
  "#fff9be",
  "#d3f9bc",
  "#9cbb60",
  "#99d9eb",
  "#6f99d2",
  "#536c8e",
  "#b5a5d6",
]

//* Selected color's function
const SelectedColor = ({ color }) => {
  const style = {
    backgroundColor: color,
  }

  return <div className="color-selected" style={style} />
}

//* Other color's function
const Color = ({ color, handleClick }) => {
  const style = {
    backgroundColor: color,
  }

  return <div className="color" style={style} onClick={handleClick} />
}

//! The main ColorPanel class 🤯
class ColorPanel extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.handleClick(event)
  }

  render() {
    //* Mapping over each color
    const colorItems = colors.map(color => (
      <Color color={color} key={color} handleClick={this.handleClick} />
    ))

    //! JSX code </>
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <abbr title="Selected color">
          <SelectedColor color={this.props.selectedColor} />
        </abbr>
        <div className="color-panel">{colorItems}</div>
      </div>
    )
  }
}

export default ColorPanel
