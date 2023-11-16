import { MMKV, useMMKVObject } from "react-native-mmkv";

type AuthStorageType = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  mobileNumber: string;
};

/**
 * Use this `storage` instance outside of React components / Hooks.
 * Use the built-in custom mmkv hooks inside React Components and Hooks :
 * https://github.com/mrousavy/react-native-mmkv/blob/master/docs/HOOKS.md
 */

const authStorage = new MMKV({
  id: "auth",
});

export const AuthStorage = {
  getAuthDetails(): string | null {
    const authDetails = authStorage.getString("auth");
    return authDetails ? JSON.parse(authDetails) : null;
  },
  setAuthDetails(value: AuthStorageType) {
    authStorage.set("auth", JSON.stringify(value));
  },
};

const useAuthStorage = () => {
  const [authDetails, _setAuthDetails] = useMMKVObject<
    Partial<AuthStorageType>
  >("auth", authStorage);

  const setAuthDetails = (value: Partial<AuthStorageType> | undefined) => {
    _setAuthDetails({
      ...(authDetails || {}),
      ...value,
    });
  };

  const resetAuthDetails = () =>
    _setAuthDetails({
      mobileNumber: undefined,
      tokens: undefined,
    });

  return { authDetails, setAuthDetails, resetAuthDetails } as const;
};

export const useAuth = () => {
  const auth = useAuthStorage();

  return {
    isAuthenticated: auth.authDetails?.tokens?.accessToken !== undefined,
    ...auth,
  };
};
