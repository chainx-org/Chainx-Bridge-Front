import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
// import { useTranslation } from "react-i18next";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import RedeemStatusModal from "../../../components/RedeemStatusModal/index";
import {useTranslation} from "react-i18next";
import {useApi} from "../../../hooks/useApi";

function RedeemHistory(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const requester = currentAccount?.address;
  const [RedeemSuccessModalVisible, setRedeemSuccessModalVisible] = useState(false);
  const [RedeemStatus, setRedeemStatus] = useState("processing");
  const [RedeemData, setRedeemData] = useState<any>([]);
  const [initLoading, setInitLoading] = useState(true);
  const { t } = useTranslation()
  const { api, isApiReady } = useApi();
  useEffect(()=> {
    async function GetRedeemRequestList (){
      const AllRedeemRequest = await api.query.xGatewayBitcoinBridge.redeemRequests.entries()
      let Redeemdata =  AllRedeemRequest.map(function(item){
        return {
          id:item[0].args[0].toNumber(),
          btcAddress:item[1].unwrap().btcAddress.toString(),
          openTime:item[1].unwrap().openTime.toNumber(),
          requester:item[1].unwrap().requester.toString(),
          vault:item[1].unwrap().vault.toString(),
          amount:item[1].unwrap().amount.toNumber(),
          redeemFee:item[1].unwrap().redeemFee.toNumber(),
          reimburse:item[1].unwrap().reimburse.isFalse
        }
      })
      let currRedeemData = Redeemdata.filter((item: { requester: string; }) => item.requester === currentAccount?.address!!)
      let sortRedeemData = currRedeemData.sort((a,b)=>a.id - b.id)
      setRedeemData(sortRedeemData)
      setInitLoading(false)
    }
    if (isApiReady) {
      GetRedeemRequestList();
    }
  },[currentAccount, isApiReady])
  function RedeemModal(val: string) {
    setRedeemStatus(val);
    setRedeemSuccessModalVisible(true);
  }
  const Redeemcolumns = [
    {
      title: '请求标示',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: t('Amount (XBTC)'),
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
      title: "Chainx" + t('BlockHeight'),
      dataIndex: "openTime",
      key: "openTime",
    },
    {
      title: t('Status'),
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <div
            className={"processing"}
            onClick={() => RedeemModal("processing")}
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
      />
    </>
  );
}

export default RedeemHistory;