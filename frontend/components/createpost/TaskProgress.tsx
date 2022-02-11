import { Box, Flex, Stack, Text } from '@chakra-ui/react'

import styles from '../../styles/component/Progressbar.module.scss'

type Props = {
  tasks: any[],
  state: number
}

const fontNormal = { base: '0.9rem', md: '1rem', lg: '1rem' }
const fontSm = { base: '0.7rem', md: '0.8rem', lg: '0.8rem' }

const TaskProgress = ({ tasks, state }: Props) => {

  return (
    <Flex className={styles.taskProgressBox}>

      {tasks.map((item, index) => (
        <Flex key={`task-${index}`} position="relative">

            { index > 0 ? (
                <Box className={`${styles.taskSeperator} ${state >= index+1 ? styles.active : ''}`} />
            ) : null}

            <Stack textAlign="center">
                <Box className={`${styles.taskItem} ${state >= index+1 ? styles.active : ''}`}>
                    <Box className={`${styles.taskIcon} ${state >= index+1 ? styles.active : ''}`}>
                        {item.icon}
                    </Box>
                </Box>
                <Text className={`${styles.taskText} ${state >= index+1 ? styles.active : ''}`}>{item.taskName}</Text>
            </Stack>

        </Flex>
      ))}

    </Flex>
  )
}

export default TaskProgress
