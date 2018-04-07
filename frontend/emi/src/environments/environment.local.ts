export const environment = {
    "production": false,
    "hmr": false,
    "keycloak": {
        "url": "http://127.0.0.1:8080/auth",
        "realm": "DEV_TPM",
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
                "uri": "http://localhost:3000/api/gateway/graphql/",
            }
        }
    }
};
