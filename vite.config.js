import { defineConfig } from 'vite'

export default defineConfig({
    base: "/CON-XR_Cardiac_Auscultation_Trainer/", // for our GitHub actions to be happy
    build: {
        // To match our GitHub pages repo
        outDir: "docs",
    }
})
