import Head from 'next/head';
import Header from '~/components/header';
import Footer from '~/components/footer';
import Photos from '~/components/photos';
import Uploader from '~/components/uploader';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Image Uploader using NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
          <Uploader />
        </section>
        <section>
          <Photos />
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
