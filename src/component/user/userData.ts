const userData = [
    {
        id: 1,
        username: "jackson rai",
        role: "guest",
        created_at: "2024-07-08",
    },
    {
        id: 2,
        username: "devish",
        role: "guest",
        created_at: "2024-09-08",
    },
    {
        id: 3,
        username: "devish",
        role: "guest",
        created_at: "2024-09-08",
    },
    {
        id: 4,
        username: "devish",
        role: "guest",
        created_at: "2024-09-08",
    },
    {
        id: 5,
        username: "devish",
        role: "guest",
        created_at: "2024-09-08",
    },
    {
        id: 6,
        username: "devish",
        role: "guest",
        created_at: "2024-09-08",
    },
    {
        id: 7,
        username: "devish",
        role: "guest",
        created_at: "2024-09-08",
    },
];
export { userData };
export interface UserDataItems {
    id: number;
    username: string;
    role: {
        id: number;
        name: string;
    };
    created_at: string;
}
