import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Header from './components/Header/Header'
import Homepage from './views/Homepage'
import BrowseSnippets from './views/BrowseSnippets'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/browse-snippets" element={<BrowseSnippets />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
