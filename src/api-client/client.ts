type Type2048581c137c5b2130eb860e3ae37da196dfc25b = {
    id: string;
    name: string;
    path: string[];
    selectable?: boolean | undefined;
    children?: Type2048581c137c5b2130eb860e3ae37da196dfc25b | undefined;
}[];

type GetMetricsInput = {};

type GetMetricsResponse = string | {
    error: string;
};

type GetProductsInput = {} & {
    name?: string | undefined;
    cursor?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    brand?: string | undefined;
    sku?: string | undefined;
    min_inventory?: number | undefined;
    max_inventory?: number | undefined;
    condition?: ("novo" | "usado" | "recondicionado") | undefined;
    active?: ("true" | "false") | undefined;
    min_price?: number | undefined;
    max_price?: number | undefined;
    order_by?: ("score" | "resell_price" | "name" | "created_at" | "updated_at") | undefined;
    order?: ("asc" | "desc") | undefined;
    types?: ("simple" | "kit" | "parent")[] | undefined;
    validations?: string[] | undefined;
    uf?: string | undefined;
    cep?: string | undefined;
};

type GetProductsResponse = {
    status: "success";
    data: {
        count: number;
        products: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            brand?: string | undefined;
            listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            thumbnail?: (string | null) | undefined;
            parent_uuid?: string | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
            completeness?: number | undefined;
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            validations?: {
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                success: boolean;
                errors?: string[] | undefined;
                account_name?: string | undefined;
            }[] | undefined;
            deposit?: ({
                uuid: string;
                name: string;
                uf: string;
                cep: string;
                allowed_ceps: string[];
                main_road?: (string | null) | undefined;
                secondary_road?: (string | null) | undefined;
                number?: (string | null) | undefined;
                district?: (string | null) | undefined;
                city?: (string | null) | undefined;
                default: boolean;
            } | null) | undefined;
        }[];
    };
} | {
    error: string;
};

type PostProductsInput = {} & {
    name: string;
    sku: string;
    resell_price: number;
    type: "simple" | "simple_kit" | "parent" | "variant" | "kit";
    warranty?: (number | null) | undefined;
    observations?: (string | null) | undefined;
    items_per_box?: (number | null) | undefined;
    inventory?: (number | null) | undefined;
    cost_price?: (number | null) | undefined;
    brand?: (string | null) | undefined;
    main_description?: (string | null) | undefined;
    secondary_description?: (string | null) | undefined;
    height?: (number | null) | undefined;
    width?: (number | null) | undefined;
    depth?: (number | null) | undefined;
    gross_weight?: (number | null) | undefined;
    net_weight?: (number | null) | undefined;
    gtin?: (string | null) | undefined;
    condition?: (("novo" | "usado" | "recondicionado") | null) | undefined;
    warranty_unity?: (("d" | "m" | "y") | null) | undefined;
    dimensions_unity?: (("cm" | "m" | "mm") | null) | undefined;
    weight_unity?: (("kg" | "g") | null) | undefined;
    properties?: {
        name: string;
        value: string | null;
        type?: "variation" | "specification";
    }[] | undefined;
    groups_order?: (string[] | null) | undefined;
    generic?: boolean | undefined;
    deposit_uuid?: (string | null) | undefined;
};

type PostProductsResponse = {
    status: "success";
    data: {
        uuid: string;
    };
} | {
    error: string;
};

type DeleteProductsInput = {} & {
    /** UUIDs dos produtos */
    uuids: string[];
};

type DeleteProductsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetProductsStatsInput = {} & {};

type GetProductsStatsResponse = {
    status: "success";
    data: {
        total: number;
        base: number;
        active: number;
        inactive: number;
    };
} | {
    error: string;
};

type GetProductsSkusInput = {} & {};

type GetProductsSkusResponse = {
    status: "success";
    data: {
        skus: string[];
    };
} | {
    error: string;
};

type GetProductsBrandsInput = {} & {};

type GetProductsBrandsResponse = {
    status: "success";
    data: {
        brands: string[];
    };
} | {
    error: string;
};

type GetProductsCategoriesMarketplaceInput = {} & {
    marketplace: "mercado_livre" | "shopee" | "shopify" | "nuvemshop" | "loja_integrada" | "cartpanda";
    name?: string | undefined;
    id?: string | undefined;
};

type GetProductsCategoriesMarketplaceResponse = {
    status: "success";
    data: {
        categories: {
            id: string;
            name: string;
            path: string[];
            selectable?: boolean | undefined;
            children?: Type2048581c137c5b2130eb860e3ae37da196dfc25b | undefined;
        }[];
    };
} | {
    error: string;
};

type GetProductsSalesInput = {} & {
    /** Opcional - Offset */
    offset?: number | undefined;
    /** Opcional - Página */
    page?: number | undefined;
    /** Opcional - Limite */
    limit?: number | undefined;
    /** Opcional - Status */
    status?: ("pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed")[] | undefined;
    /** Opcional - Ordenar por */
    order_by?: ("status" | "quantity" | "sale_price" | "created_at" | "updated_at") | undefined;
    /** Opcional - Ordenação */
    order?: ("asc" | "desc") | undefined;
    account_name?: string | undefined;
    drop?: ("true" | "false") | undefined;
    name?: string | undefined;
    ids?: string[] | undefined;
    refund_approved?: ("true" | "false" | "null") | undefined;
};

type GetProductsSalesResponse = {
    status: "success";
    data: {
        count: number;
        sales: {
            id: string;
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            account: string;
            buyer: string;
            status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
            url: string;
            date: string;
            shipping_tracking?: string | undefined;
            shipping_tag?: string | undefined;
            cancelled_by?: string | undefined;
            items_price: number;
            sale_price: number;
            items: {
                title: string;
                thumbnail?: string | undefined;
                quantity: number;
                url: string;
                item_price: number;
                sale_price: number;
                product: {
                    name: string;
                    sku: string;
                    properties?: ({
                        name: string;
                        value: string;
                        type: "variation" | "specification";
                    }[] | undefined) | undefined;
                    thumbnail?: (string | null) | undefined;
                    uuid: string;
                };
                drop?: boolean;
                owner_uuid?: string | undefined;
            }[];
            user?: {
                first_name: string;
                last_name: string;
                email: string;
                phone: string;
                uuid: string;
            } | undefined;
            paid_at?: string | undefined;
            refund_approved?: (boolean | null) | undefined;
        }[];
    };
} | {
    error: string;
};

type PostProductsSalesReadyInput = {} & {
    ids: string[];
};

type PostProductsSalesReadyResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsSalesSendInput = {} & {
    ids: string[];
};

type PostProductsSalesSendResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsSalesRefundInput = {} & {
    ids: string[];
    status?: (boolean | null) | undefined;
};

type PostProductsSalesRefundResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsSalesIdShippingTrackingInput = {} & {
    /** ID da venda */
    id: string;
    /** Código de rastreio */
    shipping_tracking: string;
};

type PostProductsSalesIdShippingTrackingResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetProductsSalesStatsInput = {} & {};

type GetProductsSalesStatsResponse = {
    status: "success";
    data: {
        total: number;
        amount: number;
        amount_per_day: number;
        value: number;
        value_avg: number;
        value_avg_per_day: number;
        products_amount: number;
        own_sales: number;
        drop_sales: number;
        listings_amount: number;
        status: Partial<Record<"pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed", number>>;
        per_day: Partial<Record<string, number>>;
    };
} | {
    error: string;
};

type GetProductsDepositInput = {} & {};

type GetProductsDepositResponse = {
    status: "success";
    data: {
        deposits: {
            uuid: string;
            user_uuid: string;
            name: string;
            uf: string;
            cep: string;
            allowed_ceps: string[];
            main_road?: (string | null) | undefined;
            secondary_road?: (string | null) | undefined;
            number?: (string | null) | undefined;
            district?: (string | null) | undefined;
            city?: (string | null) | undefined;
            created_at: string;
            updated_at: string;
            default: boolean;
        }[];
    };
} | {
    error: string;
};

type PostProductsDepositInput = {} & {
    uuid?: string | undefined;
    name: string;
    uf: string;
    cep: string;
    allowed_ceps: string[];
    main_road?: (string | null) | undefined;
    secondary_road?: (string | null) | undefined;
    number?: (string | null) | undefined;
    district?: (string | null) | undefined;
    city?: (string | null) | undefined;
    default?: boolean | undefined;
};

type PostProductsDepositResponse = {
    status: "success";
    data: {
        uuid: string;
        user_uuid: string;
        name: string;
        uf: string;
        cep: string;
        allowed_ceps: string[];
        main_road?: (string | null) | undefined;
        secondary_road?: (string | null) | undefined;
        number?: (string | null) | undefined;
        district?: (string | null) | undefined;
        city?: (string | null) | undefined;
        created_at: string;
        updated_at: string;
        default: boolean;
    };
} | {
    error: string;
};

type PatchProductsDepositInput = {} & {
    uuid: string;
    name?: string | undefined;
    uf?: (string | undefined) | undefined;
    cep?: string | undefined;
    allowed_ceps?: string[] | undefined;
    main_road?: ((string | null) | undefined) | undefined;
    secondary_road?: ((string | null) | undefined) | undefined;
    number?: ((string | null) | undefined) | undefined;
    district?: ((string | null) | undefined) | undefined;
    city?: ((string | null) | undefined) | undefined;
    default?: (boolean | undefined) | undefined;
};

type PatchProductsDepositResponse = {
    status: "success";
    data: {
        uuid: string;
        user_uuid: string;
        name: string;
        uf: string;
        cep: string;
        allowed_ceps: string[];
        main_road?: (string | null) | undefined;
        secondary_road?: (string | null) | undefined;
        number?: (string | null) | undefined;
        district?: (string | null) | undefined;
        city?: (string | null) | undefined;
        created_at: string;
        updated_at: string;
        default: boolean;
    };
} | {
    error: string;
};

type GetProductsProductUuidInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type GetProductsProductUuidResponse = {
    status: "success";
    data: {
        product: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            brand?: string | undefined;
            other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            thumbnail?: (string | null) | undefined;
            parent_uuid?: string | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
            completeness?: number | undefined;
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            deposit?: ({
                uuid: string;
                name: string;
                uf: string;
                cep: string;
                allowed_ceps: string[];
                main_road?: (string | null) | undefined;
                secondary_road?: (string | null) | undefined;
                number?: (string | null) | undefined;
                district?: (string | null) | undefined;
                city?: (string | null) | undefined;
                default: boolean;
            } | null) | undefined;
            variants: {
                type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
                warranty_unity: "d" | "m" | "y";
                dimensions_unity: "cm" | "m" | "mm";
                weight_unity: "g" | "kg";
                condition: "novo" | "usado" | "recondicionado";
                group_images_by: "sku" | "cor";
                uuid: string;
                sku: string;
                name: string;
                inventory: number;
                items_per_box: number;
                active: boolean;
                brand_uuid?: (string | null) | undefined;
                warranty?: (number | null) | undefined;
                height?: (number | null) | undefined;
                width?: (number | null) | undefined;
                depth?: (number | null) | undefined;
                gross_weight?: (number | null) | undefined;
                net_weight?: (number | null) | undefined;
                resell_price: number;
                shop_price?: (number | null) | undefined;
                cost_price?: (number | null) | undefined;
                promotional_price?: (number | null) | undefined;
                main_description?: (string | null) | undefined;
                secondary_description?: (string | null) | undefined;
                observations?: (string | null) | undefined;
                gtin?: (string | null) | undefined;
                size_grid_uuid?: (string | null) | undefined;
                generic: boolean;
                created_at: string;
                updated_at: string;
                images: string[];
                properties?: ({
                    name: string;
                    value: string;
                    type: "variation" | "specification";
                }[] | undefined) | undefined;
                inventory_history?: {
                    entry: string;
                    type: "balance" | "deposit" | "withdraw";
                    amount: number;
                    comment?: string | undefined;
                    date: string;
                    service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                    url?: string | undefined;
                }[] | undefined;
                thumbnail?: (string | null) | undefined;
                own_validations?: {
                    id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                    priority: 1 | 2 | 3;
                    message: string;
                }[] | undefined;
            }[];
            inventory_history?: {
                entry: string;
                type: "balance" | "deposit" | "withdraw";
                amount: number;
                comment?: string | undefined;
                date: string;
                service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                url?: string | undefined;
            }[] | undefined;
            categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            id: string;
                            name: string;
                            path?: string[] | undefined;
                        }>>;
        };
    };
} | {
    error: string;
};

type PatchProductsProductUuidInput = {} & {
    name?: string | undefined;
    sku?: string | undefined;
    resell_price?: number | undefined;
    type?: ("simple" | "simple_kit" | "parent" | "variant" | "kit") | undefined;
    warranty?: ((number | null) | undefined) | undefined;
    observations?: ((string | null) | undefined) | undefined;
    items_per_box?: ((number | null) | undefined) | undefined;
    inventory?: ((number | null) | undefined) | undefined;
    cost_price?: ((number | null) | undefined) | undefined;
    brand?: ((string | null) | undefined) | undefined;
    main_description?: ((string | null) | undefined) | undefined;
    secondary_description?: ((string | null) | undefined) | undefined;
    height?: ((number | null) | undefined) | undefined;
    width?: ((number | null) | undefined) | undefined;
    depth?: ((number | null) | undefined) | undefined;
    gross_weight?: ((number | null) | undefined) | undefined;
    net_weight?: ((number | null) | undefined) | undefined;
    gtin?: ((string | null) | undefined) | undefined;
    condition?: ((("novo" | "usado" | "recondicionado") | null) | undefined) | undefined;
    warranty_unity?: ((("d" | "m" | "y") | null) | undefined) | undefined;
    dimensions_unity?: ((("cm" | "m" | "mm") | null) | undefined) | undefined;
    weight_unity?: ((("kg" | "g") | null) | undefined) | undefined;
    properties?: ({
        name: string;
        value: string | null;
        type?: "variation" | "specification";
    }[] | undefined) | undefined;
    groups_order?: ((string[] | null) | undefined) | undefined;
    generic?: (boolean | undefined) | undefined;
    deposit_uuid?: ((string | null) | undefined) | undefined;
    product_uuid: string;
};

type PatchProductsProductUuidResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsProductUuidCloneInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type PostProductsProductUuidCloneResponse = {
    status: "success";
    data: {
        product: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            brand?: string | undefined;
            other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            thumbnail?: (string | null) | undefined;
            parent_uuid?: string | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
            completeness?: number | undefined;
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            deposit?: ({
                uuid: string;
                name: string;
                uf: string;
                cep: string;
                allowed_ceps: string[];
                main_road?: (string | null) | undefined;
                secondary_road?: (string | null) | undefined;
                number?: (string | null) | undefined;
                district?: (string | null) | undefined;
                city?: (string | null) | undefined;
                default: boolean;
            } | null) | undefined;
            variants: {
                type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
                warranty_unity: "d" | "m" | "y";
                dimensions_unity: "cm" | "m" | "mm";
                weight_unity: "g" | "kg";
                condition: "novo" | "usado" | "recondicionado";
                group_images_by: "sku" | "cor";
                uuid: string;
                sku: string;
                name: string;
                inventory: number;
                items_per_box: number;
                active: boolean;
                brand_uuid?: (string | null) | undefined;
                warranty?: (number | null) | undefined;
                height?: (number | null) | undefined;
                width?: (number | null) | undefined;
                depth?: (number | null) | undefined;
                gross_weight?: (number | null) | undefined;
                net_weight?: (number | null) | undefined;
                resell_price: number;
                shop_price?: (number | null) | undefined;
                cost_price?: (number | null) | undefined;
                promotional_price?: (number | null) | undefined;
                main_description?: (string | null) | undefined;
                secondary_description?: (string | null) | undefined;
                observations?: (string | null) | undefined;
                gtin?: (string | null) | undefined;
                size_grid_uuid?: (string | null) | undefined;
                generic: boolean;
                created_at: string;
                updated_at: string;
                images: string[];
                properties?: ({
                    name: string;
                    value: string;
                    type: "variation" | "specification";
                }[] | undefined) | undefined;
                inventory_history?: {
                    entry: string;
                    type: "balance" | "deposit" | "withdraw";
                    amount: number;
                    comment?: string | undefined;
                    date: string;
                    service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                    url?: string | undefined;
                }[] | undefined;
                thumbnail?: (string | null) | undefined;
                own_validations?: {
                    id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                    priority: 1 | 2 | 3;
                    message: string;
                }[] | undefined;
            }[];
            inventory_history?: {
                entry: string;
                type: "balance" | "deposit" | "withdraw";
                amount: number;
                comment?: string | undefined;
                date: string;
                service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                url?: string | undefined;
            }[] | undefined;
            categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            id: string;
                            name: string;
                            path?: string[] | undefined;
                        }>>;
        };
    };
} | {
    error: string;
};

type PostProductsProductUuidConvertInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type PostProductsProductUuidConvertResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsProductUuidVariantInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    sku: string;
    source_uuid?: string | undefined;
};

type PostProductsProductUuidVariantResponse = {
    status: "success";
    data: {
        type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
        warranty_unity: "d" | "m" | "y";
        dimensions_unity: "cm" | "m" | "mm";
        weight_unity: "g" | "kg";
        condition: "novo" | "usado" | "recondicionado";
        group_images_by: "sku" | "cor";
        uuid: string;
        sku: string;
        name: string;
        inventory: number;
        items_per_box: number;
        active: boolean;
        brand_uuid?: (string | null) | undefined;
        warranty?: (number | null) | undefined;
        height?: (number | null) | undefined;
        width?: (number | null) | undefined;
        depth?: (number | null) | undefined;
        gross_weight?: (number | null) | undefined;
        net_weight?: (number | null) | undefined;
        resell_price: number;
        shop_price?: (number | null) | undefined;
        cost_price?: (number | null) | undefined;
        promotional_price?: (number | null) | undefined;
        main_description?: (string | null) | undefined;
        secondary_description?: (string | null) | undefined;
        observations?: (string | null) | undefined;
        gtin?: (string | null) | undefined;
        size_grid_uuid?: (string | null) | undefined;
        generic: boolean;
        created_at: string;
        updated_at: string;
        images: string[];
        brand?: string | undefined;
        other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    amount: number;
                    accounts: string[];
                }>> | undefined;
        thumbnail?: (string | null) | undefined;
        parent_uuid?: string | undefined;
        own_validations?: {
            id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
            priority: 1 | 2 | 3;
            message: string;
        }[] | undefined;
        completeness?: number | undefined;
        properties?: ({
            name: string;
            value: string;
            type: "variation" | "specification";
        }[] | undefined) | undefined;
        deposit?: ({
            uuid: string;
            name: string;
            uf: string;
            cep: string;
            allowed_ceps: string[];
            main_road?: (string | null) | undefined;
            secondary_road?: (string | null) | undefined;
            number?: (string | null) | undefined;
            district?: (string | null) | undefined;
            city?: (string | null) | undefined;
            default: boolean;
        } | null) | undefined;
        variants: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            inventory_history?: {
                entry: string;
                type: "balance" | "deposit" | "withdraw";
                amount: number;
                comment?: string | undefined;
                date: string;
                service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                url?: string | undefined;
            }[] | undefined;
            thumbnail?: (string | null) | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
        }[];
        inventory_history?: {
            entry: string;
            type: "balance" | "deposit" | "withdraw";
            amount: number;
            comment?: string | undefined;
            date: string;
            service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
            url?: string | undefined;
        }[] | undefined;
        categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    id: string;
                    name: string;
                    path?: string[] | undefined;
                }>>;
    };
} | {
    error: string;
};

type PostProductsProductUuidVariantsInput = {} & {
    product_uuid: string;
    variants: {
        sku: string;
        properties: {
            name: string;
            value?: string;
        }[];
    }[];
};

type PostProductsProductUuidVariantsResponse = {
    status: "success";
    data: {
        type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
        warranty_unity: "d" | "m" | "y";
        dimensions_unity: "cm" | "m" | "mm";
        weight_unity: "g" | "kg";
        condition: "novo" | "usado" | "recondicionado";
        group_images_by: "sku" | "cor";
        uuid: string;
        sku: string;
        name: string;
        inventory: number;
        items_per_box: number;
        active: boolean;
        brand_uuid?: (string | null) | undefined;
        warranty?: (number | null) | undefined;
        height?: (number | null) | undefined;
        width?: (number | null) | undefined;
        depth?: (number | null) | undefined;
        gross_weight?: (number | null) | undefined;
        net_weight?: (number | null) | undefined;
        resell_price: number;
        shop_price?: (number | null) | undefined;
        cost_price?: (number | null) | undefined;
        promotional_price?: (number | null) | undefined;
        main_description?: (string | null) | undefined;
        secondary_description?: (string | null) | undefined;
        observations?: (string | null) | undefined;
        gtin?: (string | null) | undefined;
        size_grid_uuid?: (string | null) | undefined;
        generic: boolean;
        created_at: string;
        updated_at: string;
        images: string[];
        brand?: string | undefined;
        other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    amount: number;
                    accounts: string[];
                }>> | undefined;
        thumbnail?: (string | null) | undefined;
        parent_uuid?: string | undefined;
        own_validations?: {
            id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
            priority: 1 | 2 | 3;
            message: string;
        }[] | undefined;
        completeness?: number | undefined;
        properties?: ({
            name: string;
            value: string;
            type: "variation" | "specification";
        }[] | undefined) | undefined;
        deposit?: ({
            uuid: string;
            name: string;
            uf: string;
            cep: string;
            allowed_ceps: string[];
            main_road?: (string | null) | undefined;
            secondary_road?: (string | null) | undefined;
            number?: (string | null) | undefined;
            district?: (string | null) | undefined;
            city?: (string | null) | undefined;
            default: boolean;
        } | null) | undefined;
        variants: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            inventory_history?: {
                entry: string;
                type: "balance" | "deposit" | "withdraw";
                amount: number;
                comment?: string | undefined;
                date: string;
                service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                url?: string | undefined;
            }[] | undefined;
            thumbnail?: (string | null) | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
        }[];
        inventory_history?: {
            entry: string;
            type: "balance" | "deposit" | "withdraw";
            amount: number;
            comment?: string | undefined;
            date: string;
            service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
            url?: string | undefined;
        }[] | undefined;
        categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    id: string;
                    name: string;
                    path?: string[] | undefined;
                }>>;
    };
} | {
    error: string;
};

type PatchProductsProductUuidVariantsInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    variants: {
        name: string;
        sku: string;
        resell_price: number;
        warranty?: (number | null) | undefined;
        observations?: (string | null) | undefined;
        items_per_box?: (number | null) | undefined;
        inventory?: (number | null) | undefined;
        cost_price?: (number | null) | undefined;
        brand?: (string | null) | undefined;
        main_description?: (string | null) | undefined;
        secondary_description?: (string | null) | undefined;
        height?: (number | null) | undefined;
        width?: (number | null) | undefined;
        depth?: (number | null) | undefined;
        gross_weight?: (number | null) | undefined;
        net_weight?: (number | null) | undefined;
        gtin?: (string | null) | undefined;
        condition?: (("novo" | "usado" | "recondicionado") | null) | undefined;
        warranty_unity?: (("d" | "m" | "y") | null) | undefined;
        dimensions_unity?: (("cm" | "m" | "mm") | null) | undefined;
        weight_unity?: (("kg" | "g") | null) | undefined;
        properties?: {
            name: string;
            value: string | null;
            type?: "variation" | "specification";
        }[] | undefined;
        groups_order?: (string[] | null) | undefined;
        generic?: boolean | undefined;
        deposit_uuid?: (string | null) | undefined;
        uuid: string;
        promotional_price?: number | undefined;
    }[];
};

type PatchProductsProductUuidVariantsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PatchProductsProductUuidVariantsPropertiesInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    properties: {
        old_name: string;
        new_name: string;
    }[];
};

type PatchProductsProductUuidVariantsPropertiesResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsProductUuidSizeGridInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    /** UUID do guia de tamanhos */
    uuid: string;
};

type PostProductsProductUuidSizeGridResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsProductUuidInventoryInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    type: "balance" | "deposit" | "withdraw";
    amount: number;
    comment?: string | undefined;
};

type PostProductsProductUuidInventoryResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetProductsProductUuidImagesInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type GetProductsProductUuidImagesResponse = {
    status: "success";
    data: {
        images: {
            uuid: string;
            url: string;
            group?: string | undefined;
            order: number;
        }[];
        group_by?: string | undefined;
        empty?: string[] | undefined;
    };
} | {
    error: string;
};

type PostProductsProductUuidImagesInput = (({} & {}) & {}) & {
    /** UUID do produto */
    product_uuid: string;
};

type PostProductsProductUuidImagesResponse = {
    status: "success";
    data: {
        images: {
            uuid: string;
            url: string;
            group?: string | undefined;
            order: number;
        }[];
        group_by?: string | undefined;
        empty?: string[] | undefined;
    };
} | {
    error: string;
};

type PostProductsProductUuidImagesOrderInput = {} & {
    product_uuid: string;
    images: {
        url: string;
        order: number;
        group?: string | undefined;
    }[];
    groups_order: string[];
};

type PostProductsProductUuidImagesOrderResponse = {
    status: "success";
    data: {
        images: {
            uuid: string;
            url: string;
            group?: string | undefined;
            order: number;
        }[];
        group_by?: string | undefined;
        empty?: string[] | undefined;
    };
} | {
    error: string;
};

type PostProductsProductUuidImagesGroupByInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    group_by: "sku" | "cor";
};

type PostProductsProductUuidImagesGroupByResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostProductsProductUuidImageInput = (({} & {}) & {}) & {
    /** UUID do produto */
    product_uuid: string;
};

type PostProductsProductUuidImageResponse = {
    status: "success";
    data: {
        images: {
            uuid: string;
            url: string;
            group?: string | undefined;
            order: number;
        }[];
        group_by?: string | undefined;
        empty?: string[] | undefined;
    };
} | {
    error: string;
};

type GetProductsProductUuidMercadoLivreInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    variants?: boolean | undefined;
};

type GetProductsProductUuidMercadoLivreResponse = {
    status: "success";
    data: {
        attributes: {
            type: "string" | "number" | "boolean";
            name: string;
            required: boolean;
            arbitrary: boolean;
            value?: string | undefined;
            values?: string[] | undefined;
            max_length?: number | undefined;
            hint?: string | undefined;
            multiple?: boolean | undefined;
        }[];
        has_grid?: boolean | undefined;
    };
} | {
    error: string;
};

type GetProductsProductUuidShopeeInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type GetProductsProductUuidShopeeResponse = {
    status: "success";
    data: {
        attributes: {
            type: "string" | "number" | "boolean";
            name: string;
            required: boolean;
            arbitrary: boolean;
            value?: string | undefined;
            values?: string[] | undefined;
            max_length?: number | undefined;
            hint?: string | undefined;
            multiple?: boolean | undefined;
        }[];
        has_grid?: boolean | undefined;
    };
} | {
    error: string;
};

type PostProductsProductUuidCategoriesMarketplaceInput = {} & {
    /** UUID do produto */
    product_uuid: string;
    marketplace: "mercado_livre" | "shopee" | "shopify" | "nuvemshop" | "loja_integrada" | "cartpanda";
    category_id: string;
};

type PostProductsProductUuidCategoriesMarketplaceResponse = {
    status: "success";
    data: {
        type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
        warranty_unity: "d" | "m" | "y";
        dimensions_unity: "cm" | "m" | "mm";
        weight_unity: "g" | "kg";
        condition: "novo" | "usado" | "recondicionado";
        group_images_by: "sku" | "cor";
        uuid: string;
        sku: string;
        name: string;
        inventory: number;
        items_per_box: number;
        active: boolean;
        brand_uuid?: (string | null) | undefined;
        warranty?: (number | null) | undefined;
        height?: (number | null) | undefined;
        width?: (number | null) | undefined;
        depth?: (number | null) | undefined;
        gross_weight?: (number | null) | undefined;
        net_weight?: (number | null) | undefined;
        resell_price: number;
        shop_price?: (number | null) | undefined;
        cost_price?: (number | null) | undefined;
        promotional_price?: (number | null) | undefined;
        main_description?: (string | null) | undefined;
        secondary_description?: (string | null) | undefined;
        observations?: (string | null) | undefined;
        gtin?: (string | null) | undefined;
        size_grid_uuid?: (string | null) | undefined;
        generic: boolean;
        created_at: string;
        updated_at: string;
        images: string[];
        brand?: string | undefined;
        other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    amount: number;
                    accounts: string[];
                }>> | undefined;
        thumbnail?: (string | null) | undefined;
        parent_uuid?: string | undefined;
        own_validations?: {
            id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
            priority: 1 | 2 | 3;
            message: string;
        }[] | undefined;
        completeness?: number | undefined;
        properties?: ({
            name: string;
            value: string;
            type: "variation" | "specification";
        }[] | undefined) | undefined;
        deposit?: ({
            uuid: string;
            name: string;
            uf: string;
            cep: string;
            allowed_ceps: string[];
            main_road?: (string | null) | undefined;
            secondary_road?: (string | null) | undefined;
            number?: (string | null) | undefined;
            district?: (string | null) | undefined;
            city?: (string | null) | undefined;
            default: boolean;
        } | null) | undefined;
        variants: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            inventory_history?: {
                entry: string;
                type: "balance" | "deposit" | "withdraw";
                amount: number;
                comment?: string | undefined;
                date: string;
                service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                url?: string | undefined;
            }[] | undefined;
            thumbnail?: (string | null) | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
        }[];
        inventory_history?: {
            entry: string;
            type: "balance" | "deposit" | "withdraw";
            amount: number;
            comment?: string | undefined;
            date: string;
            service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
            url?: string | undefined;
        }[] | undefined;
        categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    id: string;
                    name: string;
                    path?: string[] | undefined;
                }>>;
    };
} | {
    error: string;
};

type GetProductsProductUuidValidationsInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type GetProductsProductUuidValidationsResponse = {
    status: "success";
    data: {
        validations: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            success: boolean;
            account_name?: string | undefined;
            errors?: string[] | undefined;
        }[];
    };
} | {
    error: string;
};

type PostProductsProductUuidValidationsInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type PostProductsProductUuidValidationsResponse = {
    status: "success";
    data: {
        validations: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            success: boolean;
            account_name?: string | undefined;
            errors?: string[] | undefined;
        }[];
    };
} | {
    error: string;
};

type PostMarketProviderProductsInput = {} & {
    uuids: string[];
};

type PostMarketProviderProductsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type DeleteMarketProviderProductsInput = {} & {
    uuids: string[];
};

type DeleteMarketProviderProductsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostMarketProviderProductsProductUuidInput = {} & {
    product_uuid: string;
};

type PostMarketProviderProductsProductUuidResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type DeleteMarketProviderProductsProductUuidInput = {} & {
    cascade?: string | undefined;
    product_uuid: string;
};

type DeleteMarketProviderProductsProductUuidResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetMarketProviderValidationsProductUuidValidationsInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type GetMarketProviderValidationsProductUuidValidationsResponse = {
    status: "success";
    data: {
        validations: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            success: boolean;
            account_name?: string | undefined;
            errors?: string[] | undefined;
        }[];
    };
} | {
    error: string;
};

type PostMarketProviderValidationsProductUuidValidationsInput = {} & {
    /** UUID do produto */
    product_uuid: string;
};

type PostMarketProviderValidationsProductUuidValidationsResponse = {
    status: "success";
    data: {
        validations: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            success: boolean;
            account_name?: string | undefined;
            errors?: string[] | undefined;
        }[];
    };
} | {
    error: string;
};

type GetMarketRetailerProductsInput = {} & {
    name?: string | undefined;
    cursor?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    brand?: string | undefined;
    sku?: string | undefined;
    min_inventory?: number | undefined;
    max_inventory?: number | undefined;
    condition?: ("novo" | "usado" | "recondicionado") | undefined;
    active?: ("true" | "false") | undefined;
    min_price?: number | undefined;
    max_price?: number | undefined;
    order_by?: ("score" | "resell_price" | "name" | "created_at" | "updated_at") | undefined;
    order?: ("asc" | "desc") | undefined;
    types?: ("simple" | "kit" | "parent")[] | undefined;
    validations?: string[] | undefined;
    uf?: string | undefined;
    cep?: string | undefined;
};

type GetMarketRetailerProductsResponse = {
    status: "success";
    data: {
        count: number;
        products: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            brand?: string | undefined;
            listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            thumbnail?: (string | null) | undefined;
            parent_uuid?: string | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
            completeness?: number | undefined;
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            validations?: {
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                success: boolean;
                errors?: string[] | undefined;
                account_name?: string | undefined;
            }[] | undefined;
            deposit?: ({
                uuid: string;
                name: string;
                uf: string;
                cep: string;
                allowed_ceps: string[];
                main_road?: (string | null) | undefined;
                secondary_road?: (string | null) | undefined;
                number?: (string | null) | undefined;
                district?: (string | null) | undefined;
                city?: (string | null) | undefined;
                default: boolean;
            } | null) | undefined;
        }[];
    };
} | {
    error: string;
};

type GetMarketRetailerProductsStatsInput = {} & {};

type GetMarketRetailerProductsStatsResponse = {
    status: "success";
    data: {
        total?: (number | null) | undefined;
        base?: (number | null) | undefined;
    };
} | {
    error: string;
};

type GetMarketRetailerProductsProductUuidInput = {} & {
    product_uuid: string;
};

type GetMarketRetailerProductsProductUuidResponse = {
    status: "success";
    data: {
        product: {
            type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            brand?: string | undefined;
            other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            thumbnail?: (string | null) | undefined;
            parent_uuid?: string | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
            completeness?: number | undefined;
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            deposit?: ({
                main_road?: (string | null) | undefined;
                secondary_road?: (string | null) | undefined;
                number?: (string | null) | undefined;
                district?: (string | null) | undefined;
                city?: (string | null) | undefined;
                cep: string;
            } | null) | undefined;
            variants: {
                type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
                warranty_unity: "d" | "m" | "y";
                dimensions_unity: "cm" | "m" | "mm";
                weight_unity: "g" | "kg";
                condition: "novo" | "usado" | "recondicionado";
                group_images_by: "sku" | "cor";
                uuid: string;
                sku: string;
                name: string;
                inventory: number;
                items_per_box: number;
                active: boolean;
                brand_uuid?: (string | null) | undefined;
                warranty?: (number | null) | undefined;
                height?: (number | null) | undefined;
                width?: (number | null) | undefined;
                depth?: (number | null) | undefined;
                gross_weight?: (number | null) | undefined;
                net_weight?: (number | null) | undefined;
                resell_price: number;
                shop_price?: (number | null) | undefined;
                cost_price?: (number | null) | undefined;
                promotional_price?: (number | null) | undefined;
                main_description?: (string | null) | undefined;
                secondary_description?: (string | null) | undefined;
                observations?: (string | null) | undefined;
                gtin?: (string | null) | undefined;
                size_grid_uuid?: (string | null) | undefined;
                generic: boolean;
                created_at: string;
                updated_at: string;
                images: string[];
                properties?: ({
                    name: string;
                    value: string;
                    type: "variation" | "specification";
                }[] | undefined) | undefined;
                inventory_history?: {
                    entry: string;
                    type: "balance" | "deposit" | "withdraw";
                    amount: number;
                    comment?: string | undefined;
                    date: string;
                    service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                    url?: string | undefined;
                }[] | undefined;
                thumbnail?: (string | null) | undefined;
                own_validations?: {
                    id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                    priority: 1 | 2 | 3;
                    message: string;
                }[] | undefined;
            }[];
            inventory_history?: {
                entry: string;
                type: "balance" | "deposit" | "withdraw";
                amount: number;
                comment?: string | undefined;
                date: string;
                service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                url?: string | undefined;
            }[] | undefined;
            categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            id: string;
                            name: string;
                            path?: string[] | undefined;
                        }>>;
        };
    };
} | {
    error: string;
};

type GetMarketRetailerProductsProductUuidImagesInput = {} & {
    product_uuid: string;
};

type GetMarketRetailerProductsProductUuidImagesResponse = {
    status: "success";
    data: {
        images: {
            uuid: string;
            url: string;
            group?: string | undefined;
            order: number;
        }[];
        group_by?: string | undefined;
        empty?: string[] | undefined;
    };
} | {
    error: string;
};

type GetServicesErpInput = {} & {};

type GetServicesErpResponse = {
    status: "success";
    data: {
        services: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            account_name: string;
            account_id: string;
            webhook?: string | undefined;
            status?: ("active" | "error" | "missing_key") | undefined;
        }[];
    };
} | {
    error: string;
};

type PatchServicesErpInput = {} & {
    account_name?: string | undefined;
    old_token?: ((string | null) | undefined) | undefined;
    account_id: string;
};

type PatchServicesErpResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type DeleteServicesErpInput = {} & {
    service_name: "bling" | "tinyerp";
    account_name: string;
};

type DeleteServicesErpResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesErpPdfInput = {} & {
    sales_ids: string[];
};

type PostServicesErpPdfResponse = {
    status: "success";
    data: {
        url: string;
        info: string;
    };
} | {
    error: string;
};

type PostServicesErpBlingInput = {} & {
    code: string;
    state: string;
};

type PostServicesErpBlingResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesErpBlingExportProductInput = {} & {
    product_uuid: string;
    account_id: string;
};

type PostServicesErpBlingExportProductResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesErpBlingExportProductsInput = {} & {
    products_uuids: string[];
    account_id: string;
};

type PostServicesErpBlingExportProductsResponse = {
    status: "success";
    data: {
        uuid: string;
    };
} | {
    error: string;
};

type GetServicesErpBlingExportProductsInput = {} & {
    uuid: string;
};

type GetServicesErpBlingExportProductsResponse = {
    status: "success";
    data: {
        errors: {
            error: string;
            product_uuid: string;
        }[];
        success: string[];
        finished?: boolean;
    };
} | {
    error: string;
};

type PostServicesErpBlingImportInput = {} & {
    account_id: string;
    overwrite?: boolean | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    skus?: string[] | undefined;
};

type PostServicesErpBlingImportResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetServicesErpBlingImportInput = {} & {};

type GetServicesErpBlingImportResponse = {
    status: "success";
    data: {
        imported: number;
        images: number;
        in_progress: boolean;
        canceled: boolean;
    };
} | {
    error: string;
};

type DeleteServicesErpBlingImportInput = {} & {};

type DeleteServicesErpBlingImportResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesErpTinyerpInput = {} & {
    token: string;
};

type PostServicesErpTinyerpResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesErpTinyerpExportProductInput = {} & {
    products_uuids: string[];
    account_id: string;
};

type PostServicesErpTinyerpExportProductResponse = {
    status: "success";
    data: {
        uuid: string;
    };
} | {
    error: string;
};

type GetServicesErpTinyerpExportProductInput = {} & {
    uuid: string;
};

type GetServicesErpTinyerpExportProductResponse = {
    status: "success";
    data: {
        errors: {
            error: string;
            product_uuid: string;
        }[];
        success: string[];
        finished?: boolean;
    };
} | {
    error: string;
};

type PostServicesErpTinyerpImportInput = {} & {
    account_id: string;
    overwrite?: boolean | undefined;
    skus?: string[] | undefined;
};

type PostServicesErpTinyerpImportResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetServicesErpTinyerpImportInput = {} & {};

type GetServicesErpTinyerpImportResponse = {
    status: "success";
    data: {
        imported: number;
        images: number;
        in_progress: boolean;
        canceled: boolean;
    };
} | {
    error: string;
};

type DeleteServicesErpTinyerpImportInput = {} & {};

type DeleteServicesErpTinyerpImportResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesErpMercadolivreGridInput = {} & {
    /** Linhas do guia de tamanhos */
    rows: {
        br_size: number;
        centimeter: number;
        max_centimeter?: number | undefined;
        m_us_size?: number | undefined;
        f_us_size?: number | undefined;
    }[];
    /** Nome do guia de tamanhos */
    name: string;
    /** Opcional - Gênero */
    gender?: ("Masculino" | "Feminino" | "Meninos" | "Meninas" | "Sem g\u00EAnero") | undefined;
    /** Opcional - Arquivado */
    archived?: boolean | undefined;
};

type PostServicesErpMercadolivreGridResponse = {
    status: "success";
    data: {
        message: string;
        uuid: string;
    };
} | {
    error: string;
};

type GetServicesErpMercadolivreGridInput = {} & {};

type GetServicesErpMercadolivreGridResponse = {
    status: "success";
    data: {
        grid: {
            name: string;
            uuid: string;
            rows: {
                br_size: number;
                centimeter: number;
                max_centimeter?: number | undefined;
                m_us_size?: number | undefined;
                f_us_size?: number | undefined;
            }[];
            gender: "Masculino" | "Feminino" | "Meninos" | "Meninas" | "Sem g\u00EAnero";
            archived?: boolean;
        }[];
    };
} | {
    error: string;
};

type PatchServicesErpMercadolivreGridUuidInput = {} & {
    /** Linhas do guia de tamanhos */
    rows: {
        br_size: number;
        centimeter: number;
        max_centimeter?: number | undefined;
        m_us_size?: number | undefined;
        f_us_size?: number | undefined;
    }[];
    /** Nome do guia de tamanhos */
    name: string;
    /** Opcional - Gênero */
    gender?: ("Masculino" | "Feminino" | "Meninos" | "Meninas" | "Sem g\u00EAnero") | undefined;
    /** Opcional - Arquivado */
    archived?: boolean | undefined;
    /** UUID do guia de tamanhos */
    uuid: string;
};

type PatchServicesErpMercadolivreGridUuidResponse = {
    status: "success";
    data: {
        message: string;
        uuid?: string | undefined;
    };
} | {
    error: string;
};

type DeleteServicesErpMercadolivreGridUuidInput = {} & {
    /** UUID do guia de tamanhos */
    uuid: string;
};

type DeleteServicesErpMercadolivreGridUuidResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetServicesRetailerInput = {} & {};

type GetServicesRetailerResponse = {
    status: "success";
    data: {
        services: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            account_name: string;
            account_id: string;
            webhook?: string | undefined;
            status?: ("active" | "error" | "missing_key") | undefined;
        }[];
    };
} | {
    error: string;
};

type DeleteServicesRetailerInput = {} & {
    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
    account_id: string;
};

type DeleteServicesRetailerResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesRetailerAssignAccountInput = {} & {
    account_id?: string;
    service_name: "mercado_livre" | "shopee" | "nuvemshop";
};

type PostServicesRetailerAssignAccountResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetServicesRetailerAssignAccountInput = {} & {
    /** ID da conta */
    account_id?: string;
    /** Opcional - Página */
    page?: number | undefined;
    /** Opcional - Limite de itens por página */
    limit?: number | undefined;
};

