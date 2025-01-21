export interface I18n {
    common: {
        cancel: string,
        close: string,
        email: string,
        errTooShort: string,
        errTooLong: string,
        invalidInput: string,
        never: string,
        password: string,
        required: string,
        save: string,
    },
    account: {
        account: string,
        accType: string,
        accTypePasskeyText1: string,
        accTypePasskeyText2: string,
        accTypePasskeyText3: string,
        accessExp: string,
        accessRenew: string,
        accessRenewDelete: string,
        birthdate: string,
        city: string,
        changePassword: string,
        convertAccount: string,
        convertAccountP1: string,
        country: string,
        deviceId: string,
        deviceName: string,
        devices: string,
        devicesDesc: string,
        emailUpdateConfirm: string,
        emailVerified: string,
        familyName: string,
        federatedConvertPassword1: string,
        federatedConvertPassword2: string,
        generateRandom: string,
        givenName: string,
        groups: string,
        key: string,
        keyUnique: string,
        lastLogin: string,
        mfaActivated: string,
        navInfo: string,
        navEdit: string,
        navMfa: string,
        navLogout: string,
        optionalValues: string,
        passwordConfirm: string,
        passwordCurr: string,
        passwordCurrReq: string,
        passwordNew: string,
        passwordNewReq: string,
        passwordNoMatch: string,
        passwordExpiry: string,
        passwordPolicyFollow: string,
        passwordReset: string,
        phone: string,
        providerLink: string,
        providerLinkDesc: string,
        providerUnlink: string,
        providerUnlinkDesc: string,
        regDate: string,
        regIp: string,
        roles: string,
        street: string,
        user: string,
        userCreated: string,
        userEnabled: string,
        userExpiry: string,
        userVerifiedTooltip: string,
        validEmail: string,
        validGivenName: string,
        validFamilyName: string,
        webIdDesc: string,
        webIdDescData: string,
        webIdExpertMode: string,
        zip: string,
    },
    authorize: {
        clientForceMfa: string,
        email: string,
        emailBadFormat: string,
        emailRequired: string,
        emailSentMsg: string,
        http429: string,
        invalidCredentials: string,
        invalidKeyUsed: string,
        login: string,
        mfaAck: string,
        password: string,
        passwordForgotten: string,
        passwordRequest: string,
        passwordRequired: string,
        provideMfa: string,
        requestExpires: string,
        signUp: string,
    },
    device: {
        accept: string,
        autoRedirectAccount: string,
        closeWindow: string,
        decline: string,
        desc: string,
        descScopes: string,
        isAccepted: string,
        isDeclined: string,
        submit: string,
        title: string,
        userCode: string,
        wrongOrExpired: string,
    },
    emailChange: {
        title: string,
        textChanged: string,
        textLogin: string,
        to: string,
    },
    error: {
        details: string,
    },
    index: {
        register: string,
        accountLogin: string,
        adminLogin: string,
    },
    logout: {
        logout: string,
        confirmMsg: string,
        cancel: string,
    },
    mfa: {
        p1: string,
        p2: string,

        delete: string,
        errorReg: string,
        invalidKeyUsed: string,
        lastUsed: string,
        noKey: string,
        register: string,
        registerNew: string,
        registerd: string,
        registerdKeys: string,
        passkeyName: string,
        passkeyNameErr: string,
        test: string,
        testError: string,
        testSuccess: string,
    },
    passwordPolicy: {
        passwordPolicy: string,
        lengthMin: string,
        lengthMax: string,
        lowercaseMin: string,
        uppercaseMin: string,
        digitsMin: string,
        specialMin: string,
        notRecent: string,
    },
    passwordReset: {
        accountLogin: string,
        badFormat: string,
        fidoLink: string,
        generate: string,
        newAccDesc1: string,
        newAccDesc2: string,
        newAccount: string,
        passwordReset: string,
        password: string,
        passwordless: string,
        passwordConfirm: string,
        passwordNoMatch: string,
        required: string,
        save: string,
        success1: string,
        success2: string,
        success3: string,
        successPasskey1: string,
        successPasskey2: string,
    },
    register: {
        domainAllowed: string,
        domainErr: string,
        domainRestricted: string,
        email: string,
        emailBadFormat: string,
        emailCheck: string,
        regexName: string,
        register: string,
        success: string,
        userReg: string,
    },
}
