import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
// import { useTranslation } from "react-i18next";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import RedeemStatusModal from "../../../components/RedeemStatusModal/index";
import {useTranslation} from "react-i18next";
import {useApi} from "../../../hooks/useApi";
import { Vault } from "../../../interfaces";

function RedeemHistory(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  // const requester = currentAccount?.address;
  const [RedeemSuccessModalVisible, setRedeemSuccessModalVisible] = useState(false);
  const [RedeemStatus, setRedeemStatus] = useState("processing");
  const [requestID, setRequestID] = useState(0)
  const [requester, setRequester] = useState('')
  const [btcAddress, setBtcAddress] = useState("")
  const [vaultAddress, setVaultAddress] = useState("")
  const [RedeemDataKind, setRedeemDataKind] = useState('')
  const [vaultDogeAndBtc, setVaultDogeAndBtc] = useState('')
  const [RedeemAmount, setRedeemAmount] = useState(0)
  const [RedeemData, setRedeemData] = useState<any>([]);
  const [initLoading, setInitLoading] = useState(true);
  const { t } = useTranslation()
  const { api, isApiReady } = useApi();
  useEffect(()=> {
    async function GetRedeemRequestList (){
      const AllRedeemRequest = await api.query.xGatewayBitcoinBridge.redeemRequests.entries()
      const AllRedeemDogeCoinRequest = await api.query.xGatewayDogecoinBridge.redeemRequests.entries()
      let Redeemdata =  AllRedeemRequest.map(function(item){
        return {
          id:item[0].args[0].toNumber(),
          btcAddress:item[1].unwrap().btcAddress.toString(),
          openTime:item[1].unwrap().openTime.toNumber(),
          requester:item[1].unwrap().requester.toString(),
          vault:item[1].unwrap().vault.toString(),
          amount:item[1].unwrap().amount.toNumber(),
          redeemFee:item[1].unwrap().redeemFee.toNumber(),
          reimburse:item[1].unwrap().reimburse.isFalse,
          kind:"XBTC",
        }
      })
      let AllRedeemDogeCoinData = AllRedeemDogeCoinRequest.map(function(item){
        return {
          id:item[0].args[0].toNumber(),
          btcAddress:item[1].unwrap().btcAddress.toString(),
          openTime:item[1].unwrap().openTime.toNumber(),
          requester:item[1].unwrap().requester.toString(),
          vault:item[1].unwrap().vault.toString(),
          amount:item[1].unwrap().amount.toNumber(),
          redeemFee:item[1].unwrap().redeemFee.toNumber(),
          reimburse:item[1].unwrap().reimburse.isFalse,
          kind:"XDOGE"
        }
      })
      let currRedeemData = Redeemdata.filter((item: { requester: string; }) => item.requester === currentAccount?.address!!)
      let currDogeRedeemData = AllRedeemDogeCoinData.filter((item: { requester: string; }) => item.requester === currentAccount?.address!!)
      let sortRedeemData = currRedeemData.sort((a,b)=>b.id - a.id)
      let sortDogeRedeemData = currDogeRedeemData.sort((a,b)=>b.id - a.id)
      setRedeemData(sortRedeemData.concat(sortDogeRedeemData))
      setInitLoading(false)
    }
    if (isApiReady) {
      GetRedeemRequestList();
    }
  },[currentAccount, isApiReady])
  async function RedeemModal(val: any) {
    // setRedeemStatus(val);
    setRedeemSuccessModalVisible(true);
    setRequestID(val.id)
    setVaultAddress(val.vault)
    if(val.kind === 'XBTC') {
      const vaults = await api.query.xGatewayBitcoinBridge.vaults(val.vault)
      const vaultCurr: Vault = vaults.unwrap()
      setVaultDogeAndBtc(vaultCurr.wallet.toString())
    }
    if(val.kind === 'XDOGE') {
      const vaults = await api.query.xGatewayDogecoinBridge.vaults(val.vault)
      const vaultCurr: Vault = vaults.unwrap()
      setVaultDogeAndBtc(vaultCurr.wallet.toString())
    }
    setRequester(val.requester)
    setBtcAddress(val.btcAddress)
    setRedeemAmount(val.amount)
    setRedeemDataKind(val.kind)
  }
  const Redeemcolumns = [
    {
      title: t('RequestID'),
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: t('Redeem type'),
      dataIndex: 'kind',
      key: 'kind'
    },
    {
      title: t('Amount'),
      key: "btcAmount",
      render: (record: any) => (
          <div>{record.amount ? record.amount / 100000000 : 0}</div>
      ),
    },
    // {
    //   title: "BTC交易",
    //   dataIndex: "address",
    //   key: "address",
    // },
    // {
    //   title: t('Confirmation'),
    //   dataIndex: "number",
    //   key: "number",
    // },
    {
      title: "ChainX " + t('Block Height'),
      dataIndex: "openTime",
      key: "openTime",
    },
    {
      title: t('Status'),
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <div
            className={"processing"}
            onClick={() => RedeemModal(record)}
          >
            {t("processing")}
          </div>
        </Space>
      ),
    },
  ];
  return (
    <>
      <TableStyle>
        <Table
          columns={Redeemcolumns}
          dataSource={RedeemData}
          loading={initLoading}
          pagination={{ pageSize: 5, defaultPageSize: 5 }}
        />
      </TableStyle>
      <RedeemStatusModal
        visible={RedeemSuccessModalVisible}
        cancle={() => setRedeemSuccessModalVisible(false)}
        type={RedeemStatus}
        requestID={requestID}
        RedeemAmount={RedeemAmount}
        vaultAddress={vaultAddress}
        btcAddress={btcAddress}
        requester={requester}
        RedeemDataKind={RedeemDataKind}
        vaultDogeAndBtc={vaultDogeAndBtc}
      />
    </>
  );
}

export default RedeemHistory;