import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Verify from './icons/verify.svg'
import { useLocation } from "react-router-dom";
import { Wrapper } from "./style";

interface AddressInputProps {
    children: React.ReactNode;
    className?: string;
    balance: string;
    icon: Boolean;
    num: boolean;
    title?: string;
}

export default function RegisterInput({ className = '', children, balance, icon, num, title }: AddressInputProps): React.ReactElement<AddressInputProps> {
    const { t } = useTranslation()
    let location = useLocation()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(location.pathname.slice(7))
    }, [])
    return (
        <Wrapper className={` ${className}`}>
            <div className='topTitle'>
                <> {num ?
                    <div className='title'>
                        <p className='titleCollateral'>{t('Collateral')}</p>
                        <p className='collateralNum'>({t('Minimum value')} 1000)</p>
                    </div> : title ?
                        <div>{title}</div> :
                        <div>{t(`${path} address`)}</div>
                }
                </>
                <div className='righTooltip'>
                    {icon ?
                        <>
                            <img src={Verify} alt='Verify' />
                            <p className='verify'>{t('Calibration')}</p>
                        </>
                        : <p className='balance'>PCX {t('balance')}： {balance}</p>}
                </div>
            </div>
            <div className='addressIpt'>
                {children}
            </div>
        </Wrapper>
    )
}