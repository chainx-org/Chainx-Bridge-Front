import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
// import { useTranslation } from "react-i18next";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import RedeemStatusModal from "../../../components/RedeemStatusModal/index";
import {useTranslation} from "react-i18next";

function RedeemHistory(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const requester = currentAccount?.address;
  // const { t } = useTranslation();
  const [RedeemSuccessModalVisible, setRedeemSuccessModalVisible] = useState(false);
  const [RedeemStatus, setRedeemStatus] = useState("processing");
  const [RedeemData, setRedeemData] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  const { t } = useTranslation()
  function RedeemModal(val: string) {
    setRedeemStatus(val);
    setRedeemSuccessModalVisible(true);
  }
  const Redeemcolumns = [
    {
      title: t('Update time'),
      dataIndex: "time",
      key: "time",
    },
    {
      title: t('Amount (XBTC)'),
      dataIndex: "btcAmount",
      key: "btcAmount",
      render: (record: any) => (
        <Space size="middle">
          <div>{record.btcAmount / 100000000}</div>
        </Space>
      ),
    },
    {
      title: "BTC交易",
      dataIndex: "address",
      key: "address",
    },
    {
      title: t('Confirmation'),
      dataIndex: "number",
      key: "number",
    },
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
            onClick={() => RedeemModal(record.status)}
          >
            {record.status}
          </div>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (requester) {
      setInitLoading(true);
      fetch(
        `https://api-btc.chainx.org/xbridge/redeem_requests?page=0&pageSize=10&requester=${requester}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setRedeemData(res.data);
          setInitLoading(false);
        });
    }
  }, [requester]);
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