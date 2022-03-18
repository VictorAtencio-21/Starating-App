export class Global {
    public static userEmail: String;
    public static userData: Object;

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
     * getEmail
     */
    public static getUser() {
        return this.userData;
    }

    /**
     * setEmail
     */
    public static setUser(data) {
        this.userData = data;
        return this.userData;
    }
}