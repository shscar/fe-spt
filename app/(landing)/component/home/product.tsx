"use client"

import Image from "next/image"
import Link from "next/link"
import { FiPlus } from "react-icons/fi"
import { Button } from "../ui/button"
import { PriceFormatter } from "../../utils/price-formatter"
import { Product } from "@/app/types"
import { getImageUrl } from "@/app/lib/api"
import { useCartStore } from "@/app/hooks/use-cart-store"

export const ProductSection = ({ products }: { products: Product[] }) => {
    const { addItem } = useCartStore();
    const handleAddtoCart = (e: React.MouseEvent, product: Product, qty: number = 1) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product, qty);
    };

    return <section id="product-section" className="container mx-auto mt-32 pb-20">
        <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">OUR </span>PRODUCTS
        </h2>
        <div className="grid grid-cols-4 gap-5">
            {products.map((product) => (
                <Link href={`/product/${product._id}`} key={product._id} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                    <div className="bg-primary-light aspect-square w-full flex justify-center item-center relative">
                        <Image 
                            src={getImageUrl(product.imageUrl)} alt={product.name} 
                            width={300} height={300}
                            className="aspect-square object-contain" 
                        />
                        <Button className="w-10 h-10 p-2! absolute right-3 top-3" onClick={(e) => handleAddtoCart(e, product)}>
                            <FiPlus size={24} />
                        </Button>
                    </div>
                    <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                    <div className="flex justify-between mb-8">
                        <span className="text-gray-500">{product.category.name}</span>
                        <span className="font-medium text-primary">
                            {PriceFormatter(product.price)}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </section>
}