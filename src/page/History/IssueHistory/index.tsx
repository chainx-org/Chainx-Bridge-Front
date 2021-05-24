import React, { useState, useEffect } from "react";
import { TableStyle } from "../style";
// import { useTranslation } from "react-i18next";
import { Space, Table } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import ProcessingModal from "../../../components/ProcessingModal/index";

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
  // const { t } = useTranslation();
  const [IssueprocessingModalVisbible, setIssueprocessingModalVisbible] = useState(false);
  const [IssueStatus, setIssueStatus] = useState("processing");
  const [IssueData, setIssueData] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  const [btcAddress, setBtcAddress] = useState("")
  const [vaultAddress, setVaultAddress] = useState("")
  const [IssueAmount, setIssueAmount] = useState(0)
  const [griefingCollateral, setGriefingCollateral] = useState(0)
  function IssueModal(val: any) {
    setIssueStatus(val.status);
    setIssueprocessingModalVisbible(true);
    setBtcAddress(val.btcAddress)
    setVaultAddress(val.vault)
    setIssueAmount(val.btcAmount)
    setGriefingCollateral(val.griefingCollateral)
  }

  const Issuecolumns = [
    {
      title: "更新时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "数量（XBTC）",
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
      key: "status",
      render: (record: any) => (
        <Space size="middle">
          <div
            className={"processing"}
            onClick={() => IssueModal(record)}
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
        `https://api-btc.chainx.org/xbridge/issue_requests?page=0&pageSize=10&requester=${requester}`
      )
        .then((res) => res.json())
        .then((res) => {
          setIssueData(res.items);
          setInitLoading(false);
        });
    }
  }, [requester]);
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