import {TableDataSelection} from "@/types/tableDataSelection.ts";

export interface TableDataRow {
	id: number
	title: string
	employeesNumber: number
	address: string
}

export const companiesTableData: TableDataRow[] = [
	{
		id: 0,
		title: 'Компания 1',
		employeesNumber: 10,
		address: 'ул. Пушкина 1',
	},
	{
		id: 1,
		title: 'Компания 2',
		employeesNumber: 3,
		address: 'ул. Пушкина 2',
	},
	{
		id: 2,
		title: 'Компания 3',
		employeesNumber: 7,
		address: 'ул. Пушкина 3',
	},
	{
		id: 3,
		title: 'Компания 4',
		employeesNumber: 2,
		address: 'ул. Пушкина 4',
	},
]

export const getTableDataSelection = () => {
	const tableDataSelection: TableDataSelection = {};
	
	companiesTableData.forEach((row) => {
		tableDataSelection[row.id.toString()] = false;
	});
	
	return tableDataSelection
}