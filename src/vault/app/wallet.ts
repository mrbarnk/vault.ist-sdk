import { ApiClient } from "..";

interface IWallet {
    createWallet: {
        id: number,
        name: string,
        address: string,
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
    }[]
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

// Wallet Container
export class Wallet extends ApiClient {
    async createWallet(data: { currencies: string[] }): Promise<IWallet['createWallet']> {
        return this.sendRequest('POST', '/v2/wallets', data);
    }

    async getWallet(): Promise<IWallet['createWallet']> {
        return this.sendRequest('GET', '/v2/wallets');
    }


    async getHistory(): Promise<any> {
        return this.sendRequest('GET', '/v2/history/operations');
    }

    async sendWallet(data: {
        fee: number,
        phone: string;
        amount: number;
        address: string;
        currency: string;
    }): Promise<IWallet['sendCoin']> {
        return this.sendRequest('POST', '/v1/wallet/send', data);
    }

    async validateSend(data: {
        phone: string;
        amount: string;
        address: string;
        currency: string;
    }): Promise<IWallet['validateSend']> {
        return this.sendRequest('POST', '/v1/wallet/send/validate', data);
    }
}