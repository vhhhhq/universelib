import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './MangaTitle.scss'
import BlockInfo from '../BlockInfo/BlockInfo';
import { Routes, Route, Link } from "react-router-dom";
import Information from '../../pages/Information/Information'
import Chapter from '../../pages/Chapter/Chapter'
import Comment from '../../pages/Comment/Comment'
import Discussions from '../../pages/Discussions/Discussions'



const MangaTitle = () => {
  const [value, setValue] = React.useState(2);

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
    <div className='mangaTitle'>
      <div className='content-lib'>
        <div className='manga-container-one'>
          <div className='title-manga'>
            <h1>Russian name</h1>
            <p>Name en</p>
          </div>
          <div>
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Rating name="no-value" value={null} />
              <Typography component="legend">4.45</Typography>
            </Box>
          </div>
        </div>
        <div className='manga-container-two'>
          <BlockInfo/>
          <Routes>
            <Route path="/information" element={<Information/>} />
            <Route path="/chapter" element={<Chapter />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/discussions" element={<Discussions/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MangaTitle
