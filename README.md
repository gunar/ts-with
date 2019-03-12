# Installation
> `npm install --save @gunar/ts-with`

# Summary
This package contains type maps for enforcing the presence of otherwise optional fields.
See the [blog post](https://medium.com/@gunar/narrower-optional-fields-for-typescript-49fd68335601) about it.

## Example

```ts
interface User {
  name: string
  location?: string
}

const getTrimmedLocation = (u: User) => {
  if (u.location) return u.location.trim()
  else throw Error('User doesnt have a `location` field')
}

// this passes type check but shouldn't
getTrimmedLocation({ name: 'Gunar' }) 

const getTrimmedLocationSafe: (u: With<User, 'location') =>
  u.location.trim()

// This does not pass type check, woohoo!
getTrimmedLocationSafe({ user: 'Gunar' })
```
