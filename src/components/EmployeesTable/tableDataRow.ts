import {TableDataSelection} from "@/types/tableDataSelection.ts";

export interface EmployeesTableDataRow {
	id: number
	name: string
	surName: string
	position: string
	companyId: number
}

export const employeesTableData: EmployeesTableDataRow[] = [
	{
		id: 0,
		name: 'Александр',
		surName: 'Петров',
		position: 'DevOps',
		companyId: 0,
	},
	{
		id: 1,
		name: 'Иван',
		surName: 'Смирнов',
		position: 'Frontend Developer',
		companyId: 1,
	},
	{
		id: 2,
		name: 'Екатерина',
		surName: 'Иванова',
		position: 'Backend Developer',
		companyId: 2,
	},
	{
		id: 3,
		name: 'Анна',
		surName: 'Кузнецова',
		position: 'UI/UX Designer',
		companyId: 3,
	},
	{
		id: 4,
		name: 'Михаил',
		surName: 'Соловьев',
		position: 'Data Scientist',
		companyId: 0,
	},
	{
		id: 5,
		name: 'Ольга',
		surName: 'Федорова',
		position: 'Project Manager',
		companyId: 1,
	},
	{
		id: 6,
		name: 'Артем',
		surName: 'Козлов',
		position: 'QA Engineer',
		companyId: 2,
	},
	{
		id: 7,
		name: 'Виктория',
		surName: 'Морозова',
		position: 'Full Stack Developer',
		companyId: 3,
	},
	{
		id: 8,
		name: 'Денис',
		surName: 'Сергеев',
		position: 'Business Analyst',
		companyId: 0,
	},
	{
		id: 9,
		name: 'Татьяна',
		surName: 'Павлова',
		position: 'System Administrator',
		companyId: 1,
	},
	{
		id: 10,
		name: 'Егор',
		surName: 'Макаров',
		position: 'Marketing Specialist',
		companyId: 2,
	},
	{
		id: 11,
		name: 'Ангелина',
		surName: 'Никитина',
		position: 'Sales Manager',
		companyId: 3,
	},
	{
		id: 12,
		name: 'Сергей',
		surName: 'Лебедев',
		position: 'HR Specialist',
		companyId: 0,
	},
	{
		id: 13,
		name: 'Наталья',
		surName: 'Андреева',
		position: 'Customer Support',
		companyId: 1,
	},
	{
		id: 14,
		name: 'Роман',
		surName: 'Беляков',
		position: 'Financial Analyst',
		companyId: 2,
	},
	{
		id: 15,
		name: 'Юлия',
		surName: 'Тимофеева',
		position: 'Content Writer',
		companyId: 3,
	},
	{
		id: 16,
		name: 'Павел',
		surName: 'Карпов',
		position: 'DevOps Engineer',
		companyId: 0,
	},
	{
		id: 17,
		name: 'Алина',
		surName: 'Захарова',
		position: 'Frontend Developer',
		companyId: 1
	},
	{
		id: 18,
		name: 'Глеб',
		surName: 'Степанов',
		position: 'UX Designer',
		companyId: 2,
	},
	{
		id: 19,
		name: 'Анастасия',
		surName: 'Григорьева',
		position: 'Software Engineer',
		companyId: 3,
	},
];

export const getTableDataSelection = () => {
	const tableDataSelection: TableDataSelection = {};
	
	employeesTableData.forEach((value) => {
		tableDataSelection[value.id.toString()] = false;
	});
	
	return tableDataSelection
}