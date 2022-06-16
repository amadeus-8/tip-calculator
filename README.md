# React Tip Calculator
This project was created using create-react-app script

## Overview
- Project uses **npm** package manager
- State manager is Redux Toolkit
- Husky pre-commit hook runs before commit, so it's necessary to check all eslint errors before commit
- Styling with SCSS preprocessor

## Getting Started
```
1. Clone repo to your working directory: 
   git clone https://github.com/amadeus-8/tip-calculator

2. Choose directory tip-calculator:
   cd tip-calculator

3. Install all project dependencies:
   npm install

4. Run project
   npm run start
```

## Scripts
- `npm run start` — start project in development mode
- `npm run build` — build project for production
- `npm run format` — reformat code and run prettier in all directories
- `npm run husky` — set up husky pre-commit scripts

## Code Style

### Example tsx component

```tsx
import React, { FC, ReactNode } from 'react'

import styles from './ExampleComponent.module.scss'

interface Props {
    children: ReactNode
    title: string
}

export const ExampleComponent: FC<Props> = ({ children, title }) => {
    return (
        <div className={styles.wrapper}>
            <div>{children}</div>
            <span className={styles.titleWrapper}>{title}</span>
        </div>
    )
}
```

### Example scss module

```scss
@import 'src/styles/mixins';
@import "src/styles/colors";

.wrapper {
    background: $strong-cyan;

    @include custom-min-width($xxl) {
        background: $very-dark-cyan
    }
}

.titleWrapper {
    color: $white;

    &:hover {
        color: $strong-cyan;
    }
}
```
