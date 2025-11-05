import styled from "styled-components";

export const HeaderContainer = styled.header`
    maxWidth: 100%;
    height: 7.5rem;
    background-color: #010409;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 0.3px solid #aba6a6ff;
    font-family: 
`;

export const BlocoProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`

export const Logo = styled.div`
    display: flex;
    color: white;
    cursor: pointer;
    width: 2.5rem;
`;

export const BlocoActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
`

export const LinhaSuperior = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    margin: 1rem;
`


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 10rem;
    font-weight: 400;
`;

export const NavItem = styled.span`
    position: relative;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #ffffff33; 
    border-radius: 4px;
    cursor: pointer;
    }
`;

export const ProfileImage = styled.img`
    display: flex;
    width: 2rem;
    border-radius: 50%;
    cursor: pointer;
`;
