import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import { Dropdown, Menu, Space } from 'antd';
import { EllipsisOutlined, DownOutlined, SearchOutlined} from '@ant-design/icons';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ForumIcon from '@mui/icons-material/Forum';
import Button from '@mui/material/Button';


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
              {
                label: 'Новости',
                key: '1',
              },
              {
                label: 'Контакты',
                key: '2',
              },
              {
                label: 'Рандом',
                key: '3',
              },
            ]}
    />
  )
  const logo = (
    <Menu
      onClick={handleMenuClick}
      items={[
              {
                label: 'Ranobe.lib',
                key: '1',
              },
              {
                label: 'Anime.lib',
                key: '2',
              },
            ]}
    />
  )

  return (
    <header className='header-content'>
        <nav className='header-nav'>
            <div className="universe-header">
                  <Space>
                    <div>
                      <Link to="/">UniverseLib</Link>
                    </div>
                  </Space>
            </div>
            <div className='header-pages'>
              <div className="catalog-header">
                  <Link to="/catalog" className='nav-link'>
                    <Button href='#text-buttons'>
                      <DehazeIcon/>
                      Каталог
                      <DownOutlined />
                    </Button>
                  </Link>
              </div>
              <div className="search-header">
                  <Link to="/search" className='nav-link'>
                    <Button href='#text-buttons'>
                      <SearchOutlined />
                      Поиск
                    </Button>
                  </Link>
              </div>
              <div className="forum-header">
                  <Link to="/forum" className='nav-link'> 
                    <Button href='#text-buttons'>
                      <ForumIcon />
                      Форум
                    </Button>
                  </Link>
              </div>
              <div className="faq-header">
                  <Link to="/faq" className='nav-link'> 
                    <Button href='#text-buttons'>
                      <HelpOutlineIcon />
                      FAQ
                    </Button>
                  </Link>
              </div>
              
              <Dropdown overlay={menu} onOpenChange={handleOpenChange} open={open}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <EllipsisOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className='header-components'>
              <div className='login-button'>
                <Link to="/login" className='nav-link'>
                    <div className='btn-header'>
                    <Button href="#text-buttons">Вход</Button>
                    <Button href="#text-buttons">Регистрация</Button>
                    </div>
                </Link>
              </div>
              <div>
                <Button href='#text-buttons'>
                  <Brightness4Icon/>
                </Button>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header