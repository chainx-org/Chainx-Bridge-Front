import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import ProcessingModal from "../../../components/ProcessingModal/index";
import {useTranslation} from "react-i18next";
import {useApi} from "../../../hooks/useApi";
import {Option, U128} from "@polkadot/types";
import {IssueRequest} from "../../../interfaces";

interface HistoryRow {
  id: number;
  amount: number;
  chainxAddr: string;
  vaultBtcAddr: string;
  hash: string;
  countedBlock: number;
  status: "process" | "completed" | "cancelled";
}

function IssueHistory(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const requester = currentAccount?.address;
  const [IssueprocessingModalVisbible, setIssueprocessingModalVisbible] = useState(false);
  const [IssueStatus, setIssueStatus] = useState(  "processing");
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
      let data =  AllIssueRequest.map(function(item){
        return {
          id:item[0].args[0].toNumber(),
          btcAddress:item[1].unwrap().btcAddress.toString(),
          openTime:item[1].unwrap().openTime.toNumber(),
          requester:item[1].unwrap().requester.toString(),
          vault:item[1].unwrap().vault.toString(),
          btcAmount:item[1].unwrap().btcAmount.toNumber(),
          griefingCollateral:item[1].unwrap().griefingCollateral.toNumber()
        }
      })
      let currIssueData = data.filter((item: { requester: string; }) => item.requester === currentAccount?.address!!)
      let sortIssueData = currIssueData.sort((a,b)=>a.id - b.id)
      setIssueData(sortIssueData)
      setInitLoading(false)
    }
    if (isApiReady) {
      GetIssueRequestList();
    }
  },[currentAccount, isApiReady])
  function IssueModal(val: any) {
    setIssueStatus(val.status);
    setIssueprocessingModalVisbible(true);
    setBtcAddress(val.btcAddress)
    setVaultAddress(val.vault)
    setIssueAmount(val.btcAmount)
    setGriefingCollateral(val.griefingCollateral)
  }
  const { t } = useTranslation()
  const Issuecolumns = [
    {
      title: '请求标示',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: t('Amount (XBTC)'),
      key: "btcAmount",
      render:(record:any) => (
          <div>{record.btcAmount ? record.btcAmount / 100000000 : 0}</div>
      )
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
      title: "Chainx" + t('BlockHeight'),
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
            {"processing"}
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
        btcAddress={btcAddress}
        IssueAmount={IssueAmount}
        griefingCollateral={griefingCollateral}
        vaultAddress={vaultAddress}
      />
    </>
  );
}
export default IssueHistory;