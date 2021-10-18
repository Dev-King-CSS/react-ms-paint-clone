//! Imports 📲
import { Component } from "react"

//* A custom component that displays a list of menus
const MenuItem = ({ text }) => {
  return <div className="menu-items">{text}</div>
}

//! The main Menubar class 🤯
class MenuBar extends Component {
  //! JSX code </>
  render() {
    return (
      <div className="menu-bar">
        <abbr title="This doesn't work!">
          <MenuItem text="File" />
          <MenuItem text="Edit" />
          <MenuItem text="View" />
          <MenuItem text="Image" />
          <MenuItem text="Colors" />
          <MenuItem text="Help" />
        </abbr>
      </div>
    )
  }
}

export default MenuBar
