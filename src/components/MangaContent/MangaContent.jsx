import React, { useEffect, useState } from 'react'
import './MangaContent.scss'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const MangaContent = () => {
  const [place, setPosts] = useState([])
  
  const fetchData = (props) => {
    fetch(`https://mangauniverse.herokuapp.com/manga-list/`)
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
    <div className='manga-content'>
      <div className='manga-block'>
        <div className='image-edit'>
          <img src='+' alt="">
          </img>
          <div className='image-icon'>
            <button><RssFeedIcon/></button>
            <button><WarningAmberIcon/></button>
            <button><AddBoxIcon/></button>
            <button><ModeEditIcon/></button>
          </div>
        </div>
      </div>
      <div className='manga-read'>
          <button>Начать читать</button>
      </div>
      <div className='manga-info'>
        <div>
          <p>Тип</p>
          <span>...</span>
        </div>
        <div>
          <p>Формат выпуска</p>
          <span>...</span>
        </div>
        <div>
          <p>Год релиза</p>
          <span>...</span>
        </div>
        <div>
          <p>Статус тайтла</p>
          <span>...</span>
        </div>
        <div>
          <p>Статус перевода</p>
          <span>...</span>
        </div>
        <div>
          <p>Автор</p>
          <span>...</span>
        </div>
        <div>
          <p>Художник</p>
          <span>...</span>
        </div>
        <div>
          <p>Издательство</p>
          <span>...</span>
        </div>
        <div>
          <p>Загружено глав</p>
          <span>...</span>
        </div>
        <div>
          <p>Альтернативные названия</p>
          <span>{place.results?.map(item=>(<span>{item.english_name}</span>))}</span>
        </div>
      </div>
    </div>
  )
}

export default MangaContent
