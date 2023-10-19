import { apiClient } from "api-client/init";

export async function getAllProducts(access_token: string) {
	const { products } = await apiClient(
		"get",
		"/market/retailer/products",
		"access_token",
		{
			page: 1,
		}
	).catch(() => ({
		products: [],
	}));

	return products;
}

export async function getFullProduct(access_token: string) {
	const { product } = await apiClient(
		"get",
		"/market/retailer/products/:product_uuid",
		"access_token",
		{
			product_uuid: "123",
		}
	);
}

export async function createUser() {
	const user = await apiClient("post", "/auth/user", "123", {
		first_name: "Matheus",
		last_name: "Lobo",
		password: "teste123",
		phone: "11999999999",
		email: "teste123123123@teste.com",
	});
}

export async function loginUser() {
	const { access_token } = await apiClient("post", "/auth", "123", {
		email: "teste123123123@teste.com",
		password: "teste123",
	});
}
