import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid, Box, Grid, GridItem } from '@chakra-ui/react'
import NewestPostList from '../components/home/NewestPostList'

import styles from '../styles/Home.module.scss'

const newestPostData = [
  {
    title: "Newest Post 1",
    author: "Name Lastname",
    createDate: "09/02/2565",
    imgUrl: "http://www.168virtualschool.com/images/No_image_available.png",
    tag: [
      "Tag1",
      "Tag2",
      "Tag3",
      "Tag4",
      "Tag5",
    ],
    rating: 4
  },
  {
    title: "Newest Post 2",
    author: "Name Lastname",
    createDate: "09/02/2565",
    imgUrl: "http://www.168virtualschool.com/images/No_image_available.png",
    tag: [
      "Tag1wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
      "Tag2",
      "Tag3",
      "Tag4",
      "Tag5",
    ],
    rating: 3
  },
  {
    title: "Newest Post 3",
    author: "Name Lastname",
    createDate: "09/02/2565",
    imgUrl: "http://www.168virtualschool.com/images/No_image_available.png",
    tag: [
      "Tag1",
      "Tag2",
      "Tag3",
      "Tag4",
      "Tag5",
    ],
    rating: 5
  },
]

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box className={styles.container} >

        {/* Bottom Carousel Component */}
        <Grid templateColumns='repeat(12, 1fr)' 
          gap={6} width={{ base: '100%', sm: '90%', md: '80%', lg: '75%' }}
          >
          
          {/* Newest Post Grid */}
          <GridItem colSpan={{ base: 12, md: 12, lg: 7 }}>

            <h1 className={styles.homeHeader}>Newest Post</h1>
            
            <NewestPostList posts={newestPostData} />

          </GridItem>

          {/* History Grid */}
          <GridItem colSpan={{ base: 12, md: 12, lg: 5 }}></GridItem>

        </Grid>

      </Box>
    </>
  )
}

export default Home
