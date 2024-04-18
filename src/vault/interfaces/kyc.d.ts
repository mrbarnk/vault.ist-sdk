export interface IKyc {
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