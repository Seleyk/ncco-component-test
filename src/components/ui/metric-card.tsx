import * as React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle } from './card'
import { ChartContainer } from './chart'
import type { ChartConfig } from './chart'
import { cn } from '@/lib/utils'

export interface MetricCardTrend {
  value: string
  direction: 'positive' | 'negative' | 'neutral'
}

export interface MetricCardProps {
  title: string
  value: string | number
  activePercent: number
  inactivePercent: number
  activeLabel?: string
  inactiveLabel?: string
  trend?: MetricCardTrend
  icon?: React.ReactNode
  size?: 'default' | 'sm'
  className?: string
}

export function MetricCard({
  title,
  value,
  activePercent,
  inactivePercent,
  activeLabel,
  inactiveLabel,
  trend,
  icon,
  size = 'default',
  className,
}: MetricCardProps) {
  const donutData = [
    { status: 'active', value: activePercent },
    { status: 'inactive', value: inactivePercent },
  ]

  const chartConfig = {
    active: {
      label: activeLabel ?? `Active ${activePercent}%`,
      color: 'var(--ncco-colors-primary-light)',
    },
    inactive: {
      label: inactiveLabel ?? `Inactive ${inactivePercent}%`,
      color: 'var(--ncco-colors-muted-foreground-light)',
    },
  } satisfies ChartConfig

  const donutFills = {
    active: 'var(--ncco-colors-primary-light)',
    inactive: 'var(--ncco-colors-muted-light)',
  }

  const isSmall = size === 'sm'

  return (
    <Card size={size} className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className={isSmall ? 'text-xs' : 'text-sm'}>
          {title}
        </CardTitle>
        {icon && (
          <div className="col-start-2 row-start-1 self-start justify-self-end text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          {/* Donut */}
          <ChartContainer
            config={chartConfig}
            className={isSmall ? 'h-10 w-10' : 'h-14 w-14'}
          >
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={isSmall ? 12 : 18}
                outerRadius={isSmall ? 18 : 26}
                dataKey="value"
                strokeWidth={0}
              >
                {donutData.map((entry) => (
                  <Cell
                    key={entry.status}
                    fill={donutFills[entry.status as keyof typeof donutFills]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>

          {/* Stats */}
          <div className="flex flex-col gap-1">
            <span className={cn('font-bold leading-none', isSmall ? 'text-xl' : 'text-2xl')}>
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
            {/* Legend */}
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {donutData.map((entry) => (
                <div key={entry.status} className="flex items-center gap-1">
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: donutFills[entry.status as keyof typeof donutFills] }}
                  />
                  <span>{chartConfig[entry.status as keyof typeof chartConfig].label}</span>
                </div>
              ))}
            </div>
            {/* Trend */}
            {trend && (
              <div className={cn(
                'flex items-center gap-1 text-xs',
                trend.direction === 'positive' && 'text-primary',
                trend.direction === 'negative' && 'text-destructive',
                trend.direction === 'neutral' && 'text-muted-foreground',
              )}>
                {trend.direction === 'positive' && <TrendingUp className="h-3 w-3" />}
                {trend.direction === 'negative' && <TrendingDown className="h-3 w-3" />}
                <span>{trend.value}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}