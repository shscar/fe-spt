import Image from "next/image"
import { ProductAction } from "../../component/product-detail/product-actions"
import { PriceFormatter } from "../../utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const product = await getProductDetail(id);

    return (
        <main className="container flex gap-12 mx-auto py-40">
            <div className="bg-primary-light aspect-square min-w-140 flex items-center justify-center">
                <Image 
                    src={getImageUrl(product.imageUrl)} alt={product.name}
                    width={200} height={200}
                    className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
                    {product.category.name}
                </div>
                <p className="leading-loose">{product.description}</p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {PriceFormatter(product.price)}
                </div>
                <ProductAction stock={product.stock} />
            </div>
        </main> 
    )
}

export default ProductDetail;