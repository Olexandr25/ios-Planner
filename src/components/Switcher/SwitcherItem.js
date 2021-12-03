import React from "react"

const SwitcherItem = props => {
  const {
    color,
    colorFocus,
    bgColor,
    bgColorFocus,
    Icon,
    iconColor,
    iconBackgroundColor,
    iconColorFocus,
    text,
    length,
  } = props
  return (
    <div className={`p-4 ${color}`}>
      <div className={`switcher-item ${bgColor}  `}>
        <div className="d-flex justify-content-between mb-4">
          <div className={`switcher-icon ${iconBackgroundColor} ${iconColor}`}>
            <Icon />
          </div>
          <div className="fs-larger">{length}</div>
        </div>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default SwitcherItem
