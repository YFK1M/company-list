import s from "@components/CompanyTable/index.module.css";
import {TableData} from "@components/CompanyTable/tableData.ts";
import {CheckboxChangeHandler} from "@components/CompanyTable";
import React from "react";

interface CompanyRow {
	row: TableData
	index: number
	handleChangeCheckbox: CheckboxChangeHandler
	checked: boolean
}

const CompanyRow = ({
  row,
  index,
  handleChangeCheckbox,
	checked
}: CompanyRow) => {
	
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
				<p>{row.title}</p>
			</div>
			<div className={s.table__cell}>
				<p>{row.employeesNumber}</p>
			</div>
			<div className={s.table__cell}>
				<p>{row.address}</p>
			</div>
		</div>
	)
}

export default React.memo(CompanyRow)