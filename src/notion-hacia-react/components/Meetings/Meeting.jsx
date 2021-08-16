import Heading from "../Heading"
import ListItems from "../ListItems"
import Parrafo from "../Paragraph"
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
    
      <section className="meetings">
        <Heading>⌛ Reuniones</Heading>
        <Parrafo>
          {getMeetings(meetingsMook.meetings)}
        </Parrafo>
      </section>
  
  )
}

export default Meetings