import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { dataList1 } from '../data1';
import { dataList2 } from '../data2';

const HomePage: NextPage = () => {
  const [query, setQuery] = useState('');
  const [queryOutput, setQueryOutput] = useState(dataList2);

  useEffect(() => {}, [queryOutput]);

  const handleRun = () => {};

  const handleReset = () => {
    setQuery('');
    setQueryOutput([]);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SQL Web Client </title>
        <meta name="description" content="Sql web client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1>SQL query client</h1>
        </section>
        <div className={styles.main}>
          <div className={styles.textareaContainer}>
            <h4>Write your query</h4>
            <textarea value={query} className={styles.queryTextarea} rows={20} onChange={handleOnChange}></textarea>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={handleRun}>
              Run
            </button>
            <button className={styles.btn} onClick={handleReset}>
              Reset
            </button>
          </div>
          <div>
            <h4>Query output</h4>
            {queryOutput.length !== 0 && (
              <table>
                <thead>
                  {Object.keys(queryOutput[0]).map((col, index) => (
                    <th key={index}>{col}</th>
                  ))}
                </thead>
                <tbody>
                  {queryOutput.map((row) => (
                    <tr key={row?.id}>
                      <td>{row?.id}</td>
                      <td>{row?.first_name}</td>
                      <td>{row?.last_name}</td>
                      <td>{row?.email}</td>
                      <td>{row?.gender}</td>
                      <td>{row?.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
