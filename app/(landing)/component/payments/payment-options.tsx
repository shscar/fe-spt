import { FiCreditCard } from "react-icons/fi"
import { CardWithHeader } from "../ui/card-with-header"

const Payment = [
    {
        bank_name: "BCA",
        account_number: 165426489,
        account_holder: "PT BCA"
    },
    {
        bank_name: "Mandiri",
        account_number: 23495161,
        account_holder: "PT Mandiri"
    },
    {
        bank_name: "BRI",
        account_number: 31451578754,
        account_holder: "PT BRI"
    }
]

export const PaymentOptions = () => {
    return (
        <CardWithHeader title="Payment Options">
            {Payment.map((payment, index) => (
                <div key={index} className="p-5 flex gap-5 border-b border-gray-100">
                    <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                        <FiCreditCard size={20} />
                    </div>
                    <div className="self-center">
                        <div className="font-bold">{payment.bank_name}</div>
                        <div className="font-sm">{payment.account_number}</div>
                        <div className="font-sm opacity-70">{payment.account_holder}</div>
                    </div>
                    <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">Bank Transfer</div>
                </div>
            ))}
        </CardWithHeader>
    )
}