import { useRef } from 'react'
import { useProductTimeline } from '../hooks/useProductTimeline'
import { Hero } from './home/Hero'
import { FeaturedProducts } from './home/FeaturedProducts'
import { Collections } from './home/Collections'
import { TrustAndCTA } from './home/TrustAndCTA'
import { Footer } from './home/Footer' // <-- Named import matching the export style above

const Home = () => {
  const targetRef = useRef(null)
  const { smoothProgress, opacities } = useProductTimeline(targetRef)

  return (
    <div 
      ref={targetRef} 
      className="bg-white text-black font-sans antialiased selection:bg-slate-900 selection:text-white relative w-full"
    >
      <Hero />
      <FeaturedProducts smoothProgress={smoothProgress} opacities={opacities} />
      <Collections />
      <TrustAndCTA />
      
      {/* Handled out of a modular separate presentational node layout */}
      <Footer />
    </div>
  )
}

export default Home