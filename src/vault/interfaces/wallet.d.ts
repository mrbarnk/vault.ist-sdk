export interface IWallet {
    createWallet: {
        wallets: {
            id: number,
            name: string,
            address: string,
            baseCurrency?: string;
            currency: string,
            pattern: string,
            balance: number,
            limits: {
                PAYOUT_CRYPTO: {
                    min: number,
                    all: number
                }
            },
            balanceString: string,
            availableBalance: number,
            customerId: number,
            allowOperations: [
                "PAYIN_CRYPTO",
                "PAYOUT_CARD",
                "PAYOUT_CRYPTO",
                "TRANSFER_MOBILE",
                "WALLET_SCREEN",
                "WALLETTO_CARD",
                "WALLETTO_PAY_FOR_CARD",
                "EXCHANGE",
                "PAYIN_CARD",
                "WALLETTO_CARD_PAYLOAD"
            ],
            color: string,
            fiat: {
                customerCurrency: string,
                amount: number,
                change: number,
                changePercent: number,
                rate: number
            },
            scale: number,
            stub: boolean,
            walletCreationState: string,
            debit: boolean
            network?: string;
        }[]
    }
    estimateFee: {
        fee: number;
        sourceCurrency: string;
        transactionType: string;
        transactionAvailability: boolean
    }
    validateSend: {
        blockedAmount: {
            value: number;
            currency: string;
        }
        possibleToExecute: boolean
    }
    sendCoin: {
        txId: string;
        sequenceId: string;
        fee: number;
        internal: boolean;
        sendConfirmation: boolean;
    }
}
