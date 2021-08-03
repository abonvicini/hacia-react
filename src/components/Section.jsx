const Section = ({icon, text}) => {
    if (!icon && text) {
      return <h2>{text}</h2>
    }
    return <h2>{icon +" "+ text}</h2>
  }

export default Section