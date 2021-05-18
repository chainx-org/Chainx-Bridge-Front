import React from "react";
import { CardFooterStyle } from "./style";
import ExplainTag from "../../ExplainTag";

interface Props{
    lockCollateral: React.ReactNode;
    issueAmount: React.ReactNode;
    toAccount: React.ReactNode;
}
const CardFooter:React.FunctionComponent<Props> = ({lockCollateral,issueAmount,toAccount}) =>{
    return (
        <CardFooterStyle>
            <ExplainTag title='锁定抵押品' children={lockCollateral}/>
            <ExplainTag title='发行总额' children={issueAmount}/>
            <ExplainTag title='目标账户' children={toAccount}/>
        </CardFooterStyle>
    )
}
export default CardFooter;
