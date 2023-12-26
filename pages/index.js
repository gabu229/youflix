import Image from 'next/image'
import Hero from '@cp/Hero'
import { MoviesCardList } from '@cp/ContentSections'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <MoviesCardList title='Continue Watching' /> */}
      <MoviesCardList title='Drama' dataFrom="/api/movies/drama" />
      <MoviesCardList title='Drama 2' dataFrom="/api/movies/drama/2" />
      <MoviesCardList title='Horror' dataFrom="/api/movies/horror" />
      <MoviesCardList title='Top movies today' />
      <MoviesCardList title='Suggested for you' dataFrom="/api/movies/adventure" />
    </>
  )
}
