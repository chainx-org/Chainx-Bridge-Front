import React, {useEffect, useState} from "react";
import { HistoryCardStyle } from "./style";
import { FunctionSwitchButton, TableStyle } from "../../../page/History/style";
import { useTranslation } from "react-i18next";
import {notification, Space, Table} from "antd";
import LastTime from './icons/time.svg'
import Canceled from './icons/cancel.svg'
import {web3FromAddress} from "@polkadot/extension-dapp";
import {LoadingOutlined} from "@ant-design/icons";
import useAccountModel from "../../../hooks/useAccountModel";
import {useApi} from "../../../hooks/useApi";
import {Option, U128} from "@polkadot/types";
import {IssueRequest, RedeemRequest} from "../../../interfaces";
import useExpireTime from "../../../hooks/useExpireTime";

function HistoryCard(): React.ReactElement {
    const { t } = useTranslation()
    const { api,isApiReady } = useApi()
    const { currentAccount } = useAccountModel();
    const {lastBlockNumber,IssueExpireTime,RedeemExpireTime} = useExpireTime()
    const [page, setPage] = useState(0);
    const [currentTable, setCurrentTable] = useState("issue")
    const [isCancel, setIsCancel] = useState(false)
    const [requestID, setRequest] = useState(0)
    const [buttonLoading, setButtonLoading] = useState(false);
    const key = "testIssue";
    const [IssueData, setIssueData] = useState<any>([]);
    const [RedeemData, setRedeemData] = useState<any>([]);
    const onCancleIssue = async (id:number) =>{
        const injector = await web3FromAddress(currentAccount!!.address);
        api.tx.xGatewayDogecoinBridge
            .cancelIssue(id)
            .signAndSend(
                currentAccount!!.address,
                {signer: injector.signer},
                ({status, dispatchError, events}) => {
                    if (status.isInBlock) {
                        notification["success"]({
                            key,
                            // message: `Completed at block hash ${status.asInBlock.toString()}`,
                            message: `Waiting For Confirmation`,
                            duration: 0,
                            icon: (
                                <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                            ),
                        });
                    } else if (dispatchError) {
                        if (dispatchError.isModule) {
                            const decoded = api.registry.findMetaError(
                                dispatchError.asModule
                            );
                            const {documentation, name, section} = decoded;
                            notification["error"]({
                                key,
                                message: `${section}.${name}: ${documentation.join(" ")}`,
                                duration: 3,
                            });
                            setButtonLoading(false);
                        }
                    } else {
                        if (status.type === "Finalized") {
                            setIsCancel(true)
                            setRequest(id)
                            notification["success"]({
                                key,
                                message: `Current status: ${status.type}`,
                                duration: 3,
                            });
                        } else {
                            notification["success"]({
                                key,
                                message: `Waiting For Confirmation`,
                                duration: 0,
                                icon: (
                                    <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                                ),
                            });
                        }
                    }
                }
            )
            .catch((error) => {
                notification["error"]({
                    key,
                    message: `:( transaction failed', ${error}`,
                    duration: 3,
                });
                setButtonLoading(false);
            });
    }

    const onCancleRedeem = async (id:number,reimburse:boolean) =>{
        const injector = await web3FromAddress(currentAccount!!.address);
        api.tx.xGatewayDogecoinBridge
            .cancelRedeem(id,reimburse)
            .signAndSend(
                currentAccount!!.address,
                {signer: injector.signer},
                ({status, dispatchError, events}) => {
                    if (status.isInBlock) {
                        notification["success"]({
                            key,
                            // message: `Completed at block hash ${status.asInBlock.toString()}`,
                            message: `Waiting For Confirmation`,
                            duration: 0,
                            icon: (
                                <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                            ),
                        });
                    } else if (dispatchError) {
                        if (dispatchError.isModule) {
                            const decoded = api.registry.findMetaError(
                                dispatchError.asModule
                            );
                            const {documentation, name, section} = decoded;
                            notification["error"]({
                                key,
                                message: `${section}.${name}: ${documentation.join(" ")}`,
                                duration: 3,
                            });
                            setButtonLoading(false);
                        }
                    } else {
                        if (status.type === "Finalized") {
                            setIsCancel(true)
                            setRequest(id)
                            notification["success"]({
                                key,
                                message: `Current status: ${status.type}`,
                                duration: 3,
                            });
                        } else {
                            notification["success"]({
                                key,
                                message: `Waiting For Confirmation`,
                                duration: 0,
                                icon: (
                                    <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                                ),
                            });
                        }
                    }
                }
            )
            .catch((error) => {
                notification["error"]({
                    key,
                    message: `:( transaction failed', ${error}`,
                    duration: 3,
                });
                setButtonLoading(false);
            });
    }
    function countdowm (openTime:number, type:number){
        let hours = ((((openTime + type) - lastBlockNumber) * 30)/60 / 60 %24).toFixed(0)
        let minute = ((((openTime + type) - lastBlockNumber) * 30)/60 % 60).toFixed(0)
        let second = ((((openTime + type) - lastBlockNumber) * 30) % 60).toFixed(0)
        let time = hours.toString()+ ":" + minute.toString() + ":" + second.toString()
        return time
    }
    const columns = [
        {
            title: '请求标示',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '数量（Doge）',
            key: 'btcAmount',
            render: (record: any) => (
                <div>{record.btcAmount ? record.btcAmount / 100000000 : 0}</div>
            ),
        },
        {
            title: '赎回Doge地址',
            dataIndex: 'btcAddress',
            key: 'btcAddress',
        },
        {
            title: '状态',
            key: 'action',
            render: (record: any) => (
                <Space size="middle">
                    {record.openTime + IssueExpireTime - lastBlockNumber > 0 && <div className='historyProcessing'>{countdowm(record.openTime,IssueExpireTime)}<img src={LastTime} alt='lastTime' /></div>}
                    {/*{record.status === "失败" && <div className='historyFail'>{record.status}<img src={FailStatus} alt='close' /></div>}*/}
                    {/*{record.status === "成功" && <div className='historySuccess'>{record.status}<img src={SuccessStatus} alt='close' /></div>}*/}
                    {record.openTime + IssueExpireTime - lastBlockNumber < 0 && <div className='historyCancel'>
                        <span className={isCancel && record.id === requestID ? 'canceled' : 'cancel'} onClick={() => onCancleIssue(record.id)}>{isCancel && record.id === requestID ? '已取消' : '取消'}</span>
                        {isCancel && record.id === requestID && <img src={Canceled} alt='cancel' />} </div>}
                </Space>
            ),
        },
    ];
    const RedeemColumns = [
        {
            title: '请求标示',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: t('数量 (XDOGE)'),
            key: "btcAmount",
            render: (record: any) => (
                <div>{record.amount ? record.amount / 100000000 : 0}</div>
            ),
        },
        {
            title: '赎回BTC地址',
            dataIndex: 'btcAddress',
            key: 'btcAddress',
        },
        {
            title: '状态',
            key: 'action',
            render: (record: any) => (
                <Space size="middle">
                    {record.openTime + RedeemExpireTime - lastBlockNumber > 0 && <div className='historyProcessing'>{countdowm(record.openTime,RedeemExpireTime)}<img src={LastTime} alt='lastTime' /></div>}
                    {/*{record.status === "失败" && <div className='historyFail'>{record.status}<img src={FailStatus} alt='close' /></div>}*/}
                    {/*{record.status === "成功" && <div className='historySuccess'>{record.status}<img src={SuccessStatus} alt='close' /></div>}*/}
                    {record.openTime + RedeemExpireTime - lastBlockNumber < 0 && <div className='historyCancel'>
                        <span className={isCancel && record.id === requestID ? 'canceled' : 'cancel'} onClick={() => onCancleRedeem(record.id,record.reimburse)}>{isCancel && record.id === requestID ? '已取消' : '取消'}</span>
                        {isCancel && record.id === requestID && <img src={Canceled} alt='cancel' />} </div>}
                </Space>
            ),
        },
    ]
    useEffect(()=> {
        async function GetIssueRequestList (){
            const AllIssueRequest = await api.query.xGatewayDogecoinBridge.issueRequests.entries<Option<IssueRequest>, [U128]>();
            const AllRedeemRequest = await api.query.xGatewayDogecoinBridge.redeemRequests.entries<Option<RedeemRequest>, [U128]>()
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
            let currIssueData = data.filter((item: { vault: string; }) => item.vault === currentAccount?.address!!)
            let sortIssueData = currIssueData.sort((a,b)=>a.id - b.id)
            let currRedeemData = Redeemdata.filter((item: { vault: string; }) => item.vault === currentAccount?.address!!)
            let sortRedeemData = currRedeemData.sort((a,b)=>a.id - b.id)
            setIssueData(sortIssueData)
            setRedeemData(sortRedeemData)
        }
        if (isApiReady) {
            GetIssueRequestList();
        }
    },[currentAccount, isApiReady,lastBlockNumber])
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
                    <Table columns={columns} dataSource={IssueData} pagination={{ pageSize: 5, defaultPageSize: 5 }} /> :
                    <Table columns={RedeemColumns} dataSource={RedeemData} pagination={{ pageSize: 5, defaultPageSize: 5 }} />}
            </TableStyle>
        </HistoryCardStyle>
    )
}
export default HistoryCard