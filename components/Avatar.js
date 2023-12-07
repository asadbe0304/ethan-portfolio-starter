import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-[2000px  xl:w-[300px] absolute left-80 -bottom-8 mix-blend-color-dodge  left">
      <Image
        src={"/av.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circles"
      />
      ;
    </div>
  );
};

export default Avatar;
