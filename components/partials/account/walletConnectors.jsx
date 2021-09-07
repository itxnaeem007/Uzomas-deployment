import { InjectedConnector } from '@web3-react/injected-connector';
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import fortmatic from 'fortmatic';
// import PortisConnect from '@portis/web3';
import { TorusConnector } from '@web3-react/torus-connector';
// import { PortisConnector } from '@web3-react/portis-connector';
import { AuthereumConnector } from '@web3-react/authereum-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
// import { SquarelinkConnector } from '@web3-react/squarelink-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import config from '../config/config';

// const squarelink = require('squarelink');

// const defaultNetwork = 1;

const NETWORK_URL = 'https://mainnet.infura.io/v3/4bf032f2d38a4ed6bb975b80d6340847'

export const Fortmatic = new FortmaticConnector({ apiKey: config.fortmaticKey, chainId: config.chainId });
Fortmatic.fortmatic = new fortmatic(config.fortmaticKey);

export const WalletConnect = new WalletConnectConnector({
  rpc: { 1: NETWORK_URL[`${config.chainId}`] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 1200,
});

export const Injected = new InjectedConnector({
  supportedChainIds: config.chainIds ? config.chainIds : [config.chainId],
});

export const Torus = new TorusConnector({ chainId: config.chainId });
// // const fm = new Fortmatic(config.fortmaticKey);
// console.log(config.fortmaticKey)
// export const fortmatic = new FortmaticConnector({ apiKey: config.fortmaticKey, chainId: 1 })
// fortmatic.fortmatic = fm;
// export const Fortmatic = new FortmaticConnector({
//   apiKey: config.fortmaticKey,
//   logoutOnDeactivation: false,
// });
// const SquareLink = new SquarelinkConnector({
//   clientId: config.squarelink_id,
//   networks: config.squareLinkchainIds ? config.squareLinkchainIds : [config.chainId],
// });
// SquareLink.squarelink = new squarelink(config.squarelink_id);

export const Trezor = new TrezorConnector({
  chainId: config.chainId,
  url: NETWORK_URL[`${config.chainId}`],
  pollingInterval: 1200,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234',
});
// export const Fortmatic = new FortmaticConnector({ apiKey: config.fortmaticKey, chainId: config.chainId });
// Fortmatic.fortmatic = new fortmatic(config.fortmaticKey);

export const Ledger = new LedgerConnector({
  chainId: config.chainId,
  url: NETWORK_URL[`${config.chainId}`],
  pollingInterval: 1200,
});

// const Portis = new PortisConnector({
//   dAppId: config.portisKey,
//   networks: [config.chainId],
// });
// Portis.portis = new PortisConnect(config.portisKey, config.chainName);

export const Authereum = new AuthereumConnector({ chainId: config.chainId });

// const Ledger = new LedgerConnector();
export default {
  Injected,
  Fortmatic,
  // Portis,
  Ledger,
  Trezor,
  Torus,
  Authereum,
  WalletConnect,
  // SquareLink,
};
