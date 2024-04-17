import App from '../App';
import { Auth } from '../vault/app/auth';
import { Wallet } from '../vault/app/wallet';

describe('KYC', () => {
    let app: App = new App();
    let result: any;
    // app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' }).then(result => {

    beforeAll(async () => {
        result = await app.auth.signIn({ password: process.env.password || '', number: process.env.phone || '', grant_type: 'mobile_phone' })
    })

    it('should set bearer token', async () => {
        app = new App(result.access_token)
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
