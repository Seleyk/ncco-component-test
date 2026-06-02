import type { Meta, StoryObj } from '@storybook/react-vite'
import { Users, MapPin, Mail, Shield } from 'lucide-react'
import { MetricCard } from './metric-card'

const meta = {
  title: 'UI/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  args: {
    title: 'Active Users',
    value: 5329,
    activePercent: 75,
    inactivePercent: 25,
  },
} satisfies Meta<typeof MetricCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'sm' },
}

export const WithIcon: Story = {
  args: {
    icon: <Users className="h-4 w-4" />,
  },
}

export const WithPositiveTrend: Story = {
  args: {
    icon: <Users className="h-4 w-4" />,
    trend: { value: '+10% from last month', direction: 'positive' },
  },
}

export const WithNegativeTrend: Story = {
  args: {
    icon: <Shield className="h-4 w-4" />,
    title: 'Active Licenses',
    value: 8,
    activePercent: 75,
    inactivePercent: 25,
    trend: { value: '3 expiring soon', direction: 'negative' },
  },
}

export const WithNeutralTrend: Story = {
  args: {
    icon: <MapPin className="h-4 w-4" />,
    title: 'Active Locations',
    value: 34,
    trend: { value: 'No change', direction: 'neutral' },
  },
}

export const DashboardRow: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 w-full min-w-350 p-4 h-fit overflow-x-auto">
      <MetricCard
        title="Active Users"
        value={5329}
        activePercent={75}
        inactivePercent={25}
        icon={<Users className="h-4 w-4" />}
        trend={{ value: '+10% from last month', direction: 'positive' }}
      />
      <MetricCard
        title="Active Locations"
        value={34}
        activePercent={84}
        inactivePercent={16}
        icon={<MapPin className="h-4 w-4" />}
        trend={{ value: 'No change', direction: 'neutral' }}
      />
      <MetricCard
        title="Pending Invitations"
        value={16}
        activePercent={75}
        inactivePercent={25}
        icon={<Mail className="h-4 w-4" />}
        trend={{ value: '4 expired', direction: 'negative' }}
      />
      <MetricCard
        title="Active Licenses"
        value={8}
        activePercent={75}
        inactivePercent={25}
        activeLabel="Active 75%"
        inactiveLabel="Expiring 25%"
        icon={<Shield className="h-4 w-4" />}
        trend={{ value: '3 expiring soon', direction: 'negative' }}
      />
    </div>
  ),
}