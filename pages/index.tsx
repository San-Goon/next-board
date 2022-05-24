import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={"/board/free"}>
        <a>
          <span>게시판으로....</span>
        </a>
      </Link>
    </div>
  )
}

export default Home
