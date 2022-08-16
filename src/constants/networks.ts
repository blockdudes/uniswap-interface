import { JsonRpcProvider } from '@ethersproject/providers'

import { SupportedChainId } from './chains'

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}
const POKT_KEY = process.env.REACT_APP_POKT_KEY
if (typeof POKT_KEY === 'undefined') {
  throw new Error(`REACT_APP_POKT_KEY must be a defined environment variable`)
}
export const MAINNET_PROVIDER = new JsonRpcProvider(`https://eth-mainnet.gateway.pokt.network/v1/lb/${POKT_KEY}`)

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://eth-mainnet.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.RINKEBY]: `https://eth-rinkeby.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.ROPSTEN]: `https://eth-ropsten.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.GOERLI]: `https://eth-goerli.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.KOVAN]: `https://poa-kovan.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.ARBITRUM_ONE]: `https://abitrum-mainnet.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://abitrum-rinkeby.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.POLYGON]: `https://poly-mainnet.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.POLYGON_MUMBAI]: `https://poly-mumbai.gateway.pokt.network/v1/lb/${POKT_KEY}`,
  [SupportedChainId.CELO]: `https://forno.celo.org`,
  [SupportedChainId.CELO_ALFAJORES]: `https://alfajores-forno.celo-testnet.org`,
}
