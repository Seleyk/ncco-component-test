import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'The visual style of the button'
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'xs', 'icon', 'icon-sm', 'icon-xs', 'icon-lg'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element using Radix Slot'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive'
  }
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}