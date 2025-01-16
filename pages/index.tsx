import Head from 'next/head';
import Chat from '../components/Chat';
import '../styles/globals.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Chatbot</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-2xl font-bold'>Gemini Chatbot</h1>
        <Chat />
      </main>
    </div>
  );
};

export default Home;
