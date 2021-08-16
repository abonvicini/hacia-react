import "./Link.css"

const Link = ({ url, children }) => {
  return (
    <a href={url || '#'} target="_blank" rel="noreferrer" className="link">{children}</a>
  )
}

export default Link