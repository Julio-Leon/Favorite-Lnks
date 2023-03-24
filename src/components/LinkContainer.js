import { useState } from 'react'
import Form from './Form'
import Table from './Table'

const LinkContainer = (props) => {

  const favLinkDefault = [
    {
      name: "My Github",
      URL: "https://github.com/Julio-Leon"
    }
  ]

  const [favLinks, setFavLinks] = useState(favLinkDefault)

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    const tempFavLinks = []
    favLinks.forEach((favLink, i) => {
      console.log(i, index)
      if (i !== index) {
        tempFavLinks.push(favLink)
      }
    })
    console.log(tempFavLinks)
    setFavLinks(tempFavLinks)
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
    setFavLinks([...favLinks, favLink])
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {<Table removeLink={handleRemove} linkData={favLinks}/>}

      <br />

      <h3>Add New</h3>
      {<Form addLink={handleSubmit}/>}
    </div>
  )
}

export default LinkContainer
