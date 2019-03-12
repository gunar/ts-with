# Installation
```
npm install --save @gunar/ts-with
```

# Summary
This package contains type maps for enforcing the presence of otherwise optional fields.

See the [blog post](https://medium.com/@gunar/narrower-optional-fields-for-typescript-49fd68335601) for more context.

## Example

```ts
interface User {
  name: string
  location?: string
}

// This passes type check but shouldn't ---------------------
const getTrimmedLocation = (u: User) => {
  if (u.location) return u.location.trim()
  else throw Error('User doesnt have a `location` field')
}

getTrimmedLocation({ name: 'Gunar' }) 

// This DOESN'T pass type check, as expected! ---------------
import { With } from '@gunar/ts-with'

const getTrimmedLocationSafe: (u: With<User, 'location') =>
  u.location.trim()

getTrimmedLocationSafe({ user: 'Gunar' })
```
