import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Banner from '../Components/Home/Banner';
import Services from '../Components/Home/Services';
import Everything from '../Components/Home/Everything';
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Everything />
            <Footer />
        </div>
    );
};

export default Home;