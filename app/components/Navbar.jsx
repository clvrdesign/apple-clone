import Link from "next/link"
import Container from "./Container"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-50">
        <Container> 
            <div className="w-full h-10 m-auto flex justify-between items-center gap-10">
                <Image
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/862px-Apple_logo_grey.svg.png'}
                width={20}
                height={50}
                />
                <div className="flex items-center gap-10">
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Store</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Mac</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">iPad</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">iPhone</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Watch</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Vision</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">AirPods</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">TV & Home</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Entertainment</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Accessories</Link>
                    <Link href='' className="text-[14px] hover:text-gray-900 duration-150 text-gray-600">Support</Link>
                    
                    <div className="flex items-center gap-4">
                        <div className="h-5 w-5 flex justify-center items-center">
                            <i className="fi fi-rr-search translate-y-0.5 cursor-pointer hover:text-gray-900 duration-150 text-gray-600"></i>
                        </div>
                        <div className="flex items-center">
                            <i className="fi fi-rr-shopping-bag translate-y-0.5 cursor-pointer hover:text-gray-900 duration-150 text-gray-600"></i>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar