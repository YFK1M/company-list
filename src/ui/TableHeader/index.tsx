import s from "@/components/CompanyTable/index.module.css";
import React from "react";

interface TableHeaderProps {
	title: string,
	handleChangeAllCheckboxes: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableHeader = ({title, handleChangeAllCheckboxes}: TableHeaderProps) => {
  return (
	  <div className={s.table__header}>
		  <h2>{title}:</h2>
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
  )
}

export default TableHeader