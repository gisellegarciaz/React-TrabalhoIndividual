// src/components/Button/index.jsx
import React from 'react';
import { BaseButton, Counter } from './styles';

const Button = ({ children, styleType = 'button', count, onClick, isActive = false }) => {
    return (
        // Passamos props com $ prefixo para evitar avisos do React (transient props)
        <BaseButton 
            onClick={onClick}
            $styleType={styleType} 
            $isActive={isActive}
        >
            {children}
            {/* Renderiza o contador se houver */}
            {count !== undefined && <Counter>{count}</Counter>}
        </BaseButton>
    );
};

export default Button;