import Image from 'next/image'
import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
      </div>
    </main>
  )
}
