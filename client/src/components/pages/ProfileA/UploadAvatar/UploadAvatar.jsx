import React from 'react'
import axios from 'axios'

const Form = (props) => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null)
  console.log(props.user)
  const handleSubmit = async(event) => {
    console.log(props.user)
    event.preventDefault()
    const formData = new FormData()
    formData.append("selectedFile", selectedFile)
    axios
        .post(`https://hidden-beach-19071.herokuapp.com/api-user/uploadPhoto?username=${props.user.username}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        })
        .then((res) => {
            props.reloadWithImg()
            window.location.reload()
        })
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
  )
}

export default Form