type GetServicesRetailerAssignAccountResponse = {
    status: "success";
    data: {
        count: number;
        listings: ({
            success: true;
            url: string;
            listing_thumbnail?: string | undefined;
            title: string;
            product: {
                type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
                warranty_unity: "d" | "m" | "y";
                dimensions_unity: "cm" | "m" | "mm";
                weight_unity: "g" | "kg";
                condition: "novo" | "usado" | "recondicionado";
                group_images_by: "sku" | "cor";
                uuid: string;
                sku: string;
                name: string;
                inventory: number;
                items_per_box: number;
                active: boolean;
                brand_uuid?: (string | null) | undefined;
                warranty?: (number | null) | undefined;
                height?: (number | null) | undefined;
                width?: (number | null) | undefined;
                depth?: (number | null) | undefined;
                gross_weight?: (number | null) | undefined;
                net_weight?: (number | null) | undefined;
                resell_price: number;
                shop_price?: (number | null) | undefined;
                cost_price?: (number | null) | undefined;
                promotional_price?: (number | null) | undefined;
                main_description?: (string | null) | undefined;
                secondary_description?: (string | null) | undefined;
                observations?: (string | null) | undefined;
                gtin?: (string | null) | undefined;
                size_grid_uuid?: (string | null) | undefined;
                generic: boolean;
                created_at: string;
                updated_at: string;
                images: string[];
                brand?: string | undefined;
                other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                                    amount: number;
                                    accounts: string[];
                                }>> | undefined;
                thumbnail?: (string | null) | undefined;
                parent_uuid?: string | undefined;
                own_validations?: {
                    id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                    priority: 1 | 2 | 3;
                    message: string;
                }[] | undefined;
                completeness?: number | undefined;
                properties?: ({
                    name: string;
                    value: string;
                    type: "variation" | "specification";
                }[] | undefined) | undefined;
                deposit?: ({
                    uuid: string;
                    name: string;
                    uf: string;
                    cep: string;
                    allowed_ceps: string[];
                    main_road?: (string | null) | undefined;
                    secondary_road?: (string | null) | undefined;
                    number?: (string | null) | undefined;
                    district?: (string | null) | undefined;
                    city?: (string | null) | undefined;
                    default: boolean;
                } | null) | undefined;
                variants: {
                    type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
                    warranty_unity: "d" | "m" | "y";
                    dimensions_unity: "cm" | "m" | "mm";
                    weight_unity: "g" | "kg";
                    condition: "novo" | "usado" | "recondicionado";
                    group_images_by: "sku" | "cor";
                    uuid: string;
                    sku: string;
                    name: string;
                    inventory: number;
                    items_per_box: number;
                    active: boolean;
                    brand_uuid?: (string | null) | undefined;
                    warranty?: (number | null) | undefined;
                    height?: (number | null) | undefined;
                    width?: (number | null) | undefined;
                    depth?: (number | null) | undefined;
                    gross_weight?: (number | null) | undefined;
                    net_weight?: (number | null) | undefined;
                    resell_price: number;
                    shop_price?: (number | null) | undefined;
                    cost_price?: (number | null) | undefined;
                    promotional_price?: (number | null) | undefined;
                    main_description?: (string | null) | undefined;
                    secondary_description?: (string | null) | undefined;
                    observations?: (string | null) | undefined;
                    gtin?: (string | null) | undefined;
                    size_grid_uuid?: (string | null) | undefined;
                    generic: boolean;
                    created_at: string;
                    updated_at: string;
                    images: string[];
                    properties?: ({
                        name: string;
                        value: string;
                        type: "variation" | "specification";
                    }[] | undefined) | undefined;
                    inventory_history?: {
                        entry: string;
                        type: "balance" | "deposit" | "withdraw";
                        amount: number;
                        comment?: string | undefined;
                        date: string;
                        service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                    thumbnail?: (string | null) | undefined;
                    own_validations?: {
                        id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                        priority: 1 | 2 | 3;
                        message: string;
                    }[] | undefined;
                }[];
                inventory_history?: {
                    entry: string;
                    type: "balance" | "deposit" | "withdraw";
                    amount: number;
                    comment?: string | undefined;
                    date: string;
                    service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
                    url?: string | undefined;
                }[] | undefined;
                categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                                    id: string;
                                    name: string;
                                    path?: string[] | undefined;
                                }>>;
            };
        } | {
            success: false;
            url: string;
            listing_thumbnail?: string | undefined;
            title: string;
            error: string;
        })[];
        finished?: boolean;
    };
} | {
    error: string;
};

type PostServicesRetailerQuestionsInput = {} & {
    question_id: string;
    account_name: string;
    answer: string;
};

type PostServicesRetailerQuestionsResponse = {
    status: "success";
    data: {
        id: number;
        answer: {
            date_created: string;
            status: string;
            text: string;
        };
        date_created: string;
        deleted_from_listing: boolean;
        hold: boolean;
        item_id: string;
        seller_id: number;
        status: string;
        text: string;
        from: {
            id: number;
            answered_questions?: (number | null) | undefined;
        };
    };
} | {
    error: string;
};

type GetServicesRetailerQuestionsInput = {} & {
    page?: (number | undefined) | undefined;
    limit?: (number | undefined) | undefined;
    order?: ("desc" | "asc") | undefined;
    status?: "pending" | "answered" | "all";
};

type GetServicesRetailerQuestionsResponse = {
    status: "success";
    data: {
        total: number;
        questions: {
            date: string;
            url: string;
            account_name: string;
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            title: string;
            question: string;
            answer?: string | undefined;
            date_answered?: string | undefined;
            thumbnail?: string | undefined;
            username: string;
            question_id: string;
            item_id: string;
        }[];
    };
} | {
    error: string;
};

type PostServicesRetailerQuestionsAiInput = {} & {
    questions: {
        question: string;
        question_id: string;
        listing_id: string;
    }[];
};

type PostServicesRetailerQuestionsAiResponse = {
    status: "success";
    data: {
        answers: {
            question_id: string;
            answer: string;
        }[];
        errors: {
            question_id: string;
            error: string;
        }[];
    };
} | {
    error: string;
};

type PostServicesRetailerMercadolivreInput = {} & {
    code: string;
};

type PostServicesRetailerMercadolivreResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesRetailerNuvemshopInput = {} & {
    code: string;
};

type PostServicesRetailerNuvemshopResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesRetailerShopifyInput = {} & {
    code: string;
    shopname: string;
    shopify_token?: string | undefined;
};

type PostServicesRetailerShopifyResponse = {
    status: "success";
    data: {
        message: string;
        access_token: string;
    };
} | {
    error: string;
    shopify_token?: string | undefined;
};

type GetServicesRetailerShopeeInput = {} & {};

type GetServicesRetailerShopeeResponse = {
    status: "success";
    data: {
        url: string;
    };
} | {
    error: string;
};

type PostServicesRetailerShopeeInput = {} & {
    code: string;
    shop_id: number;
};

type PostServicesRetailerShopeeResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesRetailerLojaIntegradaInput = {} & {
    access_token: string;
};

type PostServicesRetailerLojaIntegradaResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesRetailerCartpandaInput = {} & {
    access_token: string;
    store_id: string;
};

type PostServicesRetailerCartpandaResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetServicesRetailerListingsInput = {} & {
    offset?: number | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    order_by?: ("title" | "status" | "created_at" | "updated_at" | "amount_sold") | undefined;
    order?: ("asc" | "desc") | undefined;
    status?: ("active" | "paused" | "closed")[] | undefined;
    service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
    name?: string | undefined;
};

type GetServicesRetailerListingsResponse = {
    status: "success";
    data: {
        count: number;
        listings: {
            status: string;
            entry: string;
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            url: string;
            price: number;
            title: string;
            amount_sold: number;
            available_quantity: number;
            listed_at: string;
            account_name?: string | undefined;
            thumbnail?: string | undefined;
            type?: string | undefined;
        }[];
    };
} | {
    error: string;
};

type PostServicesRetailerListingsInput = {} & {
    listings: {
        entry: string;
        price?: number | undefined;
        title?: string | undefined;
        description?: string | undefined;
    }[];
};

type PostServicesRetailerListingsResponse = {
    status: "success";
    data: {
        errors: {
            error: string;
            entry: string;
        }[];
        listings: {
            status: string;
            entry: string;
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            url: string;
            price: number;
            title: string;
            amount_sold: number;
            available_quantity: number;
            listed_at: string;
            account_name?: string | undefined;
            thumbnail?: string | undefined;
            type?: string | undefined;
        }[];
    };
} | {
    error: string;
};

type PostServicesRetailerListingsStatusInput = {} & {
    entries: string[];
    status: "paused" | "active" | "closed";
    hide?: boolean | undefined;
};

type PostServicesRetailerListingsStatusResponse = {
    status: "success";
    data: {
        errors: string[];
        listings: string[];
    };
} | {
    error: string;
};

type GetServicesRetailerSalesInput = {} & {
    /** Opcional - Offset */
    offset?: number | undefined;
    /** Opcional - Página */
    page?: number | undefined;
    /** Opcional - Limite */
    limit?: number | undefined;
    /** Opcional - Status */
    status?: ("pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed")[] | undefined;
    /** Opcional - Ordenar por */
    order_by?: ("status" | "quantity" | "sale_price" | "created_at" | "updated_at") | undefined;
    /** Opcional - Ordenação */
    order?: ("asc" | "desc") | undefined;
    account_name?: string | undefined;
    drop?: ("true" | "false") | undefined;
    name?: string | undefined;
    ids?: string[] | undefined;
    refund_approved?: ("true" | "false" | "null") | undefined;
};

type GetServicesRetailerSalesResponse = {
    status: "success";
    data: {
        count: number;
        sales: {
            id: string;
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            account: string;
            buyer: string;
            status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
            url: string;
            date: string;
            shipping_tracking?: string | undefined;
            shipping_tag?: string | undefined;
            cancelled_by?: string | undefined;
            items_price: number;
            sale_price: number;
            items: {
                title: string;
                thumbnail?: string | undefined;
                quantity: number;
                url: string;
                item_price: number;
                sale_price: number;
                product: {
                    name: string;
                    sku: string;
                    properties?: ({
                        name: string;
                        value: string;
                        type: "variation" | "specification";
                    }[] | undefined) | undefined;
                    thumbnail?: (string | null) | undefined;
                    uuid: string;
                };
                drop?: boolean;
                owner_uuid?: string | undefined;
            }[];
            user?: {
                first_name: string;
                last_name: string;
                email: string;
                phone: string;
                uuid: string;
            } | undefined;
            paid_at?: string | undefined;
            refund_approved?: (boolean | null) | undefined;
        }[];
    };
} | {
    error: string;
};

type GetServicesRetailerSalesStatsInput = {} & {};

type GetServicesRetailerSalesStatsResponse = {
    status: "success";
    data: {
        total: number;
        amount: number;
        amount_per_day: number;
        value: number;
        value_avg: number;
        value_avg_per_day: number;
        products_amount: number;
        own_sales: number;
        drop_sales: number;
        listings_amount: number;
        status: Partial<Record<"pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed", number>>;
        per_day: Partial<Record<string, number>>;
    };
} | {
    error: string;
};

type PostServicesRetailerSalesCancelInput = {} & {
    ids: string[];
};

type PostServicesRetailerSalesCancelResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostServicesRetailerSalesPayPixInput = {} & {
    ids: string[];
    use_wallet?: boolean | undefined;
};

type PostServicesRetailerSalesPayPixResponse = {
    status: "success";
    data: {
        qr_code: string;
        value: number;
        payment_id: string;
        expiration_date: string;
        payload: string;
        fee: number;
    };
} | {
    error: string;
};

type PostServicesRetailerSalesPayWalletInput = {} & {
    ids: string[];
};

type PostServicesRetailerSalesPayWalletResponse = {
    status: "success";
    data: {
        success: boolean;
    };
} | {
    error: string;
};

type PostServicesRetailerSalesIdShippingTagInput = (({} & {}) & {}) & {
    id: string;
};

type PostServicesRetailerSalesIdShippingTagResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetServicesRetailerValidationsProductUuidInput = {} & {
    product_uuid: string;
};

type GetServicesRetailerValidationsProductUuidResponse = {
    status: "success";
    data: {
        validations: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            success: boolean;
            account_name?: string | undefined;
            errors?: string[] | undefined;
        }[];
    };
} | {
    error: string;
};

type PostServicesRetailerValidationsProductUuidInput = {} & {
    product_uuid: string;
};

type PostServicesRetailerValidationsProductUuidResponse = {
    status: "success";
    data: {
        validations: {
            service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            success: boolean;
            account_name?: string | undefined;
            errors?: string[] | undefined;
        }[];
    };
} | {
    error: string;
};

type PostServicesRetailerListInput = {} & {
    list: {
        service_name: "mercado_livre" | "shopee" | "shopify" | "nuvemshop" | "loja_integrada" | "cartpanda";
        account_id?: string;
        title: string;
        description?: string;
        price: number;
        listing_type?: ("premium" | "classico") | undefined;
        identifier: string;
        image_url: string;
        images_urls?: string[] | undefined;
        brand?: string | undefined;
        model?: string | undefined;
        gtin?: string | undefined;
    }[];
    /** UUID do produto */
    product_uuid: string;
};

type PostServicesRetailerListResponse = {
    status: "success";
    data: {
        uuid: string;
    };
} | {
    error: string;
};

type GetServicesRetailerListProgressUuidInput = {} & {
    uuid: string;
};

type GetServicesRetailerListProgressUuidResponse = {
    status: "success";
    data: {
        listings?: {
            identifier: string;
            permalink: string;
            account_id: string;
        }[];
        errors?: {
            error: string;
            identifier: string;
        }[];
        finished?: (boolean | null) | undefined;
    };
} | {
    error: string;
};

type PostChatsInput = {} & {
    users_uuids: string[];
};

type PostChatsResponse = {
    status: "success";
    data: {
        chat_id: string;
    };
} | {
    error: string;
};

type GetChatsInput = {} & {};

type GetChatsResponse = {
    status: "success";
    data: {
        chats: {
            id: string;
            created_by_uuid: string;
            users: {
                first_name: string;
                last_name: string;
                uuid: string;
            }[];
            last_message?: {
                first_name: string;
                last_name: string;
                uuid: string;
                date?: string | undefined;
                message?: string | undefined;
            } | undefined;
            read: boolean;
            flagged: boolean;
        }[];
        unread: number;
        flagged: number;
    };
} | {
    error: string;
};

