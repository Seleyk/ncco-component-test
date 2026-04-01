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
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "subtle", value: "#DEE3EF" },
        { name: "dark", value: "#142B35" },
      ],
    },
  },
};

export default preview;
