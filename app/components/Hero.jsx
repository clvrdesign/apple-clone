import Container from "./Container";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="w-full h-[50vh] m-auto flex justify-between items-center gap-10">
          <div className="w-full flex justify-center items-center py-20">
            <Image
              src="https://developer.apple.com/visionos/developer-kit/images/vision-side_2x.png"
              width={700}
              height={200}
              alt="Hero Image"
            />
            <div>
            <h2 className="text-[2.5rem] text-gray-700 font-bold">
              Apple Vision
            </h2>
            <p className="text-xl text-gray-600">
              Motivation your wrist, all eyes!
            </p>
            <div className="flex gap-6 mt-6">
              <Button >Learn More</Button>
              <Button >Shop</Button>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
