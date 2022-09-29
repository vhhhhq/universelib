import React from 'react'
import { Progress } from 'antd';
import './Rating.scss'
import StarRateIcon from '@mui/icons-material/StarRate';

const Rating = () => {
  return (
    <div className='Rating'>
      <div className='progress-rating'
        style={{
          width: 370,
        }}
      >
        <p>В списках у {} человек</p>
        <div className='title-progress'><p>Читаю</p><Progress percent={50} status="active" /></div>
        <div className='title-progress'><p>В планах</p><Progress percent={70} status="active" /></div>
        <div className='title-progress'><p>Брошено</p><Progress percent={50} status="active" /></div>
        <div className='title-progress'><p>Прочитано</p><Progress percent={70} status="active" /></div>
        <div className='title-progress'><p>Любимые</p><Progress percent={50} status="active" /></div>
        <div className='title-progress'><p>Другое</p><Progress percent={70} status="active" /></div>
      </div>
      <div className='progress-rating'
        style={{
          width: 370,
        }}
      >
        <p>Оценки пользователей</p>
        <div className='title-progress'><p>5 <StarRateIcon/></p><Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={70} status="active" /></div>
        <div className='title-progress'><p>4 <StarRateIcon/></p><Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={70} status="active" /></div>
        <div className='title-progress'><p>3 <StarRateIcon/></p><Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={70} status="active" /></div>
        <div className='title-progress'><p>2 <StarRateIcon/></p><Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={70} status="active" /></div>
        <div className='title-progress'><p>1 <StarRateIcon/></p><Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={70} status="active" /></div>
      </div>
    </div>
  )
}

export default Rating
