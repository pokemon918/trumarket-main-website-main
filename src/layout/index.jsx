import React, {useState} from 'react'
import Header from '../components/Header';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Technology from '../pages/technology';
import Whoweare from '../pages/whoweare';
import Contactus from '../pages/contactUs';
import PrivacyPolicy from '../pages/privacyPolicy';
import Investor from '../pages/investor';
import Footer from '../components/Footer';
import TermsConditions from '../pages/termsConditions';


const Layout = () => {
    const [selectedBanner, setSelectedBanner] = useState('home');

    const onHandleClick = (label) => {
        setSelectedBanner(label);
    }
    return (
        <React.Fragment>
            <Header selectedBanner={selectedBanner} onHandleClick={onHandleClick} />
            <div className='row g-0'>
                <div className='col-12'  >
                    <Routes>
                        <Route path='/' element={<Home selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='technology' element={<Technology selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='whoweare' element={<Whoweare selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='contactus' element={<Contactus selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='privacy-policy' element={<PrivacyPolicy selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='terms-and-conditions' element={<TermsConditions selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='investor' element={<Investor selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                    </Routes>
                </div>
            </div>
          <Footer />

        </React.Fragment>
    )
}

export default Layout;
