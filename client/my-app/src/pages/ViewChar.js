import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewChar = (props) => {
  let { id } = useParams()
  const [charDetail, setCharDetail] = useState({})

  useEffect(() => {
    const getCharDetails = async () => {
      const res = await axios.get(`/characters/${id}`)
      setCharDetail(res.data)
    }
    getCharDetails()
  }, [id])

  return (
    <div>
      <div className="charInfo">
        <h1>{charDetail.name}</h1>
        <p>{charDetail.race}</p>
        <p>{charDetail.class}</p>
        if ({charDetail.charSheet === true}) {<p>{charDetail.link}</p>}
        <p>{charDetail.comment}</p>
      </div>
    </div>
  )
}

export default ViewChar
