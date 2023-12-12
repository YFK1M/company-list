import s from './index.module.css';
import {getTableDataSelection, tableData} from "@components/CompanyTable/tableData.ts";
import React from "react";
import CompanyRow from "@components/CompanyRow";

export type CheckboxChangeHandler = (
	event: React.ChangeEvent<HTMLInputElement>,
	index: number
) => void

const CompanyTable = () => {
	
	const tableDataSelection = getTableDataSelection()
	
	const [activeCompanies, setActiveCompanies] = React.useState(tableDataSelection)
	
	const handleChangeCheckbox: CheckboxChangeHandler = React.useCallback(
		(event, index) => {
			setActiveCompanies((prevActiveCompanies) => ({
				...prevActiveCompanies,
				[index]: event.target.checked,
			}))
		}, []
	)
	
	const handleChangeAllCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
		const updatedActiveCompanies = Object.fromEntries(
			Object.keys(activeCompanies).map((key) => [key, event.target.checked])
		)
		setActiveCompanies(updatedActiveCompanies);
	}
	
	return (
		<div className={s.table}>
			<div className={s.table__header}>
				<h2>Компании:</h2>
				<div className={s.table__checkbox}>
					<input
						type="checkbox"
						id="selectAllCheckbox"
						onChange={handleChangeAllCheckboxes}
					/>
					<label htmlFor="selectAllCheckbox">
						{'Выделить всё'}
					</label>
				</div>
			</div>
			<div className={s.table__body}>
				{tableData.map((row, index) => (
					<CompanyRow
						key={row.title}
						row={row}
						index={index}
						handleChangeCheckbox={handleChangeCheckbox}
						checked={activeCompanies[index]}
					/>
				))}
			</div>
		</div>
	);
};

export default CompanyTable;