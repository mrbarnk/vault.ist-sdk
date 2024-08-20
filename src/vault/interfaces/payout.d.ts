export interface IPayOut {
    getRatesAndCardData: {
        cards: {
            maskedPan: string;
            cardId?: number; // Defaults to 0
            cardType: string;
            pairsLimits: {
                currencyFrom: string;
                currencyTo: string;
                minAmountFrom?: number; // Defaults to 0
                maxAmountFrom?: number; // Defaults to 0
                allAmountFrom?: number; // Defaults to 0
            }[];
        }
        validationStatus: string;
        validSeconds?: number; // Defaults to 0
        pairs: {
            rate?: number; // Defaults to 0
            currencyFrom: string;
            currencyTo: string;
            amountScaleFrom?: number; // Defaults to 0
            amountScaleTo?: number; // Defaults to 0
            defaultMinAmountFrom?: number; // Defaults to 0
            defaultMaxAmountFrom?: number; // Defaults to 0
            defaultMaxAmountAll?: number; // Defaults to 0
        }[];
        fees: {
            rate?: number; // Defaults to 0
            transactionFee?: number; // Defaults to 0
            additionalFee?: number; // Defaults to 0
            crypteriumGas?: number; // Defaults to 0
            partnerFee?: number; // Defaults to 0
            fixFee?: number; // Defaults to 0
        };
    }
    addCard: {
        [name in string]: string
    }
    createOffer: {
        offerId?: number; // Defaults to 0
        validSeconds?: number; // Defaults to 0
        amount?: number; // Defaults to 0
        currencyFrom: string;
        amountTo?: number; // Defaults to 0
        currencyTo: string;
        rate?: number; // Defaults to 0
        feeInfo: {
            currency: string;
            name: string;
            scale?: number; // Defaults to 0
            value?: number; // Defaults to 0
            type: string;
        }[];
        possibleToExecute?: boolean; // Defaults to true
        limit: {
            value?: number; // Defaults to 0
            currency: string;
        };
    }
    updateOffer: {
        offerId?: number; // Defaults to 0
        validSeconds?: number; // Defaults to 0
        amount?: number; // Defaults to 0
        currencyFrom: string;
        amountTo?: number; // Defaults to 0
        currencyTo: string;
        rate?: number; // Defaults to 0
        feeInfo: {
            currency: string;
            name: string;
            scale?: number; // Defaults to 0
            value?: number; // Defaults to 0
            type: string;
        }[];
        possibleToExecute?: boolean; // Defaults to true
        limit: {
            value?: number; // Defaults to 0
            currency: string;
        };
    }
    executeOffer: {
        status: string;
        amountFrom?: number; // Defaults to 0
        currencyFrom: string;
        amountTo?: number; // Defaults to 0
        currencyTo: string;
    }

}