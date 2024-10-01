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
    getWallets: WalletsResponse;
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


interface OperationModel {
    operationId: string;
    operationDate: string; // ISO date string
    operationStatus: string;
    sequenceId: string;
    exchangeModel?: null | ExchangeModel;
    receiveCryptoModel?: null | ReceiveCryptoModel;
    payinAdvcashModel?: null | PayinAdvcashModel;
    payinCardModel?: null | PayinCardModel;
    payoutCardModel?: null | PayoutCardModel;
    sendToWalletModel?: null | SendToWalletModel;
    sendToPhoneModel?: null | SendToPhoneModel;
    depositLockInModel?: null | DepositLockInModel;
    depositUnlockModel?: null | DepositUnlockModel;
    depositInterestModel?: null | DepositInterestModel;
    launchpadClaimModel?: null | LaunchpadClaimModel;
    cardIssueModel?: null | CardIssueModel;
    monthlyLoyaltyRewardModel?: null | MonthlyLoyaltyRewardModel;
    giftModel?: null | GiftModel;
}

interface SendToWalletModel {
    fromAddress: string;
    toAddress: string;
    debitAmount: AmountModel;
    creditAmount: AmountModel;
    feeAmount: AmountModel;
    txHash: string;
}

interface ReceiveCryptoModel {
    toAddress: string;
    fromAddress: string;
    amount: AmountModel;
    txHash: string;
}

interface AmountModel {
    value: number;
    currency: string;
}

interface ExchangeModel {
    fromCurrency: string;
    toCurrency: string;
    exchangeRate: number;
    fromAmount: AmountModel;
    toAmount: AmountModel;
    feeAmount: AmountModel;
    txHash: string;
}

interface PayinAdvcashModel {
    walletId: string;
    amount: AmountModel;
    transactionId: string;
}

interface PayinCardModel {
    cardNumber: string;
    amount: AmountModel;
    authorizationCode: string;
    txHash: string;
}

interface PayoutCardModel {
    cardNumber: string;
    amount: AmountModel;
    authorizationCode: string;
    txHash: string;
}

interface SendToPhoneModel {
    phoneNumber: string;
    amount: AmountModel;
    txHash: string;
}

interface DepositLockInModel {
    lockInAmount: AmountModel;
    lockInPeriod: number; // in days
    interestRate: number;
    txHash: string;
}

interface DepositUnlockModel {
    unlockAmount: AmountModel;
    unlockDate: string; // ISO date string
    txHash: string;
}

interface DepositInterestModel {
    interestAmount: AmountModel;
    interestDate: string; // ISO date string
    txHash: string;
}

interface LaunchpadClaimModel {
    projectId: string;
    tokenAmount: AmountModel;
    claimDate: string; // ISO date string
    txHash: string;
}

interface CardIssueModel {
    cardType: string;
    issueDate: string; // ISO date string
    cardNumber: string;
    cardHolderName: string;
    txHash: string;
}

interface MonthlyLoyaltyRewardModel {
    rewardAmount: AmountModel;
    rewardDate: string; // ISO date string
    txHash: string;
}

interface GiftModel {
    giftId: string;
    recipientAddress: string;
    giftAmount: AmountModel;
    txHash: string;
}







interface Limits {
    PAYOUT_CRYPTO: {
        min: number;
        all: number;
    };
}

interface FiatDetails {
    customerCurrency: string;
    amount: number;
    change: number;
    changePercent: number;
    rate?: number | null;
}

interface AccountDetails {
    beneficiary: string;
    number: string;
    bicCode: string;
    beneficiaryBankName: string;
    paymentDetails: string;
    country: string;
    depositFeePercent: number;
}

interface KYC {
    status: string;
    additionalStatus: string[];
    rejectReason: string;
}

interface Account {
    name: string;
    availableBalance: number;
    availableBalanceInDefaultCurrency: number;
    allowOperations: string[];
    balance: number;
    color: string;
    currency: string;
    status: string;
    scale: number;
    details: AccountDetails;
    kyc: KYC;
    createdAt: Date | null;
    iconUrl: string;
}

interface CryptoWallet {
    id: number;
    name: string;
    address: string;
    currency: string;
    balance: number;
    limits: Limits;
    balanceString: string;
    availableBalance: number;
    customerId: number;
    allowOperations: string[];
    color: string;
    fiat: FiatDetails;
    scale: number;
    stub: boolean;
    walletCreationState: string;
    iconUrl: string;
    debit: boolean;
}

interface WalletsResponse {
    wallets: CryptoWallet[];
    accounts: Account[];
    fiat: FiatDetails;
}
