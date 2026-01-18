import { CardWithHeader } from "../ui/card-with-header"

export const OrderInformation = () => {
    return (
        // <div className="bg-white">
        //     <div className="px-5 py-4 border-b border-gray-200">
        //         <h2 className="font-bold text-lg">Order Information</h2>
        //     </div>
        // </div>
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="Type for you full name" id="full_name" />
                </div>
                <div className="input-group">
                    <label htmlFor="whatsapp_number">Whatsapp Number</label>
                    <input type="text" placeholder="Type your Whatsapp number" id="whatsapp_number" />
                </div>
                <div className="input-group">
                    <label htmlFor="shipping_address">Shipping Address</label>
                    <textarea placeholder="Type your shipping address" id="shipping_address" rows={7} />
                </div>
            </div>
        </CardWithHeader>
    )
}