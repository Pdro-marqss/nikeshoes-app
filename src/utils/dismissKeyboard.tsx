import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ReactNode } from 'react';

interface DismissKeyboardProps {
   children: ReactNode;
}

export const DismissKeyboard = ({ children }: DismissKeyboardProps) => (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
   </TouchableWithoutFeedback>
)