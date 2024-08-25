import Vault from '..';

describe('Wallet', () => {
    let app: Vault = new Vault({ XMerchantID: process.env.XMerchantID, mode: 'test' });
    let result: any;
    // app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' }).then(result => {

    beforeAll(async () => {
        result = await app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' })
    })

    it('should set bearer token', async () => {

        app = new Vault(result.access_token)
    })

    it('should create account wallet', async () => {
        const response = await app.wallet.createWallet({
            "currencies": [
                "bat",
                "btc",
                "cho",
                "crpt",
                "dai",
            ]
        });
    });


    it('should get the account wallet', async () => {
        const response = await app.wallet.getWallet();
    });


    it('should get the account wallet history', async () => {
        const response = await app.wallet.getHistory();
    });
    // })

    // console.log(result)
    // beforeEach(() => {
    // });
    // Add more test cases for other methods in Auth class
});
