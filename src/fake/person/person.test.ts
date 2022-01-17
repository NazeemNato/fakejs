import {
randomName
} from "./person";

test("name test #1", () => {
    expect(randomName()).toEqual({
        firstName: expect.any(String),
        lastName: expect.any(String),
        gender: expect.any(String),

    })
})

test("name test #2 gender input 0", () => {
    expect(randomName(0)).toEqual({
        firstName: expect.any(String),
        lastName: expect.any(String),
        gender: "M",

    })
})

test("name test #2 gender input 1", () => {
    expect(randomName(1)).toEqual({
        firstName: expect.any(String),
        lastName: expect.any(String),
        gender: "F",

    })
})

test("name test #3 gender input 3", () => {
    expect(randomName(3)).toEqual({
        firstName: expect.any(String),
        lastName: expect.any(String),
        gender: expect.any(String),

    })
})