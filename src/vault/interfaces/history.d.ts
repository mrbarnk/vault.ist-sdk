export interface IHistory {
    history: {
        operationId: string;
        operationDate: string;
        operationStatus: string;
        sequenceId: string;
        exchangeModel: {
            fromAddress: string;
            toAddress: string;
            debitAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            creditAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            exchangeRate: {
                sourceCurrency: string;
                targetCurrency: string;
                rate?: number; // Defaults to 0
                multiplier?: number; // Defaults to 0
            };
        };
        receiveCryptoModel?: {
            toAddress: string;
            fromAddress: string;
            amount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            txHash: string;
        };
        payinAdvcashModel?: {
            email: string;
            toAddress: string;
            debitAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            creditAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            feeAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            exchangeRate: {
                sourceCurrency: string;
                targetCurrency: string;
                rate?: number; // Defaults to 0
                multiplier?: number; // Defaults to 0
            };
        };
        payinCardModel?: {
            fromCardPAN: string;
            toAddress: string;
            debitAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            creditAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            feeAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            exchangeRate: {
                sourceCurrency: string;
                targetCurrency: string;
                rate?: number; // Defaults to 0
                multiplier?: number; // Defaults to 0
            };
        };
        payoutCardModel?: {
            fromAddress: string;
            toCardPAN: string;
            debitAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            creditAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            feeAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            exchangeRate: {
                sourceCurrency: string;
                targetCurrency: string;
                rate?: number; // Defaults to 0
                multiplier?: number; // Defaults to 0
            };
        };
        sendToWalletModel?: {
            fromAddress: string;
            toAddress: string;
            debitAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            creditAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            feeAmount: {
                value?: number; // Defaults to 0
                currency: string;
            };
            txHash: string;
        };
        sendToPhoneModel?: {
            fromAddress: string;
            toPhone: string;
            amount: {
                value?: number; // Defaults to 0
                currency: string;
            };
        };
    }[];
}