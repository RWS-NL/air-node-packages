### Usage of the ToolTip component:

**Examples:**

```tsx
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Tooltip } from '@rws-air/webcomponents';

<Tooltip title='Tooltip Title' placement='right' enterDelay={50}>
  <IconButton tabIndex={-1} href=''>
    <InfoIcon />
  </IconButton>
</Tooltip>
```

```jsx
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Tooltip } from '@rws-air/webcomponents';

<Tooltip title='Tooltip Title' placement='right' enterDelay={50}>
  <IconButton tabIndex={-1} href=''>
    <InfoIcon />
  </IconButton>
</Tooltip>
```