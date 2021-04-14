import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { useParams } from "react-router"
import { UPDATE_MOVIE } from "../queries"

function EditMovie () {
  let { id } = useParams();

  const [inputForm, setInputForm] = useState({
    title: "",
    popularity: 0,
    overview: "",
    poster_path: "",
    tags: []
  })

  const [editMovie] = useMutation(UPDATE_MOVIE)

  function formOnSubmit (e) {
    e.preventDefault()
    editMovie({
      variables: {
        id: id,
        updatedMovie: inputForm
      }
    })
  }

  return (
    <>
      <div className="container center">
        <h1>Edit Movie Form</h1>
        <form onSubmit={e => formOnSubmit(e)}>
        <label htmlFor="title">Title :</label><br/>
        <input
          id="title"
          name="title"
          placeholder="Title"
          type="text"
          value={inputForm.title}
          onChange={(e) => setInputForm({...inputForm, title: e.target.value})}
        />
        <br/>

        <label htmlFor="popularity">Popularity :</label><br/>
        <input
          id="popularity"
          type="text"
          name="popularity"
          placeholder="popularity"
          value={inputForm.popularity}
          onChange={(e) => setInputForm({...inputForm, popularity: Number(e.target.value)})}
        /><br/>

        <label htmlFor="overview">Overview :</label><br/>
        <input
          id="overview"
          type="text"
          name="overview"
          placeholder="Overview"
          value={inputForm.overview}
          onChange={(e) => setInputForm({...inputForm, overview: e.target.value})}
        /><br/>

        <label htmlFor="poster_path">Poster path :</label><br/>
        <input
          id="poster_path"
          type="text"
          name="poster_path"
          placeholder="poster_path"
          value={inputForm.poster_path}
          onChange={(e) => setInputForm({...inputForm, poster_path: e.target.value})}
        /><br/>

        <label htmlFor="tags">Tags :</label><br/>
        <input
          id="tags"
          type="text"
          name="tags"
          placeholder="Tags"
          value={inputForm.tags}
          onChange={(e) => setInputForm({...inputForm, tags: [e.target.value]})}
        /><br/><br/>

        <button className="btn btn-primary">submit</button>
        </form>
      </div>
    </>
  )
}

export default EditMovie