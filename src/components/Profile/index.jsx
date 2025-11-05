import React from 'react';
import { ProfileImage, ProfileContainer, ProfileContent, Nome, User, BotaoPerfil, Followers, Divider } from './styles';
import { CgUserRemove } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { FcRating } from "react-icons/fc";
import { FcButtingIn } from "react-icons/fc";

export const Profile = ({ children }) => {
    return (<>
        <ProfileContainer>
            <ProfileImage
                src="../../../Assets/gisellegarciaz-profilePic.png" />
            <ProfileContent>
                <Nome>Giselle Garcia</Nome>
                <User>gisellegarciaz</User>
                <BotaoPerfil>Edit Profile</BotaoPerfil>
                <Followers>
                    
                    <p><FiUsers size={16}/> 0 followers  •  1 following</p>
                </Followers>
                <Divider />
                <h2>Archivements</h2>
                <FcRating size={90}/>
                <FcButtingIn size={90}/>
                {/* <FiUsers size={18}/> */}
            </ProfileContent>
        </ProfileContainer>



    </>
    );

}