export class User {
    constructor(
      public username: string,
      public email: string,
      public phone: string,
      public birthday: string,
      private token: string,
      private expirationDate: Date
    ) {}
  
    get expireDate() {
      return this.expirationDate;
    }
  
    get userToken() {
      return this.token;
    }
  }
  