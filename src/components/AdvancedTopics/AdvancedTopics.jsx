import Heading from "../Heading"
import advancedTopicsMock from "../../mock/advanced-topics.json"
import ListItems from "../ListItems"
import React from "react"
import "./AdvancedTopics.css"
import Paragraph from "../Paragraph"

const AdvancedTopics = () => {

/*   const getLink = (link) => link.map(({ links }) =>
    <section>
      {links.name}
      <Link url={links.url}>{links.url}</Link>
    </section>
  ) */

  const getTitle = (titles) => titles.map(({ title }) =>
    
    <ListItems key={title}>
      <h3>{title}</h3>
      {/* {getLink({links})} */}
    </ListItems>


  )




  return <section className="advanced-topics">

    <Heading>
    Advanced Topics
    </Heading>
    <Paragraph>

    {getTitle(advancedTopicsMock.data)}
    </Paragraph>
    
    

  </section>
}

export default AdvancedTopics



