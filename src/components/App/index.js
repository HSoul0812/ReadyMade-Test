import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import Landing from 'components/Landing'
import Navigation from 'components/Navigation'
import Footer from 'util/Footer'
import './style.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column position-relative">
        <Navigation />
        <Routes>
          <Route path={ROUTES.LANDING} element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
