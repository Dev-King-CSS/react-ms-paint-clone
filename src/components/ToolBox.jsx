import { Component } from "react"

const Button = ({ image, active, handleClick, name }) => {
  const style = {
    __html: image,
  }

  return (
    <div
      className={"button" + (active ? "active" : "")}
      onClick={e => handleClick(e, name)}
    >
      <abbr title="Click to select (some icons don't work 😅)">
        <img src={style.__html} alt="img" />
      </abbr>
    </div>
  )
}

class ToolBox extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, name) {
    this.props.handleClick(event, name)
  }

  render() {
    const items = this.props.items.map(item => (
      <Button
        active={this.props.selectedItem === item.name ? true : false}
        name={item.name}
        image={item.image}
        key={item.name}
        handleClick={this.handleClick}
      />
    ))

    return <div className="toolbox">{items}</div>
  }
}

export default ToolBox
