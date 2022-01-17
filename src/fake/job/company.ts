import data from "./data/company"
import position from "./data/position"
/**
 * generate random company name
 * @returns string
 * @example
 * randomCompanySuffix()
 * // =>  Buckthorn Inc
 */
export function randomCompanyName() : string {
    const comapny =  data.company_name[Math.floor(Math.random() * data.company_name.length)]  + " " + data.company_suffix[Math.floor(Math.random() * data.company_suffix.length)]  
    return comapny.trim()
}
/**
 * 
 * @returns string
 * @example
 * randomDesignation()
 * // =>  Senior 
 */
export function randomDesignation() : string {
    return position.level[Math.floor(Math.random() * position.level.length)] + " " + position.position[Math.floor(Math.random() * position.position.length)]
}