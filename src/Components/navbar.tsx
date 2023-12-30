import { Box, Button, Center, Flex, Spacer} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import ConnectOnboard from "../Pages/connectWallet";


export default function MainNavbar() {
    async function connectWallet() {
        console.log("got inside ")

        return await ConnectOnboard()
        
    }

    return (

        <Flex
            // bg={useColorModeValue("white", "gray.800")}
            // color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            // borderBottom={1}
            // borderStyle={"solid"}
            // borderColor={useColorModeValue("gray.200", "gray.900")}
            // flex={{ base: 1, md: "auto" }}

        >
            <Spacer />
            <Button bg="green" onClick={connectWallet}> Login </Button>
            <Center>
                <ColorModeSwitcher />

            </Center>

        </Flex>
    )
}