import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table'
import { Badge } from './badge'

const meta = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>Inactive</TableCell>
          <TableCell>Viewer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Subscription</TableHead>
          <TableHead>Locations</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>DCG Pro - Basic</TableCell>
          <TableCell>12</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>DCG Starter</TableCell>
          <TableCell>8</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>20</TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const DevicesTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Device Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: 'Device A', type: 'SaaS', status: 'Offline', location: 'Chicago' },
          { name: 'Device B', type: 'Physical', status: 'Active', location: 'New York' },
          { name: 'Device C', type: 'SaaS', status: 'Active', location: 'Dallas' },
          { name: 'Device D', type: 'SaaS', status: 'Offline', location: 'Miami' },
          { name: 'Device E', type: 'SaaS', status: 'Active', location: 'Seattle' },
        ].map((device) => (
          <TableRow key={device.name}>
            <TableCell>{device.name}</TableCell>
            <TableCell>{device.type}</TableCell>
            <TableCell>
              <Badge variant={device.status === 'Offline' ? 'destructive' : 'default'}>
                {device.status}
              </Badge>
            </TableCell>
            <TableCell>{device.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const AgreementsTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agreement</TableHead>
          <TableHead>Recipient</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { agreement: 'DCS Share', recipient: 'jjordan@quiktri...', status: 'Waiting Approval' },
          { agreement: 'DCS Share', recipient: 'Sonic', status: 'Accepted' },
          { agreement: 'Menu Q2 Share', recipient: 'Circle K', status: 'Accepted' },
          { agreement: 'Franchise Bundle', recipient: '7-Eleven', status: 'Denied' },
        ].map((row, i) => (
          <TableRow key={i}>
            <TableCell>{row.agreement}</TableCell>
            <TableCell>{row.recipient}</TableCell>
            <TableCell>
              <Badge
                variant={
                  row.status === 'Denied' ? 'destructive'
                  : row.status === 'Accepted' ? 'default'
                  : 'secondary'
                }
              >
                {row.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}