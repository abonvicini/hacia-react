import Heading from "../Heading"
import ListItems from "../ListItems"
import meetingsMook from "../../mock/meetings.json"
import "./Meeting.css"

const Meetings = () => {
  const getMeetings = (meetings) => {
    return meetings.map(({ key, date }) =>
      <ListItems key={key.toString()} className="li" >
        {date}
      </ListItems>
    )
  }

  return (
    <>
      <Heading>⌛ Reuniones</Heading>
      <div className="meetings">
        <ul>
          {getMeetings(meetingsMook.meetings)}
        </ul>
      </div>
    </>
  )
}

export default Meetings