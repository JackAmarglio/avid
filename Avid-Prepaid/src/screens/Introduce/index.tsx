import { Box, Button, Center, Image, Text, ScrollView } from "native-base";
import React from "react";
import { Dimensions, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Introduce = () => {
    const values = [
        {title: 'Mobile Banking', src: require('assets/phone-4x.png'), subtitles: ['Always know your account balance', 'Mobile Tap to Pay', 'Real Time Alerts including SMS, Email, and Push', 'Bank-to-Card and Card-to-Card', 'Virtual Card available']},
        {title: 'Award Winning US Based Customer Service', src: require('assets/customerservice-4x.png'), subtitles: ['Most calls answered with hold times less than 30 seconds', 'Fanatical U.S based Customer Service team who cares about you', 'World-class award-winning bilingual representatives available 7 days a week to answer all of your questions']}, 
        {title: 'Service and Alerts', src: require('assets/security-4x.png'), subtitles: ['Visa Zero Liability Protection', 'FDIC Insured', 'Peace of mind with Account Shield', 'Security Biometrics', 'Latest EMV chip technology']}, 
        {title: 'Account Features', src: require('assets/credit-4x.png'), subtitles: ['No direct deposit fee', 'Reloadable at over a million retailers worldwide', 'Share money with friends and family with up to 4 companion accounts at no charge', 'Use anywhere Visa debit is accepted worldwide']}
    ]
    return (
        <ScrollView>
            <Center>
                <Button bgColor="#043e93" color="white" borderRadius="2xl" w="1/2" mt="5" size="md">Lets Get Started</Button>
                <Image source={require("assets/imac-phone.png")} mt="10" resizeMode='contain' style={{ height: width * 3 / 7 }} />
                <Text color="black" fontSize="2xl" padding="6" fontWeight="thin">
                    Avid Prepaid Visa Debit card allows you to get your federal
                    benefits up to 6 days early and all other direct deposits up to
                    2 days early. Its digital banking at its best! With no overdraft fees or minimum balance requirement,
                    you always have control over your account. Getting started is
                    easy, just enter your mobile number and click "Lets Get Started"
                    to sign up today!
                </Text>
            </Center>
            <Box bgColor='gray.100' paddingBottom='10'>
                <Center>
                    <Image source={require("assets/ppl-phone-img.png")} mt='10' resizeMode='contain' style={{ height: width * 3 / 5 }} />
                    <Box padding="6" borderRadius='3xl' mt='10' w='4/5' bgColor='white'>
                        <Text color="#0386ff" fontSize="3xl" fontWeight='semibold'>Avid Prepaid</Text>
                        <Text color="#0386ff" fontSize="3xl" fontWeight='semibold'>Digital Backing at its Best</Text>
                        <Text color="black" mt='3' fontSize='md'>Use Avid Prepaid anywhere Visa
                            debit is accepted worldwide. Available for use at major
                            retailers, gas stations, pharmacies, and online. Access cash at
                            virtually any ATM nationwide or at most bank branches. Plus,
                            enjoy the added security of chip technology.</Text>
                        <Box flexDirection="row" mt="5">
                            <Box bgColor="black" w="1" h="1" mt="3" />
                            <Text color="black" ml="3" fontSize='md'>Government benefits up to 6 days early and receive payroll up to 2 days early</Text>
                        </Box>
                        <Box flexDirection="row" mt="5">
                            <Box bgColor="black" w="1" h="1" mt="3" />
                            <Text color="black" ml="3" fontSize='md'>US Based Customer Service personalized for you</Text>
                        </Box>
                        <Box flexDirection="row" mt="5">
                            <Box bgColor="black" w="1" h="1" mt="3" />
                            <Text color="black" ml="3" fontSize='md'>No overdraft fees or minimum balance required</Text>
                        </Box>
                        <Box flexDirection="row" mt="5">
                            <Box bgColor="black" w="1" h="1" mt="3" />
                            <Text color="black" ml="3" fontSize='md'>Use anywhere Visa debit is accepted</Text>
                        </Box>
                        <Button bgColor="blue.700" mt="5" ml="5" w="1/2" color="white" borderRadius="3xl">Learn More</Button>
                    </Box>
                </Center>
            </Box>
            <FlatList 
                horizontal
                data={values}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Center>
                        <Box bgColor='gray.100' borderRadius='3xl' w='96' ml="10" mt='10' alignItems='center'>
                            <Image source={item.src} mt='10' />
                            <Text color="black" fontSize="3xl" fontWeight='semibold' textAlign='center' mt='10'>{item.title}</Text>                        
                            <Box padding="6">
                                {item.subtitles.map(subtitle => (
                                    <Box flexDirection="row">
                                        <Box bgColor="black" w="1" h="1" mt="3" />
                                        <Text color="black" ml="3" fontSize='md'>{subtitle}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Center>        
                )}
            />
            <ImageBackground source={require("assets/RectangleDots.png")} style={{ width: '100%', marginTop: 40 }}>
                <Box bg="white" rounded="3xl" m="6">
                    <Image source={require("assets/fbe-calendar_DA_v2.png")} style={{ height: (width - 24) * 3.5 / 8, resizeMode: "contain" }} />
                    <Text color="black" textAlign="center" fontSize="md" padding="5">December 2021 SSI and VA payments were made availble to recipients on December 1st, 2021 by most banks and Direct Express</Text>
                </Box>
                <Box bg="white" rounded="3xl" m="6" padding="5">
                    <Text color="blue.500" fontSize="3xl" fontWeight='semibold'>Your Federal Benefits Made Easy</Text>
                    <Box flexDirection="row">
                        <Box bgColor="black" w="1" h="1" mt="8" />
                        <Text color="black" fontSize="xl" mt="5" ml="3">Avid Prepaid process the deposits as soon as the Government sends notice that it intends on making a payment to the customer. This occurs several days before the actual payment date. For example, SSI and VA Payments that are paid on the first of each month are credited to the Avid Prepaid account up to 6 days early every month and all other payments are credited up to 2 days early.</Text>
                    </Box>
                    <Box flexDirection="row">
                        <Box bgColor="black" w="1" h="1" mt="8" />
                        <Text color="black" fontSize="xl" mt="5" ml="3">Federal benefits up to 6 days early and payroll and other deposits up to 2 days early</Text>
                    </Box>
                    <Button bgColor="blue.500" w="1/2" borderRadius="3xl" mt="5">Learn More</Button>
                </Box>
            </ImageBackground>
            <Box padding="6">
                <Text color="#0386ff" fontSize="3xl" fontWeight='semibold'>
                    Superior Service Without The Wait &amp; Award Winning Support</Text>
                <Text color="black" fontSize="xl" mt="5">
                    Are you tired of attempting to speak with someone, having to
                    wait on the phone to clear up issues
                    We know it can be frustrating, that’s why the Avid Prepaid team
                    makes it a point to have your best interests in mind when others
                    won’t. Our friendly, dedicated, and bilingual customer services
                    team is based in the U.S. and available every day to meet your
                    needs.
                </Text>
                <Box flexDirection="row" mt="5">
                    <Box bgColor="black" w="1" h="1" mt="3" />
                    <Text color="black" fontSize="xl" ml="2">Our bilingual U.S based customer service is availble 7 days a week</Text>
                </Box>
                <Box flexDirection="row" mt="5">
                    <Box bgColor="black" w="1" h="1" mt="3" />
                    <Text color="black" fontSize="xl" ml="2">Our in-house Call Center is full of specially trained representatives wating to help and there are numerous self service options on our 24 hour comprehensive automated phone system</Text>
                </Box>
                <Box flexDirection="row" mt="5">
                    <Box bgColor="black" w="1" h="1" mt="3" />
                    <Text color="black" fontSize="xl" ml="2">Have an enjoyable caller experience with our world class friendly and dedicated Customer Service Team members</Text>
                </Box>
                <Box flexDirection="row" mt="5">
                    <Box bgColor="black" w="1" h="1" mt="3" />
                    <Text color="black" fontSize="xl" ml="2">Our highly trained live representatives will assist you with anything regarding Avid Prepaid</Text>
                </Box>
                <Text color="blue.700" fontSize="4xl" mt="5" ml="5" fontWeight="bold">Lets Get Started</Text>
                <Button bgColor="blue.500" w="1/2" borderRadius="3xl" mt="5" ml="5">Lets Get Started</Button>
                <Image source={require("assets/service-img.png")} resizeMode='contain' borderRadius='3xl' mt="5" height={(width - 16) * 8 / 10} />
            </Box>
        </ScrollView>
    )
}

export default Introduce