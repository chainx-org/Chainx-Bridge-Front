import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
import { useTranslation } from "react-i18next";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import RedeemStatusModal from "../../../components/RedeemStatusModal/index";

function RedeemHistory(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const requester = currentAccount?.address;
  const { t } = useTranslation();
  const [RedeemSuccessModalVisible, setRedeemSuccessModalVisible] = useState(
    false
  );
  const [RedeemStatus, setRedeemStatus] = useState("processing");
  const [RedeemData, setRedeemData] = useState([]);
  const [initLoading, setInitLoading] = useState(true);

  function RedeemModal(val: string) {
    setRedeemStatus(val);
    setRedeemSuccessModalVisible(true);
  }
  const Redeemcolumns = [
    {
      title: "更新时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "数量（XBTC）",
      dataIndex: "btcAmount",
      key: "btcAmount",
      render: (text: any, record: any) => (
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
      title: "交易确认数",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Chainx块高",
      dataIndex: "openTime",
      key: "openTime",
    },
    {
      title: "状态",
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
