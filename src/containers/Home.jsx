import React from 'react';
import Cover from '../components/Cover';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Home() {
    return (
        <div>
            <React.Fragment>
                <Header />
                <Cover />
                <Footer />
            </React.Fragment>
        </div>
    );
}
