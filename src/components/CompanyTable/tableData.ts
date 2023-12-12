export interface TableData {
	title: string
	employeesNumber: number
	address: string
}

export const tableData: TableData[] = [
	{
		title: 'Компания 1',
		employeesNumber: 10,
		address: 'ул. Пушкина 1',
	},
	{
		title: 'Компания 2',
		employeesNumber: 3,
		address: 'ул. Пушкина 2',
	},
	{
		title: 'Компания 3',
		employeesNumber: 7,
		address: 'ул. Пушкина 3',
	},
	{
		title: 'Компания 4',
		employeesNumber: 2,
		address: 'ул. Пушкина 4',
	},
	{
		title: 'Компания 5',
		employeesNumber: 6,
		address: 'ул. Пушкина 5',
	},
]

export type TableDataSelection = { [key: string]: boolean }

export const getTableDataSelection = () => {
	const tableDataSelection: TableDataSelection = {};
	
	tableData.forEach((_, index) => {
		tableDataSelection[index.toString()] = false;
	});
	
	return tableDataSelection
}