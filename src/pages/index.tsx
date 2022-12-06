import Head from "next/head";
import { NextPageWithLayout } from "~/types/common.types";
import { Container, Layout } from "~/components";
import { Main } from "~/views";
import playlistData from "~/data/playlistsData.json";
import { PlaylistModelWithId } from "~/models/playlist.model";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>DaftAcademy - WebApp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>DaftAcademy - WebApp 2022 - tu coś dodaje</h1>
      </div>
      <Container>
        <Main items={playlistData as Array<PlaylistModelWithId>} />
      </Container>
    </>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
