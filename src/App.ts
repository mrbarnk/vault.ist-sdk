import { Auth } from "./vault/app/auth";
import { Card } from "./vault/app/card";
import { Exchange } from "./vault/app/exchange";
import { Kyc } from "./vault/app/kyc";
import { Wallet } from "./vault/app/wallet";

interface IApp {
    auth: Auth;
    kyc: Kyc;
    card: Card;
    wallet: Wallet;
    exchange: Exchange;
}

export default class App implements IApp {
    public auth: Auth;
    public kyc: Kyc;
    public card: Card;
    public wallet: Wallet;
    public exchange: Exchange;

    constructor(XMarchantID: string, bearerToken?: string) {
        this.auth = new Auth(XMarchantID, bearerToken);
        this.kyc = new Kyc(XMarchantID, bearerToken);
        this.card = new Card(XMarchantID, bearerToken);
        this.wallet = new Wallet(XMarchantID, bearerToken);
        this.exchange = new Exchange(XMarchantID, bearerToken);
    }
}