export const environment = {
    "production": false,
    "hmr": false,
    "keycloak": {
        "url": "https://dev-pyxis.nebulae.com.co/auth",
        "realm": "DEV_PYXIS",
        "clientId": "EMI",
        "onLoad": "login-required",
        "checkLoginIframe": false,
        "bearerExcludedUrls": [
            "/assets"
        ]
    },
    "api": {
        "gateway": {
            "graphql": {
                "httpEndPoint": "https://dev-pyxis.nebulae.com.co/api/emi-gateway/graphql/http",
                "wsEndPoint": "wss://dev-pyxis.nebulae.com.co/api/emi-gateway/graphql/ws",
                "graphiqlEndPoint": "https://dev-pyxis.nebulae.com.co/api/emi-gateway/graphiql"
            }
        }
    }
};
