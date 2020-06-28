import Head from 'next/head';
import useSWR from 'swr';
import PhotosApi from '~/lib/api/photos';
import Header from '~/components/header';
import Footer from '~/components/footer';
import Photos from '~/components/photos';
import Uploader from '~/components/uploader';
import PageContext from '~/lib/context/PageContext';

const fetchPhotos = async () => {
  const { data } = await PhotosApi.all();
  return data;
};

export default function Home() {
  const { data: photos, revalidate } = useSWR('all-photos', fetchPhotos);
  return (
    <PageContext.Provider
      value={{
        revalidate,
      }}
    >
      <div className="container">
        <Head>
          <title>Image Uploader using NextJs</title>
        </Head>
        <Header />
        <main>
          <Uploader />
          <section>
            <Photos data={photos} />
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
            color: #41403e;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </PageContext.Provider>
  );
}
