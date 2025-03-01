import { useEffect, useState } from "react";

function getUserData() {
    const user = sessionStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

export function useUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = getUserData();
        setUser(storedUser);
    }, []);

    return user;
}
