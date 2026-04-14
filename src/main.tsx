import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from "@clerk/clerk-react"

const clerkPubKey = "pk_test_c3VwZXJiLXNlcnZhbC00Ny5jbGVyay5hY2NvdW50cy5kZXYk"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)