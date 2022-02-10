import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid, Box, Grid, GridItem } from '@chakra-ui/react'
import NewestPostList from '../../components/home/NewestPostList'

import styles from '../../styles/Home.module.scss'

const CreatePost: NextPage = () => {
  return (
    <>

      <Head>
        <title>Create Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box className={styles.container} >

        {/* Header & Progess Bar */}
        <Box />

        {/* Page */}
        <Box />

      </Box>
    </>
  )
}

export default CreatePost
