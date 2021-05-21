import React, {useState} from "react";
import {HistoryCardStyle} from "./style";
import {FunctionSwitchButton, TableStyle} from "../../../page/History/style";
import {useTranslation} from "react-i18next";
import {Space, Table} from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import {useApi} from "../../../hooks/useApi";
import {useRedeemRequests} from "../../../hooks/useRedeemRequestList";
// import {convertBalanceToDisplayValue} from '../../../util'
// import {decodeAddress, encodeAddress} from "@polkadot/keyring";
import LastTime from './icons/time.svg'
import SuccessStatus from './icons/success.svg'
import FailStatus from './icons/fail.svg'
import Canceled from './icons/cancel.svg'

interface HistoryRow {
    id: string;
    amount: string;
    chainxAddress: string;
    btcAddress: string;
    hash: string;
    countedBlock: string;
    status: string;
  }
function HistoryCard():React.ReactElement {
    const {currentAccount} = useAccountModel();
    const {api} =useApi()
    const {t} = useTranslation()
    const redeemRequestsList = useRedeemRequests();
    const [page, setPage] = useState(0);
    const [currentTable, setCurrentTable] = useState("issue")
    const [isCancel, setIsCancel] = useState(false)
    const columns = [
        {
            title: '请求标示',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '数量（BTC）',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: '赎回BTC地址',
            dataIndex: 'redeemAddress',
            key: 'redeemAddress',
        },
        {
            title: '交易确认数',
            dataIndex: 'tradeNum',
            key: 'tradeNum',
        },
        {
            title: 'BTC交易哈希',
            dataIndex: 'tradeHash',
            key: 'tradeHash',
        },
        {
            title: '状态',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    {record.status === "进行中" && <div className='historyProcessing'>12:08:23<img src={LastTime} alt='lastTime' /></div>}
                    {record.status === "失败" && <div className='historyFail'>{record.status}<img src={FailStatus} alt='close' /></div>}
                    {record.status === "成功" && <div className='historySuccess'>{record.status}<img src={SuccessStatus} alt='close' /></div>}
                    {record.status === "取消" && <div className='historyCancel'>
                        <span className={ isCancel ? 'canceled' : 'cancel'} onClick={()=>setIsCancel(!isCancel)}>{isCancel ? '已取消' : '取消'}</span>
                        { isCancel && <img src={Canceled} alt='cancel' /> } </div>}
                </Space>
            ),
        },
    ];

    const Data = [
        {
            id: '1b2978...fd247ac',
            amount: '1.0000',
            redeemAddress: <span className='redeemHashAddress'>1b2978...fd247ac</span>,
            tradeNum: 1.0000,
            tradeHash: <span className='tradeHashAddress'>1b2978...fd247ac</span>,
            status: '成功'
        },
        {
            id: '1b2978...fd247ac',
            amount: '1.0000',
            redeemAddress: <span className='redeemHashAddress'>1b2978...fd247ac</span>,
            tradeNum: 1.0000,
            tradeHash: <span className='tradeHashAddress'>1b2978...fd247ac</span>,
            status: '进行中'
        },
        {
            id: '1b2978...fd247ac',
            amount: '1.0000',
            redeemAddress: <span className='redeemHashAddress'>1b2978...fd247ac</span>,
            tradeNum: 1.0000,
            tradeHash: <span className='tradeHashAddress'>1b2978...fd247ac</span>,
            status: '失败'
        },
        {
            id: '1b2978...fd247ac',
            amount: '1.0000',
            redeemAddress: <span className='redeemHashAddress'>1b2978...fd247ac</span>,
            tradeNum: 1.0000,
            tradeHash: <span className='tradeHashAddress'>1b2978...fd247ac</span>,
            status: '成功'
        },
        {
            id: '1b2978...fd247ac',
            amount: '1.0000',
            redeemAddress: <span className='redeemHashAddress'>1b2978...fd247ac</span>,
            tradeNum: 1.0000,
            tradeHash: <span className='tradeHashAddress'>1b2978...fd247ac</span>,
            status: '取消'
        },
        {
            id: '1b2978...fd247ac',
            amount: '1.0000',
            redeemAddress: <span className='redeemHashAddress'>1b2978...fd247ac</span>,
            tradeNum: 1.0000,
            tradeHash: <span className='tradeHashAddress'>1b2978...fd247ac</span>,
            status: '成功'
        },
    ];
    
    return (
        <HistoryCardStyle>
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
                <Table columns={columns} dataSource={Data} pagination={{pageSize:5,defaultPageSize:5}} /> :
                <Table columns={columns} dataSource={Data}pagination={{pageSize:5,defaultPageSize:5}} />}
            </TableStyle>
        </HistoryCardStyle>
    )
}
export default HistoryCard
