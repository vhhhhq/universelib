import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='theme-footer'>
                <p>Тема сайта</p>
                <button>a</button>
                <button>A</button>
            </div>
            <div>
                <p>В случаях нарушения авторских прав - обращайтесь на почту info@universelib.me</p>
            </div>
            <div className='link-footer'>
                <div className='link-title'>
                    <a href="">Обратная связь </a>
                    <a href="">Для правообладателей</a>
                    <a href="">Пользовательское соглашение</a>
                    <a href="">DMCA</a>
                    <a href="">Каталог манги</a>
                    <a href="">Лицензия</a>
                </div>
                <div className='link-data'>
                    <span>2022</span>
                    <a href="">UniverseLib</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer