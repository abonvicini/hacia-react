import Heading from "../Heading"
import advancedTopicsMock from "../../mock/advanced-topics.json"
import ListItems from "../ListItems"
import Link from "../Link"
import React from "react"
import "./AdvancedTopics.css"

const AdvancedTopics = () => {

/*   const getLink = (link) => link.map(({ links }) =>
    <div>
      {links.name}
      <Link url={links.url}>{links.url}</Link>
    </div>
  ) */

  const getTitle = (titles) => titles.map(({ title }) =>
    
    <ListItems key={title}>
      <h3>{title}</h3>
      {/* {getLink({links})} */}
    </ListItems>


  )




  return <div className="advanced-topics">

    <Heading>
    Advanced Topics
    </Heading>
    {getTitle(advancedTopicsMock.data)}
    
    

  </div>
}

export default AdvancedTopics



