import MangaContent from '../../components/MangaContent/MangaContent'
import MangaTitle from '../../components/MangaTitle/MangaTitle'
import './MangaList.scss'



const MangaList = () => {

  return (
    <div className='manga'>
        <div className='content'>
          <div className='MangaContent-lib'>
              <MangaContent/>
          </div>
          <div className='MangaTitle-lib'>
              <MangaTitle/>
          </div>
        </div>
    </div>
  )
}

export default MangaList