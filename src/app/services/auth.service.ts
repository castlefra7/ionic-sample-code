import { Injectable } from "@angular/core";

export class Customer {
    name: string;
    contact: string;
    token: string;

    constructor(name: string, contact: string, token: string) {
        this.name = name;
        this.contact = contact;
        this.token = token;
    }
}

@Injectable()
export class AuthService {
    user: Customer = null;
    
    login(user: string, password: string): boolean {
        if(user == 'user' && password == 'pwd') {
            this.user = new Customer("kirikou", "0320212022", "POXJZOIJ");
            return true;
        }
        return false;
    }

    logout(): boolean {
        this.user = null;
        return true;
    }

    getUser(): Customer {
        return this.user;
    }

    isLoggedIn(): boolean {
        return this.getUser() != null;
    }
}

export const AUTH_PROVIDERS: Array<any> = [
    {provide: AuthService, useClass: AuthService}
];