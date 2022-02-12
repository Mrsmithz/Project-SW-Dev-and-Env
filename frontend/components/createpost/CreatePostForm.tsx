import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import {
  Box, Flex, Stack, Text, Grid, GridItem, Input, Textarea, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'
import { MdImageSearch } from 'react-icons/md';

import styles from '../../styles/CreatePost.module.scss'

type Props = {
}

const permissionWidth = { base: "100%", md: "50%", lg: "30%" };
const dropzoneWidth = { base: "9rem", md: "8rem", lg: "9rem", xl: '9rem' };
const dropzoneHeight = { base: "13rem", md: "12rem", lg: "13rem", xl: '13rem' };

const CreatePostForm = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [title, setTitle] = useState('');
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const [description, setDescription] = useState('');
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  const [contact, setContact] = useState('');
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value);

  const [tag, setTag] = useState(["Tag1"]);
  const [tagInput, setTagInput] = useState("");
  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value);

  const [permission, setPermission] = useState('');
  const handlePermissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => setPermission(e.target.value);

  const [images, setImages] = useState<File[]>([]);

  const onDrop = useCallback(acceptedFiles => {
    var newImage = [...images];
    newImage.push(acceptedFiles);
    setImages(newImage);

    console.log(newImage)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const addTag = () => {
    if (tag.length < 5) {
      var newTag = [...tag];
      newTag.push(tagInput);
      setTagInput("");
      setTag(newTag);
      closeModal()
    }
  }

  const deleteTag = (e: React.BaseSyntheticEvent) => {
    console.log(e)
    var newTag = [...tag];
    newTag.splice(tag.indexOf(e.target.innerText), 1);
    setTag(newTag);
  }

  return (
    <Grid templateColumns='repeat(2, 1fr)'
      gap={6} width={{ base: '100%', sm: '90%', md: '90%', lg: '85%', xl: '70%' }}
      alignSelf="center" color="white"
    >

      <GridItem colSpan={{ base: 2, md: 1, lg: 1 }} paddingRight="3rem">

        <FormControl marginTop="2rem">
          <FormLabel htmlFor='title' fontSize="1.5rem">Title</FormLabel>
          <Input
            id='title'
            type='text'
            value={title}
            size="lg"
            backgroundColor="white"
            color="black"
            onChange={handleTitleChange}
          />
        </FormControl>

        <FormControl marginTop="2rem">
          <FormLabel htmlFor='description' fontSize="1.5rem">Description</FormLabel>
          <Textarea
            id='description'
            value={description}
            size="lg"
            backgroundColor="white"
            color="black"
            onChange={handleDescriptionChange}
          />
        </FormControl>

        <FormControl marginTop="2rem">
          <FormLabel htmlFor='contact' fontSize="1.5rem">Contact</FormLabel>
          <Input
            id='contact'
            type='text'
            value={contact}
            size="lg"
            backgroundColor="white"
            color="black"
            onChange={handleContactChange}
          />
        </FormControl>

        <Box w="100%" marginTop="2rem">

          <Text fontSize="1.5rem">Tag</Text>

          <Flex flexWrap="wrap" alignItems="center" marginTop="0.5rem">

            {tag.map((item: string, index: number) => (
              <Flex justify="center" align="center" key={`newest-tag-${index}`}
                className={styles.tagBox}
                color={useColorModeValue('#000000', '#000000')}
                cursor="pointer"
                onClick={(e) => deleteTag(e)}>
                <span>{item}</span>
              </Flex>
            ))}

            {tag.length < 5 ? (
              <AddIcon marginLeft="0.8rem" cursor="pointer" onClick={() => openModal()} />
            ) : null}

          </Flex>

        </Box>

      </GridItem>

      <GridItem colSpan={{ base: 2, md: 1, lg: 1 }}>

        <FormControl marginTop="2rem">
          <FormLabel htmlFor='contact' fontSize="1.5rem">Permission</FormLabel>
          <Select backgroundColor="white" color="black"
            value={permission}
            onChange={(e) => handlePermissionChange(e)}
            width={permissionWidth}>
            <option value='public'>Public</option>
            <option value='private'>Private</option>
            <option value='onlyme'>Only me</option>
          </Select>
        </FormControl>

        <Box w="100%" marginTop="2.5rem">
          <Text fontSize="1.5rem">Preview Image</Text>

          <Flex flexWrap="wrap">
            
            <Box className={styles.imageDropzone}
              width={dropzoneWidth} height={dropzoneHeight}
              {...getRootProps()}>
              <input {...getInputProps()} />
              <Stack width="100%" height="100%"
                display="flex" justifyContent="center" alignItems="center">
                <MdImageSearch color="black" fontSize="4rem" />
                <Text>Drop Image Here</Text>
              </Stack>
            </Box>

          </Flex>

        </Box>

        <Stack w="100%" marginTop="2.5rem">
          <Button colorScheme="teal" width="12rem" size="lg">Auto Fill By OCR</Button>
          <Stack w="100%" marginTop="0.5rem" direction="row">
            <Button colorScheme="teal" width="8rem" size="lg">Back</Button>
            <Button colorScheme="teal" width="8rem" size="lg">Next</Button>
          </Stack>
        </Stack>

      </GridItem>

      <Modal isOpen={isModalOpen} onClose={() => closeModal()} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton onClick={() => closeModal()} />
          <ModalBody paddingTop="1rem">
            <Input
              id='tagInput'
              type='text'
              value={tagInput}
              size="lg"
              backgroundColor="gray.300"
              color="black"
              onChange={handleTagInputChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              size="sm"
              onClick={() => addTag()}
            >
              Add
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Grid>
  )
}

export default CreatePostForm