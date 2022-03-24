import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import { getAllPosts } from '../lib/dato-cms'

export default function Home({ posts }) {

  console.log(posts)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>One Funcional</h1>
        {posts.map( (publi, index) => {
          return (
            <div key={index}>
              <Link href={`blog/${publi.slug}`}>{publi.title}</Link>
            </div>
          )
        })}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts || []
    },
    revalidate: 120,
  }
}