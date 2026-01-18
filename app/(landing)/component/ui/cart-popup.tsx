import Image from "next/image";
import { PriceFormatter } from "../../utils/price-formatter";
import { Button } from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation"
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

export const cartList = [
    {
        name: "SportOn Hyperfast Shoes",
        category: "running",
        qty: 3,
        imgUrl: "shoes.png",
        price: 239000
    },
    {
        name: "SportOn Rockets Tennis",
        category: "racket",
        qty: 5,
        imgUrl: "racket.png",
        price: 999000
    },
    {
        name: "SportOn HyperSoccer v2",
        category: "running",
        qty: 2,
        imgUrl: "football-shoes-2.png",
        price: 458000
    },
    {
        name: "SportOn Rockets Tennis",
        category: "racket",
        qty: 2,
        imgUrl: "racket-2.png",
        price: 999000
    },
]

export const CartPopup = () => {
    const {push} = useRouter();
    const {items, removeItem} = useCartStore();
    const totalPrice = items.reduce((total, item) => total + (item.price * item.qty), 0);

    return (
        <div className="absolute top-12 right-0 bg-white shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Card
            </div>
            {items.length ? items.map((item) => (
                <div key={item._id} className="p-4 border-b border-gray-200 flex gap-3">
                    <div className="bg-primary-light aspect-square w-16 flex items-center justify-center">
                        <Image 
                            src={getImageUrl(item.imageUrl)}
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
                    <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center mx-auto" onClick={() => removeItem(item._id)}>
                        <FiTrash2 />
                    </Button>
                </div>
            )): (
                <div className="text-center opacity-50 py-5">Your Shopping cart is empty</div>
            )}
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <span className="font-semibold text-sm">Total</span>
                    <span className="text-primary text-xs">{PriceFormatter(totalPrice)}</span>
                </div>
                <Button variant="dark" size="small" className="w-full mt-4" onClick={() => push("/checkout")}>
                    Checkout Now
                    <FiArrowRight />
                </Button>
            </div>
        </div>
    );
}