type GetChatsChatIdInput = {} & {
    chat_id: string;
};

type GetChatsChatIdResponse = {
    status: "success";
    data: {
        messages: {
            date: string;
            message: string;
            user_uuid: string;
            first_name: string;
            last_name: string;
        }[];
        users: {
            first_name: string;
            last_name: string;
            uuid: string;
        }[];
    };
} | {
    error: string;
};

type PostChatsChatIdReadInput = {} & {
    chat_id: string;
};

type PostChatsChatIdReadResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostChatsChatIdFlaggedInput = {} & {
    chat_id: string;
    flagged: boolean;
};

type PostChatsChatIdFlaggedResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostChatsSendInput = {} & {
    message: string;
    chat_id: string;
};

type PostChatsSendResponse = {
    status: "success";
    data: {
        date: string;
        message: string;
        user_uuid: string;
        first_name: string;
        last_name: string;
    };
} | {
    error: string;
};

type PostAuthInput = {
    email: string;
    password: string;
} & {
    email: string;
    password: string;
};

type PostAuthResponse = {
    status: "success";
    data: {
        access_token: string;
        valid_until: number;
    };
} | {
    error: string;
};

type DeleteAuthInput = {} & {};

type DeleteAuthResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetAuthFoundUsInput = {};

type GetAuthFoundUsResponse = {
    status: "success";
    data: {
        found_us: string[];
    };
} | {
    status: "error";
    error: {
        message: string;
    };
};

type GetAuthUserInput = {} & {};

