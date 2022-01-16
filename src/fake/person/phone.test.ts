import randomPhoneNumber from "./phone";

test("phone test #1 random", () => {
    expect(randomPhoneNumber()).toMatch(/^\+1-\d{3}-\d{3}-\d{4}$/);
})