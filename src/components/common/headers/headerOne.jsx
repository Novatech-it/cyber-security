import React, { useEffect, useState } from 'react'
import white_logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import useStickyHeader from '../../../hooks/useStickyHeader'
import { menuList } from '../../../utlits/fackData/menuList'
import MobileMenu from './mobileMenu'

const HeaderOne = () => {
    useStickyHeader()
    const [othersOption, setOtherOption] = useState(false)
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div className="navbar-area style-1">
                <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
                <div className="desktop-nav style-2">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand me-0" to="/">
                                <img src={white_logo} width={130} className="black-logo" alt="logo" />
                            </Link>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    {
                                        menuList.map(({ id, dropDown, label, path }) => {
                                            return (
                                                <li key={id} className="nav-item">
                                                    <Link to={path} className={`nav-link ${dropDown.length ? "dropdown-toggle" : ""} `}>
                                                        {label}
                                                    </Link>
                                                    {
                                                        dropDown.length &&
                                                        <ul className="dropdown-menu">
                                                            {
                                                                dropDown.map(({ id, path, label }) => {
                                                                    return (
                                                                        <li key={id} className="nav-item">
                                                                            <Link to={path} className="nav-link">{label}</Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    }

                                                </li>
                                            )
                                        })
                                    }

                                </ul>

                                <div className="others-options">
                                    <ul>
                                        <li>
                                            <Link className="default-btn text-decoration-none" to="https://app.talentifylab.com/">
                                                <i className="ri-arrow-right-line"></i>
                                                Login
                                            </Link>

                                            <Link className="quote d-none text-decoration-none" to="https://app.talentifylab.com/">
                                                <i className="ri-chat-quote-line"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="others-option-for-responsive">
                    <div className="container">
                        <div className='menu-icon'>
                            <i className={`ri-menu-line ${menuActive ? "d-none" : "d-block "}`} onClick={() => setMenuActive(true)}></i>
                            <i className={`ri-close-line  ${menuActive ? "d-block " : "d-none"}`} onClick={() => setMenuActive(false)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderOne