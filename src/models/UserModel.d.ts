type UserModel = {
    id: string;
    email: string;
    phoneNumber: string;
    emailVerified: boolean;
    admin: boolean;
    disabled: boolean;
    metadata: {
        creationTime: string;
        lastRefreshTime: string;
        lastSignInTime: string;
    };
    tokensValidAfterTime: string;
    isBusy: boolean;
};

type UserDetailsModel = UserModel & {
    displayName: string;
    photoURL: string | undefined;
};

type UserModelProperties =
    | 'email'
    | 'emailVerified'
    | 'admin'
    | 'disabled'
    | 'metadata'
    | 'tokensValidAfterTime'
    | 'isBusy';
type UserModelUpdateBooleanProperties = 'emailVerified' | 'admin' | 'disabled';

type sendEmailTypes = 'reset-password' | 'verify-email';
