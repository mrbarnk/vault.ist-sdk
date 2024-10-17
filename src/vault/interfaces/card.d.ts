export interface CardTransaction {
    operationId: string;
    operationDate: string; // Date ISO string
    operationStatus: string;
    topUpCardModel?: TopUpCardModel | null;
    authorizationModel?: null; // You can expand this if the structure is known
    paymentFromCardModel?: null; // You can expand this if the structure is known
    feeModel?: null; // You can expand this if the structure is known
    atmWithdrawalModel?: null; // You can expand this if the structure is known
    atmBalanceInquiryModel?: null; // You can expand this if the structure is known
    cardTransactionModel?: null; // You can expand this if the structure is known
    reversalTransactionModel?: null; // You can expand this if the structure is known
    defaultTransactionModel?: null; // You can expand this if the structure is known
    reapAuthTransactionModel?: null; // You can expand this if the structure is known
    reapClearedTransactionModel?: ReapClearedTransactionModel | null;
    reapAtmWithdrawAuthModel?: null; // You can expand this if the structure is known
    reapAtmWithdrawClearedModel?: null; // You can expand this if the structure is known
}

interface TopUpCardModel {
    amount: CurrencyValue;
    walletFrom: string;
    exchangeRate: ExchangeRate;
    fee: CurrencyValue;
}

interface ExchangeRate {
    sourceCurrency: string;
    targetCurrency: string;
    rate: number;
    multiplier: number;
}

interface CurrencyValue {
    value: number;
    currency: string;
}

interface ReapClearedTransactionModel {
    amount: CurrencyValue;
    fee: CurrencyValue;
    billAmount: CurrencyValue;
    creationDate: string; // Date ISO string
    processingDate: string; // Date ISO string
    category: string;
    merchantName: string;
}



interface CardBalance {
    value: number;
    currency: string;
}

interface MonthlyAmount {
    value: number;
    currency: string;
}

export interface VCard {
    cardType: string; // e.g., "VIRTUAL"
    status: string; // e.g., "COLLECTION" or "ACTIVE"
    cardCompany: string; // e.g., "VISA"
    cardRequestId: number; // e.g., 518767087
    id?: number; // Optional for the first card where id is not present
    expired?: string; // Optional for the first card where expired is not present
    number?: string; // Optional for the first card where number is not present
    balance?: CardBalance; // Optional as it is only present for the second card
    cardholderName?: string; // Optional as it is only present for the second card
    monthlyIncome?: MonthlyAmount; // Optional as it is only present for the second card
    monthlyExpenses?: MonthlyAmount; // Optional as it is only present for the second card
    additionalStatuses: string[]; // e.g., ["ADDRESS", "ADDITIONAL_PERSONAL_INFO", ...]
    cardDesignId: string; // e.g., "PURPLE"
    cardProgram: string; // e.g., "CP_2"
    isPinSet: boolean; // e.g., false
}

export interface VCardResponse {
    cards: VCard[];
}
