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

    constructor(bearerToken?: string) {
        this.auth = new Auth(bearerToken);
        this.kyc = new Kyc(bearerToken);
        this.card = new Card(bearerToken);
        this.wallet = new Wallet(bearerToken);
        this.exchange = new Exchange(bearerToken);
    }
}