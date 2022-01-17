import {
    randomEmail
} from "./email";
import { randomPhoneNumber } from "./phone";
import name from "./data/name";
import { createHash } from "crypto";
import { BasicInfo, Person } from "./types";
import { randomAddress } from "./address";

/**
 * generate random person with basic information
 * @returns { person }
 * @example
 * randomPerson()
 * // => {
 * //     id: "5edadsdklj3dsdskjd2dsmkk",
 * //     firstName: "John",
 * //     image: "https://picsum.photos/500/500",
 * //     lastName: "Doe",
 * //     age: 25,
 * //     gender: "M",
 * //     phone: "+1-123-456-7890",
 * //     email: "john.doe@yahoo.com"
 * //     address: {
  * //     address: "123 Main Lorem Ipsum St, Alappuzha, Kerala, 688888, Estonia",
 * //      street: "123 Main Lorem Ipsum St",
 * //      city: "New York",
 * //      state: "Kerala",
 * //      zip: "688888",
 * //      country: "Estonia",
 * //      coordinates: {
 * //          latitude: "-19.98888",
 * //          longitude: "6.98888"
 * //      }
 * //     }
 * // }
 */
export function randomPerson(): Person {
    // genereate random phone number
    const phone = randomPhoneNumber()
    // generate random gender
    const {
        gender,
        firstName,
        lastName
    } = randomName()
    // generate random email address from first name and last name
    const email = randomEmail({
        firstName,
        lastName,
    })
    // generate random age
    const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18
    // random date of birth from age
    const date = new Date(new Date().getFullYear() - age, Math.floor(Math.random() * 12), Math.floor(Math.random() * 30))
    // generate id hash
    const id = createHash("md5").update(`${firstName}${lastName}${email}${age}`).digest("hex")
    // address
    const address = randomAddress({})
    const image = `https://picsum.photos/500/500`
    return {
        id,
        firstName,
        lastName,
        image,
        phone,
        email,
        gender,
        dob: {
            age,
            date
        },
        address,
    }
}

/**
 * random name generator
 * 
 * @param gender: number 0,1 (optional)
 * @example
 * randomName(0)
 * // => {
 * // firstName: "John",
 * // lastName: "Doe",
 * // gender: "M"
 * //}
 * 
 * randomName(1)
 * // => {
 * // firstName: "Mary",
 * // lastName: "Doe",
 * // gender: "F"
 * //}
  * randomName()
 * // => {
 * // firstName: "Mark",
 * // lastName: "Oliver",
 * // gender: "M"
 * //}
 */
export function randomName(gender?: number): BasicInfo {
    // check gender not null
    if (gender !== null) {
        // check gender is 0
        if (gender === 0) {
            const firstName = name["M"].firstname[Math.floor(Math.random() * name["M"].firstname.length)]
            const lastName = name.lastname[Math.floor(Math.random() * name.lastname.length)]
            return {
                firstName,
                lastName,
                gender: "M"
            }
        // check if gender is 1
        } else if (gender === 1) {
            const firstName = name["F"].firstname[Math.floor(Math.random() * name["F"].firstname.length)]
            const lastName = name.lastname[Math.floor(Math.random() * name.lastname.length)]
            return {
                firstName,
                lastName,
                gender: "F"
            }
        // if not 0 or 1 then random  gender
        } else {
            const gender = Math.random() > 0.5 ? "F" : "M"
            const firstName = name[gender].firstname[Math.floor(Math.random() * name[gender].firstname.length)]
            const lastName = name.lastname[Math.floor(Math.random() * name.lastname.length)]
            return {
                firstName,
                lastName,
                gender
            }
        }
    // if no gender then random
    } else {
        const gender = Math.random() > 0.5 ? "F" : "M"
        // generate first name and lastname
        const firstName = name[gender].firstname[Math.floor(Math.random() * name[gender].firstname.length)]
        const lastName = name.lastname[Math.floor(Math.random() * name.lastname.length)]
        return {
            firstName,
            lastName,
            gender
        }
    }
}