import { Heading, HStack, Image, Text, VStack, Link, Box  } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={8}>
      <Box shadow='md' borderRadius="10px" bg="white" color="black">
        <Image src={`/serve`+imageSrc} alt={title} borderRadius="10px"/>
        <Box padding="1rem">
          <Heading fontSize='xl'>{title}</Heading>
          <Text my={4}>{description}</Text>
          <Link>See more  <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
        </Box>
      </Box>
    </HStack>
  )
};

export default ProjectCard;
