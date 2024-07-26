import css from './TransactionHistory.module.css'

export default function TransactionHistory({ transactions }) {
    return (
    <table className={css.table}>
        <thead>
            <tr className={css.tr}>
                <th className={css.theader}>Type</th>
                <th className={css.theader}>Amount</th>
                <th className={css.theader}>Currency</th>
            </tr>
        </thead>
            
            <tbody>
                {transactions.map(({type, amount, currency, id}) => (
                <tr className={css.transitions} key={id}>
                    <td className={css.tdata}>{type}</td>
                    <td className={css.tdata}>{amount}</td>
                    <td className={css.tdata}>{currency}</td>
                </tr>
                ))}
            </tbody>
        
    </table>
    )
}