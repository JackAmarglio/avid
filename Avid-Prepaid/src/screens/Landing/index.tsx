import React from 'react';
import { Dimensions, ImageBackground, Image, StyleSheet } from 'react-native';
import { ScrollView, Box, Text, Link, Center, Input, Button } from 'native-base';

const { height, width } = Dimensions.get("screen");

const Landing = () => {
  return (
    <Box flex="1">
      <ScrollView >
        <Image source={require("assets/landing-header.png")} style={styles.landing} />
        <Center>
          <Link href="/">
            <Image source={require("assets/AvidPrepaidLogo_Black.webp")} style={styles.logo} />
          </Link>
          <Box w="full" bgColor="white" h="0.5" mt="4" />
          <Text fontSize="5xl" color="white">Get your government benefits up to 6 days early!</Text>
        </Center>
        <Text fontSize="3xl" color="white" ml="4" mt="5">Let's Get Started</Text>
        <Input variant="rounded" placeholder="Enter Mobile Number" w="3/4" ml="4" bgColor="white" fontSize="2xl" />
        <Center>
          <Button bgColor="#043e93" color="white" borderRadius="2xl" w="1/2" mt="5" size="md">Lets Get Started</Button>
          <Image source={require("assets/imac-phone.webp")} style={styles.imac_phone} />
          <Text color="black" fontSize="3xl" padding="10">
            Avid Prepaid Visa Debit card allows you to get your federal
            benefits up to 6 days early and all other direct deposits up to
            2 days early. Its digital banking at its best! With no overdraft fees or minimum balance requirement,
            you always have control over your account. Getting started is
            easy, just enter your mobile number and click "Lets Get Started"
            to sign up today!
          </Text>
          <Image source={require("assets/ppl-phone-img.webp")} style={styles.ppl_phone_img} />
        </Center>
        <Box ml="10" padding="6">
          <Text color="#0386ff" fontSize="4xl" ml="5">Avid Prepaid</Text>
          <Text color="#0386ff" fontSize="4xl" ml="5">Digital Backing at</Text>
          <Text color="#0386ff" fontSize="4xl" ml="5">its Best</Text>
          <Text color="black" padding="5">Use Avid Prepaid anywhere Visa
            debit is accepted worldwide. Available for use at major
            retailers, gas stations, pharmacies, and online. Access cash at
            virtually any ATM nationwide or at most bank branches. Plus,
            enjoy the added security of chip technology.</Text>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Government benefits up to 6 days early and receive payroll up to 2 days early</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">US Based Customer Service personalized for you</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">No overdraft fees or minimum balance required</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Use anywhere Visa debit is accepted</Text>
          </Box>
          <Button bgColor="blue.700" mt="5" ml="5" w="1/2" color="white" borderRadius="3xl">Learn More</Button>
        </Box>
        <Center>
          <Image source={require("assets/phone-4x.webp")} />
          <Text color="black" fontSize="3xl">Mobile Backing</Text>
        </Center>
        <Box ml="10" padding="6">
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Always know your account balance</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Mobile Tap to Pay</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Real Time Alerts including SMS, Email, and Push</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Bank-to-Card and Card-to-Card</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Virtual Card available</Text>
          </Box>
        </Box>
        <Center>
          <Image source={require("assets/customerservice-4x.webp")} />
          <Text mt="10" color="black" fontSize="3xl">Award Winning US Based</Text>
          <Text color="black" fontSize="3xl">Customer Service</Text>
        </Center>
        <Box ml="10" padding="6">
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Most calls answered with hold times less than 30 seconds</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Fanatical U.S based Customer Service team who cares about you</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">World-class award-winning bilingual representatives available 7 days a week to answer all of your questions</Text>
          </Box>
        </Box>
        <Center>
          <Image source={require("assets/security-4x.webp")} />
        </Center>
        <Box ml="10" padding="6">
          <Text color="black" fontSize="3xl" textAlign="center" mt="5">Security and Alerts</Text>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Visa Zero Liability Protection</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">FDIC Insured</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Peace of mind with Account Shield</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Security Biometrics</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Latest EMV chip technology</Text>
          </Box>
        </Box>
        <Center>
          <Image source={require("assets/credit-4x.webp")} />
        </Center>
        <Box padding="6" ml="10">
          <Text color="black" fontSize="3xl" textAlign="center" mt="5">Account Features</Text>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">No direct deposit fee</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Reloadable at over a million retailers worldwide</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Share money with friends and family with up to 4 companion accounts at no charge</Text>
          </Box>
          <Box flexDirection="row" mt="5">
            <Box bgColor="black" w="1" h="1" mt="3" />
            <Text color="black" ml="3">Use anywhere Visa debit is accepted worldwide</Text>
          </Box>
        </Box>
        <ImageBackground source={require("assets/RectangleDots.png")} style={{ width: '100%' }}>
          <Box bg="white" rounded="3xl" m="6">
            <Image source={require("assets/fbe-calendar_DA_v2.webp")} style={{ height: (width - 24) * 3.5 / 8, resizeMode: "contain" }} />
            <Text color="black" textAlign="center" fontSize="md" padding="5">December 2021 SSI and VA payments were made availble to recipients on December 1st, 2021 by most banks and Direct Express</Text>
          </Box>
          <Box bg="white" rounded="3xl" m="6" padding="5">
            <Text color="blue.500" fontSize="3xl">Your Federal Benefits Made Easy</Text>
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
          <Text color="#0386ff" fontSize="3xl">
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
          <Image source={require("assets/service-img.webp")} style={styles.service_img} />
          <Image source={require("assets/AvidPrepaidLogo_Black.png")} style={styles.logo_black} />
          <Center>
            <Image source={require("assets/Avid_Card_Slant.webp")} />
            <Text color="#0386ff" fontSize="3xl">Lets Get Started</Text>
            <Text>
              It's easy. Simply enter your phone number in the field below
              to receive a text code to start the process. </Text>
            <Input w="2/3" h="10" borderRadius="3xl" padding="3">Enter Phone Number</Input>
            <Button w="1/2" h="12" borderRadius="3xl">Lets Get Started</Button>
          </Center>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  landing: {
    width: "100%",
    position: 'absolute',
    height: height
  },
  logo: {
    marginTop: 40,
    height: 80,
    resizeMode: 'contain',
    tintColor: "white"
  },
  imac_phone: {
    marginTop: 40
  },
  ppl_phone_img: {
    resizeMode: 'contain'
  },
  service_img: {
    resizeMode: 'contain',
    borderRadius: 10,
    height: (width - 16) * 8 / 10
  },
  logo_black: {
    marginTop: 40,
    height: 80,
    resizeMode: 'contain'
  }
})

export default Landing;
