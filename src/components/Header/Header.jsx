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
            <Dropdown overlay={logo} onOpenChange={handleOpenChange} open={open}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div>UniverseLib</div>
                    <KeyboardDoubleArrowDownIcon/>
                  </Space>
                </a>
            </Dropdown>
            </div>
            <div className='header-pages'>
              <div className="catalog-header">
                  <Link to="/catalog" className='nav-link'>
                    <DehazeIcon/>
                    Каталог
                    <DownOutlined />
                  </Link>
              </div>
              <div className="search-header">
                  <Link to="/search" className='nav-link'>
                    <SearchOutlined />
                    Поиск
                  </Link>
              </div>
              <div className="forum-header">
                  <Link to="/forum" className='nav-link'> 
                  <ForumIcon />
                    Форум
                  </Link>
              </div>
              <div className="faq-header">
                  <Link to="/faq" className='nav-link'> 
                    <HelpOutlineIcon />
                    FAQ
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
                      <button>Вход</button>
                      <button>Регистрация</button>
                    </div>
                </Link>
              </div>
              <div>
                <button>
                  <Brightness4Icon/>
                </button>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header