import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Chat Application',
  description: 'A simple chat application',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col min-h-screen'>
          <header className='bg-gray-800 text-white p-4'>
            <h1 className='text-2xl'>Chat Application</h1>
          </header>
          <main className='flex-1'>{children}</main>
          <footer className='bg-gray-800 text-white p-4 text-center'>
            © 2023 Chat Application
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
