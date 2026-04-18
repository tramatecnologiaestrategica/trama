import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { ProcessOrTrust } from './components/ProcessOrTrust'
import { ContactCta } from './components/ContactCta'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <ProcessOrTrust />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
