import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" color="black" borderRadius="10">
      <HStack>
        <Image borderRadius="10" src={imageSrc} />
      </HStack>
      <VStack p={2}>
        <HStack width="100%" justifyContent="flex-start">
          <Heading as="h3" size="sm">
            {title}
          </Heading>
        </HStack>
        <HStack>
          <Text color="gray.500">{description}</Text>
        </HStack>
        <HStack width="100%" justifyContent="flex-start">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1px" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
