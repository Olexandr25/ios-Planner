import React from "react"
import { SwitcherItem } from "."
import {
  BsFillInboxFill,
  BsCalendar3,
  BsCalendarDate,
  BsFillFlagFill,
} from "react-icons/bs"

const Switcher = () => {
  const icon = 0,
    color = 2,
    length = 0
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <SwitcherItem
          color={"switcher-text"}
          colorFocus={color}
          bgColor={"bg-color-gray-lighten"}
          bgColorFocus={"bg-color-gray"}
          Icon={BsFillInboxFill}
          iconColor={"color-white"}
          iconBackgroundColor={"bg-color-gray"}
          iconColorFocus={icon}
          text={"All"}
          length={length}
        />
        <SwitcherItem
          color={"switcher-text"}
          colorFocus={color}
          bgColor={"bg-color-gray-lighten"}
          bgColorFocus={"bg-color-primary"}
          Icon={BsCalendar3}
          iconColor={"color-white"}
          iconBackgroundColor={"bg-color-danger"}
          iconColorFocus={icon}
          text={"Calendar"}
          length={length}
        />
      </div>
      <div className="d-flex">
        <SwitcherItem
          color={"switcher-text"}
          colorFocus={color}
          bgColor={"bg-color-gray-lighten"}
          bgColorFocus={"bg-color-danger"}
          Icon={BsCalendarDate}
          iconColor={"color-white"}
          iconBackgroundColor={"bg-color-primary"}
          iconColorFocus={icon}
          text={"Today"}
          length={length}
        />
        <SwitcherItem
          color={"switcher-text"}
          colorFocus={color}
          bgColor={"bg-color-gray-lighten"}
          bgColorFocus={"bg-color-warning"}
          Icon={BsFillFlagFill}
          iconColor={"color-white"}
          iconBackgroundColor={"bg-color-warning"}
          iconColorFocus={icon}
          text={"Flagged"}
          length={length}
        />
      </div>
    </div>
  )
}

export default Switcher
