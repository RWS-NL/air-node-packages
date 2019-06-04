# Usage of the ActionBar component:

**Examples:**

```tsx
import React, { FC } from 'react';

import { ActionBar } from '@rws-air/webcomponents';

<ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
```

```tsx
import React, { FC } from 'react';

import { ActionBar } from '@rws-air/webcomponents';

<ActionBar title='ActionBar Title' />
```

**AcionBar with button:**

```jsx
import { ActionBar } from '@rws-air/webcomponents';

<ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
```

**ActionBar without button:**

```jsx
import { ActionBar } from '@rws-air/webcomponents';

<ActionBar title='ActionBar Title' />
```