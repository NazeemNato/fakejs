import randomEmail from "./email";
import randomPhoneNumber from "./phone";
import name from "./data/name";
import { createHash } from "crypto";
import { person } from "./types";

export default function randomPerson(): person {
    // genereate random phone number
    const phone = randomPhoneNumber()
    // generate random gender
    const gender = Math.random() > 0.5 ? "F" : "M"
    // generate first name and lastname
    const firstName = name[gender].firstname[Math.floor(Math.random() * name[gender].firstname.length)]
    const lastName = name.lastname[Math.floor(Math.random() * name.lastname.length)]
    // generate random email address from first name and last name
    const email = randomEmail({
        firstName,
        lastName,
    })
    // generate random age
    const age = Math.floor(Math.random() * 100)
    // generate id hash
    const id = createHash("md5").update(`${firstName}${lastName}${email}${age}`).digest("hex")
    return {
        id,
        firstName,
        lastName,
        phone,
        email,
        gender,
        age
    }
}