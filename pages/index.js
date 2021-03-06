import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../components/Center'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>jQuory Music</title>
        <link rel="icon" href="/qicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>
        <Player className="sticky bottom-0" />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    }
  }
}
