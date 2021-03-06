export const environment = {
    "production": false,
    "hmr": false,
    "keycloak": {
        "url": "http://127.0.0.1:8080/auth",
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
                "httpEndPoint": "http://localhost:3000/api/emi-gateway/graphql/http",
                "wsEndPoint": "ws://localhost:3000/api/emi-gateway/graphql/ws",
                "graphiqlEndPoint": "http://localhost:3000/api/emi-gateway/graphiql"
            }
        }
    }
};
