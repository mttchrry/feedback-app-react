import React from "react"
import PropTypes from "prop-types"

function Header({ text, textColor, textBg }) {
  const colors = {
    backgroundColor: textBg,
    color: textColor,
  }
  return (
    <header style={colors}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback UI",
  textColor: "#FF6969",
  textBg: "rgba(0,0,0,0.4)",
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
