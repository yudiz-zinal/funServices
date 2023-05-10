export const formatUsers = (users: Array<object>): Array<UserModel> => {
    let allUsers: Array<UserModel> = [];

    users.forEach((user: any) => {
        let newUser: UserModel = {
            id: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            admin: user.customClaims?.admin ? true : false,
            disabled: user.disabled,
            metadata: {
                creationTime: user.metadata.creationTime,
                lastRefreshTime: user.metadata.lastRefreshTime,
                lastSignInTime: user.metadata.lastSignInTime,
            },
            tokensValidAfterTime: user.tokensValidAfterTime,
            isBusy: false,
        };
        allUsers.push(newUser);
    });

    return allUsers;
};

export const formatUserDetails = (user: any): UserDetailsModel => {
    let newUser: UserDetailsModel = {
        id: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        admin: user.customClaims?.admin ? true : false,
        disabled: user.disabled,
        metadata: {
            creationTime: user.metadata.creationTime,
            lastRefreshTime: user.metadata.lastRefreshTime,
            lastSignInTime: user.metadata.lastSignInTime,
        },
        tokensValidAfterTime: user.tokensValidAfterTime,
        isBusy: false,
        displayName: user.displayName ? user.displayName : '',
        photoURL: user.photoURL,
    };

    return newUser;
};
