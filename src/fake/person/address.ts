import data from "./data/address";
import { addressType, address } from "./types";
/**
 * generate random zipcode
 * @returns string
 * @example
 * randomZipcode()
 * // => 12345
 */
export function randomZipCode(): string {
    // generate random 5 digits zipcode
    const zipCode = Math.floor(Math.random() * 100000).toString();
    // check if zipcode is 5 digits
    if (zipCode.length === 5) {
        return zipCode;
    }
    // if zipcode is not 5 digits, return random zipcode
    return randomZipCode();
}
/**
 * generate random latitude
 * @returns string
 * @example
 * randomLatitude()
 * // => -90.12345
 */
export function randomLatitude(): string {
    // generate random latitude
    const latitude = Math.random() * 180 - 90;
    // check if latitude is between -90 and 90
    if (latitude >= -90 && latitude <= 90) {
        // 6 digits after decimal point
        return latitude.toFixed(6);
    }
    // if latitude is not between -90 and 90, return random latitude
    return randomLatitude();
}
/**
 * generate random longitude
 * @returns number
 * @example
 * randomLongitude()
 * // => -180.12345
 */
export function randomLongitude(): string {
    // generate random longitude
    const longitude = Math.random() * 360 - 180;
    // check if longitude is between -180 and 180
    if (longitude >= -180 && longitude <= 180) {
        // 6 digits after decimal point for longitude in number
        return longitude.toFixed(6)
    }
    // if longitude is not between -180 and 180, return random longitude
    return randomLongitude();
}
/**
 * generate random street
 * 
 * @returns string
 * 
 * @example
 * randomStreet()
 * // => 123 Main Lorem Ipsum St
*/
export function randomStreet(): string {
    let street: string;
    // generate random 3 digits street number
    const streetNumber = Math.floor(Math.random() * 1000).toString();
    // random prefix
    const prefix = data.prefix[Math.floor(Math.random() * data.prefix.length)];
    // random suffix
    const suffix = data.suffix[Math.floor(Math.random() * data.suffix.length)];
    // random street name
    const streetName = data.street[Math.floor(Math.random() * data.street.length)];
    // concatenate street number, prefix, suffix and street name
    street = `${streetNumber} ${prefix} ${streetName} ${suffix} St`;
    // return street
    return street;
}
/**
 * get random city
 * @returns string
 * 
 * @example
 * randomCity()
 * // => Alappuzha
 */
export function randomCity(): string {
    // random city
    const city = data.city[Math.floor(Math.random() * data.city.length)];
    // return city
    return city;
}
/**
 * get random state
 * 
 * @returns string
 * 
 * @example
 * randomState()
 * // => Kerala
 */
export function randomState(): string {
    // random state
    const state = data.state[Math.floor(Math.random() * data.state.length)];
    // return state
    return state;
}
/**
 * generate random coutry
 * @returns string
 * 
 * example
 * randomCountry()
 * // => India
*/
export function randomCountry(): string {
    // random country
    const country = data.country[Math.floor(Math.random() * data.country.length)];
    // return country
    return country;
}
/**
 * generate random address
 * @param input addressType
 * @returns address
 * 
 * @example
 * randomAddress({
 *    state: "Kerala",
 * })
 * 
 * // => {
 * //      address: "123 Main Lorem Ipsum St, Alappuzha, Kerala, 688888, Estonia",
 * //      street: "123 Main Lorem Ipsum St",
 * //      city: "New York",
 * //      state: "Kerala",
 * //      zip: "688888",
 * //      country: "Estonia",
 * //      coordinates: {
 * //          latitude: "-19.98888",
 * //          longitude: "6.98888"
 * //      }
 * // }
*/
export function randomAddress(input: addressType): address {
    var result: address = {
        address: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        coordinates: {
            latitude: "",
            longitude: ""
        }
    };
    // check if street is provided
    if (input.street) {
        result.street = input.street;
    } else {
        result.street = randomStreet();
    }
    // check if city is provided
    if (input.city) {
        result.city = input.city;
    } else {
        result.city = randomCity();
    }
    // check if state is provided
    if (input.state) {
        result.state = input.state;
    }
    else {
        result.state = randomState();
    }
    // check if zip is provided
    if (input.zip) {
        result.zip = input.zip;
    }
    else {
        result.zip = randomZipCode();
    }
    // check if country is provided
    if (input.country) {
        result.country = input.country;
    }
    else {
        result.country = randomCountry();
    }
    // check if latitude is provided
    if (input.latitude) {
        result.coordinates.latitude = input.latitude;
    }
    else {
        result.coordinates.latitude = randomLatitude();
    }
    // check if longitude is provided
    if (input.longitude) {
        result.coordinates.longitude = input.longitude;
    }
    else {
        result.coordinates.longitude = randomLongitude();
    }
    // concatenate address
    result.address = `${result.street}, ${result.city}, ${result.state} ${result.zip}, ${result.country}`;
    // return address
    return result;
}