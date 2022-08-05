import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function OtherPage() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.description}>
          Here's another page you can navigate to using the navbar!
        </h1>
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}
