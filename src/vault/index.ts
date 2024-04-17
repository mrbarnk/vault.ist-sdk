import config from "../config";
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'
import { axiosInstance } from "../config/axios-config";



// Base API Client Class
export class ApiClient {
  instance: AxiosInstance = axiosInstance;
  bearerToken?: string;

  constructor(bearerToken?: string) {
    this.instance = axiosInstance;

    if (bearerToken) {
      this.setAuthToken(bearerToken)
    };
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



