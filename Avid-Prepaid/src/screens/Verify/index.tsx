import { Box, Button, Center, Image, Input, Text, ScrollView } from "native-base";
import React from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Verify = () => {
    return (
        <ScrollView>
            <Center>
                <Image source={require("assets/Avid_Card_Slant.png")} mt='5' style={{ height: width * 3 / 5 }} />
                <Text color="#0386ff" fontSize="3xl" fontWeight='semibold'>Lets Get Started</Text>
                <Box padding='6'>
                    <Text fontWeight='normal' fontSize='3xl'>
                        It's easy. Simply enter your phone number in the field below
                        to receive a text code to start the process.</Text>
                </Box>
                <Input w="2/3" h="10" borderRadius="3xl" padding="3" borderColor='blue.700'>Enter Phone Number</Input>
                <Button w="1/2" h="12" borderRadius="3xl" mt='12' bottom='30'>Lets Get Started</Button>
                <Text mt='10' color='blue.600' fontWeight='bold' fontSize='4xl'>Frequently Asked Questions</Text>
            </Center>
            <Box padding='3' borderRadius='3xl' borderColor='black'>
                <Text>Why Avid?</Text>
            </Box>
            <Box padding="5">
                <Text fontWeight='semibold' fontSize='4xl'>Have more Questions?</Text>
                <Text fontSize='4xl'>Find more information</Text>
                <Box flexDirection='row'>
                    <Text fontSize='4xl'>by</Text>
                    <Text fontSize='4xl' color='blue.700' ml='2'>clicking here</Text>
                </Box>
            </Box>
            <Box padding='6'>
                <Text color="blue.700" fontWeight='bold' fontSize='5xl'>Lets Get Started</Text>
                <Center>
                    <Input borderRadius='3xl' borderColor='blue.700' w='4/5' h='16' mt='10'>Enter Mobile Number</Input>
                    <Button bgColor='blue.500' mt='10' h='16' borderRadius='3xl' w='1/2'>Lets Get Started</Button>
                </Center>
            </Box>
        </ScrollView>
    )
}

export default Verify