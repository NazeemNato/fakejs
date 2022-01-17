import { randomPhoneNumber } from "./phone";

test("phone test #1 random", () => {
    const phoneRegex = /^\+1-[0-9]{3}-[0-9]{3}-[0-9]{3,4}$/;
    expect(randomPhoneNumber()).toMatch(phoneRegex);
})