import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './Card.scss'

const Card = () => {
    const [place, setPosts] = useState([])
    const { id } = useParams()


    const fetchData = (props) => {
        fetch(`https://mangauniverse.herokuapp.com/manga-list=${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPosts(data)
        })
    }
    useEffect(() => {
        fetchData()
        console.log(place)
    }, [])

    if (!place) return
    
  return (
    <div className='card'>
        <div className='card-universelib'>
            <div>
                <img src='+' alt="" />
            </div>
            <dir>
                <div>{place.results?.map(item => (<span>{item.russian_name}</span>))}</div>
                <span>type</span>
            </dir>
        </div>
        <div className='card-universelib'>
            <div>
                <img src='+' alt="" />
            </div>
            <dir>
                <h3>Title</h3>
                <span>Type</span>
            </dir>
        </div>
        <div className='card-universelib'>
            <div>
                <img src='+' alt="" />
            </div>
            <dir>
                <h3>Title</h3>
                <span>Type</span>
            </dir>
        </div>
        <div className='card-universelib'>
            <div>
                <img src='+' alt="" />
            </div>
            <dir>
                <h3>Title</h3>
                <span>Type</span>
            </dir>
        </div>
        <div className='card-universelib'>
            <div>
                <img src='+' alt="" />
            </div>
            <dir>
                <h3>Title</h3>
                <span>Type</span>
            </dir>
        </div>
    </div>
  )
}

export default Card