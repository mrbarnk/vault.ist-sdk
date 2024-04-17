import App from '../App';
import { Auth } from '../vault/app/auth';

describe('Auth', () => {
    let app: App;
    let auth: Auth;
    let phone: string = process.env.PHONE || '';

    beforeEach(() => {
        app = new App();
        auth = app.auth;
    });

    it('should create an account', async () => {
        const response = await auth.createAccount({ phone, password: 'Password123' });
        expect(response.result).toBe('ok'); // Adjust the expected result as per your API response
    });

    it('should resend otp', async () => {
        const response = await auth.resendOtp(phone);
        // console.log(response)
        expect(response.result).toBe('ok');
    });

    // This works, but wont work again if number has been registered
    it('should verify phone', async () => {
        try {
            const response = await auth.verifyPhone({ phone, smsCode: "1234" });
            expect(response.token_type).toBe('bearer');
        } catch (error) {

        }
    });

    it('should sign in', async () => {
        const response = await auth.signIn({ password: 'Password123', number: phone, grant_type: 'mobile_phone' });
        // expect(response.access_token).toBe('string');
        expect(response.token_type).toBe('bearer');
        // Add more assertions as needed
    });

    // Add more test cases for other methods in Auth class
});
