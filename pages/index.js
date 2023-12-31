import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        
        <div className="button-container">
          <Link href="/paymentapproved">
            <button>Go to Payment Approved</button>
          </Link>

          <Link href="/paymentdenied">
            <button>Go to Payment Denied</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
