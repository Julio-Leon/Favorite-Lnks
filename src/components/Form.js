import { useState } from 'react'

const Form = (props) => {

  const defaultForm = {
    name: "",
    URL: ""
  }

  const [formState, setFormState] = useState(defaultForm)

  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
    console.log(formState)
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    props.addLink(formState)
    setFormState(defaultForm)
  }

  return (
    <form onSubmit={onFormSubmit}>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <label htmlFor="name"></label>
      <input type="text" name="name" onChange={handleChange} value={formState.name}/>
      <label htmlFor="URL"></label>
      <input type="text" name="URL" onChange={handleChange} value={formState.URL}/>
      <input type="submit" value="Add Link"/>
    </form>
  )
}

export default Form
