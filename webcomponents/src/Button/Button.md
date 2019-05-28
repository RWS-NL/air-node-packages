

## Usage of the Button component:

**Example:**

```tsx
import React, { FC } from 'react'

import { Button } from '@rws-air/webcomponents'

const Example: FC = () => (
  <Button variant='contained' color='primary' label='button' onClick={() => console.log('void')} />
)
```

**Basic Button:**

```jsx
import { Button } from './Button';

<Button variant='contained' color='primary' label='Click Me!' onClick={() => console.log('you clicked the basic button!')} />
```

**Disabled Button:**

```jsx
<Button variant='contained' color='primary' label={'You can\'t click me'} disabled />
```

**Secondary Color button:**

```jsx
<Button
  variant='contained' color='secondary'label='I am secondary!'
  onClick={() => console.log('you clicked the secondary button!')} 
/>
```

**Outline Button:**

```jsx
<Button
  variant='outlined' color='primary'label='I am secondary!'
  onClick={() => console.log('you clicked the outlined button!')} 
/>
```