type GetAuthUserResponse = {
    status: "success";
    data: {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        cpf?: string | undefined;
        cep?: string | undefined;
        avatar?: string | undefined;
        uf?: string | undefined;
        phone?: string | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        is_trial?: boolean | undefined;
        plan_price?: number | undefined;
        balance?: number | undefined;
        roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
        view_generic?: boolean;
        pending_coupon?: string | undefined;
        subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
        sub_user?: boolean | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
} | {
    error: string;
};

type PostAuthUserInput = {} & {
    first_name: string;
    found_us?: string | undefined;
    last_name: string;
    erp?: (boolean | null) | undefined;
    email: string;
    password: string;
    cpf?: (string | null) | undefined;
    phone: string;
    cep?: (string | null) | undefined;
    uf?: (string | null) | undefined;
    coupon?: (string | null) | undefined;
};

type PostAuthUserResponse = {
    status: "success";
    data: {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        cpf?: string | undefined;
        cep?: string | undefined;
        avatar?: string | undefined;
        uf?: string | undefined;
        phone?: string | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        is_trial?: boolean | undefined;
        plan_price?: number | undefined;
        balance?: number | undefined;
        roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
        view_generic?: boolean;
        pending_coupon?: string | undefined;
        subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
        sub_user?: boolean | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
} | {
    error: string;
};

type PatchAuthUserInput = {} & {
    first_name?: string | undefined;
    found_us?: (string | undefined) | undefined;
    last_name?: string | undefined;
    erp?: ((boolean | null) | undefined) | undefined;
    email?: string | undefined;
    password?: string | undefined;
    cpf?: ((string | null) | undefined) | undefined;
    phone?: string | undefined;
    cep?: ((string | null) | undefined) | undefined;
    uf?: ((string | null) | undefined) | undefined;
    coupon?: ((string | null) | undefined) | undefined;
    roles?: ("retailer" | "erp" | "provider" | "admin" | "drop")[] | undefined;
    active?: boolean | undefined;
    active_until?: string | undefined;
    view_generic?: boolean | undefined;
};

type PatchAuthUserResponse = {
    status: "success";
    data: {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        cpf?: string | undefined;
        cep?: string | undefined;
        avatar?: string | undefined;
        uf?: string | undefined;
        phone?: string | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        is_trial?: boolean | undefined;
        plan_price?: number | undefined;
        balance?: number | undefined;
        roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
        view_generic?: boolean;
        pending_coupon?: string | undefined;
        subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
        sub_user?: boolean | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
} | {
    error: string;
};

type PostAuthUserSubUserInput = {} & {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

type PostAuthUserSubUserResponse = {
    status: "success";
    data: {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        cpf?: string | undefined;
        cep?: string | undefined;
        avatar?: string | undefined;
        uf?: string | undefined;
        phone?: string | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        is_trial?: boolean | undefined;
        plan_price?: number | undefined;
        balance?: number | undefined;
        roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
        view_generic?: boolean;
        pending_coupon?: string | undefined;
        subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
        sub_user?: boolean | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
} | {
    error: string;
};

type GetAuthUserSubUserInput = {} & {};

type GetAuthUserSubUserResponse = {
    status: "success";
    data: {
        users: {
            uuid: string;
            email: string;
            first_name: string;
            last_name: string;
        }[];
    };
} | {
    error: string;
};

type PatchAuthUserSubUserInput = {} & {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    uuid: string;
};

type PatchAuthUserSubUserResponse = {
    status: "success";
    data: {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        cpf?: string | undefined;
        cep?: string | undefined;
        avatar?: string | undefined;
        uf?: string | undefined;
        phone?: string | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        is_trial?: boolean | undefined;
        plan_price?: number | undefined;
        balance?: number | undefined;
        roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
        view_generic?: boolean;
        pending_coupon?: string | undefined;
        subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
        sub_user?: boolean | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
} | {
    error: string;
};

type GetAuthUserStatsInput = {} & {
    service_name?: ("mercado_livre" | "shopee") | undefined;
};

type GetAuthUserStatsResponse = {
    status: "success";
    data: {
        sales: {
            total: number;
            amount: number;
            amount_per_day: number;
            value: number;
            value_avg: number;
            value_avg_per_day: number;
            products_amount: number;
            own_sales: number;
            drop_sales: number;
            listings_amount: number;
            status: Partial<Record<"pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed", number>>;
            per_day: Partial<Record<string, number>>;
        };
    };
} | {
    error: string;
};

type GetAuthUserLogsInput = {} & {
    page?: number | undefined;
    limit?: number | undefined;
    internal?: ("true" | "false") | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    sources?: string[] | undefined;
    actions?: string[] | undefined;
    sku?: string | undefined;
};

type GetAuthUserLogsResponse = {
    status: "success";
    data: {
        logs: ({
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            listing_uuid: string;
            source: "listing";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_title";
            value: {
                old_title: string;
                new_title: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "delete";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "status_change";
            value: {
                old_status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
                new_status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "product";
            action: "update_inventory";
            value: {
                type: "balance" | "deposit" | "withdraw";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
            sale?: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            } | undefined;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_name";
            value: {
                old_name: string;
                new_name: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "product";
            action: "update_price";
            value: {
                old_price: number;
                new_price: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_sku";
            value: {
                old_sku: string;
                new_sku: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_resell_price";
            value: {
                old_resell_price: number;
                new_resell_price: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "new_variant";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "delete";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "auth";
            action: "login";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "auth";
            action: "logout";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_inventory";
            product_uuid: string;
            value: {
                amount: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_inventory_error";
            product_uuid: string;
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "bling" | "tinyerp";
            action: "receive_inventory";
            value: {
                type: "balance";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "bling" | "tinyerp";
            action: "send_inventory";
            value: {
                type: "balance" | "deposit" | "withdraw";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
            sale?: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            } | undefined;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "admin";
            action: "warning";
            value: {
                message: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        })[];
        count: number;
    };
} | {
    error: string;
};

type GetAuthUserLogsNotificationsInput = {} & {
    page?: number | undefined;
    limit?: number | undefined;
};

type GetAuthUserLogsNotificationsResponse = {
    status: "success";
    data: {
        logs: ({
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "admin";
            action: "warning";
            value: {
                message: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        })[];
        count: number;
    };
} | {
    error: string;
};

type PatchAuthUserLogsReadInput = {} & {
    entries: string[];
};

type PatchAuthUserLogsReadResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetAuthUserCardsInput = {} & {};

type GetAuthUserCardsResponse = {
    status: "success";
    data: {
        cards: {
            id: string;
            brand: string;
            lastDigits: string;
            exp_month: number;
            exp_year: number;
            default: boolean;
        }[];
    };
} | {
    error: string;
};

type PostAuthPlanPixInput = {} & {};

type PostAuthPlanPixResponse = {
    status: "success";
    data: {
        qr_code: string;
        value: number;
        payment_id: string;
        expiration_date: string;
        payload: string;
        fee: number;
    };
} | {
    error: string;
};

type PostAuthPlanWalletInput = {} & {};

type PostAuthPlanWalletResponse = {
    status: "success";
    data: {
        success: boolean;
    };
} | {
    error: string;
};

type PatchAuthPlanInput = {} & {
    plan_type: "erp_monthly" | "erp_yearly" | "base_yearly" | "base_monthly";
};

type PatchAuthPlanResponse = {
    status: "success";
    data: {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        cpf?: string | undefined;
        cep?: string | undefined;
        avatar?: string | undefined;
        uf?: string | undefined;
        phone?: string | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        is_trial?: boolean | undefined;
        plan_price?: number | undefined;
        balance?: number | undefined;
        roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
        view_generic?: boolean;
        pending_coupon?: string | undefined;
        subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
        sub_user?: boolean | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
} | {
    error: string;
};

type GetAuthPlanPaymentIdInput = {} & {
    payment_id: string;
};

type GetAuthPlanPaymentIdResponse = {
    status: "success";
    data: {
        payment: {
            payment_id: string;
            status?: "paid" | "pending";
        };
    };
} | {
    error: string;
};

type PostAuthPlanSubscriptionInput = {} & {
    payment_method_id: string;
    plan_type: "erp_monthly" | "erp_yearly" | "base_yearly" | "base_monthly";
};

type PostAuthPlanSubscriptionResponse = {
    status: "success";
    data: {
        id: string;
    };
} | {
    error: string;
};

type PostAuthPlanSubscriptionCancelInput = {} & {
    comment?: string | undefined;
    feedback?: ("customer_service" | "too_expensive" | "missing_features" | "switched_service" | "unused" | "too_complex" | "other") | undefined;
};

type PostAuthPlanSubscriptionCancelResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostAuthPlanSubscriptionPaymentsInput = {} & {
    payment_method_id: string;
};

type PostAuthPlanSubscriptionPaymentsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PatchAuthPlanSubscriptionPaymentsInput = {} & {
    payment_method_id: string;
};

type PatchAuthPlanSubscriptionPaymentsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type DeleteAuthPlanSubscriptionPaymentsInput = {} & {
    payment_method_id: string;
};

type DeleteAuthPlanSubscriptionPaymentsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostAuthCouponInput = {} & {
    code: string;
};

type PostAuthCouponResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetAuthCouponInput = {
    code: string;
};

type GetAuthCouponResponse = {
    status: "success";
    data: {
        coupon: {
            code: string;
            type: "discount" | "free_days";
            free_days: number;
            discount_fixed: number;
            discount_percentage: number;
            months: number;
        };
    };
} | {
    error: string;
};

type GetAuthWalletInput = {} & {};

type GetAuthWalletResponse = {
    status: "success";
    data: {
        payments: {
            paid_at?: string | undefined;
            date?: string | undefined;
            type: string;
            value: number;
            method: string;
        }[];
    };
} | {
    error: string;
};

type PostAuthWalletInput = {} & {
    amount: number;
    method: "pix";
};

type PostAuthWalletResponse = {
    status: "success";
    data: {
        qr_code: string;
        value: number;
        payment_id: string;
        expiration_date: string;
        payload: string;
        fee: number;
    };
} | {
    error: string;
};

type PostAuthRefreshInput = {} & {};

type PostAuthRefreshResponse = {
    status: "success";
    data: {
        access_token: string;
        valid_until: number;
    };
} | {
    error: string;
};

type PostHooksMercadolivreInput = {} & {
    topic?: string;
    resource?: string;
    user_id: number;
};

type PostHooksMercadolivreResponse = any | {
    error: string;
};

type PostHooksShopeeInput = {} & {};

type PostHooksShopeeResponse = any | {
    error: string;
};

type PostHooksBlingApiKeyInput = ({} & {}) & {
    api_key: string;
};

type PostHooksBlingApiKeyResponse = any | {
    error: string;
};

type PostHooksAsaasInput = {} & {};

type PostHooksAsaasResponse = any | {
    error: string;
};

type PostHooksNuvemshopInput = {} & {};

type PostHooksNuvemshopResponse = any | {
    error: string;
};

type PostHooksShopifyInput = {} & {};

type PostHooksShopifyResponse = any | {
    error: string;
};

type PostHooksShopifyGdprDataInput = {} & {};

type PostHooksShopifyGdprDataResponse = any | {
    error: string;
};

type PostHooksShopifyGdprClientRedactInput = {} & {};

type PostHooksShopifyGdprClientRedactResponse = any | {
    error: string;
};

type PostHooksShopifyGdprShopRedactInput = {} & {};

type PostHooksShopifyGdprShopRedactResponse = any | {
    error: string;
};

type PostHooksLojaIntegradaApiKeyInput = {} & {};

type PostHooksLojaIntegradaApiKeyResponse = any | {
    error: string;
};

type PostHooksCartpandaApiKeyInput = {} & {};

type PostHooksCartpandaApiKeyResponse = any | {
    error: string;
};

type PostHooksTinyerpInput = {} & {};

type PostHooksTinyerpResponse = any | {
    error: string;
};

type PostHooksStripeInput = {} & {};

type PostHooksStripeResponse = any | {
    error: string;
};

type GetAdminUsersInput = {} & {
    page?: number | undefined;
    limit?: number | undefined;
    /** Nome do usuário */
    name?: string | undefined;
    order_by?: ("first_name" | "created_at" | "updated_at" | "balance" | "sales") | undefined;
    order?: ("asc" | "desc") | undefined;
};

type GetAdminUsersResponse = {
    status: "success";
    data: {
        users: {
            uuid: string;
            first_name: string;
            last_name: string;
            email: string;
            cpf?: string | undefined;
            cep?: string | undefined;
            avatar?: string | undefined;
            uf?: string | undefined;
            phone?: string | undefined;
            active?: boolean | undefined;
            active_until?: string | undefined;
            is_trial?: boolean | undefined;
            plan_price?: number | undefined;
            balance?: number | undefined;
            roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
            view_generic?: boolean;
            pending_coupon?: string | undefined;
            subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
            sub_user?: boolean | undefined;
            created_at?: string | undefined;
            updated_at?: string | undefined;
            sales?: number | undefined;
            found_us?: (string | null) | undefined;
        }[];
        count: number;
    };
} | {
    error: string;
};

type GetAdminUsersLogsInput = {} & {
    page?: number | undefined;
    limit?: number | undefined;
    internal?: ("true" | "false") | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    sources?: string[] | undefined;
    actions?: string[] | undefined;
    sku?: string | undefined;
};

type GetAdminUsersLogsResponse = {
    status: "success";
    data: {
        logs: ({
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            listing_uuid: string;
            source: "listing";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_title";
            value: {
                old_title: string;
                new_title: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "delete";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "status_change";
            value: {
                old_status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
                new_status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "product";
            action: "update_inventory";
            value: {
                type: "balance" | "deposit" | "withdraw";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
            sale?: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            } | undefined;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_name";
            value: {
                old_name: string;
                new_name: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "product";
            action: "update_price";
            value: {
                old_price: number;
                new_price: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_sku";
            value: {
                old_sku: string;
                new_sku: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_resell_price";
            value: {
                old_resell_price: number;
                new_resell_price: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "new_variant";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "delete";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "auth";
            action: "login";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "auth";
            action: "logout";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_inventory";
            product_uuid: string;
            value: {
                amount: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_inventory_error";
            product_uuid: string;
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "bling" | "tinyerp";
            action: "receive_inventory";
            value: {
                type: "balance";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "bling" | "tinyerp";
            action: "send_inventory";
            value: {
                type: "balance" | "deposit" | "withdraw";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
            sale?: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            } | undefined;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "admin";
            action: "warning";
            value: {
                message: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        })[];
        count: number;
    };
} | {
    error: string;
};

type PostAdminUsersLogsWarningInput = {} & {
    message: string;
};

type PostAdminUsersLogsWarningResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type GetAdminUsersUuidInput = {} & {
    uuid: string;
};

type GetAdminUsersUuidResponse = {
    status: "success";
    data: {
        user: {
            uuid: string;
            first_name: string;
            last_name: string;
            email: string;
            cpf?: string | undefined;
            cep?: string | undefined;
            avatar?: string | undefined;
            uf?: string | undefined;
            phone?: string | undefined;
            active?: boolean | undefined;
            active_until?: string | undefined;
            is_trial?: boolean | undefined;
            plan_price?: number | undefined;
            balance?: number | undefined;
            roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
            view_generic?: boolean;
            pending_coupon?: string | undefined;
            subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
            sub_user?: boolean | undefined;
            created_at?: string | undefined;
            updated_at?: string | undefined;
        };
    };
} | {
    error: string;
};

type PostAdminUsersUuidInput = {} & {
    uuid: string;
    update: {
        first_name?: string | undefined;
        found_us?: (string | undefined) | undefined;
        last_name?: string | undefined;
        erp?: ((boolean | null) | undefined) | undefined;
        email?: string | undefined;
        password?: string | undefined;
        cpf?: ((string | null) | undefined) | undefined;
        phone?: string | undefined;
        cep?: ((string | null) | undefined) | undefined;
        uf?: ((string | null) | undefined) | undefined;
        coupon?: ((string | null) | undefined) | undefined;
        roles?: ("retailer" | "erp" | "provider" | "admin" | "drop")[] | undefined;
        active?: boolean | undefined;
        active_until?: string | undefined;
        view_generic?: boolean | undefined;
    };
};

type PostAdminUsersUuidResponse = {
    status: "success";
    data: {
        user: {
            uuid: string;
            first_name: string;
            last_name: string;
            email: string;
            cpf?: string | undefined;
            cep?: string | undefined;
            avatar?: string | undefined;
            uf?: string | undefined;
            phone?: string | undefined;
            active?: boolean | undefined;
            active_until?: string | undefined;
            is_trial?: boolean | undefined;
            plan_price?: number | undefined;
            balance?: number | undefined;
            roles: ("retailer" | "erp" | "provider" | "admin" | "drop")[];
            view_generic?: boolean;
            pending_coupon?: string | undefined;
            subscription_status?: (("active" | "incomplete" | "canceled" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid" | "none") | null) | undefined;
            sub_user?: boolean | undefined;
            created_at?: string | undefined;
            updated_at?: string | undefined;
        };
    };
} | {
    error: string;
};

type GetAdminUsersUuidLogsInput = {} & {
    uuid: string;
};

type GetAdminUsersUuidLogsResponse = {
    status: "success";
    data: {
        logs: ({
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            listing_uuid: string;
            source: "listing";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_title";
            value: {
                old_title: string;
                new_title: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "delete";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "status_change";
            value: {
                old_status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
                new_status: "pending" | "paid" | "ready_to_ship" | "shipped" | "cancelled" | "completed";
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            sale_uuid: string;
            source: "sale";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            sale: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "product";
            action: "update_inventory";
            value: {
                type: "balance" | "deposit" | "withdraw";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
            sale?: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            } | undefined;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_name";
            value: {
                old_name: string;
                new_name: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "product";
            action: "update_price";
            value: {
                old_price: number;
                new_price: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_sku";
            value: {
                old_sku: string;
                new_sku: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "update_resell_price";
            value: {
                old_resell_price: number;
                new_resell_price: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "new";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "new_variant";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "product";
            action: "delete";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "auth";
            action: "login";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "auth";
            action: "logout";
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_inventory";
            product_uuid: string;
            value: {
                amount: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            listing_uuid: string;
            source: "listing";
            action: "update_inventory_error";
            product_uuid: string;
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            listing: {
                title: string;
                listing_id: string;
                url: string;
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
            };
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            source: "bling" | "tinyerp";
            action: "receive_inventory";
            value: {
                type: "balance";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            product_uuid: string;
            sale_uuid?: (string | null) | undefined;
            source: "bling" | "tinyerp";
            action: "send_inventory";
            value: {
                type: "balance" | "deposit" | "withdraw";
                old_inventory: number;
                new_inventory: number;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
            product: {
                name: string;
                sku: string;
            };
            sale?: {
                order_id: string;
                product: {
                    name: string;
                    sku: string;
                };
                listing: {
                    title: string;
                    listing_id: string;
                    url: string;
                    service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                };
            } | undefined;
        } | {
            user_uuid: string;
            sub_user_uuid?: (string | null) | undefined;
            browser?: (string | null) | undefined;
            ip_address?: (string | null) | undefined;
            internal?: boolean | undefined;
            priority: "low" | "medium" | "high" | "critical";
            source: "admin";
            action: "warning";
            value: {
                message: string;
            };
            entry: string;
            created_at: string;
            sub_user?: ({
                uuid: string;
                first_name: string;
                last_name: string;
                email: string;
            } | null) | undefined;
            read: boolean;
        })[];
        count: number;
    };
} | {
    error: string;
};

type PostAdminUsersUuidAuthInput = {} & {
    uuid: string;
};

type PostAdminUsersUuidAuthResponse = {
    status: "success";
    data: {
        access_token: string;
        valid_until: number;
    };
} | {
    error: string;
};

type GetAdminSettingsInput = {} & {};

type GetAdminSettingsResponse = {
    status: "success";
    data: {
        settings: {
            asaas_pix_percentage?: number;
            asaas_pix_fixed: number;
            retailer_plan_price: number;
            erp_plan_price: number;
            provider_fee_percentage: number;
            provider_fee_fixed: number;
            trial_days: number;
            pix_gateway?: string;
            boleto_gateway?: string;
            found_us?: string[];
        };
    };
} | {
    error: string;
};

type PostAdminSettingsInput = {} & {
    retailer_plan_price?: number | undefined;
    erp_plan_price?: number | undefined;
    provider_fee_percentage?: number | undefined;
    provider_fee_fixed?: number | undefined;
    trial_days?: number | undefined;
    pix_gateway?: ("asaas" | "stripe") | undefined;
    boleto_gateway?: ("asaas" | "stripe") | undefined;
    found_us?: string[] | undefined;
};

type PostAdminSettingsResponse = {
    status: "success";
    data: {
        settings: {
            asaas_pix_percentage?: number;
            asaas_pix_fixed: number;
            retailer_plan_price: number;
            erp_plan_price: number;
            provider_fee_percentage: number;
            provider_fee_fixed: number;
            trial_days: number;
            pix_gateway?: string;
            boleto_gateway?: string;
            found_us?: string[];
        };
    };
} | {
    error: string;
};

type GetAdminGatewaysInput = {} & {
    service_name?: ("asaas" | "stripe") | undefined;
};

type GetAdminGatewaysResponse = {
    status: "success";
    data: {
        gateways: {
            id: string;
            service_name: "asaas" | "stripe";
            account_name: string;
            index: number;
            created_at: string;
            updated_at: string;
        }[];
    };
} | {
    error: string;
};

type PostAdminGatewaysInput = {} & ({
    account_name: string;
    service_name: "asaas";
    access_token: string;
    webhook_token: string;
} | {
    account_name: string;
    service_name: "stripe";
    secret_token: string;
    public_token: string;
});

type PostAdminGatewaysResponse = {
    status: "success";
    data: {
        gateways: {
            id: string;
            service_name: "asaas" | "stripe";
            account_name: string;
            index: number;
            created_at: string;
            updated_at: string;
        }[];
    };
} | {
    error: string;
};

type PatchAdminGatewaysInput = {} & {
    gateways: {
        id: string;
        index: number;
    }[];
};

type PatchAdminGatewaysResponse = {
    status: "success";
    data: {
        gateways: {
            id: string;
            service_name: "asaas" | "stripe";
            account_name: string;
            index: number;
            created_at: string;
            updated_at: string;
        }[];
    };
} | {
    error: string;
};

type DeleteAdminGatewaysIdInput = {} & {
    id: string;
};

type DeleteAdminGatewaysIdResponse = {
    status: "success";
    data: {
        gateways: {
            id: string;
            service_name: "asaas" | "stripe";
            account_name: string;
            index: number;
            created_at: string;
            updated_at: string;
        }[];
    };
} | {
    error: string;
};

type GetAdminCouponsInput = {} & {
    page?: number | undefined;
    limit?: number | undefined;
};

type GetAdminCouponsResponse = {
    status: "success";
    data: {
        coupons: {
            type: "discount" | "free_days";
            uuid: string;
            code: string;
            created_by: string;
            discount_percentage: number;
            discount_fixed: number;
            months: number;
            free_days: number;
            max_uses?: (number | null) | undefined;
            expiry_date?: (string | null) | undefined;
            cancelled_at?: (string | null) | undefined;
            created_at: string;
            updated_at: string;
        }[];
        count: number;
    };
} | {
    error: string;
};

type PostAdminCouponsInput = {} & ({
    code: string;
    max_uses?: number | undefined;
    expiry_date?: string | undefined;
    type: "free_days";
    free_days: number;
} | {
    code: string;
    max_uses?: number | undefined;
    expiry_date?: string | undefined;
    type: "discount";
    discount_percentage: number;
    months: number;
} | {
    code: string;
    max_uses?: number | undefined;
    expiry_date?: string | undefined;
    type: "discount";
    discount_fixed: number;
    months: number;
});

type PostAdminCouponsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PatchAdminCouponsInput = {} & ({
    code: string;
    max_uses?: (number | undefined) | undefined;
    expiry_date?: (string | undefined) | undefined;
    type?: "free_days" | undefined;
    free_days?: number | undefined;
} | {
    code: string;
    max_uses?: (number | undefined) | undefined;
    expiry_date?: (string | undefined) | undefined;
    type?: "discount" | undefined;
    discount_percentage?: number | undefined;
} | {
    code: string;
    max_uses?: (number | undefined) | undefined;
    expiry_date?: (string | undefined) | undefined;
    type?: "discount" | undefined;
    discount_fixed?: number | undefined;
});

type PatchAdminCouponsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type DeleteAdminCouponsInput = {} & {
    /** Código do cupom */
    code: string;
};

type DeleteAdminCouponsResponse = {
    status: "success";
    data: {
        message: string;
    };
} | {
    error: string;
};

type PostAdminDebugInput = {} & {};

type PostAdminDebugResponse = {
    status: "success";
    data: {};
} | {
    error: string;
};

type GetProviderSalesStatsInput = {} & {};

type GetProviderSalesStatsResponse = {
    status: "success";
    data: {
        stats: {
            completed: number;
            released: number;
            pending: number;
            locked: number;
            total: number;
        };
        payments: {
            payment_id: string;
            status?: "paid" | "pending";
            value: number;
            created_at: string;
        }[];
    };
} | {
    error: string;
};

type PostProviderSalesWithdrawInput = {} & {};

type PostProviderSalesWithdrawResponse = {
    status: "success";
    data: {
        value: number;
    };
} | {
    error: string;
};

export type Path = "/metrics" | "/products" | "/products" | "/products" | "/products/stats" | "/products/skus" | "/products/brands" | "/products/categories/:marketplace" | "/products/sales" | "/products/sales/ready" | "/products/sales/send" | "/products/sales/refund" | "/products/sales/:id/shipping_tracking" | "/products/sales/stats" | "/products/deposit" | "/products/deposit" | "/products/deposit" | "/products/:product_uuid" | "/products/:product_uuid" | "/products/:product_uuid/clone" | "/products/:product_uuid/convert" | "/products/:product_uuid/variant" | "/products/:product_uuid/variants" | "/products/:product_uuid/variants" | "/products/:product_uuid/variants/properties" | "/products/:product_uuid/size_grid" | "/products/:product_uuid/inventory" | "/products/:product_uuid/images" | "/products/:product_uuid/images" | "/products/:product_uuid/images/order" | "/products/:product_uuid/images/group_by" | "/products/:product_uuid/image" | "/products/:product_uuid/mercado_livre" | "/products/:product_uuid/shopee" | "/products/:product_uuid/categories/:marketplace" | "/products/:product_uuid/validations" | "/products/:product_uuid/validations" | "/market/provider/products" | "/market/provider/products" | "/market/provider/products/:product_uuid" | "/market/provider/products/:product_uuid" | "/market/provider/validations/:product_uuid/validations" | "/market/provider/validations/:product_uuid/validations" | "/market/retailer/products" | "/market/retailer/products/stats" | "/market/retailer/products/:product_uuid" | "/market/retailer/products/:product_uuid/images" | "/services/erp" | "/services/erp" | "/services/erp" | "/services/erp/pdf" | "/services/erp/bling" | "/services/erp/bling/export/product" | "/services/erp/bling/export/products" | "/services/erp/bling/export/products" | "/services/erp/bling/import" | "/services/erp/bling/import" | "/services/erp/bling/import" | "/services/erp/tinyerp" | "/services/erp/tinyerp/export/product" | "/services/erp/tinyerp/export/product" | "/services/erp/tinyerp/import" | "/services/erp/tinyerp/import" | "/services/erp/tinyerp/import" | "/services/erp/mercadolivre/grid" | "/services/erp/mercadolivre/grid" | "/services/erp/mercadolivre/grid/:uuid" | "/services/erp/mercadolivre/grid/:uuid" | "/services/retailer" | "/services/retailer" | "/services/retailer/assign/account" | "/services/retailer/assign/account" | "/services/retailer/questions" | "/services/retailer/questions" | "/services/retailer/questions/ai" | "/services/retailer/mercadolivre" | "/services/retailer/nuvemshop" | "/services/retailer/shopify" | "/services/retailer/shopee" | "/services/retailer/shopee" | "/services/retailer/loja_integrada" | "/services/retailer/cartpanda" | "/services/retailer/listings" | "/services/retailer/listings" | "/services/retailer/listings/status" | "/services/retailer/sales" | "/services/retailer/sales/stats" | "/services/retailer/sales/cancel" | "/services/retailer/sales/pay/pix" | "/services/retailer/sales/pay/wallet" | "/services/retailer/sales/:id/shipping_tag" | "/services/retailer/validations/:product_uuid" | "/services/retailer/validations/:product_uuid" | "/services/retailer/list" | "/services/retailer/list/progress/:uuid" | "/chats" | "/chats" | "/chats/:chat_id" | "/chats/:chat_id/read" | "/chats/:chat_id/flagged" | "/chats/send" | "/auth" | "/auth" | "/auth/found_us" | "/auth/user" | "/auth/user" | "/auth/user" | "/auth/user/sub_user" | "/auth/user/sub_user" | "/auth/user/sub_user" | "/auth/user/stats" | "/auth/user/logs" | "/auth/user/logs/notifications" | "/auth/user/logs/read" | "/auth/user/cards" | "/auth/plan/pix" | "/auth/plan/wallet" | "/auth/plan" | "/auth/plan/:payment_id" | "/auth/plan/subscription" | "/auth/plan/subscription/cancel" | "/auth/plan/subscription/payments" | "/auth/plan/subscription/payments" | "/auth/plan/subscription/payments" | "/auth/coupon" | "/auth/coupon" | "/auth/wallet" | "/auth/wallet" | "/auth/refresh" | "/hooks/mercadolivre" | "/hooks/shopee" | "/hooks/bling/:api_key" | "/hooks/asaas" | "/hooks/nuvemshop" | "/hooks/shopify" | "/hooks/shopify/gdpr/data" | "/hooks/shopify/gdpr/client_redact" | "/hooks/shopify/gdpr/shop_redact" | "/hooks/loja_integrada/:api_key" | "/hooks/cartpanda/:api_key" | "/hooks/tinyerp" | "/hooks/stripe" | "/admin/users" | "/admin/users/logs" | "/admin/users/logs/warning" | "/admin/users/:uuid" | "/admin/users/:uuid" | "/admin/users/:uuid/logs" | "/admin/users/:uuid/auth" | "/admin/settings" | "/admin/settings" | "/admin/gateways" | "/admin/gateways" | "/admin/gateways" | "/admin/gateways/:id" | "/admin/coupons" | "/admin/coupons" | "/admin/coupons" | "/admin/coupons" | "/admin/debug" | "/provider/sales/stats" | "/provider/sales/withdraw";

export type Method = "get" | "post" | "put" | "delete" | "patch";

export type MethodPath = `${Method} ${Path}`;

export interface Input extends Record<MethodPath, any> {
    "get /metrics": GetMetricsInput;
    "get /products": GetProductsInput;
    "post /products": PostProductsInput;
    "delete /products": DeleteProductsInput;
    "get /products/stats": GetProductsStatsInput;
    "get /products/skus": GetProductsSkusInput;
    "get /products/brands": GetProductsBrandsInput;
    "get /products/categories/:marketplace": GetProductsCategoriesMarketplaceInput;
    "get /products/sales": GetProductsSalesInput;
    "post /products/sales/ready": PostProductsSalesReadyInput;
    "post /products/sales/send": PostProductsSalesSendInput;
    "post /products/sales/refund": PostProductsSalesRefundInput;
    "post /products/sales/:id/shipping_tracking": PostProductsSalesIdShippingTrackingInput;
    "get /products/sales/stats": GetProductsSalesStatsInput;
    "get /products/deposit": GetProductsDepositInput;
    "post /products/deposit": PostProductsDepositInput;
    "patch /products/deposit": PatchProductsDepositInput;
    "get /products/:product_uuid": GetProductsProductUuidInput;
    "patch /products/:product_uuid": PatchProductsProductUuidInput;
    "post /products/:product_uuid/clone": PostProductsProductUuidCloneInput;
    "post /products/:product_uuid/convert": PostProductsProductUuidConvertInput;
    "post /products/:product_uuid/variant": PostProductsProductUuidVariantInput;
    "post /products/:product_uuid/variants": PostProductsProductUuidVariantsInput;
    "patch /products/:product_uuid/variants": PatchProductsProductUuidVariantsInput;
    "patch /products/:product_uuid/variants/properties": PatchProductsProductUuidVariantsPropertiesInput;
    "post /products/:product_uuid/size_grid": PostProductsProductUuidSizeGridInput;
    "post /products/:product_uuid/inventory": PostProductsProductUuidInventoryInput;
    "get /products/:product_uuid/images": GetProductsProductUuidImagesInput;
    "post /products/:product_uuid/images": PostProductsProductUuidImagesInput;
    "post /products/:product_uuid/images/order": PostProductsProductUuidImagesOrderInput;
    "post /products/:product_uuid/images/group_by": PostProductsProductUuidImagesGroupByInput;
    "post /products/:product_uuid/image": PostProductsProductUuidImageInput;
    "get /products/:product_uuid/mercado_livre": GetProductsProductUuidMercadoLivreInput;
    "get /products/:product_uuid/shopee": GetProductsProductUuidShopeeInput;
    "post /products/:product_uuid/categories/:marketplace": PostProductsProductUuidCategoriesMarketplaceInput;
    "get /products/:product_uuid/validations": GetProductsProductUuidValidationsInput;
    "post /products/:product_uuid/validations": PostProductsProductUuidValidationsInput;
    "post /market/provider/products": PostMarketProviderProductsInput;
    "delete /market/provider/products": DeleteMarketProviderProductsInput;
    "post /market/provider/products/:product_uuid": PostMarketProviderProductsProductUuidInput;
    "delete /market/provider/products/:product_uuid": DeleteMarketProviderProductsProductUuidInput;
    "get /market/provider/validations/:product_uuid/validations": GetMarketProviderValidationsProductUuidValidationsInput;
    "post /market/provider/validations/:product_uuid/validations": PostMarketProviderValidationsProductUuidValidationsInput;
    "get /market/retailer/products": GetMarketRetailerProductsInput;
    "get /market/retailer/products/stats": GetMarketRetailerProductsStatsInput;
    "get /market/retailer/products/:product_uuid": GetMarketRetailerProductsProductUuidInput;
    "get /market/retailer/products/:product_uuid/images": GetMarketRetailerProductsProductUuidImagesInput;
    "get /services/erp": GetServicesErpInput;
    "patch /services/erp": PatchServicesErpInput;
    "delete /services/erp": DeleteServicesErpInput;
    "post /services/erp/pdf": PostServicesErpPdfInput;
    "post /services/erp/bling": PostServicesErpBlingInput;
    "post /services/erp/bling/export/product": PostServicesErpBlingExportProductInput;
    "post /services/erp/bling/export/products": PostServicesErpBlingExportProductsInput;
    "get /services/erp/bling/export/products": GetServicesErpBlingExportProductsInput;
    "post /services/erp/bling/import": PostServicesErpBlingImportInput;
    "get /services/erp/bling/import": GetServicesErpBlingImportInput;
    "delete /services/erp/bling/import": DeleteServicesErpBlingImportInput;
    "post /services/erp/tinyerp": PostServicesErpTinyerpInput;
    "post /services/erp/tinyerp/export/product": PostServicesErpTinyerpExportProductInput;
    "get /services/erp/tinyerp/export/product": GetServicesErpTinyerpExportProductInput;
    "post /services/erp/tinyerp/import": PostServicesErpTinyerpImportInput;
    "get /services/erp/tinyerp/import": GetServicesErpTinyerpImportInput;
    "delete /services/erp/tinyerp/import": DeleteServicesErpTinyerpImportInput;
    "post /services/erp/mercadolivre/grid": PostServicesErpMercadolivreGridInput;
    "get /services/erp/mercadolivre/grid": GetServicesErpMercadolivreGridInput;
    "patch /services/erp/mercadolivre/grid/:uuid": PatchServicesErpMercadolivreGridUuidInput;
    "delete /services/erp/mercadolivre/grid/:uuid": DeleteServicesErpMercadolivreGridUuidInput;
    "get /services/retailer": GetServicesRetailerInput;
    "delete /services/retailer": DeleteServicesRetailerInput;
    "post /services/retailer/assign/account": PostServicesRetailerAssignAccountInput;
    "get /services/retailer/assign/account": GetServicesRetailerAssignAccountInput;
    "post /services/retailer/questions": PostServicesRetailerQuestionsInput;
    "get /services/retailer/questions": GetServicesRetailerQuestionsInput;
    "post /services/retailer/questions/ai": PostServicesRetailerQuestionsAiInput;
    "post /services/retailer/mercadolivre": PostServicesRetailerMercadolivreInput;
    "post /services/retailer/nuvemshop": PostServicesRetailerNuvemshopInput;
    "post /services/retailer/shopify": PostServicesRetailerShopifyInput;
    "get /services/retailer/shopee": GetServicesRetailerShopeeInput;
    "post /services/retailer/shopee": PostServicesRetailerShopeeInput;
    "post /services/retailer/loja_integrada": PostServicesRetailerLojaIntegradaInput;
    "post /services/retailer/cartpanda": PostServicesRetailerCartpandaInput;
    "get /services/retailer/listings": GetServicesRetailerListingsInput;
    "post /services/retailer/listings": PostServicesRetailerListingsInput;
    "post /services/retailer/listings/status": PostServicesRetailerListingsStatusInput;
    "get /services/retailer/sales": GetServicesRetailerSalesInput;
    "get /services/retailer/sales/stats": GetServicesRetailerSalesStatsInput;
    "post /services/retailer/sales/cancel": PostServicesRetailerSalesCancelInput;
    "post /services/retailer/sales/pay/pix": PostServicesRetailerSalesPayPixInput;
    "post /services/retailer/sales/pay/wallet": PostServicesRetailerSalesPayWalletInput;
    "post /services/retailer/sales/:id/shipping_tag": PostServicesRetailerSalesIdShippingTagInput;
    "get /services/retailer/validations/:product_uuid": GetServicesRetailerValidationsProductUuidInput;
    "post /services/retailer/validations/:product_uuid": PostServicesRetailerValidationsProductUuidInput;
    "post /services/retailer/list": PostServicesRetailerListInput;
    "get /services/retailer/list/progress/:uuid": GetServicesRetailerListProgressUuidInput;
    "post /chats": PostChatsInput;
    "get /chats": GetChatsInput;
    "get /chats/:chat_id": GetChatsChatIdInput;
    "post /chats/:chat_id/read": PostChatsChatIdReadInput;
    "post /chats/:chat_id/flagged": PostChatsChatIdFlaggedInput;
    "post /chats/send": PostChatsSendInput;
    "post /auth": PostAuthInput;
    "delete /auth": DeleteAuthInput;
    "get /auth/found_us": GetAuthFoundUsInput;
    "get /auth/user": GetAuthUserInput;
    "post /auth/user": PostAuthUserInput;
    "patch /auth/user": PatchAuthUserInput;
    "post /auth/user/sub_user": PostAuthUserSubUserInput;
    "get /auth/user/sub_user": GetAuthUserSubUserInput;
    "patch /auth/user/sub_user": PatchAuthUserSubUserInput;
    "get /auth/user/stats": GetAuthUserStatsInput;
    "get /auth/user/logs": GetAuthUserLogsInput;
    "get /auth/user/logs/notifications": GetAuthUserLogsNotificationsInput;
    "patch /auth/user/logs/read": PatchAuthUserLogsReadInput;
    "get /auth/user/cards": GetAuthUserCardsInput;
    "post /auth/plan/pix": PostAuthPlanPixInput;
    "post /auth/plan/wallet": PostAuthPlanWalletInput;
    "patch /auth/plan": PatchAuthPlanInput;
    "get /auth/plan/:payment_id": GetAuthPlanPaymentIdInput;
    "post /auth/plan/subscription": PostAuthPlanSubscriptionInput;
    "post /auth/plan/subscription/cancel": PostAuthPlanSubscriptionCancelInput;
    "post /auth/plan/subscription/payments": PostAuthPlanSubscriptionPaymentsInput;
    "patch /auth/plan/subscription/payments": PatchAuthPlanSubscriptionPaymentsInput;
    "delete /auth/plan/subscription/payments": DeleteAuthPlanSubscriptionPaymentsInput;
    "post /auth/coupon": PostAuthCouponInput;
    "get /auth/coupon": GetAuthCouponInput;
    "get /auth/wallet": GetAuthWalletInput;
    "post /auth/wallet": PostAuthWalletInput;
    "post /auth/refresh": PostAuthRefreshInput;
    "post /hooks/mercadolivre": PostHooksMercadolivreInput;
    "post /hooks/shopee": PostHooksShopeeInput;
    "post /hooks/bling/:api_key": PostHooksBlingApiKeyInput;
    "post /hooks/asaas": PostHooksAsaasInput;
    "post /hooks/nuvemshop": PostHooksNuvemshopInput;
    "post /hooks/shopify": PostHooksShopifyInput;
    "post /hooks/shopify/gdpr/data": PostHooksShopifyGdprDataInput;
    "post /hooks/shopify/gdpr/client_redact": PostHooksShopifyGdprClientRedactInput;
    "post /hooks/shopify/gdpr/shop_redact": PostHooksShopifyGdprShopRedactInput;
    "post /hooks/loja_integrada/:api_key": PostHooksLojaIntegradaApiKeyInput;
    "post /hooks/cartpanda/:api_key": PostHooksCartpandaApiKeyInput;
    "post /hooks/tinyerp": PostHooksTinyerpInput;
    "post /hooks/stripe": PostHooksStripeInput;
    "get /admin/users": GetAdminUsersInput;
    "get /admin/users/logs": GetAdminUsersLogsInput;
    "post /admin/users/logs/warning": PostAdminUsersLogsWarningInput;
    "get /admin/users/:uuid": GetAdminUsersUuidInput;
    "post /admin/users/:uuid": PostAdminUsersUuidInput;
    "get /admin/users/:uuid/logs": GetAdminUsersUuidLogsInput;
    "post /admin/users/:uuid/auth": PostAdminUsersUuidAuthInput;
    "get /admin/settings": GetAdminSettingsInput;
    "post /admin/settings": PostAdminSettingsInput;
    "get /admin/gateways": GetAdminGatewaysInput;
    "post /admin/gateways": PostAdminGatewaysInput;
    "patch /admin/gateways": PatchAdminGatewaysInput;
    "delete /admin/gateways/:id": DeleteAdminGatewaysIdInput;
    "get /admin/coupons": GetAdminCouponsInput;
    "post /admin/coupons": PostAdminCouponsInput;
    "patch /admin/coupons": PatchAdminCouponsInput;
    "delete /admin/coupons": DeleteAdminCouponsInput;
    "post /admin/debug": PostAdminDebugInput;
    "get /provider/sales/stats": GetProviderSalesStatsInput;
    "post /provider/sales/withdraw": PostProviderSalesWithdrawInput;
}

export interface Response extends Record<MethodPath, any> {
    "get /metrics": GetMetricsResponse;
    "get /products": GetProductsResponse;
    "post /products": PostProductsResponse;
    "delete /products": DeleteProductsResponse;
    "get /products/stats": GetProductsStatsResponse;
    "get /products/skus": GetProductsSkusResponse;
    "get /products/brands": GetProductsBrandsResponse;
    "get /products/categories/:marketplace": GetProductsCategoriesMarketplaceResponse;
    "get /products/sales": GetProductsSalesResponse;
    "post /products/sales/ready": PostProductsSalesReadyResponse;
    "post /products/sales/send": PostProductsSalesSendResponse;
    "post /products/sales/refund": PostProductsSalesRefundResponse;
    "post /products/sales/:id/shipping_tracking": PostProductsSalesIdShippingTrackingResponse;
    "get /products/sales/stats": GetProductsSalesStatsResponse;
    "get /products/deposit": GetProductsDepositResponse;
    "post /products/deposit": PostProductsDepositResponse;
    "patch /products/deposit": PatchProductsDepositResponse;
    "get /products/:product_uuid": GetProductsProductUuidResponse;
    "patch /products/:product_uuid": PatchProductsProductUuidResponse;
    "post /products/:product_uuid/clone": PostProductsProductUuidCloneResponse;
    "post /products/:product_uuid/convert": PostProductsProductUuidConvertResponse;
    "post /products/:product_uuid/variant": PostProductsProductUuidVariantResponse;
    "post /products/:product_uuid/variants": PostProductsProductUuidVariantsResponse;
    "patch /products/:product_uuid/variants": PatchProductsProductUuidVariantsResponse;
    "patch /products/:product_uuid/variants/properties": PatchProductsProductUuidVariantsPropertiesResponse;
    "post /products/:product_uuid/size_grid": PostProductsProductUuidSizeGridResponse;
    "post /products/:product_uuid/inventory": PostProductsProductUuidInventoryResponse;
    "get /products/:product_uuid/images": GetProductsProductUuidImagesResponse;
    "post /products/:product_uuid/images": PostProductsProductUuidImagesResponse;
    "post /products/:product_uuid/images/order": PostProductsProductUuidImagesOrderResponse;
    "post /products/:product_uuid/images/group_by": PostProductsProductUuidImagesGroupByResponse;
    "post /products/:product_uuid/image": PostProductsProductUuidImageResponse;
    "get /products/:product_uuid/mercado_livre": GetProductsProductUuidMercadoLivreResponse;
    "get /products/:product_uuid/shopee": GetProductsProductUuidShopeeResponse;
    "post /products/:product_uuid/categories/:marketplace": PostProductsProductUuidCategoriesMarketplaceResponse;
    "get /products/:product_uuid/validations": GetProductsProductUuidValidationsResponse;
    "post /products/:product_uuid/validations": PostProductsProductUuidValidationsResponse;
    "post /market/provider/products": PostMarketProviderProductsResponse;
    "delete /market/provider/products": DeleteMarketProviderProductsResponse;
    "post /market/provider/products/:product_uuid": PostMarketProviderProductsProductUuidResponse;
    "delete /market/provider/products/:product_uuid": DeleteMarketProviderProductsProductUuidResponse;
    "get /market/provider/validations/:product_uuid/validations": GetMarketProviderValidationsProductUuidValidationsResponse;
    "post /market/provider/validations/:product_uuid/validations": PostMarketProviderValidationsProductUuidValidationsResponse;
    "get /market/retailer/products": GetMarketRetailerProductsResponse;
    "get /market/retailer/products/stats": GetMarketRetailerProductsStatsResponse;
    "get /market/retailer/products/:product_uuid": GetMarketRetailerProductsProductUuidResponse;
    "get /market/retailer/products/:product_uuid/images": GetMarketRetailerProductsProductUuidImagesResponse;
    "get /services/erp": GetServicesErpResponse;
    "patch /services/erp": PatchServicesErpResponse;
    "delete /services/erp": DeleteServicesErpResponse;
    "post /services/erp/pdf": PostServicesErpPdfResponse;
    "post /services/erp/bling": PostServicesErpBlingResponse;
    "post /services/erp/bling/export/product": PostServicesErpBlingExportProductResponse;
    "post /services/erp/bling/export/products": PostServicesErpBlingExportProductsResponse;
    "get /services/erp/bling/export/products": GetServicesErpBlingExportProductsResponse;
    "post /services/erp/bling/import": PostServicesErpBlingImportResponse;
    "get /services/erp/bling/import": GetServicesErpBlingImportResponse;
    "delete /services/erp/bling/import": DeleteServicesErpBlingImportResponse;
    "post /services/erp/tinyerp": PostServicesErpTinyerpResponse;
    "post /services/erp/tinyerp/export/product": PostServicesErpTinyerpExportProductResponse;
    "get /services/erp/tinyerp/export/product": GetServicesErpTinyerpExportProductResponse;
    "post /services/erp/tinyerp/import": PostServicesErpTinyerpImportResponse;
    "get /services/erp/tinyerp/import": GetServicesErpTinyerpImportResponse;
    "delete /services/erp/tinyerp/import": DeleteServicesErpTinyerpImportResponse;
    "post /services/erp/mercadolivre/grid": PostServicesErpMercadolivreGridResponse;
    "get /services/erp/mercadolivre/grid": GetServicesErpMercadolivreGridResponse;
    "patch /services/erp/mercadolivre/grid/:uuid": PatchServicesErpMercadolivreGridUuidResponse;
    "delete /services/erp/mercadolivre/grid/:uuid": DeleteServicesErpMercadolivreGridUuidResponse;
    "get /services/retailer": GetServicesRetailerResponse;
    "delete /services/retailer": DeleteServicesRetailerResponse;
    "post /services/retailer/assign/account": PostServicesRetailerAssignAccountResponse;
    "get /services/retailer/assign/account": GetServicesRetailerAssignAccountResponse;
    "post /services/retailer/questions": PostServicesRetailerQuestionsResponse;
    "get /services/retailer/questions": GetServicesRetailerQuestionsResponse;
    "post /services/retailer/questions/ai": PostServicesRetailerQuestionsAiResponse;
    "post /services/retailer/mercadolivre": PostServicesRetailerMercadolivreResponse;
    "post /services/retailer/nuvemshop": PostServicesRetailerNuvemshopResponse;
    "post /services/retailer/shopify": PostServicesRetailerShopifyResponse;
    "get /services/retailer/shopee": GetServicesRetailerShopeeResponse;
    "post /services/retailer/shopee": PostServicesRetailerShopeeResponse;
    "post /services/retailer/loja_integrada": PostServicesRetailerLojaIntegradaResponse;
    "post /services/retailer/cartpanda": PostServicesRetailerCartpandaResponse;
    "get /services/retailer/listings": GetServicesRetailerListingsResponse;
    "post /services/retailer/listings": PostServicesRetailerListingsResponse;
    "post /services/retailer/listings/status": PostServicesRetailerListingsStatusResponse;
    "get /services/retailer/sales": GetServicesRetailerSalesResponse;
    "get /services/retailer/sales/stats": GetServicesRetailerSalesStatsResponse;
    "post /services/retailer/sales/cancel": PostServicesRetailerSalesCancelResponse;
    "post /services/retailer/sales/pay/pix": PostServicesRetailerSalesPayPixResponse;
    "post /services/retailer/sales/pay/wallet": PostServicesRetailerSalesPayWalletResponse;
    "post /services/retailer/sales/:id/shipping_tag": PostServicesRetailerSalesIdShippingTagResponse;
    "get /services/retailer/validations/:product_uuid": GetServicesRetailerValidationsProductUuidResponse;
    "post /services/retailer/validations/:product_uuid": PostServicesRetailerValidationsProductUuidResponse;
    "post /services/retailer/list": PostServicesRetailerListResponse;
    "get /services/retailer/list/progress/:uuid": GetServicesRetailerListProgressUuidResponse;
    "post /chats": PostChatsResponse;
    "get /chats": GetChatsResponse;
    "get /chats/:chat_id": GetChatsChatIdResponse;
    "post /chats/:chat_id/read": PostChatsChatIdReadResponse;
    "post /chats/:chat_id/flagged": PostChatsChatIdFlaggedResponse;
    "post /chats/send": PostChatsSendResponse;
    "post /auth": PostAuthResponse;
    "delete /auth": DeleteAuthResponse;
    "get /auth/found_us": GetAuthFoundUsResponse;
    "get /auth/user": GetAuthUserResponse;
    "post /auth/user": PostAuthUserResponse;
    "patch /auth/user": PatchAuthUserResponse;
    "post /auth/user/sub_user": PostAuthUserSubUserResponse;
    "get /auth/user/sub_user": GetAuthUserSubUserResponse;
    "patch /auth/user/sub_user": PatchAuthUserSubUserResponse;
    "get /auth/user/stats": GetAuthUserStatsResponse;
    "get /auth/user/logs": GetAuthUserLogsResponse;
    "get /auth/user/logs/notifications": GetAuthUserLogsNotificationsResponse;
    "patch /auth/user/logs/read": PatchAuthUserLogsReadResponse;
    "get /auth/user/cards": GetAuthUserCardsResponse;
    "post /auth/plan/pix": PostAuthPlanPixResponse;
    "post /auth/plan/wallet": PostAuthPlanWalletResponse;
    "patch /auth/plan": PatchAuthPlanResponse;
    "get /auth/plan/:payment_id": GetAuthPlanPaymentIdResponse;
    "post /auth/plan/subscription": PostAuthPlanSubscriptionResponse;
    "post /auth/plan/subscription/cancel": PostAuthPlanSubscriptionCancelResponse;
    "post /auth/plan/subscription/payments": PostAuthPlanSubscriptionPaymentsResponse;
    "patch /auth/plan/subscription/payments": PatchAuthPlanSubscriptionPaymentsResponse;
    "delete /auth/plan/subscription/payments": DeleteAuthPlanSubscriptionPaymentsResponse;
    "post /auth/coupon": PostAuthCouponResponse;
    "get /auth/coupon": GetAuthCouponResponse;
    "get /auth/wallet": GetAuthWalletResponse;
    "post /auth/wallet": PostAuthWalletResponse;
    "post /auth/refresh": PostAuthRefreshResponse;
    "post /hooks/mercadolivre": PostHooksMercadolivreResponse;
    "post /hooks/shopee": PostHooksShopeeResponse;
    "post /hooks/bling/:api_key": PostHooksBlingApiKeyResponse;
    "post /hooks/asaas": PostHooksAsaasResponse;
    "post /hooks/nuvemshop": PostHooksNuvemshopResponse;
    "post /hooks/shopify": PostHooksShopifyResponse;
    "post /hooks/shopify/gdpr/data": PostHooksShopifyGdprDataResponse;
    "post /hooks/shopify/gdpr/client_redact": PostHooksShopifyGdprClientRedactResponse;
    "post /hooks/shopify/gdpr/shop_redact": PostHooksShopifyGdprShopRedactResponse;
    "post /hooks/loja_integrada/:api_key": PostHooksLojaIntegradaApiKeyResponse;
    "post /hooks/cartpanda/:api_key": PostHooksCartpandaApiKeyResponse;
    "post /hooks/tinyerp": PostHooksTinyerpResponse;
    "post /hooks/stripe": PostHooksStripeResponse;
    "get /admin/users": GetAdminUsersResponse;
    "get /admin/users/logs": GetAdminUsersLogsResponse;
    "post /admin/users/logs/warning": PostAdminUsersLogsWarningResponse;
    "get /admin/users/:uuid": GetAdminUsersUuidResponse;
    "post /admin/users/:uuid": PostAdminUsersUuidResponse;
    "get /admin/users/:uuid/logs": GetAdminUsersUuidLogsResponse;
    "post /admin/users/:uuid/auth": PostAdminUsersUuidAuthResponse;
    "get /admin/settings": GetAdminSettingsResponse;
    "post /admin/settings": PostAdminSettingsResponse;
    "get /admin/gateways": GetAdminGatewaysResponse;
    "post /admin/gateways": PostAdminGatewaysResponse;
    "patch /admin/gateways": PatchAdminGatewaysResponse;
    "delete /admin/gateways/:id": DeleteAdminGatewaysIdResponse;
    "get /admin/coupons": GetAdminCouponsResponse;
    "post /admin/coupons": PostAdminCouponsResponse;
    "patch /admin/coupons": PatchAdminCouponsResponse;
    "delete /admin/coupons": DeleteAdminCouponsResponse;
    "post /admin/debug": PostAdminDebugResponse;
    "get /provider/sales/stats": GetProviderSalesStatsResponse;
    "post /provider/sales/withdraw": PostProviderSalesWithdrawResponse;
}