import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Rating from '../../container/Rating/Rating'
import './BlockInfo.scss'

const BlockInfo = () => {
  return (
    <div className='container-universe'>
      <div className='blockInfo'>
        <div className='info'>
          <Link to="/infomation" className='block-link'>Информация</Link>
          <Link to="/chapter" className='block-link'>Главы</Link>
          <Link to="/comment" className='block-link'>Комментарии </Link>
          <Link to="/discussions" className='block-link'>Обсуждения</Link>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus voluptas in. Sunt, obcaecati cum. Enim, iste quo. Dolor quasi qui reprehenderit, sed commodi illum vel deserunt dolores cupiditate accusantium quaerat perferendis. Dicta praesentium, vitae consectetur inventore atque laboriosam debitis et obcaecati ab magni mollitia dignissimos, soluta in. Facilis aut, autem, doloribus vero ipsa sapiente asperiores laborum earum iste hic rem nisi molestias fugiat ex perferendis eaque quod eveniet ab libero reprehenderit impedit tenetur molestiae! Exercitationem inventore asperiores quaerat. Dignissimos necessitatibus voluptas totam magni, quisquam assumenda ipsam a reprehenderit laudantium libero exercitationem vitae tenetur sequi ab eos ut sapiente eligendi?</p>
        </div>
        <div>
          <Button/>
        </div>
        <div>
          <Rating/>
        </div>
      </div>
    </div>
  )
}

export default BlockInfo
       