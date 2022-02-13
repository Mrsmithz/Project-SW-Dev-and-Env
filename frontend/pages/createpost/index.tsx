import type { NextPage } from "next";
import { useState } from "react";

import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid, Box, Grid, GridItem, Flex, Stack, useColorModeValue, Text } from '@chakra-ui/react'
import TaskProgress from '../../components/createpost/TaskProgress'
import UploadFile from '../../components/createpost/UploadFile'
import CreatePostForm from '../../components/createpost/CreatePostForm'
import PreviewPost from '../../components/createpost/PreviewPost'

import { Icon } from '@chakra-ui/react'
import { MdDescription, MdEdit, MdVerified } from 'react-icons/md';

import styles from '../../styles/CreatePost.module.scss'

import { CreatedPost } from '../../model/CreatedPost'

const tasks = [
  {
    taskName: "Upload File",
    icon: <Icon as={MdDescription} />
  },
  {
    taskName: "Fill Information",
    icon: <Icon as={MdEdit} />
  },
  {
    taskName: "Confirm",
    icon: <Icon as={MdVerified} />
  },
];

const CreatePost: NextPage = () => {

  const [taskState, setTaskState] = useState(2);
  const [postData, setPostData] = useState<CreatedPost>({
    title: "",
    description: "",
    contact: "",
    tag: [],
    permission: "",
    image: []
  });

  const renderComponent = () => {
    if (taskState == 1) {
      return (<UploadFile />);
    }
    else if (taskState == 2) {
      return (<CreatePostForm toNextPage={(data: CreatedPost) => getDataFromForm(data)}
        backPage={() => backButtonHandler()} />);
    }
    else if (taskState == 3) {
      return (<PreviewPost postData={postData} backPage={() => backButtonHandler()} />);
    }
  };

  const getDataFromForm = (data: CreatedPost) => {
    console.log(data);
    setPostData(data);
    setTaskState(3);
  }

  const backButtonHandler = () => {
    if (taskState > 1) {
      setTaskState(taskState - 1);
    }
  }

  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Stack className={styles.container}>
        {/* Header & Progess Bar */}
        <Flex className={styles.createPostHeaderBox}>
          <Stack className={styles.createPostHeaderText}>
            <Text color={useColorModeValue("white", "white")} fontSize="2rem">
              Create Post
            </Text>
            <Text color={useColorModeValue("white", "white")} fontSize="1.3rem">
              สร้างโพสต์ใหม่
            </Text>
          </Stack>

          <TaskProgress tasks={tasks} state={taskState} />
        </Flex>

        {/* Page */}
        {renderComponent()}
      </Stack>
    </>
  );
};

export default CreatePost;
