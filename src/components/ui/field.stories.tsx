import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from './field'

const meta = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="default">Email</FieldLabel>
      <Input id="default" placeholder="you@example.com" />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="with-desc">Email</FieldLabel>
      <Input id="with-desc" placeholder="you@example.com" />
      <FieldDescription>We'll never share your email with anyone.</FieldDescription>
    </Field>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="invalid">Email</FieldLabel>
      <Input id="invalid" placeholder="you@example.com" aria-invalid />
      <FieldError>This field is required.</FieldError>
    </Field>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field data-disabled="true">
      <FieldLabel htmlFor="disabled">Email</FieldLabel>
      <Input id="disabled" placeholder="you@example.com" disabled />
    </Field>
  ),
}

export const Password: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" placeholder="••••••••" />
      <FieldDescription>Must be at least 8 characters.</FieldDescription>
    </Field>
  ),
}

export const File: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="file">Attachment</FieldLabel>
      <Input id="file" type="file" />
      <FieldDescription>Accepted formats: .csv, .xlsx</FieldDescription>
    </Field>
  ),
}

export const FileInvalid: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="file-invalid">Attachment</FieldLabel>
      <Input id="file-invalid" type="file" aria-invalid />
      <FieldError>File type not supported.</FieldError>
    </Field>
  ),
}

export const Group: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="first">First Name</FieldLabel>
        <Input id="first" placeholder="James" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last">Last Name</FieldLabel>
        <Input id="last" placeholder="John" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email-group">Email</FieldLabel>
        <Input id="email-group" placeholder="jjohn@ncco.com" />
      </Field>
    </FieldGroup>
  ),
}