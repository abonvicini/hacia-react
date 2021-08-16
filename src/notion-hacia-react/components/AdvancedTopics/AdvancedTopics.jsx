import Heading from "../Heading"
import advancedTopicsMock from "../../mock/advanced-topics.json"
import ListItems from "../ListItems"
import Link from "../Link"
import React from "react"
import "./AdvancedTopics.css"
import { Fragment } from "react"

const AdvancedTopics = () => {

  const getLink = (links) => links.map(({ name, url }) =>
    <Fragment>
      {name}
      <Link url={url}>{url}</Link>
      <br />
    </Fragment>
  )

  const getTitle = (titles) => titles.map(({ title, links }) =>
    <ListItems key={title}>
      <h3>{title}</h3>
      {getLink(links)}
    </ListItems>
  )

  return <section className="advanced-topics">
    <Heading>
      Advanced Topics
    </Heading>
    {getTitle(advancedTopicsMock.data)}
  </section>
}

export default AdvancedTopics



