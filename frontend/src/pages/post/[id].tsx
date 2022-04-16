import type { NextPage } from "next";
import Head from 'next/head'
import PostDetail from "../../components/post/PostDetail";
import styles from '../../styles/CreatePost.module.scss'
import { Stack } from "@chakra-ui/react";

const postData = [
    {
        title: "Newest Post 1",
        author: "Name Lastname",
        contact: "contact",
        permission: "private",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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
        contact: "contact",
        permission: "private",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        createDate: "09/02/2565",
        imgUrl: "http://www.168virtualschool.com/images/No_image_available.png",
        tag: [
            "Tag1",
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
        contact: "contact",
        permission: "private",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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
    {
        title: "Newest Post 3",
        author: "Name Lastname",
        contact: "contact",
        permission: "private",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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

interface Props {
    id: number
}
const PostDetailPage: NextPage<Props> = ({id}) => {
    return (
        <div>
            <Head>
                <title>Post Detail</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Stack className={styles.container}>
                <PostDetail postData={postData[id]}/>
            </Stack>
        </div>
    )
}
export const getServerSideProps = (context: any) => {
    const { id } = context.query;
    return {
      props: {
        id,
      },
    };
  };

export default PostDetailPage