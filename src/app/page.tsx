
import About from '@/components/About'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Serve from '@/components/Serve.'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Serve/>
      <Menu/>
      <About/>
    </main>
  )
}
