import React from 'react';
import { styles } from './styles';
import MainBody from '../../components/MainBody';
import MainContent from '../../components/MainContent';
import Header from '../../components/Header';
import { Profile } from '../../components/Profile';
import { Repository } from '../../components/Repository';
import RepositoryItem from '../../components/RepositoryItem';



export const HomePage = () => {
    return (<>
        <MainBody>

            <Header />
            <MainContent>
                <Profile />
                <Repository>
                    <RepositoryItem 
                    title = "React-TrabalhoIndividual"
                    content = "Respositório do trabalho individual da disciplina de Desenvolvimento Web (React) da residência TIC/ Software do SERRATEC 2025.2."
                    stack = "JavaScript"
                    />

                    <RepositoryItem 
                    title = "API-TrabalhoGrupo4"
                    content = "Respositório do trabalho individual da disciplina de Desenvolvimento Web (React) da residência TIC/ Software do SERRATEC 2025.2."
                    stack = "Java"
                    />

                    <RepositoryItem 
                    title = "FrontEssencial-TrabalhoGrupo5"
                    content = "Respositório do trabalho individual da disciplina de Desenvolvimento Web (React) da residência TIC/ Software do SERRATEC 2025.2."
                    stack = "HTML  CSS"
                    />

                    <RepositoryItem 
                    title = "POO-TrabalhoIndividual"
                    content = "Respositório do trabalho individual da disciplina de Desenvolvimento Web (React) da residência TIC/ Software do SERRATEC 2025.2."
                    stack = "Java"
                    />
                </Repository>
            </MainContent>

        </MainBody>
    </>
    );
};

export default HomePage;
