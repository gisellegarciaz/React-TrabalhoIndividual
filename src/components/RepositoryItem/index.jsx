import React from "react";
import { Container, Left, Right, Titulo, Paragraph, FavoriteButton, Divider } from "./styles";
import { PiStar } from 'react-icons/pi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { FaCircle } from "react-icons/fa";


export default function RepositoryItem({ title, content, stack }) {
    return (
        <>
            <Container>

                <Left>
                    <Titulo>{title}</Titulo>
                    <Paragraph>{content}</Paragraph>
                    <span><FaCircle size={15} color="yellow"/> {stack} </span>
                </Left>
                
                <Right>
                    <FavoriteButton> <PiStar /> Star <BiSolidDownArrow size={10}/> </FavoriteButton>
                    <div><img style={{width: "10rem"}} src="../../../Assets/desenho-repository.png"></img></div>
                </Right>
            </Container>
            <Divider />

        </>
    );
}