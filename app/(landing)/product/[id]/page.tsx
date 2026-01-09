import Image from "next/image"
import { ProductAction } from "../../component/product-detail/product-actions"
import { PriceFormatter } from "../../utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container flex gap-12 mx-auto py-40">
            <div className="bg-primary-light aspect-square min-w-140 flex items-center justify-center">
                {/* <span className="text-white font-bold text-2xl">SportOn Rockets Tennis</span> */}
                <Image 
                    src="/img/product/football-shoes.png" alt="SportOn Rockets Tennis" 
                    width={200} height={200}
                    className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">SportOn HyperSoccer v2</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
                    football
                </div>
                <p className="leading-loose">The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.</p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {PriceFormatter(458000)}
                </div>
                <ProductAction />
            </div>
        </main> 
    )
}

export default ProductDetail;