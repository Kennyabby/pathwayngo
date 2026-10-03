import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Impact from './pages/Impact'
import Partners from './pages/Partners'
import Careers from './pages/Careers'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Stories from './pages/Stories'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import GetHelp from './pages/GetHelp'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="impact" element={<Impact />} />
        <Route path="partners" element={<Partners />} />
        <Route path="careers" element={<Careers />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:slug" element={<ProgramDetail />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsArticle />} />
        <Route path="stories" element={<Stories />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="donate" element={<Donate />} />
        <Route path="get-help" element={<GetHelp />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Policy kind="privacy" />} />
        <Route path="safeguarding" element={<Policy kind="safeguarding" />} />
        <Route path="terms" element={<Policy kind="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
