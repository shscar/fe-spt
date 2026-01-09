import Image from "next/image"
import { FiFastForward } from "react-icons/fi"
import { Button } from "../ui/button"

export const Hero = () => {
    return (
        <section>
            <div id="hero-section" className="container mx-auto h-screen flex">
                <div className="relative self-center">
                    <Image 
                        src="/img/basketball_sport_icon_in_minimalist_3d_render_2 1.png" alt="Image ball" width={432} height={423} 
                        className="grayscale absolute left-0 -top-20"
                    />
                    <div className="relative ml-40 w-full">
                        <div className="text-primary italic">Friday Sale, 50%</div>
                        <h1 className="font-extrabold text-[95px] uppercase italic bg-gradient-to-b from-black leading-tight to-[#979797] bg-clip-text text-transparent">
                            wear your <br /> top-quality <br /> sportswear
                        </h1>
                        <p className="mt-10 w-1/2 leading-loose">
                            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
                        </p>
                        <div className="flex gap-5 mt-14">
                            <Button>
                                Explore More <FiFastForward />
                            </Button>
                            <Button variant="ghost">
                                Watch Video <Image src="./img/icon-play-video.svg" alt="Play Video" width={29} height={29} />
                            </Button>
                        </div>
                    </div>
                    <Image 
                        src="/img/img-hero.png" alt="Hero Image" width={700} height={950} 
                        className="absolute -right-50 top-1/2 -translate-y-1/2"
                    />
                </div>
                <Image 
                    src="/img/img-ornament-hero.svg" alt="Sport Image" width={420} height={420} 
                    className="absolute -right-50 top-1/2 -translate-y-1/2"
                />
            </div>
        </section>
    )
}