import s from '@/components/CompanyTable/index.module.css';
import TableHeader from "@/ui/TableHeader";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import EmployeesRow from "@/components/EmployeesRow";
import {getTableDataSelection} from "@/components/EmployeesTable/tableDataRow.ts";

export type CheckboxChangeHandler = (
	event: React.ChangeEvent<HTMLInputElement>,
	index: number
) => void

const EmployeesTable = () => {
	const employeesRows = useSelector((state: RootState) => state.companies.employees)
	const tableDataSelection = getTableDataSelection()
	
	const [activeEmployees, setActiveEmployees] = React.useState(tableDataSelection)
	
	const handleChangeCheckbox: CheckboxChangeHandler = React.useCallback(
		(event, index) => {
			setActiveEmployees((prevActiveEmployees) => ({
				...prevActiveEmployees,
				[index]: event.target.checked,
			}))
		}, []
	)
	
	const handleChangeAllCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
		const updatedActiveEmployees = Object.fromEntries(
			Object.keys(activeEmployees).map((key) => [key, event.target.checked])
		)
		setActiveEmployees(updatedActiveEmployees);
	}
	
	return (
		<div className={s.table}>
			<TableHeader
				title={'Сотрудники'}
				handleChangeAllCheckboxes={handleChangeAllCheckboxes}
			/>
			<div className={s.table__body}>
				{employeesRows.map((row) => (
					<EmployeesRow
						key={row.id}
						row={row}
						index={row.id}
						handleChangeCheckbox={handleChangeCheckbox}
						checked={activeEmployees[row.id]}
					/>
				))}
			</div>
		</div>
	);
};

export default EmployeesTable;