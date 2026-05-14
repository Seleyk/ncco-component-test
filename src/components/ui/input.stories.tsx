import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    defaultValue: "Filled value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Placeholder",
  },
};

export const PasswordFilled: Story = {
  args: {
    type: "password",
    defaultValue: "secretpassword",
  },
};

export const File: Story = {
  args: {
    type: "file",
    placeholder: undefined,
  },
};

export const FileInvalid: Story = {
  args: {
    type: "file",
    "aria-invalid": true,
  },
};

export const FileDisabled: Story = {
  args: {
    type: "file",
    disabled: true,
  },
};
