/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  return (
    <>
      <h1>
        Hello Dev
      </h1>
      {articles.map(article => <h3>{article.title}</h3>)}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://data-viewer.herokuapp.com/api/JobScrapper`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
