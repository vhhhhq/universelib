import React from "react";
import Card from '../../components/Card/Card'
import MangaList from "../MangaList/MangaList"
import './HomeManga.scss'

const HomeManga = () => {

  return (
    <div>
        <div>
            <Card/>
        </div>
        <div>
            <MangaList/>
        </div>
    </div>
  )
}

export default HomeManga