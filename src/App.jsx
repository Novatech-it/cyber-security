import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import PartnersSlider from './components/sections/partnersSlider'
import Title from './components/common/title'
import BannerTwo from "./components/sections/banners/bannerTwo.jsx";
import SecurityTwo from "./components/sections/securityTwo.jsx";
import AboutTwo from "./components/sections/abouts/aboutTwo.jsx";
import ServicesTwo from "./components/sections/services/servicesTwo.jsx";
import ChooseUsTwo from "./components/sections/chooseUsTwo.jsx";
import {partnerDataOne} from "./utlits/fackData/partnerDataOne.js";
const App = () => {

    return (
        <>
            <BannerTwo />
            <SecurityTwo />
            <AboutTwo />
            <ServicesTwo />
            <ChooseUsTwo />

            <div className="partner-area style-3 pt-100 pb-75">
                <div className="container">
                    <Title sectionName={"Partners Talentifylab"} sectionTitle={"Global Society Place Their Trust in Our Services"}/>
                    <PartnersSlider data={partnerDataOne} />
                </div>
            </div>
            <ScrollRestoration />
        </>
    )
}

export default App