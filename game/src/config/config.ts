

// config.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { zkSyncSepoliaTestnet} from 'wagmi/chains';
import { http } from 'viem';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

if (!projectId) {
  throw new Error('You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable');
}

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: projectId,
  chains: [zkSyncSepoliaTestnet],
  transports: {
   [zkSyncSepoliaTestnet.id]:http()
}
}
);