import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;

`

export const Left = styled.div`
display: flex;
flex-direction: column;
`

export const Right = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 15rem;
gap: 1.5rem;
`

export const Titulo = styled.div`
display: flex;
flex-direction: column;
font-size: 2rem;
font-weight: bold;
color: #3B82F6;
`

export const Paragraph = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 70%;
padding: 1rem 0 1rem 0;
`

export const FavoriteButton = styled.button`
    padding: 10px 15px;
    color: #fff;
    background-color: #272727ff;
    border: 0.03rem solid #929292ff;
    border-radius: 6px;
    margin-top: 3rem;
    font-size: 16px;
    width: 10rem;
    transition: border-color 0.3s ease-in-out;
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #929292ff; 
    margin: 2.3rem 0;
`
