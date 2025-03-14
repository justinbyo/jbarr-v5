// auth_helpers.js
export function validateUser(credentials) {
    if (!credentials.username || !credentials.password) {
        throw new Error("Username and password are required.");
    }
    return authenticate(credentials);
}

// auth.js
import { validateUser } from "./auth_helpers.js";

export function loginUser(req, res) {
    try {
        const user = validateUser(req.body);
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
