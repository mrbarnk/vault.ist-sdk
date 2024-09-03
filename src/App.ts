import { Auth } from "./vault/app/auth";
import { Card } from "./vault/app/card";
import { Exchange } from "./vault/app/exchange";
import { History } from "./vault/app/history";
import { Kyc } from "./vault/app/kyc";
import { PayIn } from "./vault/app/payin";
import { Payout } from "./vault/app/payout";
import { Wallet } from "./vault/app/wallet";
import { VaultUser } from "./vault/interfaces/users";

interface IApp {
    auth: Auth;
    kyc: Kyc;
    card: Card;
    wallet: Wallet;
    payin: PayIn;
    payout: Payout;
    exchange: Exchange;
    history: History;
}

export default class App implements IApp {
    public auth: Auth;
    public kyc: Kyc;
    public card: Card;
    public wallet: Wallet;
    public exchange: Exchange;
    public payin: PayIn;
    public payout: Payout;
    public history: History;
    public user: VaultUser;

    constructor(param: { XMerchantID?: string; bearerToken?: string, mode: 'test' | 'production' }) {
        this.auth = new Auth(param);
        this.kyc = new Kyc(param);
        this.user = new VaultUser(param);
        this.card = new Card(param);
        this.wallet = new Wallet(param);
        this.exchange = new Exchange(param);
        this.payin = new PayIn(param);
        this.payout = new Payout(param);
        this.history = new History(param);
    }
}