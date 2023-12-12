import s from "@/components/CompanyTable/index.module.css";
import {CheckboxChangeHandler} from "@/types/checkboxChangeHandler.ts";
import React from "react";
import {EmployeesTableDataRow} from "@/components/EmployeesTable/tableDataRow.ts";

interface EmployeesRowProps {
	row: EmployeesTableDataRow
	index: number
	handleChangeCheckbox: CheckboxChangeHandler
	checked: boolean
}

const EmployeesRow = ({
  row,
  index,
  handleChangeCheckbox,
  checked
}: EmployeesRowProps) => {
	
	return (
		<div className={`${s.table__row} ${checked ? s.table__row_selected : ''}`}>
			<div className={`${s.table__cell} ${s.table__checkbox}`}>
				<input
					type="checkbox"
					id={`selectCheckbox_${index}`}
					onChange={(event) => handleChangeCheckbox(event, index)}
					checked={checked}
				/>
				<label htmlFor={`selectCheckbox_${index}`}>
					{'Выделить'}
				</label>
			</div>
			<div className={s.table__cell}>
				<p>{row.name}</p>
			</div>
			<div className={s.table__cell}>
				<p>{row.surName}</p>
			</div>
			<div className={s.table__cell}>
				<p>{row.position}</p>
			</div>
		</div>
	)
}

export default React.memo(EmployeesRow)