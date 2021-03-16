import React from 'react';
import { Summary } from '../Summary';
import { Transactionstable } from '../TransactionsTable';
import * as S from './styles';

export function DashBoard(){
    return (
        <S.Container>
            <Summary />
            <Transactionstable />
        </S.Container>
    )
}