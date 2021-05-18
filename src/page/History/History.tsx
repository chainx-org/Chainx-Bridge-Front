import React, {useState, useEffect} from "react";
import {FunctionSwitchButton, HistoryStyle, ModalStyle, TableStyle} from "./style";
import {useTranslation} from "react-i18next";
import {Space, Table, Modal} from "antd";
import useAccountModel from "../../hooks/useAccountModel"
// import {decodeAddress, encodeAddress} from "@polkadot/keyring";
import ProcessingModal from "../../components/ProcessingModal/ProcessingModal";
import StatusModal from "../../components/StatusModal";
import axios from "axios";

interface HistoryRow {
    id: number;
    amount: number;
    chainxAddr: string;
    vaultBtcAddr: string;
    hash: string;
    countedBlock: number;
    status: "process" | "completed" | "cancelled";
}

function History():React.ReactElement {
    const {currentAccount} = useAccountModel();
    const requester = currentAccount?.address
    const {t} = useTranslation()
    const [page, setPage] = useState(0);
    const [currentTable, setCurrentTable] = useState("issue")
    const [IssueprocessingModalVisbible, SetIssueprocessingModalVisbible] = useState(false)
    const [IssuesuccessModalVisible, setIssueSuccessModalVisible] = useState(false)
    const [RedeemSuccessModalVisible, setRedeemSuccessModalVisible] = useState(false)
    const [IssuefailModalVisible, setIssueFailModalVisible] = useState(false)
    const [RedeemfailModalVisible, setRedeemfailModalVisible] = useState(false)
    const [RedeemProcessingModalVisible, setRedeemProcessingModalVisible] = useState(false)
    const [IssueData,setIssueData] = useState([])
    const [RedeemData,setRedeemData] = useState([])
    const [initLoading,setInitLoading] = useState(true)

    const Issuecolumns = [
        {
            title: '更新时间',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: '数量（XBTC）',
            dataIndex: 'btcAmount',
            key: 'btcAmount',
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
            dataIndex: 'openTime',
            key: 'openTime',
        },
        {
            title: '状态',
            key: 'status',
            render: (text: any, record: any) => (
                <Space size="middle">
                    {record.status === "processing" && <div className={"processing"}
                    onClick={() => SetIssueprocessingModalVisbible(true)}>{record.status}</div>}
                    {record.status === "失败" &&
                    <div onClick={() => setIssueFailModalVisible(true)} className={"fail"}>{record.status}</div>}
                    {record.status === "成功" &&
                    <div onClick={() => setIssueSuccessModalVisible(true)}>{record.status}</div>}
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
                    {record.status === "进行中" && <div className={"processing"}
                                                     onClick={() => setRedeemProcessingModalVisible(true)}>{record.status}</div>}
                    {record.status === "失败" &&
                    <div onClick={() => setRedeemfailModalVisible(true)} className={"fail"}>{record.status}</div>}
                    {record.status === "成功" &&
                    <div onClick={() => setRedeemSuccessModalVisible(true)}>{record.status}</div>}
                </Space>
            ),
        },
    ];
    
    useEffect(() => {
        if(requester) {
            setInitLoading(true)
            axios.get(`https://api-btc.chainx.org/xbridge/issue_requests?page=0&pageSize=5&requester=${requester}`).then((res) => {
                console.log(res)
                setIssueData(res.data.items)
                setInitLoading(false)
            })
        }
        axios.get(`https://api-btc.chainx.org/xbridge/redeem_requests?page=0&pageSize=5&requester=${requester}`).then((res) => {
            console.log(res,'res')
            setRedeemData(res.data.items)
        })
    }, [requester])
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
                {currentTable === "issue" ?
                    <Table columns={Issuecolumns} dataSource={IssueData} loading={initLoading}
                           pagination={{pageSize: 5, defaultPageSize: 5}}/> :
                    <Table columns={Redeemcolumns} dataSource={RedeemData}
                           pagination={{pageSize: 5, defaultPageSize: 5}}/>}
            </TableStyle>
            <ProcessingModal visible={IssueprocessingModalVisbible}
                             cancle={() => SetIssueprocessingModalVisbible(false)}/>
            <StatusModal visible={IssuesuccessModalVisible} cancle={() => setIssueSuccessModalVisible(false)}
                         type={"issue-success"}/>
            <StatusModal visible={RedeemSuccessModalVisible} cancle={() => setRedeemSuccessModalVisible(false)}
                         type={"redeem-success"}/>
            <StatusModal visible={IssuefailModalVisible} cancle={() => setIssueFailModalVisible(false)}
                         type={"issue-fail"}/>
            <StatusModal visible={RedeemfailModalVisible} cancle={() => setRedeemfailModalVisible(false)}
                         type={"redeem-fail"}/>
            <StatusModal visible={RedeemProcessingModalVisible} cancle={() => setRedeemProcessingModalVisible(false)}
                         type={"redeem-processing"}/>
        </HistoryStyle>
    )
}

export default History;
