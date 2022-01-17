import {
    randomZipCode,
    randomLatitude,
    randomLongitude,
    randomStreet,
    randomAddress
} from "./address"

test("address test #1 random", () => {
    const zipCodeRegex = /^[0-9]{5}$/;
    expect(randomZipCode()).toMatch(zipCodeRegex);
})

test("latitude test #1", () => {
    const latitudeRegex = /^[-]?[0-9]{1,2}.[0-9]{6}$/;
    expect(randomLatitude()).toMatch(latitudeRegex);
})

test("longitude test #1", () => {
    const longitudeRegex = /^[-]?[0-9]{1,3}.[0-9]{6}$/;
    expect(randomLongitude()).toMatch(longitudeRegex);
})

test("street test #1", () => {
    const streetRegex = /^[0-9]{1,3} [a-zA-Z]{1,20} [a-zA-Z]{1,20} [a-zA-Z]{1,20} St$/;
    expect(randomStreet()).toMatch(streetRegex);
})

test("address test #1", () => {
    expect(randomAddress({
        street: "123 Main Lorem Ipsum St",
        city: "New York",
        state: "Kerala",
        zip: "688888",
        country: "Estonia",
        latitude: "-19.98888",
        longitude: "6.98888",
    })).toEqual({
        address: "123 Main Lorem Ipsum St, New York, Kerala 688888, Estonia",
        street: "123 Main Lorem Ipsum St",
        city: "New York",
        state: "Kerala",
        zip: "688888",
        country: "Estonia",
        coordinates: {
            latitude: "-19.98888",
            longitude: "6.98888",
        }
    });
})