import styled from "styled-components";

export const RepositoryContainer = styled.div`
color: #fff;
display: flex;
flex-direction: column;
`

export const FindButton = styled.input`
    padding: 10px 15px;
    background-color: #272727ff;
    border: 0.03rem solid #929292ff;
    border-radius: 6px;
    font-size: 16px;
    width: 55%;
    transition: border-color 0.3s ease-in-out;

    &::placeholder {
    color: #9a9a9a;
    }
`

export const FilterButtons = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    padding: 10px 15px;
    background-color: #272727ff;
    border: 0.03rem solid #929292ff;
    border-radius: 6px;
    font-size: 16px;
    color:#fff;
`
export const NewButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    padding: 10px 15px;
    background-color: #26974bff;
    border: 0.03rem solid #929292ff;
    border-radius: 6px;
    font-size: 16px;
    color:#fff;
`

export const RepositoryHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 2.5rem;
    gap: 0.5rem;
    margin-bottom: 3rem;
`