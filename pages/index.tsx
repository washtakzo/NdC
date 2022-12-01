import Head from "next/head";
import Header from "../components/Header";
import AnimatedBackground from "../components/UI/AnimatedBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatedBackground />
      <main className="pt-44">
        <Header />
        {/* TEST DIV */}
        <section>
          <div className="flex justify-end px-4">
            <img
              className="aspect-[9/16] object-cover min-h-[340px] h-[30vw]"
              src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="mt-20">
            <img
              className="aspect-[12/16] object-cover min-h-[520px] h-[50vw]"
              src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/60199122d5c8861512defdfc_liana-mikah-jbqX046ww8I-unsplash-p-500.jpeg"
              alt=""
            />
          </div>
        </section>
        <div className="h-[200vh] w-8">
          <div className="w-80 h-80 bg-red-600 my-12">test</div>
          <div className="w-80 h-80 bg-red-600 my-12">azerty</div>
          <div className="w-80 h-80 bg-red-600 my-12">123132</div>
        </div>
      </main>
    </>
  );
}
