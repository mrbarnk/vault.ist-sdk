import { ApiClient } from "..";

// User Container
export class VaultUser extends ApiClient {

    async getUserProfile(): Promise<{
        customerId: number;
        email: string;
        confirmedEmail: boolean;
        phone: string;
        primaryCurrency: string;
        country: string;
        completedKycLevel: string;
        completedKycLevelList: any[]; // Adjust type if you know the structure
        loyaltyLevel: string;
        wasInvited: boolean;
        payoutVersion: number;
        pushEnabled: boolean;
        acceptedGramTermsAndConditions: boolean;
        enabled2FA: boolean;
        payinIsBlocked: boolean;
        locale: string;
        badgeNames: string[]; // Assuming this is an array of strings
        dateOfBirth: string; // Can also be Date if you are parsing it
        transaction2FaMethod: string;
        activePushDevicesExists: boolean;
        acceptChoiseTerms: boolean;
        acceptInsuranceTerms: boolean;
        acceptDualCurrencyTerms: boolean;
        veroId: string;
        subscriptionActivated: boolean;
        isTemporaryPassword: boolean;
    }
    > {
        return this.sendRequest('GET', '/v1/customer/profile');
    }
    async updateUserProfile(data: {
        firstName: string,
        lastName: string,
        primaryCurrency: string,
        residenceCountry: string,
        residenceCity: string,
        residenceStreet: string,
        residenceZipCode: string,
        dateOfBirth: string
    }): Promise<any> {
        return this.sendRequest('PUT', '/v1/customer/profile', data);
    }
}
