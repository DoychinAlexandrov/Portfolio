import Image from 'next/image'
import Head from './head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'



export default function Home() {
  return (
    <div>
      <Head />
      <Navbar />
      <Main />
    </div>
  )
}
