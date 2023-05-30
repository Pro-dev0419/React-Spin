import React, { Suspense, lazy, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
// import "../../assets/scss/style.scss";

import Fallback from "../../components/Fallback";
import NotFound from "../../components/404";
import Layout from "../../containers/Layout";

const Home = lazy(() => import("../Home"));
const Battles = lazy(() => import("../Battles/Battles"));
const FreeSpins = lazy(() => import("../FreeSpins/FreeSpins"));
const Mechanices = lazy(() => import("../Mechanices/Mechanices"));
const Unboxing = lazy(() => import("../Unboxing/Unboxing"));
const Terms = lazy(() => import("../Terms/Terms"));
const Player = lazy(() => import("../Player/Player"));
const PlayerGameHistory = lazy(() =>
  import("../PlayerGameHistory/PlayerGameHistory")
);

const App = () => {
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      /**
       * Wallets that implement either of these standards will be available automatically.
       *
       *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
       *     (https://github.com/solana-mobile/mobile-wallet-adapter)
       *   - Solana Wallet Standard
       *     (https://github.com/solana-labs/wallet-standard)
       *
       * If you wish to support a wallet that supports neither of those standards,
       * instantiate its legacy wallet adapter here. Common legacy adapters can be found
       * in the npm package `@solana/wallet-adapter-wallets`.
       */
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <Suspense fallback={<Fallback />}>
            <Router>
              <Layout>
                <Routes>
                  {/* Page routes */}
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/battles" element={<Battles />} />
                  <Route
                    exact
                    path="/unboxing/boxes/:boxId"
                    element={<FreeSpins />}
                  />
                  <Route path="/player/:playerId/" element={<Player />}>
                    <Route
                      path="game-history"
                      element={<PlayerGameHistory />}
                    />
                  </Route>
                  <Route exact path="/mechanics" element={<Mechanices />} />
                  <Route exact path="/unboxing" element={<Unboxing />} />
                  <Route exact path="/terms-of-service" element={<Terms />} />

                  {/* Default 404 */}
                  <Route element={<NotFound />} />
                </Routes>
              </Layout>
            </Router>
          </Suspense>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
