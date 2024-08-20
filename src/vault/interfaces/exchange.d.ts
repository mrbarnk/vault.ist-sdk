export interface IExchange {
    getCurrencies: {
        rate: number;
        currencyFrom: string;
        currencyTo: string;
        minAmountFrom: number;
        maxAmountFrom: number;
        minAmountTo: number;
        maxAmountTo: number;
        amountScaleFrom: number;
        amountScaleTo: number;
        lock: false,
        allAmountFrom: number;
        rateScale: number;
    }[]
    createOffer: {
        offerId: number;
        expirationDateTime: string;
        exchangeRate: number;
        validSeconds: number;
        sourceCurrencyAmount: {
            amount: number;
            currencyCode: string;
            targetCurrencyAmount: {
                amount: number;
                currencyCode: string;
            }
        }
    }
    updateOffer: {
        offerId: number;
        expirationDateTime: string;
        exchangeRate: number;
        validSeconds: number;
        sourceCurrencyAmount: {
            amount: number;
            currencyCode: string;
        }
        targetCurrencyAmount: {
            amount: number;
            currencyCode: string;
        }
    }
    activateOffer: {
        status: string;
        offerId: number;
    }
}