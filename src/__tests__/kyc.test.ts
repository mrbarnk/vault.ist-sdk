import Vault from '..';

describe('KYC', () => {
    let app: Vault = new Vault(process.env.XMerchantID || '');
    let result: any;
    // app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' }).then(result => {

    beforeAll(async () => {
        result = await app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' })
    })

    it('should set bearer token', async () => {
        app = new Vault(result.access_token)
    })

    it('KYC level 1 start', async () => {
        const response = await app.kyc.step1().start();
    });

    
    it('KYC level 1 finish', async () => {
        const response = await app.kyc.step1().finish();
    });

    // status
    // limit
    // step1
    // step2
    // step3


    // })

    // console.log(result)
    // beforeEach(() => {
    // });
    // Add more test cases for other methods in Auth class
});
