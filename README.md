# React Native Highlight Text

A simple and efficient React Native component for highlighting parts of text that match a search query.

## Installation

```bash
npm install @miracore-ch/react-native-highlight-text
# or
yarn add @miracore-ch/react-native-highlight-text
```

## Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { HighlightText } from 'react-native-highlight-text';

const SearchExample = () => {
  return (
    <View style={{ padding: 20 }}>
      <HighlightText
        text="This is a sample text to demonstrate the highlight functionality."
        queryString="sample"
        style={{ fontSize: 16 }}
        highlightStyle={{ backgroundColor: 'yellow', fontWeight: 'bold' }}
      />
    </View>
  );
};

export default SearchExample;
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | The text content to display and search within |
| queryString | string | Yes | The string to search for and highlight |
| style | TextStyle | No | Base style for the text |
| highlightStyle | TextStyle | No | Style applied to the highlighted portions of text |

## Features

- Case-insensitive highlighting
- Special character handling
- Simple API
- TypeScript support
- Customizable styling for both normal and highlighted text

## License

MIT
