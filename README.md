# rn-awesome-radio-button

A simple, customizable, and animated radio button component for React Native.

![Alt text](https://github.com/Dhia-Ben-Hamouda/rn-awesome-radio-button/blob/main/src/assets/preview.gif)

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
  const [value, setValue] = useState("male");

  return (
    <View style={{ padding: 20 }}>
      <RadioButton
        label="Male"
        value="male"
        activeValue={value}
        onChange={() => {
          setValue("male");
        }}
      />
      <RadioButton
        label="Female"
        value="female"
        activeValue={value}
        onChange={() => {
          setValue("female");
        }}
      />
    </View>
  );
}
```

---

## 🔧 Props

| Prop                  | Type                         | Default      | Description                                     |
| --------------------- | ---------------------------- | ------------ | ----------------------------------------------- |
| `label`               | `string`                     | `undefined`  | The label to display next to the radio button.  |
| `value`               | `string`                     | **required** | The value of this radio button.                 |
| `activeValue`         | `string`                     | **required** | The currently selected radio value.             |
| `onChange`            | `(newValue: string) => void` | **required** | Callback when the radio button is selected.     |
| `labelStyle`          | `StyleProp<TextStyle>`       | `undefined`  | Custom style for the label text.                |
| `radioContainerStyle` | `StyleProp<ViewStyle>`       | `undefined`  | Custom style for the outer radio circle.        |
| `containerStyle`      | `StyleProp<ViewStyle>`       | `undefined`  | Style for the wrapper container.                |
| `color`               | `string`                     | `#555`       | Color for the border and the filled dot.        |
| `customDotSize`       | `number`                     | `10`         | Diameter of the animated inner dot when active. |

---

## 📚 Contributing

Issues and pull requests are welcome! Please open an issue first to discuss major changes.

Made with ❤️ by Dhia Ben Hamouda
