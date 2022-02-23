import { Box, Button, Center, Image, Input, Text, ScrollView, Icon } from "native-base";
import React, { useState } from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Verify = () => {
    const [show1, setShow1] = useState(false)
    return (
        <ScrollView>
            <Center>
                <Image source={require("assets/Avid_Card_Slant.png")} mt='5' style={{ height: width * 3 / 5 }} />
                <Text color="#0386ff" fontSize="2xl" fontWeight='bold'>Lets Get Started</Text>
                <Box padding='6'>
                    <Text fontWeight='normal' fontSize='xl'>
                        It's easy. Simply enter your phone number in the field below
                        to receive a text code to start the process.</Text>
                </Box>
                <Input w="2/3" h="10" borderRadius="3xl" padding="3" borderColor='blue.700'>Enter Phone Number</Input>
                <Button w="1/2" h="12" borderRadius="3xl" mt='12' bottom='30'>Lets Get Started</Button>
            </Center>
            <Box padding='6'>
                <Text mt='10' color='blue.600' fontWeight='bold' fontSize='2xl'>Frequently Asked Questions</Text>
                <Box mt='10' padding='3' borderRadius='3xl' bgColor='white' borderWidth='1' borderColor='black'>
                    <Text fontWeight='semibold'>Why Avid?</Text>
                    {show1 && 
                    <Text>
                        Digital banking at its best! With Avid Prepaid, you get your payments early. By signing up for Early Access, you can receive your government
                    </Text>}
                </Box>
            </Box>
            <Box padding="5">
                <Text fontWeight='semibold' fontSize='2xl'>Have more Questions?</Text>
                <Text fontSize='2xl'>Find more information</Text>
                <Box flexDirection='row'>
                    <Text fontSize='2xl'>by</Text>
                    <Text fontSize='2xl' color='blue.700' ml='2'>clicking here</Text>
                </Box>
            </Box>
            <Box padding='6'>
                <Center>
                    <Text color="blue.700" fontWeight='bold' fontSize='2xl'>Lets Get Started</Text>
                    <Input w="2/3" h="10" mt="10" borderRadius="3xl" padding="3" borderColor='blue.700'>Enter Phone Number</Input>
                    <Button w="1/2" h="12" borderRadius="3xl" mt='12' bottom='30'>Lets Get Started</Button>
                </Center>
            </Box>
        </ScrollView>
    )
}

export default Verify