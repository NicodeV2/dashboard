"use client"

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "Ene", desktop: 400, mobile: 240 },
  { month: "Feb", desktop: 300, mobile: 139 },
  { month: "Mar", desktop: 200, mobile: 980 },
  { month: "Abr", desktop: 278, mobile: 390 },
  { month: "May", desktop: 189, mobile: 480 },
  { month: "Jun", desktop: 239, mobile: 380 },
]

// Configuración del tema y colores personalizados
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "oklch(0.65 0.22 270)", // Violeta intenso
  },
  mobile: {
    label: "Mobile",
    color: "oklch(0.828 0.189 84.429)", // Verde agua
  },
} satisfies ChartConfig

export function DemoBarraChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[260px] w-full max-w-md"
    >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          stroke="hsl(var(--muted-foreground))"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="hsl(var(--muted-foreground))"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
