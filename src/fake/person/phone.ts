/**
 * generate random phone number
 * @returns string
 * 
 * @example
 * randomPhoneNumber()
 * // => +1-123-456-7890
 */
export function randomPhoneNumber(): string {
       // generating random phone number 10 digits
       const phone = Math.floor(Math.random() * 10000000000).toString();
       // formatting phone number adding country code to it
       return `+1-${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
}