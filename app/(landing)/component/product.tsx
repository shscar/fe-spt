import Image from "next/image"
import Link from "next/link"
import { FiPlus } from "react-icons/fi"
import { Button } from "../ui/button"

const productList = [
    {
        name: "SportOn Hyperfast Shoes",
        category: "running",
        imgUrl: "shoes.png",
        price: 239000
    },
    {
        name: "SportOn Rockets Tennis",
        category: "racket",
        imgUrl: "racket.png",
        price: 999000
    },
    {
        name: "SportOn Slowlivin",
        category: "shirt",
        imgUrl: "sportshirt.png",
        price: 119000
    },
    {
        name: "SportOn HyperSoccer v2",
        category: "running",
        imgUrl: "football-shoes.png",
        price: 458000
    },
    {
        name: "SportOn HyperSoccer v2",
        category: "running",
        imgUrl: "football-shoes-2.png",
        price: 458000
    },
    {
        name: "SportOn Slowlivin",
        category: "shirt",
        imgUrl: "sportshirt-2.png",
        price: 119000
    },
    {
        name: "SportOn Hyperfast Shoes",
        category: "running",
        imgUrl: "shoes-2.png",
        price: 239000
    },
    {
        name: "SportOn Rockets Tennis",
        category: "racket",
        imgUrl: "racket-2.png",
        price: 999000
    },
]

export const Product = () => {
    return <section id="product-section" className="container mx-auto mt-32 pb-20">
        <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">OUR </span>PRODUCTS
        </h2>
        <div className="grid grid-cols-4 gap-5">
            {productList.map((product, index) => (
                <Link href="#" key={index} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                    <div className="bg-primary-light aspect-square w-full flex justify-center item-center relative">
                        <Image 
                            src={`/img/product/${product.imgUrl}`} alt={product.name} 
                            width={300} height={300}
                            className="aspect-square object-contain" 
                        />
                        <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                            <FiPlus size={24} />
                        </Button>
                    </div>
                    <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                    <div className="flex justify-between mb-8">
                        <span className="text-gray-500">{product.category}</span>
                        <span className="font-medium text-primary">
                            {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(product.price)}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </section>
}