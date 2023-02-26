export interface IAuthContext {
    authData: any;
    searchData: any[] | null;
    onLogin: (token: string) => void;
    transferPlaback: (id: string) => void;
    getSearchData: (id: string) => void;
    setDevice_id: (id: string) => void;
    startPlayback: (id: string, trackId?: string) => void;
    onConnectSpotify: () => void;
    getUserData: () => void;
    onLogout: () => void;
    setAuthState: (authData: any) => void;
    setSearchData: (data: any) => void;
    authStateLoading: boolean;
    appLoading: boolean;
    profileImage: string;
    displayName: string;
}