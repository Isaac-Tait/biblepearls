import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <footer className='absolute bottom-1 flex w-full flex-wrap justify-between px-1 text-gray-700'>
              <div className='my-auto flex w-1/3 justify-start text-slate-500'>
                <p className=''>
                  © 2021 - {new Date().getFullYear()}, Built with&nbsp;
                  <a
                    href='https://nextjs.org/'
                    className='text-indigo-500 hover:text-amber-400'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Next.js
                  </a>{' '}
                  &&nbsp;
                  <a
                    href='https://tailwindcss.com'
                    className='text-indigo-500 hover:text-lime-400'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    TailwindCSS
                  </a>
                  .
                </p>
              </div>
              <div className='mt-2 flex w-1/3 justify-center'>
                <a
                  href='https://github.com/Isaac-Tait/biblepearls'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/images/GitHub.png'
                    height={20}
                    width={20}
                    alt='GitHub'
                  />
                </a>
              </div>
              <div className='my-auto flex w-1/3 justify-end text-slate-500'>
                <p className=''>
                  Another&nbsp;
                  <a
                    href='https://mountaintopcoding.dev'
                    className='text-indigo-500 hover:text-fuchsia-400'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    mountainTopCoding(
                    <span role='img' aria-label='mountain with snow-cap'>
                      &#127956;
                    </span>
                    );
                  </a>{' '}
                  project
                </p>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
