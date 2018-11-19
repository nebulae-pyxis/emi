export const environment = {
    "production": true,
    "hmr"       : false,
    "keycloak": {
        "url": "https://qa-pyxis.nebulae.com.co/auth",
        "realm": "QA_PYXIS",
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
                "httpEndPoint": "https://qa-pyxis.nebulae.com.co/api/emi-gateway/graphql/http",
                "wsEndPoint": "wss://qa-pyxis.nebulae.com.co/api/emi-gateway/graphql/ws",
                "graphiqlEndPoint": "https://qa-pyxis.nebulae.com.co/api/emi-gateway/graphiql"
            }
        }
    }
};
