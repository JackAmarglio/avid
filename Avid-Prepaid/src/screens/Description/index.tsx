import { Box, Text, ScrollView } from "native-base";
import React from "react";

const Description = () => {
    return (
        <ScrollView>
            <Box padding='6'>
                <Text fontWeight='medium' fontSize='2xl'>Disclosure:</Text>
                <Text fontWeight='light' fontSize='xl'>BY USING THIS CARD YOU AGREE TO THE TERMS AND CONDITIONS OF THE CARDHOLDER AGREEMENT AND FEE SCHEDULE, IF ANY. This Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc. "Metropolitan Commercial Bank" and "Metropolitan" are registered trademarks of Metropolitan Commercial Bank ©2014.</Text>
                <Box flexDirection='row' mt='10'>
                    <Text fontSize='xl' fontWeight='light'>Please refer to the</Text>
                    <Text color='blue.700' fontSize='xl' ml='2'>Avid Prepaid mobile</Text>
                </Box>
                <Text color='blue.700' fontSize='xl'>message service teams</Text>
                <Text fontWeight='medium' fontSize='2xl' mt='10'>Notice of Patriot Act:</Text>
                <Text fontWeight='light' fontSize='xl'>Important information for opening a card account: To help the federal government fight the funding of terrorism and money laundering activities, the USA PATRIOT Act requires all financial institutions and their third parties to obtain, verify and record information that identifies each person who opens a card account. What this means for you: When you open a card account, we will ask for your name, address, date of birth, social security number, and other information that will allow us to identify you. We may also request a copy of your driver's license or other documentation bearing your photo as verification of your identity.</Text>
                <Text fontWeight='medium' fontSize='2xl' mt='10'>PLEASE NOTE:</Text>
                <Text fontWeight='light' fontSize='xl'>1. How early you receive your payment will depend on your benefit type. The Early Access program from Avid Prepaid allows you to receive your funds when the Government sends notification that it intends to make a payment to you. This varies by month and by government agency, for example SSI and VA Early Access payments are usually made 6 days early and SSA payments that are paid on Wednesdays are usually paid on the preceding Friday or 5 days early. All payments are subject to notification from the Department of Treasury each month and may change any time. Please review the Avid Prepaid Cardholder Agreement for terms and conditions. There is an additional charge for the 'Early Access Benefits Direct Deposit feature'. Refer to the Cardholder Agreement's Schedule of Fees and Charges. You are not required to elect this feature on your deposits and can avoid this fee by informing us of your preference to receive your monthly benefits on the original effective</Text>
                <Box flexDirection='row'>
                    <Text fontWeight='light' fontSize='xl'>date either by calling us at</Text>
                    <Text color='blue.700' fontSize='xl' fontWeight='light' ml='2'>(801) 893-7716</Text>
                </Box>
                <Box flexDirection='row'>
                    <Text fontWeight='light' fontSize='xl'>or</Text>
                    <Text color='blue.700' fontSize='xl' fontWeight='light' ml='2'>(800) 221-6192</Text>
                    <Text fontWeight='light' fontSize='xl' ml='2'>or by email at:</Text>
                </Box>
                <Box flexDirection='row'>
                    <Text color='blue.700' fontSize='xl' fontWeight='light'>
                        contactus@avidprepaid.com
                    </Text>
                    <Text fontWeight='light' fontSize='xl' ml='2'>or in writing to:</Text>
                </Box>
                <Text color='blue.700' fontSize='xl' fontWeight='light'>Avid Prepaid, PO Box 307, New Hyde Park, NY 11040</Text>
                <Text fontWeight='light' fontSize='xl' mt='7'>2. Please refer to the Avid Prepaid Cardholder Agreement for terms and conditions. Other fees may apply.</Text>
                <Text fontWeight='light' fontSize='xl' mt='7'>3. Account Shield will temporarily restrict the authorization of new purchases or withdrawals. Previously authorized transactions and deposits or transfers to your account will function with Account Shield enabled.</Text>
                <Text fontWeight='light' fontSize='xl' mt='7'>4. Create up to four companion accounts with no charge. Usage and other fees may apply.</Text>
                <Text fontWeight='light' fontSize='xl' mt='7'>5. December 2021 SSI and VA payments were made available to recipients on December 1st, 2021 by most banks and Direct Express</Text>
                <Text fontWeight='light' fontSize='xl' mt='7'>6. Activation fee is waived.</Text>
            </Box>
        </ScrollView>
    )
}

export default Description