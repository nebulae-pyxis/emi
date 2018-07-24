export const environment = {
    "production": true,
    "hmr": false,
    "keycloak": {
        "url": "https://pyxis.nebulae.com.co/auth",
        "realm": "PYXIS",
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
                "httpEndPoint": "https://pyxis.nebulae.com.co/api/gateway/graphql/http",
                "wsEndPoint": "wss://pyxis.nebulae.com.co/api/gateway/graphql/ws",
                "graphiqlEndPoint": "https://pyxis.nebulae.com.co/api/gateway/graphiql"
            }
        }
    }
};
