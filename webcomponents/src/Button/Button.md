## Usage of the Button component:

**Example:**

```tsx
import React, { FC } from 'react'

import { Button } from '@rws-air/webcomponents'

const Example: FC = () => (
  <Button variant='contained' color='primary' label='button' onClick={() => console.log('void')} />
)
```

**Primary Button:**

```jsx
import { Button } from '@rws-air/webcomponents';

<Button variant='contained' color='primary' label='I am primary!' onClick={() => console.log('you clicked the basic button!')} />
```

**Disabled Button:**

```jsx
import { Button } from '@rws-air/webcomponents';

<Button variant='contained' color='primary' label='I am disabled!' disabled />
```

**Secondary Color button:**

```jsx
import { Button } from '@rws-air/webcomponents';

<Button
  variant='contained' color='secondary' label='I am secondary!'
  onClick={() => console.log('you clicked the secondary button!')} 
/>
```

**Outline Button:**

```jsx
import { Button } from '@rws-air/webcomponents';

<Button
  variant='outlined' color='primary' label='I am outlined!'
  onClick={() => console.log('you clicked the outlined button!')} 
/>
```