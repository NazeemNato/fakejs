import { emailInput } from "./types";
import provider from "./data/email";
import extension from "./data/extension";

export default function randomEmail(input: emailInput): string {
    let email: string;
    // check if firstName is provided
    if (input.firstName) {
        email = input.firstName.toLowerCase();
    } else {
        // generate random first name
    }
    // check if lastName is provided
    if (input.lastName) {
        email += `.${input.lastName.toLowerCase()}`;
    }
    // check if provider is provided
    if (input.provider) {
        email += `@${input.provider.toLowerCase()}`;
    } else {
        // random provider
        email += `@${provider[Math.floor(Math.random() * provider.length)]}`;
    }
    // check if extension is provided
    if (input.extension) {
        email += `.${input.extension.toLowerCase()}`;
    } else {
        // random extension
        email += `.${extension[Math.floor(Math.random() * extension.length)]}`;
    }
    return email;
}