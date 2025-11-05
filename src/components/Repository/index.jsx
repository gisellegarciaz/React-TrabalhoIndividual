import React from 'react';
import { RepositoryContainer, FindButton, FilterButtons, NewButton, RepositoryHeader } from './style';
import { CgUserRemove } from 'react-icons/cg';
import { CgAlbum } from "react-icons/cg";
import { BiSolidDownArrow } from 'react-icons/bi';

export const Repository = ({ children }) => {
    return (<>
        <RepositoryContainer>
            <RepositoryHeader>
                <FindButton
                    type="text"
                    placeholder="Find a repository..." />

                <FilterButtons>Type <BiSolidDownArrow size={10}/></FilterButtons>
                <FilterButtons>Language <BiSolidDownArrow size={10}/></FilterButtons>
                <FilterButtons>Sort <BiSolidDownArrow size={10}/></FilterButtons>
                <NewButton><CgAlbum size={15}/> New</NewButton>

            </RepositoryHeader>

        {children}

        </RepositoryContainer>

    </>
    );
}