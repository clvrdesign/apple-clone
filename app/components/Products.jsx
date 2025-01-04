import Image from "next/image";
import Container from "./Container";

const Products = () => {
    return (
        <div className="h-[60vh] bg-gray-200">
            <Container>
                <div className="">
                </div>
            </Container>
            <Image src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpgCLS" className="w-full h-full object-cover" width="600" height="300" alt="" />
        </div>
    )
}

export default Products