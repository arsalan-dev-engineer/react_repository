
// vite.congif.js file used to run this vite project
// This file is used to configure Vite, a build tool for modern web projects.
// It includes plugins and other settings necessary for the project to run correctly.
// The configuration is defined using the defineConfig function from Vite.
// The react plugin is included to enable React support in the project.
// The file is typically located at the root of the project directory.
// It is essential for setting up the development environment and ensuring that the project can be built and served correctly.
// The file is written in JavaScript and follows the CommonJS module syntax.
// The configuration can be customized further based on the project's requirements.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
