import s from './index.module.css'
import CompanyTable from "@/components/CompanyTable";
import EmployeesTable from "@/components/EmployeesTable";

const App = () => {
  
  return (
    <main className={s.main}>
      <CompanyTable />
      <EmployeesTable/>
    </main>
  )
}

export default App
