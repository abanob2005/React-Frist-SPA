
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base_path = ''; 

export default defineConfig({
  plugins: [react()],
  base: base_path, 
})