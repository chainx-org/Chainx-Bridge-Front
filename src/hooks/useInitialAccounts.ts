import { useState, useEffect } from "react";
import { web3Accounts, web3AccountsSubscribe, web3Enable } from "@polkadot/extension-dapp";
import ChangeChainXAddress from "../util";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import useAccountModel from "./useAccountModel";

function useInitialAccounts() {
    const accountModel = useAccountModel();
    const [downExtensions, setExtensitions] = useState(false)
    useEffect(() => {
        async function initial() {
            const extensions = await web3Enable("polkadot-js/apps");
            if (extensions.length > 0) {
                web3Enable("X bridge").then(async () => {
                    const accounts = await web3Accounts();
                    if (accounts.length > 0) {
                        accountModel.setCurrentAccount({
                            name: accounts[0].meta.name,
                            address: ChangeChainXAddress(accounts[0].address),
                        });
                    }
                    accountModel.setAccounts(
                        accounts.map(({ address, meta: { name } }) => ({
                            name,
                            address: encodeAddress(decodeAddress(address), 44),
                        }))
                    );
                    web3AccountsSubscribe((accounts) => {
                        accountModel.setAccounts(
                            accounts.map(({ address, meta: { name } }) => ({
                                name,
                                address: encodeAddress(decodeAddress(address), 44),
                            }))
                        );
                    });
                });
            } else {
                setExtensitions(true);
            }
        }
        initial();
    }, [])
    return { downExtensions };
}
export default useInitialAccounts;