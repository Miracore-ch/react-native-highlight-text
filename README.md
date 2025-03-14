# React Native Highlight Text

[![npm version](https://img.shields.io/npm/v/@miracore-ch/react-native-highlight-text.svg)](https://www.npmjs.com/package/@miracore-ch/react-native-highlight-text)
[![license](https://img.shields.io/npm/l/@miracore-ch/react-native-highlight-text.svg)](https://www.npmjs.com/package/@miracore-ch/react-native-highlight-text)

A simple and efficient cross-platform component for highlighting parts of text that match a search query.

## 🌟 Features

- ✅ Works on **iOS**, **Android**, and **Web** platforms
- ✅ Special character handling
- ✅ Simple and intuitive API
- ✅ Full TypeScript support
- ✅ Customizable styling for both normal and highlighted text
- ✅ Lightweight with no external dependencies

## 📦 Installation

```bash
# Using npm
npm install @miracore-ch/react-native-highlight-text

# Using yarn
yarn add @miracore-ch/react-native-highlight-text

# Using pnpm
pnpm add @miracore-ch/react-native-highlight-text
```

## 🚀 Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { HighlightText } from '@miracore-ch/react-native-highlight-text';

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

## 🎮 Platform Support

| Platform | Support |
|----------|---------|
| iOS      | ✅      |
| Android  | ✅      |
| Web      | ✅      |

## 📋 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text content to display and search within |
| `queryString` | string | Yes | - | The string to search for and highlight |
| `style` | TextStyle | No | `{}` | Base style for the text |
| `highlightStyle` | TextStyle | No | `{backgroundColor: 'yellow'}` | Style applied to the highlighted portions of text |
## 🔍 Advanced Example

```tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { HighlightText } from '@miracore-ch/react-native-highlight-text';

const AdvancedSearchExample = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const longText = "React Native Highlight Text helps you create better search experiences for your users. It works seamlessly across all platforms including iOS, Android, and Web.";

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search in text..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <HighlightText
        text={longText}
        queryString={searchQuery}
        style={styles.text}
        highlightStyle={styles.highlight}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  highlight: {
    backgroundColor: '#FFDE7D',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AdvancedSearchExample;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT