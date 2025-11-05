// src/components/Button/styles.js
import styled, { css } from 'styled-components';

// Estilo para o contador (o número ao lado do item de navegação)
export const Counter = styled.span`
    margin-left: 0.5rem;
    padding: 0 6px;
    font-size: 12px;
    background-color: rgba(110, 118, 129, 0.4); /* Fundo cinza para o número */
    border-radius: 50em; /* Para ser arredondado (pill shape) */
`;

// Estilo para os botões de navegação
const NavButtonStyles = css`
    padding: 0.5rem 1rem;
    font-weight: 500;
    
    &:hover {
        background-color: transparent;
        color: rgb(240, 246, 252); /* Branco mais puro no hover */
    }
`;

// Estilo para a ativação (a linha laranja de baixo)
const ActiveStyles = css`
    border-bottom: 2px solid #F78166; /* Linha laranja do GitHub */
    color: rgb(240, 246, 252); /* Cor de texto mais clara */
`;


// Estilo base do botão (exportado como um componente styled)
export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    margin-right: 0.25rem;
    border-radius: 6px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.2s;
    color: rgb(201, 209, 217); /* Cor do texto/ícone (cinza claro) */

    &:hover {
        background-color: rgba(255, 255, 255, 0.08); /* Fundo cinza suave no hover */
    }
    
    /* Aplica estilos específicos de navegação se a prop for passada */
    ${props => props.$styleType === 'navButton' && NavButtonStyles}
    
    /* Aplica estilos de ativo se a prop for passada */
    ${props => props.$isActive && ActiveStyles}
`;