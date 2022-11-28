import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"

import { MetaMaskProvider } from 'metamask-react'
import { EthersProvider } from '../context/EthersProvider'
import { MMProvider } from "../context/MMProvider" // custom mm context provider

import "../styles/globals.css"
import Image from "next/image"
import FireFoot from "../components/footerAnimation"

const App = ({ Component, pageProps }: AppProps) => {
  return (


    <MetaMaskProvider>

      <MMProvider>
        <EthersProvider>

          <ChakraProvider>

            <div data-theme="autumn" className="font-mono bg-neutral-content">
              {/* className="bg-gradient-to-l from-primary to-secondary hover:bg-gradient-to-r" */}
              <Component {...pageProps} />                
              
            </div>


          </ChakraProvider>

        </EthersProvider>
      </MMProvider>

    </MetaMaskProvider>


  )
}

export default App
