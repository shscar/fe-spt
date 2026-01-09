import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import Image from "next/image"

const categoriList = [
    {
        name: "badminton",
        imgUrl: "category-badminton.png"
    },
    {
        name: "basketball",
        imgUrl: "category-basketball.png"
    },
    {
        name: "football",
        imgUrl: "category-football.png"
    },
    {
        name: "running",
        imgUrl: "category-running.png"
    },
    {
        name: "swimming",
        imgUrl: "category-swimming.png"
    },
    {
        name: "tennis",
        imgUrl: "category-tennis.png"
    }
]

export const Category = () => {
    return (
        <section id="category-section" className="container mx-auto pb-20">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Browse By Categories</h2>
                <Link href="/categories" className="text-primary flex gap-2 font-medium">
                    <span className="self-center">See All Categories</span>
                    <FiArrowRight className="self-center" />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-12 mt-8">
                {categoriList.map((category, index) => (
                    <div key={index} className="rounded-lg bg-gradient-to-r from-[#f1f1f1] to-[#f7f7f7] w-full aspect-square flex justify-center">
                        <div className="self-center">
                            <Image 
                                src={`/img/category/${category.imgUrl}`} 
                                alt={category.name} 
                                width={86}
                                height={86}
                                className="w-full h-full object-cover rounded-lg" 
                            />
                            <div className="text-primary font-medium text-xl text-center">{category.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}