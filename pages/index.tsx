import type { NextApiResponse, NextPage } from "next";
import type { Data } from "types/hero";
import Hero from "components/page/home/hero";
import { HeroProvider } from "context/HeroContext";

const Home: NextPage<{ data: Data }> = ({ data }) => {
  return (
    <div>
      <HeroProvider initialData={data.slides}>
        <Hero />
      </HeroProvider>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hero");
  const data: NextApiResponse<Data> = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
