export class Global {
    public static userEmail: String;
    public static userToken: String;
    public static userData: {
        username: String
    };

    /**
     * getEmail
     */
    public static getEmail() {
        return this.userEmail;
    }

    /**
     * setEmail
     */
    public static setEmail(email) {
        this.userEmail = email;
        return this.userEmail;
    }
    /**
     * getToken
     */
    public static getToken() {
        return this.userToken;
    }

    /**
     * setToken
     */
    public static setToken(token) {
        this.userToken = token;
        return this.userToken;
    }

    /**
     * getuserData
     */
    public static getUser() {
        return this.userData;
    }

    /**
     * setUserData
     */
    public static setUser(data) {
        this.userData = data;
        return this.userData;
    }
}