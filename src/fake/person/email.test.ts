import {randomEmail} from './email';

test('email test #1 input', () => {
    expect(randomEmail({
        firstName: 'John',
        lastName: 'Doe',
        provider: 'gmail',
        extension: 'com'
    })).toBe('john.doe@gmail.com');
})

test('email test #2 random email', () => {
    expect(randomEmail({})).toMatch(/^[a-z]+\.?[a-z]+@[a-z]+\.?[a-z]+\.?[a-z]+$/);
})

test('email test #2 random email with provider and extension', () => {
    expect(randomEmail({
        provider:"buckthorn",
        extension:"com"
    })).toMatch(/^[a-z]+\.?[a-z]+@buckthorn+\.?com+$/);
})
