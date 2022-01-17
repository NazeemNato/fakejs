# FakeJS

![npm bundle size](https://img.shields.io/bundlephobia/min/@n4ze3m/fakejs)

Random data generator for JavaScript.

# Installation

using npm:

    npm install @n4ze3m/fakejs

using yarn:

    yarn add @n4ze3m/fakejs

## Supported fake data types

* `person`: Generates a random 
personal data.
   - randomName()
   - randomPerson()
   - randomEmail()
   - randomPhone()
   - randomAddress()
   - randomStreet()
   - randomCity()
   - randomCountry()
   - randomState()
   - randomZip()
   - randomLatitude()
   - randomLongitude()

# Usage

- Javascript

```javascript
const fakejs = require("@n4ze3m/fakejs");

const person = fakejs.person.randomePerson();
console.log(person);
```

output:

```javascript
{
      id: "5edadsdklj3dsdskjd2dsmkk",
      firstName: "John",
      image: "https://picsum.photos/500/500",
      lastName: "Doe",
      age: 25,
      gender: "M",
      phone: "+1-123-456-7890",
      email: "john.doe@yahoo.com",
      address: {
       address: "123 Main Lorem Ipsum St, Alappuzha, Kerala, 688888, Estonia",
       street: "123 Main Lorem Ipsum St",
       city: "New York",
       state: "Kerala",
       zip: "688888",
       country: "Estonia",
       coordinates: {
           latitude: "-19.98888",
           longitude: "6.98888"
       }
      }
}
```

## Data Credit

- `name` data from faker@5.5.3

- `address` data from [gofakeit](https://github.com/brianvoe/gofakeit)

# Contributing

Please feel free to open an issue or create a pull request.

