"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { cartList } from "../ui/cart-popup"
import { PriceFormatter } from "../../utils/price-formatter"
import { FiCreditCard, FiTrash2 } from "react-icons/fi"
import { CardWithHeader } from "../ui/card-with-header"
import { useRouter } from "next/navigation"

export const CartItems = () => {
    const {push} = useRouter();
    const totalPrice = cartList.reduce((total, item) => total + (item.price * item.qty), 0);

    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-75">
                {cartList.map((item, index) => (
                    <div key={index} className="p-4 border-b border-gray-200 flex gap-3">
                        <div className="bg-primary-light aspect-square w-16 flex items-center justify-center">
                            <Image 
                                src={`/img/product/${item.imgUrl}`}
                                alt={item.name}
                                width={63}
                                height={63}
                                className="aspect-square object-contain"
                            />
                        </div>
                        <div className="self-center">
                            <span className="text-sm font-medium">{item.name}</span>
                            <div className="flex gap-3 font-medium text-xs">
                                <span>{item.qty}x</span>
                                <span className="text-primary">{PriceFormatter(item.price)}</span>
                            </div>
                        </div>
                        <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center mx-auto">
                            <FiTrash2 />
                        </Button>
                    </div>
                ))}
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <span className="font-semibold text-sm">Total</span>
                    <span className="text-primary text-xs">{PriceFormatter(totalPrice)}</span>
                </div>
                <Button variant="dark" className="w-full mt-4" onClick={() => push("/payment")}>
                    <FiCreditCard />
                    Proceed to Payment
                </Button>
            </div>
        </CardWithHeader>
    )
}