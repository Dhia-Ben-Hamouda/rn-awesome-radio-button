# rn-awesome-radio-button

A simple, customizable, and animated radio button component for React Native.

## ✨ Features

- Smooth animation using Reanimated
- Fully customizable size, color, label, and style
- Lightweight and accessible

## 📦 Installation

```bash
npm install rn-awesome-radio-button
# or
yarn add rn-awesome-radio-button
```

Then install and setup the required peer dependencies:

```bash
npm install react-native-reanimated
```

---

## 🚀 Usage

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import RadioButton from "rn-awesome-radio-button";

export default function App() {
  const [selected, setSelected] = useState("option1");

  return (
    <View style={{ padding: 20 }}>
      <RadioButton
        label="Option 1"
        value="option1"
        activeValue={selected}
        onChange={setSelected}
      />
      <RadioButton
        label="Option 2"
        value="option2"
        activeValue={selected}
        onChange={setSelected}
        color="blue"
        customDotSize={12}
      />
    </View>
  );
}
```

---

## 🔧 Props

| Prop                  | Type                         | Default     | Description                                     |
| --------------------- | ---------------------------- | ----------- | ----------------------------------------------- |
| `label`               | `string`                     | `undefined` | The label to display next to the radio button.  |
| `value`               | `string`                     | `undefined` | The value of this radio button.                 |
| `activeValue`         | `string`                     | `undefined` | The currently selected radio value.             |
| `onChange`            | `(newValue: string) => void` | `undefined` | Callback when the radio button is selected.     |
| `labelStyle`          | `StyleProp<TextStyle>`       | `undefined` | Custom style for the label text.                |
| `radioContainerStyle` | `StyleProp<ViewStyle>`       | `undefined` | Custom style for the outer radio circle.        |
| `containerStyle`      | `StyleProp<ViewStyle>`       | `undefined` | Style for the wrapper container.                |
| `color`               | `string`                     | `#555`      | Color for the border and the filled dot.        |
| `customDotSize`       | `number`                     | `10`        | Diameter of the animated inner dot when active. |

---

## 📚 Contributing

Issues and pull requests are welcome! Please open an issue first to discuss major changes.

Made with ❤️ by Dhia Ben Hamouda
