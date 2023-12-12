import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employeesTableData, EmployeesTableDataRow } from "@/components/EmployeesTable/tableDataRow.ts";

interface InitialStateData {
	employees: EmployeesTableDataRow[];
}

const initialState: InitialStateData = {
	employees: [],
};

export const companiesSlice = createSlice({
	name: "companies",
	initialState,
	reducers: {
		getEmployeesByCompanyId: (state, action: PayloadAction<number[]>) => {
			state.employees = employeesTableData.filter((employ) => action.payload.some((id) => employ.companyId === id))
		},
	},
});

export const { getEmployeesByCompanyId } = companiesSlice.actions;

export default companiesSlice.reducer;