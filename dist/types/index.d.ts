import { StyleProp, TextStyle, ViewStyle } from "react-native";
export interface RadioButtonProps {
    label: string;
    value: string;
    activeValue: string;
    onChange: (newValue: string) => void;
    labelStyle?: StyleProp<TextStyle>;
    radioContainerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    color?: string;
    customDotSize?: number;
}
