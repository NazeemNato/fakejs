import { randomPerson } from "./person";

test("person test #1 random", () => {
    expect(randomPerson()).toEqual({
        id: expect.any(String),
        firstName: expect.any(String),
        image: expect.any(String),
        lastName: expect.any(String),
        phone: expect.any(String),
        email: expect.any(String),
        age: expect.any(Number),
        gender: expect.any(String),
        
    });
})