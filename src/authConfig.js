export const msalConfig = {
    auth: {
        clientId: "23c714ad-d85e-4ce1-824e-94fc01a32692",
        authority:
            "https://login.microsoftonline.com/a3fad7f1-27ab-4238-b233-ea2dc8fc1428",
        redirectUri: "http://localhost:5001/api/v1/auth/redirect/#",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
};
export const loginRequest = {
    scopes: ["User.Read", "GroupMember.Read.All"],
};
