import React, { useEffect, useState } from "react";

export const useTable = ({ url, method, body }: any) => {
    const [data, setData] = useState<null | any>(null);
    const [error, setError] = useState<null | any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: method ?? "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: body ? JSON.stringify(body) : null,
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, error, loading };
};
