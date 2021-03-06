import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import ProcessingModal from "../../../components/ProcessingModal/index";
import {useTranslation} from "react-i18next";
import {useApi} from "../../../hooks/useApi";
import {Option, U128} from "@polkadot/types";
import {IssueRequest} from "../../../interfaces";

function IssueHistory(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const [IssueprocessingModalVisbible, setIssueprocessingModalVisbible] = useState(false);
  const [IssueStatus, setIssueStatus] = useState('processing');
  const [requestID, setRequestID] = useState(0)
  const [openTimes, setOpenTimes] = useState(0)
  const [IssueDataKind, setIssueDataKind] = useState('')
  const [requester, setRequester] = useState('')
  const [IssueData, setIssueData] = useState<any>([]);
  const [initLoading, setInitLoading] = useState(true);
  const [btcAddress, setBtcAddress] = useState("")
  const [vaultAddress, setVaultAddress] = useState("")
  const [IssueAmount, setIssueAmount] = useState(0)
  const [griefingCollateral, setGriefingCollateral] = useState(0)
  const { api, isApiReady } = useApi();
  useEffect(()=> {
    async function GetIssueRequestList (){
      const AllIssueRequest = await api.query.xGatewayBitcoinBridge.issueRequests.entries<Option<IssueRequest>, [U128]>();
      const AllDogeCoinIssueRequest = await api.query.xGatewayDogecoinBridge.issueRequests.entries<Option<IssueRequest>, [U128]>();
      let data =  AllIssueRequest.map(function(item){
        return {
          id:item[0].args[0].toNumber(),
          btcAddress:item[1].unwrap().btcAddress.toString(),
          openTime:item[1].unwrap().openTime.toNumber(),
          requester:item[1].unwrap().requester.toString(),
          vault:item[1].unwrap().vault.toString(),
          btcAmount:item[1].unwrap().btcAmount.toNumber(),
          griefingCollateral:item[1].unwrap().griefingCollateral.toNumber(),
          kind:"XBTC"
        }
      })
      let AllDogeCoinIssueData = AllDogeCoinIssueRequest.map(function(item){
        return{
          id:item[0].args[0].toNumber(),
          btcAddress:item[1].unwrap().btcAddress.toString(),
          openTime:item[1].unwrap().openTime.toNumber(),
          requester:item[1].unwrap().requester.toString(),
          vault:item[1].unwrap().vault.toString(),
          btcAmount:item[1].unwrap().btcAmount.toNumber(),
          griefingCollateral:item[1].unwrap().griefingCollateral.toNumber(),
          kind:"XDOGE"
        }
      })
      let currIssueDogeData = AllDogeCoinIssueData.filter((item: { requester: string; }) => item.requester === currentAccount?.address!!)
      let currIssueData = data.filter((item: { requester: string; }) => item.requester === currentAccount?.address!!)
      let sortIssueDogeData = currIssueDogeData.sort((a,b)=>b.id - a.id)
      let sortIssueData = currIssueData.sort((a,b)=>b.id - a.id)
      setIssueData(sortIssueData.concat(sortIssueDogeData))
      setInitLoading(false)
    }
    if (isApiReady) {
      GetIssueRequestList();
    }
  },[currentAccount, isApiReady])
  function IssueModal(val: any) {
    // setIssueStatus(val.status);
    setIssueprocessingModalVisbible(true);
    setRequestID(val.id)
    setOpenTimes(val.openTime)
    setRequester(val.requester)
    setBtcAddress(val.btcAddress)
    setVaultAddress(val.vault)
    setIssueAmount(val.btcAmount)
    setGriefingCollateral(val.griefingCollateral)
    setIssueDataKind(val.kind)
  }
  const { t } = useTranslation()
  const Issuecolumns = [
    {
      title: t('RequestID'),
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: t('Issue type'),
      dataIndex: 'kind',
      key: 'kind'
    },
    {
      title: t('Amount'),
      key: "btcAmount",
      render:(record:any) => (
          <div>{record.btcAmount ? record.btcAmount / 100000000 : 0}</div>
      )
    },
    // {
    //   title: "BTC??????",
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
      key: "status",
      render: (record: any) => (
        <Space size="middle">
          <div
            className={"processing"}
            onClick={() => IssueModal(record)}
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
          columns={Issuecolumns}
          dataSource={IssueData}
          loading={initLoading}
          pagination={{ pageSize: 5, defaultPageSize: 5 }}
        />
      </TableStyle>
      <ProcessingModal
        visible={IssueprocessingModalVisbible}
        type={IssueStatus}
        cancle={() => setIssueprocessingModalVisbible(false)}
        requestID={requestID}
        requester={requester}
        btcAddress={btcAddress}
        IssueAmount={IssueAmount}
        griefingCollateral={griefingCollateral}
        vaultAddress={vaultAddress}
        openTimes={openTimes}
        IssueDataKind={IssueDataKind}
      />
    </>
  );
}
export default IssueHistory;