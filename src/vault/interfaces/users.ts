import { ApiClient } from "..";

// User Container
export class VaultUser extends ApiClient {

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
