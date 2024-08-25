import Vault from '..';

describe('Card', () => {
    let app: Vault = new Vault({ XMerchantID: process.env.XMerchantID, mode: 'test' });
    let result: any;
    // app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' }).then(result => {

    beforeAll(async () => {
        result = await app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' })
    })

    it('should set bearer token', async () => {
        app = new Vault(result.access_token)
    })

    // it('should create account wallet', async () => {
    //     const response = await app.card.requestCard({ cardType: 'VIRTUAL', cardDesignId: 4 });
    // });


    // })

    // console.log(result)
    // beforeEach(() => {
    // });
    // Add more test cases for other methods in Auth class
});
