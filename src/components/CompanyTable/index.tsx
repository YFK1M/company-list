import s from './index.module.css'

const CompanyTable = () => {
  return (
		<div className={s.table}>
			<div className={s.table__header}>
				<h2>Компании:</h2>
				<input type="checkbox"/>
			</div>
		</div>
  )
}

export default CompanyTable