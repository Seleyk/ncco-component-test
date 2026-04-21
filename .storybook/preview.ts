import '/src/index.css';
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "#ffffff" },
        subtle: { name: "subtle", value: "#DEE3EF" },
        dark: { name: "dark", value: "#142B35" }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;
