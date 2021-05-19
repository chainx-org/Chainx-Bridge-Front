import React, {useState, useEffect} from "react";
import {TableStyle} from "../style";
import {useTranslation} from "react-i18next";
import {Space, Table} from "antd";
import axios from "axios";
import useAccountModel from "../../../hooks/useAccountModel";
import StatusModal from "../../../components/StatusModal";

function RedeemHistory():React.ReactElement {
    const {currentAccount} = useAccountModel();
    const requester = currentAccount?.address
    const {t} = useTranslation()
    const [RedeemSuccessModalVisible, setRedeemSuccessModalVisible] = useState(false)
    const [RedeemfailModalVisible, setRedeemfailModalVisible] = useState(false)
    const [RedeemProcessingModalVisible, setRedeemProcessingModalVisible] = useState(false)
    const [RedeemData,setRedeemData] = useState([])
    const [initLoading,setInitLoading] = useState(true)
    
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
            axios.get(`https://api-btc.chainx.org/xbridge/redeem_requests?page=0&pageSize=10&requester=${requester}`).then((res) => {
                console.log(res)
                setRedeemData(res.data.items)
                setInitLoading(false)
            })
        }
    }, [requester])
    return (
        <>
            <TableStyle>
                    <Table columns={Redeemcolumns} dataSource={RedeemData} loading={initLoading}
                           pagination={{pageSize: 5, defaultPageSize: 5}}/>
            </TableStyle>
            <StatusModal visible={RedeemSuccessModalVisible} cancle={() => setRedeemSuccessModalVisible(false)}
                         type={"redeem-success"}/>

            <StatusModal visible={RedeemfailModalVisible} cancle={() => setRedeemfailModalVisible(false)}
                         type={"redeem-fail"}/>
            <StatusModal visible={RedeemProcessingModalVisible} cancle={() => setRedeemProcessingModalVisible(false)}
                         type={"redeem-processing"}/>
        </>
    )
}

export default RedeemHistory;
