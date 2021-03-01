import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Wave } from 'components/wave';

export default function Home() {
    const [hasEpicStyle, setEpicStyle] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEpicStyle(true);
        }, 1000);

        return () => setEpicStyle(false);
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Nikhil Verma</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={hasEpicStyle ? styles['epic-text'] : styles.main}>Nikhil Verma</main>

            <Wave />
        </div>
    );
}
