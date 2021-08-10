import challengesMook from "../../mock/challenges.json"
import ListItem from "../ListItems"
import Heading from "../Heading"
import Link from "../Link"
import "./Challenges.css"

const Challenges = () => {
  const getData = (data) => data.map(({ name, url }) =>
    <ListItem>
      <Link href={url}>{url}</Link>
    </ListItem>
  )



  return <section className="challenges">
    <Heading>
      Challenges
    </Heading>
    {getData(challengesMook.data)}
  </section>


}

export default Challenges