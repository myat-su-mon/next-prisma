import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-red-200 text-4xl">About</h1>
      <p className="py-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae
        mollitia voluptatem dicta pariatur velit et dolor minima ex consequatur.
        Et, suscipit expedita officiis rerum exercitationem, iure atque sapiente
        libero deserunt quibusdam corporis cupiditate delectus quis nesciunt
        numquam veniam similique harum tenetur. Hic reprehenderit quae ea
        molestias repudiandae praesentium ullam.
      </p>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default AboutPage;
