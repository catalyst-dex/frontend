"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Area, AreaChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import TopTokenTable from "@/components/TopTokenTable";
import TopPoolTable from "@/components/TopPoolTable";
import Footer from "@/components/Footer";
const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

function VolumeChart() {
	return (
		<Card className='bg-[#060606] border border-[#b23b4b5c] text-gray-400'>
			<CardHeader>
				<CardTitle>Bar Chart - Multiple</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}>
						<CartesianGrid
							horizontal={true}
							vertical={true}
							stroke='#808080c4'
							strokeOpacity={0.3}
						/>
						<XAxis
							dataKey='month'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='dashed' />}
						/>
						<Bar
							dataKey='desktop'
							fill='var(--color-desktop)'
							radius={4}
						/>
						<Bar
							dataKey='mobile'
							fill='var(--color-mobile)'
							radius={4}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'>
				<div className='flex gap-2 font-medium leading-none'>
					Trending up by 5.2% this month{" "}
					<TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}

const liquidityChartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const liquidityChartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

function LiquidityChart() {
	return (
		<Card className='bg-[#060606] border border-[#b23b4b5c] text-gray-400'>
			<CardHeader>
				<CardTitle>Area Chart - Gradient</CardTitle>
				<CardDescription>
					Showing total visitors for the last 6 months
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={liquidityChartConfig}>
					<AreaChart
						accessibilityLayer
						data={liquidityChartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid
							horizontal={true}
							vertical={true}
							stroke='#808080c4'
							strokeOpacity={0.3}
						/>
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent />}
						/>
						<defs>
							<linearGradient
								id='fillDesktop'
								x1='0'
								y1='0'
								x2='0'
								y2='1'>
								<stop
									offset='5%'
									stopColor='var(--color-desktop)'
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor='var(--color-desktop)'
									stopOpacity={0.1}
								/>
							</linearGradient>
							<linearGradient
								id='fillMobile'
								x1='0'
								y1='0'
								x2='0'
								y2='1'>
								<stop
									offset='5%'
									stopColor='var(--color-mobile)'
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor='var(--color-mobile)'
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<Area
							dataKey='mobile'
							type='natural'
							fill='url(#fillMobile)'
							fillOpacity={0.4}
							stroke='var(--color-mobile)'
							stackId='a'
						/>
						<Area
							dataKey='desktop'
							type='natural'
							fill='url(#fillDesktop)'
							fillOpacity={0.4}
							stroke='var(--color-desktop)'
							stackId='a'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className='flex w-full items-start gap-2 text-sm'>
					<div className='grid gap-2'>
						<div className='flex items-center gap-2 font-medium leading-none'>
							Trending up by 5.2% this month{" "}
							<TrendingUp className='h-4 w-4' />
						</div>
						<div className='flex items-center gap-2 leading-none text-muted-foreground'>
							January - June 2024
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}

export default function Statistics() {
	return (
		<div>
			<div className='grid grid-cols-2 gap-12 items-center mt-12'>
				<VolumeChart />
				<LiquidityChart />
			</div>

			<TopTokenTable />
			<TopPoolTable />
			<Footer className='py-10' />
		</div>
	);
}
