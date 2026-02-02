/**
 * Authentication utility functions for client-side auth management
 * For production, replace with proper backend authentication (e.g., NextAuth.js, Supabase, etc.)
 */

const AUTH_KEY = "isAuthenticated";
const AUTH_TOKEN_KEY = "auth_token";
const USER_DATA_KEY = "user_data";

export interface User {
  email: string;
  name?: string;
}

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;

  try {
    const authStatus = localStorage.getItem(AUTH_KEY);
    return authStatus === "true";
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};

/**
 * Login user and store auth data
 */
export const login = (email: string, token?: string): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(AUTH_KEY, "true");
    if (token) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    }
    localStorage.setItem(USER_DATA_KEY, JSON.stringify({ email }));

    // Set cookie for middleware
    document.cookie = `isAuthenticated=true; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Failed to save authentication data");
  }
};

/**
 * Logout user and clear auth data
 */
export const logout = (): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);

    // Clear cookie
    document.cookie = "isAuthenticated=; path=/; max-age=0; SameSite=Lax";
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

/**
 * Get current user data
 */
export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;

  try {
    const userData = localStorage.getItem(USER_DATA_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
};

/**
 * Get auth token
 */
export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;

  try {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  } catch (error) {
    console.error("Error getting auth token:", error);
    return null;
  }
};
