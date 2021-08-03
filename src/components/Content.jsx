const Content = () => {
    const element = 
    {
        type: 'p',
        props: 'Basado en el routemap de React:',
        ref: {
            type: 'a',
            link:'https://roadmap.sh/react',
        }
    };

    return <>
        {<element.type>{element.props}</element.type>}
        {<element.ref.type href="https://roadmap.sh/react">{element.ref.link}</element.ref.type>}
    </>

  }

export default Content