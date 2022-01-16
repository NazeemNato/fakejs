export type person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    // address: address;
}
// address type
export type address = {
    street: string;
    city: string;
    state: string;
    zip: string;
}
// email input type
export type emailInput = {
    firstName?: string;
    lastName?: string;
    provider?: string;
    extension?: string;
}
