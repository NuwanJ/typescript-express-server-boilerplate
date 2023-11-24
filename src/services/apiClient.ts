import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
}

export type HTTPClientError = {
    message: string;
    statusCode: number;
    errorCode?: number;
    errorMessage?: string;
    passErrorToApp?: boolean;
};

export class APIClient {
    baseURL: string;
    timeout: number;
    successStatusCodes = [200, 201, 202];
    headers: { [key: string]: any } = {};

    constructor(baseURL: string, timeout: number = 30000) {
        this.baseURL = baseURL;
        this.timeout = timeout;
    }

    async get(url: string, parameters?: object, headers?: object): Promise<object> {
        const response = await this.request(HTTPMethod.GET, url, null, parameters, headers);
        return response.data;
    }

    async post(
        url: string,
        body: unknown,
        parameters?: object,
        extraHeaders: object = {}
    ): Promise<object> {
        const response = await this.request(HTTPMethod.POST, url, body, parameters, extraHeaders);
        return response.data;
    }

    async put(url: string, body: object, parameters?: object): Promise<object> {
        const response = await this.request(HTTPMethod.PUT, url, body, parameters);
        return response.data;
    }

    async patch(url: string, body: object, parameters?: object): Promise<object> {
        const response = await this.request(HTTPMethod.PATCH, url, body, parameters);
        return response.data;
    }

    async delete(url: string, parameters?: object, body?: object): Promise<object> {
        const response = await this.request(HTTPMethod.DELETE, url, body, parameters);
        return response.data;
    }

    async request(
        method: HTTPMethod,
        url: string,
        body: unknown,
        parameters: object | undefined,
        extraHeaders: object = {}
    ): Promise<AxiosResponse> {
        const requestConfig: AxiosRequestConfig = {
            url,
            method,
            baseURL: this.baseURL,
            headers: { ...this.headers, ...extraHeaders },
            params: parameters,
            data: body,
            timeout: this.timeout,
        };

        return await axios.request(requestConfig).then(
            (response: AxiosResponse) => {
                if (!this.successStatusCodes.includes(response.status)) {
                    throw <HTTPClientError>{
                        statusCode: response.status,
                        message: response.statusText,
                    };
                }
                return response;
            },
            (e) => {
                let error = e?.response?.data;

                if (e?.response?.config?.responseType === "arraybuffer") {
                    error = JSON.parse(Buffer.from(e?.response?.data).toString("utf8"));
                }

                const errorObject = {
                    statusCode: e?.response?.status,
                    message: e?.response?.statusText,
                    error: error,
                    headers: e?.response?.headers,
                };

                if (!e.response) {
                    console.log({
                        level: "DEBUG",
                        message: "Stack Trace",
                        context: e,
                    });
                    throw <HTTPClientError>{
                        statusCode: 503,
                        message: "Service Unavailable",
                    };
                }

                throw <HTTPClientError>errorObject;
            }
        );
    }

    setHeader(header: string, value: string): void {
        this.headers[header] = value;
    }
}
