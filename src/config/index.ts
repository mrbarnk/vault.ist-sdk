import "dotenv/config"

export const PRODUCTION_API = 'https://api.prod.testessential.net';
export const DEV_API = 'https://api.vault.sandbox.testessential.net';

const config = {
    baseUrl: process.env.VAULT_MODE == 'production' ? PRODUCTION_API : DEV_API,
    XMerchantID: process.env.XMerchantID,
    mode: 'test'
}

export default config;