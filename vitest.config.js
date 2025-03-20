import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', // Simula um ambiente de navegador
        globals: true, // Habilita funções globais como describe, it, expect, vi
        setupFiles: './src/setupTests.js', // Arquivo de configuração inicial
    },
});