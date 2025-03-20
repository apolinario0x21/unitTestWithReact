import React from 'react';
import { describe, it, expect, vi } from 'vitest'; // Importa funções do Vitest
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Para simular interações do usuário
import Button from './Button';

describe('Componente de botão', () => {
    it('Deve renderizar o texto corretamente', () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('Deve chamar a função onClick quando clicado', async () => {
        const handleClick = vi.fn(); // Usa vi para criar um mock
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByTestId('button');
        await userEvent.click(buttonElement); // Simula um clique no botão
        expect(handleClick).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada
    });
});