
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base_path = 'https://abanob2005.github.io/React-Frist-SPA/'; 

export default defineConfig({
  plugins: [react()],
  base: base_path, 
})