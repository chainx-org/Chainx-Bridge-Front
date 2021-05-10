import React, {useState, useEffect} from "react";
import {FunctionSwitchButton, HistoryStyle, ModalStyle, TableStyle} from "./style";
import {useTranslation} from "react-i18next";
import {Space, Table, Modal} from "antd";
import {ColumnType} from "antd/lib/table";
import useAccountModel from "../../hooks/useAccountModel"
import {decodeAddress, encodeAddress} from "@polkadot/keyring";
import CardMain from "../../components/CardMain";
import RequestID from "../../components/RequestID";
import ModalFooter from "../../components/ModalFooter";
import ProcessingModal from "../../components/ProcessingModal/ProcessingModal";
import StatusModal from "../../components/StatusModal";

interface HistoryRow {
    id: number;
    amount: number;
    chainxAddr: string;
    vaultBtcAddr: string;
    hash: string;
    countedBlock: number;
    status: "process" | "completed" | "cancelled";
}

enum HistoryTab {
    Issue,
    Redeem
}

function History() {
    const {currentAccount} = useAccountModel();
    const {t} = useTranslation()
    const [page, setPage] = useState(0);
    const [currentTable, setCurrentTable] = useState("issue")
    const [IssueprocessingModalVisbible,SetIssueprocessingModalVisbible] = useState(false)
    const [IssuesuccessModalVisible,setIssueSuccessModalVisible] = useState(false)
    const [RedeemSuccessModalVisible,setRedeemSuccessModalVisible] = useState(false)
    const [IssuefailModalVisible,setIssueFailModalVisible] = useState(false)
    const [RedeemfailModalVisible,setRedeemfailModalVisible] = useState(false)
    const [RedeemProcessingModalVisible,setRedeemProcessingModalVisible] = useState(false)
    const Issuecolumns = [
        {
            title: '更新时间',
            dataIndex: 'time',
            key: 'title'
        },
        {
            title: '数量（XBTC）',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'BTC交易',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '交易确认数',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Chainx块高',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '状态',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    {record.status === "进行中" && <div className={"processing"} onClick={()=> SetIssueprocessingModalVisbible(true)}>{record.status}</div>}
                    {record.status === "失败" && <div onClick={()=> setIssueFailModalVisible(true)} className={"fail"}>{record.status}</div>}
                    {record.status === "成功" && <div onClick={()=> setIssueSuccessModalVisible(true)}>{record.status}</div>}
                </Space>
            ),
        },
    ];

    const Redeemcolumns = [
        {
            title: '更新时间',
            dataIndex: 'time',
            key: 'title'
        },
        {
            title: '数量（XBTC）',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'BTC交易',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '交易确认数',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Chainx块高',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '状态',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    {record.status === "进行中" && <div className={"processing"} onClick={()=> setRedeemProcessingModalVisible(true)}>{record.status}</div>}
                    {record.status === "失败" && <div onClick={()=> setRedeemfailModalVisible(true)} className={"fail"}>{record.status}</div>}
                    {record.status === "成功" && <div onClick={()=> setRedeemSuccessModalVisible(true)}>{record.status}</div>}
                </Space>
            ),
        },
    ];

    const IssueData = [
        {
            key: '1',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '2',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '进行中'
        },
        {
            key: '3',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '失败'
        },
        {
            key: '4',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '5',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '6',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
    ];
    const RedeemData = [
        {
            key: '1',
            time: '2021-04-16 18:20',
            number: 0.00002,
            address: '1b2978...fd247ac',
            status: '失败'
        },
        {
            key: '2',
            time: '2021-04-16 18:20',
            number: 0.00003,
            address: '1b2978...fd247ac',
            status: '进行中'
        },
        {
            key: '3',
            time: '2021-04-16 18:20',
            number: 0.00004,
            address: '1b2978...fd247ac',
            status: '失败'
        },
        {
            key: '4',
            time: '2021-04-16 18:20',
            number: 0.00006,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '5',
            time: '2021-04-16 18:20',
            number: 0.00007,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '6',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
    ];
    return (
        <HistoryStyle>
            <FunctionSwitchButton>
                <ul>
                    <li onClick={() => {
                        setCurrentTable("issue");
                        setPage(0);
                    }} className={currentTable === "issue" ? "active" : "none"}>{t('issue')}</li>
                    <li onClick={() => {
                        setCurrentTable("redeem");
                        setPage(0);
                    }} className={currentTable === "redeem" ? "active" : "none"}>{t('Redeem')}</li>
                </ul>
            </FunctionSwitchButton>
            <TableStyle>
                {currentTable === "issue" ? <Table columns={Issuecolumns} dataSource={IssueData}/> :
                    <Table columns={Redeemcolumns} dataSource={RedeemData}/>}
            </TableStyle>
            <ProcessingModal visible={IssueprocessingModalVisbible} cancle={()=> SetIssueprocessingModalVisbible(false)}/>
            <StatusModal visible={IssuesuccessModalVisible} cancle={()=> setIssueSuccessModalVisible(false)} type={"issue-success"}/>
            <StatusModal visible={RedeemSuccessModalVisible} cancle={()=> setRedeemSuccessModalVisible(false)} type={"redeem-success"}/>
            <StatusModal visible={IssuefailModalVisible} cancle={()=> setIssueFailModalVisible(false)} type={"issue-fail"}/>
            <StatusModal visible={RedeemfailModalVisible} cancle={()=> setRedeemfailModalVisible(false)} type={"redeem-fail"}/>
            <StatusModal visible={RedeemProcessingModalVisible} cancle={()=> setRedeemProcessingModalVisible(false)} type={"redeem-processing"}/>
        </HistoryStyle>
    )
}

export default History;
