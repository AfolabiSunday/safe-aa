import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import safeModule from '@web3-onboard/gnosis'





export default async function ConnectOnboard(){



        const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>'

        const injected = injectedModule()

        const onboard = Onboard({
            theme:"light",
            wallets: [injected],
            chains: [
                {
                    id: '0x1',
                    token: 'ETH',
                    label: 'Ethereum Mainnet',
                    rpcUrl: MAINNET_RPC_URL
                },
                {
                    id: 42161,
                    token: 'ARB-ETH',
                    label: 'Arbitrum One',
                    rpcUrl: 'https://rpc.ankr.com/arbitrum'
                },
                {
                    id: '0xa4ba',
                    token: 'ARB',
                    label: 'Arbitrum Nova',
                    rpcUrl: 'https://nova.arbitrum.io/rpc'
                },
                {
                    id: '0x2105',
                    token: 'ETH',
                    label: 'Base',
                    rpcUrl: 'https://mainnet.base.org'
                }
            ]
        })

        const wallets = await onboard.connectWallet()
        console.log(wallets)

        
    }
   
   

