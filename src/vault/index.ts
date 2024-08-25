import config, { PRODUCTION_API } from "../config";
import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios'
import { axiosInstance } from "../config/axios-config";



// Base API Client Class
export class ApiClient {
  instance: AxiosInstance = axiosInstance;
  bearerToken?: string;

  constructor({ XMerchantID,
    bearerToken, mode }: { XMerchantID?: string; bearerToken?: string, mode: 'test' | 'production' }) {
    this.instance = axiosInstance;

    if (bearerToken) {
      this.setAuthToken(bearerToken)
    };

    if (XMerchantID) {
      this.setXMarchantID(XMerchantID)
    }
    if (mode == 'production') {
      this.setProductionEndpoint()
    }
  }

  protected setProductionEndpoint() {
    // Add a request interceptor to modify requests
    this.instance.interceptors.request.use((config) => {
      config.baseURL = PRODUCTION_API;
      return config;
    }, (error) => {
      // Handle request error
      return Promise.reject(error);
    });
  }


  protected setXMarchantID(XMerchantID: string) {
    // this.bearerToken = bearerToken

    // Interceptor to add Authorization header
    this.instance.interceptors.request.use(
      (config) => {
        config.headers['X-Merchant-ID'] = XMerchantID;
        return config;
      },
      (error) => {
        return Promise.reject(error); // Pass through request errors
      }
    );
  }

  protected setAuthToken(bearerToken: string) {
    this.bearerToken = bearerToken

    // Interceptor to add Authorization header
    this.instance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${bearerToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error); // Pass through request errors
      }
    );
  }
  /**
   * Send Request
   * @param method 
   * @param url 
   * @param data 
   * @returns 
   */
  protected async sendRequest<T>(
    method: string,
    url: string,
    data?: any,
    headers?: any
  ): Promise<T> {
    try {
      const response = await this.instance.request({ method: method?.toLowerCase(), url, data, headers })
      // console.log({ method, url, data })
      return response.data as T;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}



