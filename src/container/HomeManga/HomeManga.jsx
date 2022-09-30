// import MangaList from '../MangaList/MangaList'
import React, { useEffect, useState, useParams } from "react";
import axios from "axios";
import Card from '../../components/Card/Card'
import MangaList from "../MangaList/MangaList"
import './HomeManga.scss'

const HomeManga = () => {
    const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("https://mangauniverse.herokuapp.com/manga-list")
      .then((res) => {
        console.log(res);
        setSales(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("sales", sales);

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