import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'react-native-elements';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import Navigator from './src/Navigator';

import store from './src/redux-modules/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
	...DefaultTheme,
};

// Theme shape
/* Object {
  "animation": Object {
    "scale": 1,
  },
  "colors": Object {
    "accent": "#03dac4",
    "backdrop": "rgba(0, 0, 0, 0.5)",
    "background": "#f6f6f6",
    "disabled": "rgba(0, 0, 0, 0.26)",
    "error": "#B00020",
    "notification": "#f50057",
    "onBackground": "#000000",
    "onSurface": "#000000",
    "placeholder": "rgba(0, 0, 0, 0.54)",
    "primary": "#6200ee",
    "surface": "#ffffff",
    "text": "#000000",
  },
  "dark": false,
  "fonts": Object {
    "light": Object {
      "fontFamily": "System",
      "fontWeight": "300",
    },
    "medium": Object {
      "fontFamily": "System",
      "fontWeight": "500",
    },
    "regular": Object {
      "fontFamily": "System",
      "fontWeight": "400",
    },
    "thin": Object {
      "fontFamily": "System",
      "fontWeight": "100",
    },
  },
  "roundness": 4,
} */

const lightTheme = {
	dark: false,
	animation: {
		scale: 1,
	},
	roundness: 5,
	colors: {
		accent: "#d1d1d1",
		backdrop: "#cccccc",
		background: "bfbfbf",
		text: "black",
		primary: "#f5f5f5",
		disabled: "#cccccc",
		placeholder: "#d1d1d1",
		surface: "#ffffff",
		error: "#B00020",
		notification: "#f50057",
		onBackground: "#000000",
		onSurface: "#000000",
	},
	fonts: {
		light: {
			fontFamily: "System",
			fontWeight: "bold",
		},
		medium: {
			fontFamily: "System",
			fontWeight: "bold",
		},
		regular: {
			fontFamily: "System",
			fontWeight: "bold",
		},
		thin: {
			fontFamily: "System",
			fontWeight: "bold",
		},
	},
};

export default function App() {
	console.log(theme);
	return (
		<PaperProvider theme={lightTheme}>
			<ThemeProvider>
				<SafeAreaProvider>
					<Provider store={store}>
						<NavigationContainer>
							<Navigator />
						</NavigationContainer>
					</Provider>
				</SafeAreaProvider>
			</ThemeProvider>
		</PaperProvider>
	);
}
