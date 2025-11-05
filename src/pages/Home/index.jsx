import React from 'react';
import { styles } from './styles';
import MainBody from '../../components/MainBody';
import MainContent from '../../components/MainContent';
import Header from '../../components/Header';
import { Profile } from '../../components/Profile';



export const HomePage = () => {
    return (<>
        <MainBody>

            <Header />
            <MainContent>
                <Profile />

            </MainContent>

        </MainBody>
    </>
    );
};

export default HomePage;
