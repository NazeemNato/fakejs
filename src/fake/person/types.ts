/**
 * person type
 * @typedef {Object} person
 */
export type person = {
    /**
     * unique id
     */
    id: string;
    /**
     * first name
     * @example
     * John
     * Jane
     */
    firstName: string;
    /**
     * last name
     * @example
     * Doe
     * Smith
    */
    lastName: string;
    /**
     * image url
     * @example
     * `https://picsum.photos/500/500`
    */
    image: string;
    /**
     * Date of birth
     * @example
     * {
     *    age: 22,
     *    date: "1999-01-01T00:00:00.000Z"
     * }
     * 
     * */
    dob: {
        /**
         * age
         * @example
         * 22
         */
        age: number;
        /**
         * date of birth
         * @example
         * "1999-04-05T00:00:00.000Z"
         *
        */
        date: Date;
    };
    /**
     * gender
     * @example
     * M
     * F
     */
    gender: string;
    /**
     * email
     * @example
     * john.doe@gmail.com
     */
    email: string;
    /**
     * phone number
     * @example
     * "+1-123-456-7890"
     */
    phone: string;
    /**
* address
* @example
* {
*   address: "123 Main St, New York, NY 10001, USA",
*   street: "123 Main St",
*   city: "New York",
*   state: "NY",
*   zip: "10001",
*   country: "USA"
* }
*/
    address: address;
}
// address type
export type address = {
    /**
     * address
     * @example
     * "123 Main St, New York, NY 10001, USA"
     */
    address: string;
    /**
     * street
     * @example
     * "123 Main St"
     */
    street: string;
    /**
     * city
     * @example
     * "New York"
     */
    city: string;
    /**
     * state
     * @example
     * "NY"
     */
    state: string;
    /**
     * zip
     * @example
     * "10001"
     */
    zip: string;
    /**
     * country
     * @example
     * "USA"
     */
    country: string;
    /**
     * coordinates
     * @example
     * {
     *  latitude: "-19.98888",
     * longitude: "6.98888"
     * }
     */
    coordinates: {
        latitude: string;
        longitude: string;
    }
}
// email input type
export type emailInput = {
    /**
     * first name (optional)
     * @example
     * John
    */
    firstName?: string;
    /**
    * last name (optional)
    * @example
    * Doe
   */
    lastName?: string;
    /**
    * provider or domain (optional)
    * @example
    * gmail
   */
    provider?: string;
    /**
    * extension (optional)
    * @example
    * xyz
   */
    extension?: string;
}
// address input type
export type addressType = {
    /*
    * street (optional)
    * @example
    * "123 Main St"
    */
    street?: string;
    /*
    * city (optional)
    * @example
    * "Alappuzha"
    * */
    city?: string;
    /*
    * state (optional)
    * @example
    * "Kerala"
    * */
    state?: string;
    /*
    * zip (optional)
    * @example
    * "12345"
    * */
    zip?: string;
    /*
    * country (optional)
    * @example
    * "India"
    */
    country?: string;
    latitude?: string;
    longitude?: string;
}