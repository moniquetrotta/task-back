import axios, { AxiosRequestConfig } from "axios";
import { Method, Input, Response, Path } from "./client";
import { API_URL } from "env";

export async function apiClient<
	M extends Method,
	P extends Path,
	B extends boolean | undefined = undefined,
>(
	method: M,
	path: P,
	access_token: string,
	params?: Input[`${M} ${P}`],
	opts?: AxiosRequestConfig
): Promise<B extends true ? Response[`${M} ${P}`] : ApiOutput<M, P>> {
	const hasBody = !["get", "delete"].includes(method);

	if (path.includes(":")) {
		const pathSplit = path.split("/");

		for (let i = 0; i < pathSplit.length; i++) {
			const part = pathSplit[i];

			if (part && part.startsWith(":")) {
				const key = part.replace(":", "");

				if (!params || !(key in params)) {
					throw new Error(`Missing param ${key} in ${method} ${path}`);
				}

				pathSplit[i] = params[key];

				delete params[key];
			}
		}

		path = pathSplit.join("/") as P;
	}

	const res = await axios.request({
		method: method,
		url: path,
		baseURL: `${API_URL}`,
		data: hasBody ? params : undefined,
		params: hasBody ? undefined : params,
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
		...opts,
	});

	const data = res.data.data;

	data.status = res.status;

	return data;
}

export type ApiInput = Input;

export type ApiOutput<M extends Method, P extends Path> = Extract<
	Response[`${M} ${P}`],
	{ status: "success" }
>["data"] & {
	status: number;
};
