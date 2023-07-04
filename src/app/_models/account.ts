import { Career } from './career';
import { Role } from './role';

export class Account {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: Role;
    career?:Career;
    address?:string;
    phone?:string;
    jwtToken?: string;
}