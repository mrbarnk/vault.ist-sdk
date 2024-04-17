import { ApiClient } from "..";
import fs from 'fs'

interface IKyc {
    status: {
        kycLevel: string;
        kyc1ClientData: {
            status: string;
            reason: string | null;
            rejectFormattedMessage: string | null;
        };
        kyc2ClientData: {
            status: string;
            reason: string | null;
            rejectFormattedMessage: string | null;
        };
        kyc3ClientData: {
            status: string;
            reason: string | null;
            rejectFormattedMessage: string | null;
        };
        daysToExpireKyc: number;
        remainingAmount: {
            value: number;
            currency: string;
        };
        blockedAmount: {
            value: number;
            currency: string;
        };
    }
    limit: {
        kycNoneLimit: {
            value: number;
            currency: string;
        };
        kyc0Limit: {
            value: number;
            currency: string;
        };
        kyc1Limit: {
            value: number;
            currency: string;
        };
        kyc2Limit: {
            value: number;
            currency: string;
        };
        kyc3Limit: {
            value: number;
            currency: string;
        };
    },
    docType: 'PASSPORT_FRONT' | 'DRIVING_LICENCE_FRONT' | 'ID_CARD_FRONT' | 'PASSPORT_BACK' | 'DRIVING_LICENCE_BACK' | 'ID_CARD_BACK' | 'SELFIE' | 'UTILITY_BILL' | 'BANK_STATEMENT' | 'CREDIT_CARD_STATEMENT' | 'VIDEO_VERIFICATION'
}


// Kyc Container
export class Kyc extends ApiClient {
    async status(): Promise<IKyc['status']> {
        return this.sendRequest('GET', '/v2/customer/kyc/data');
    }

    async limit(data: { KycId: string }): Promise<any> {
        return this.sendRequest('POST', '/account/add-Kyc', data);
    }

    step1(): { start: any, finish: any } {
        return {
            start: async (): Promise<{ id: string }> => this.sendRequest('POST', '/v4/kyc/start'),
            finish: async (data: { identificationId: string }): Promise<{ result: string }> => {
                return this.sendRequest('POST', '/v4/kyc/ondato/finished', data)
            }
        }
    }

    async step2(data: { image: string }): Promise<{ start: any }> {

        const formData = new FormData();
        formData.append('image', data.image);

        return {
            start: async (docType: IKyc['docType']) => this.sendRequest('POST',
                `/v1/kyc/upload/document?docType=${docType}`,
                formData,
                {
                    'Content-Type': 'multipart/form-data',
                }),
        }
    }

    async step3(): Promise<{ start: any }> {
        return {
            start: async (docType: IKyc['docType']) => this.sendRequest('POST', `/v2/customer/kyc3/start`),
        }
    }
}

