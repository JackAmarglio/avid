import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, Box, Text, Link, Center, Image, Input, Button } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'navigation';

const { height } = Dimensions.get("screen");

const Landing = () => {

  const onPressNext = () => {
    navigate('TabStack', {screen: 'Introduce'});
  }

  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Box flex="1">
      <ScrollView >
        <Image source={require("assets/landing-header.png")} w="full" position='absolute' height={height * 1.45} />
        <Center>
          <Link href="/">
            <Image source={require("assets/AvidPrepaidLogo_Black.png")} mt="10" h="20" w="200" resizeMode='contain' tintColor='white' />
          </Link>
          <Box w="full" bgColor="white" h="0.5" mt="4" />
          <Text fontSize="5xl" color="white" padding="6" fontWeight="bold">Get your government benefits up to 6 days early!</Text>
        </Center>
        <Text fontSize="3xl" color="white" ml="10">Let's Get Started</Text>
        <Input variant="rounded" type='number' placeholder="Enter Mobile Number" w="3/4" ml="7" mt="5" bgColor="white" fontSize="2xl" />
        <Center>
          <Button bgColor="#043e93" color="white" borderRadius="2xl" w="1/2" mt="7" size="md" onPress={() => onPressNext()}>Lets Get Started</Button>
        </Center>
        {/* <Box bg={{
          linearGradient: {
            colors: ["#2447AD", "#0386FF"],
            start: [-1, 0],
            end: [1, 0]
          }
        }} w='full'>
          <Box alignItems='center' paddingBottom='10'>
            <Image source={require('assets/AvidPrepaidLogo_Black.png')} mt='10' tintColor='white' w='200' h='20' />
            <Box w="full" bgColor="white" h="0.5" mt="4" />
          </Box>
        </Box> */}
        
        {/* <Box bg={{
          linearGradient: {
            colors: ["#2447AD", "#0386FF"],
            start: [-1, 0],
            end: [1, 0]
          }
        }} w='full'>
          <Box alignItems='center' paddingBottom='10'>
            <Image source={require('assets/AvidPrepaidLogo_Black.png')} mt='10' tintColor='white' w='200' h='20' />
            <Box w="full" bgColor="white" h="0.5" mt="4" />
          </Box>
        </Box> */}
      </ScrollView>
    </Box>
  );
};

export default Landing;
