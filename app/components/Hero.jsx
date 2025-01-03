import Container from "./Container";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="w-full min-h-[50vh] m-auto flex justify-between items-center gap-10">
          <div className="w-full flex flex-col justify-between items-center py-20">
            <Image
              src="https://developer.apple.com/visionos/developer-kit/images/vision-side_2x.png"
              width={700}
              height={500}
              alt="Hero Image"
            />
            <h2 className="text-[3.5rem] text-gray-700 font-bold">
              Apple Vision
            </h2>
            <p className="text-xl text-gray-600">
              Motivation your wrist, all eyes!
            </p>
            <div className="flex gap-6 mt-6">
              <Button variant={'bg-sky-500 text-white'}>Learn More</Button>
              <Button variant={'bg-transparent text-sky-500 border border-sky-500 text-white'}>Shop</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;