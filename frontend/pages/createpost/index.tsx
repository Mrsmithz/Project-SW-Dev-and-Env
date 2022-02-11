import type { NextPage } from 'next'
import { useState } from "react";

import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid, Box, Grid, GridItem, Flex, Stack, useColorModeValue, Text } from '@chakra-ui/react'
import TaskProgress from '../../components/createpost/TaskProgress'

import { Icon } from '@chakra-ui/react'
import { MdDescription, MdEdit, MdVerified } from 'react-icons/md';

import styles from '../../styles/Home.module.scss'

const tasks = [
  {
    taskName: "Upload File",
    icon : <Icon as={MdDescription}/>
  },
  {
    taskName: "Fill Information",
    icon : <Icon as={MdEdit}/>
  },
  {
    taskName: "Confirm",
    icon : <Icon as={MdVerified}/>
  },
]

const CreatePost: NextPage = () => {

  const [taskState, setTaskState] = useState(2);

  return (
    <>

      <Head>
        <title>Create Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box className={styles.container} >

        {/* Header & Progess Bar */}
        <Flex className={styles.createPostHeaderBox}>

          <Stack className={styles.createPostHeaderText}>
            <Text color={useColorModeValue("white", "white")} fontSize="2rem">Create Post</Text>
            <Text color={useColorModeValue("white", "white")} fontSize="1.3rem">สร้างโพสต์ใหม่</Text>
          </Stack>

          <TaskProgress tasks={tasks} state={taskState} />

        </Flex>

        {/* Page */}
        <Box />

      </Box>
    </>
  )
}

export default CreatePost
