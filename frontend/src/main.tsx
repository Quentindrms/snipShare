import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Header from './components/Header/Header'
import Homepage from './views/Homepage'
import BrowseSnippets from './views/BrowseSnippets'
import SnippetDetails from './views/SnippetDetails'
import FavoriteSnippets from './views/FavoriteSnippets'
import CreateSnippets from './views/CreateSnippet'
import { ManageSnippets } from './views/ManageSnippets'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/browse-snippets" element={<BrowseSnippets />} />
        <Route path="/favorite-snippets" element={<FavoriteSnippets />} />
        <Route path="/create-snippet" element={<CreateSnippets />} />
        <Route path="/manage-snippets" element={<ManageSnippets />} />
        <Route path="/snippet-details" element={<SnippetDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
