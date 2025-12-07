// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// استبدل 'YOUR_REPO_NAME' بالاسم الفعلي لمستودعك (مثال: '/Frist-React/')
const base_path = 'https://github.com/abanob2005/React-Frist-SPA/'; 

export default defineConfig({
  plugins: [react()],
  base: base_path, // <--- هذا هو التعديل المطلوب
})