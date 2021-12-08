import { AiOutlineSearch, AiOutlineUnorderedList, AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import { 
    BsCalendar3, 
    BsFillInboxFill, 
    BsFillFlagFill, 
    BsCalendarDate, 
    BsClock, 
    BsPlusCircle, 
    BsFillPlusCircleFill
} from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import { HiOutlineInformationCircle } from "react-icons/hi"

const Icons = () => {
  
  return (
    <>
      <div>Search - <AiOutlineSearch /></div>
      <div>Calendar - <BsCalendar3 /></div>
      <div>Today - <BsCalendarDate /></div>
      <div>All - <BsFillInboxFill /></div>
      <div>Flag - <BsFillFlagFill /></div>
      <div>List - <AiOutlineUnorderedList /></div>
      <div>Clock - <BsClock /></div>
      <div>Location - <FaLocationArrow /></div>
      <div>Information - <HiOutlineInformationCircle /></div>
      <div>Plus first - <AiOutlinePlus /></div>
      <div>Plus second outline - <BsPlusCircle /></div>
      <div>Plus third fill - <BsFillPlusCircleFill /></div>
      <div>Close - <AiOutlineClose /></div>
    </>
  )
}

export default Icons
