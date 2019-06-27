### Usage of the SearchBar component:

**Examples:**

```tsx
import React from 'react'; 
import { SearchBar } from '@rws-air/webcomponents'; 

<SearchBar
  data-qa='table-search-bar'
  placeholder={ `Search...` }
  onChange={() => console.log('changed!')}
  onCancelSearch={() => console.log('Canceled Search!')}
/>
```

```jsx
import React from 'react'; 
import { SearchBar } from '@rws-air/webcomponents'; 

<SearchBar
  data-qa='table-search-bar'
  placeholder={ `Search...` }
  onChange={() => console.log('changed!')}
  onCancelSearch={() => console.log('Canceled Search!')}
/>
```

**Customizations**

```jsx
import React from 'react'; 
import { SearchBar } from '@rws-air/webcomponents'; 

<SearchBar
  data-qa='table-search-bar'
  placeholder={ `Search...` }
  onChange={() => console.log('changed!')}
  onCancelSearch={() => console.log('Canceled Search!')}
  paperElevation={5}
/>
```