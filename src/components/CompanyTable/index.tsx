import s from './index.module.css';
import {getTableDataSelection, companiesTableData} from "@/components/CompanyTable/tableDataRow.ts";
import React from "react";
import CompanyRow from "@/components/CompanyRow";
import TableHeader from "@/ui/TableHeader";
import {CheckboxChangeHandler} from "@/types/checkboxChangeHandler.ts";
import {useDispatch} from "react-redux";
import {getEmployeesByCompanyId} from "@/store/mainReducer.ts";

const CompanyTable = () => {
	
	const tableDataSelection = getTableDataSelection()
	
	const [activeCompanies, setActiveCompanies] = React.useState(tableDataSelection)
	
	const dispatch = useDispatch()
	
	React.useEffect(() => {
		const companyIds =  Object.entries(activeCompanies)
			.filter(([_, value]) => value)
			.map(([key]) => Number(key))
		dispatch(getEmployeesByCompanyId(companyIds))
	}, [activeCompanies])
	
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
			<TableHeader
				title={'Компании'}
				handleChangeAllCheckboxes={handleChangeAllCheckboxes}
			/>
			<div className={s.table__body}>
				{companiesTableData.map((row) => (
					<CompanyRow
						key={row.id}
						row={row}
						index={row.id}
						handleChangeCheckbox={handleChangeCheckbox}
						checked={activeCompanies[row.id]}
					/>
				))}
			</div>
		</div>
	);
};

export default CompanyTable;