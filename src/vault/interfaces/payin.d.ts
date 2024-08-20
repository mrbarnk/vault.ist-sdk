export interface IPayIn {
    getFiatRate: {
        baseCurrency: string;
        symbolCurrency: string;
        rate: number;
    }[]
    addCard: {
        cardNumber: number;
        cardHolder: string;
        cardExpirationYear: number;
        cardExpirationMonth: number;
        billingAddress: {
            zip: string;
            city: string;
            state: string;
            address: string;
            countryCode: string;
        }
    }
    createOffer: {
        offerId?: number; // Defaults to 0
        expirationTime: string;
        validSeconds?: number; // Defaults to 0
        fromCurrency: string;
        rate: {
            rate: number; // Defaults to 0
            currency: string;
            // };
            commissionFix?: number; // Defaults to 0
            commissionPercentage?: number; // Defaults to 0
            minCrypto?: number; // Defaults to 0
            maxCrypto?: number; // Defaults to 0
        }
        feeInfo: {
            name: string;
            value?: number; // Defaults to 0
            valueOld?: number; // Defaults to 0
            scale?: number; // Defaults to 0
            currency: string;
        }[];
        limit: {
            value?: number; // Defaults to 0
            currency: string;
        };
        fees: {
            currency: string;
            scale?: number; // Defaults to 0
            rate?: number; // Defaults to 0
            partnerFee?: number; // Defaults to 0
            crypteriumGas?: number; // Defaults to 0
            additionalFee?: number; // Defaults to 0
            transactionFee?: number; // Defaults to 0
            insuranceFee?: number; // Defaults to 0
            feeTableEnabled?: boolean; // Defaults to true
            feeTable: {
                amountFrom: {
                    value: number; // Defaults to 0
                    currency: string;
                };
                amountTo: {
                    value: number; // Defaults to 0
                    currency: string;
                };
                percent?: number; // Defaults to 0
            }[];
        }
    }
    updateOffer: {
        offerId: number;
        fromCurrency: string;
        toCurrency: string;
        operation: string;
        toAmount: number;
        operation: 'PAYIN'
    }
    executeOffer: {
        successUrl: string;
        failUrl: string;
        cancelUrl: string;
        authLink: string;
        offerId?: number; // Defaults to 0
        transactionStatus: string;
        transactionStatusCode?: number; // Defaults to 0
        originalTransactionStatus: string;
        originalTransactionStatusCode?: number; // Defaults to 0
        paymentMode: string;
        maskedPan: string;
        transactionDate: string;
        transactionAmount: string;
        cardCountryCode: string;
        cardCountryName: string;
        cardBankName: string;
    }
    payCallback: {
        offerId?: number; // Defaults to 0
        status: string;
        amount?: number; // Defaults to 0
        currency: string;
        cryptoAmount?: number; // Defaults to 0
        cryptoCurrency: string;
        maskedPan: string;
        transactionStatus: string;
        transactionStatusCode?: number; // Defaults to 0
        originalTransactionStatus: string;
        originalTransactionStatusCode?: number; // Defaults to 0
        paymentMode: string;
        transactionDate: string;
        transactionAmount: string;
        cardCountryCode: string;
        cardCountryName: string;
        cardBankName: string;
        blockedAmount: {
            value?: number; // Defaults to 0
            currency: string;
        };
    }

}