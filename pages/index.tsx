import React from "react";
import {Text} from "@chakra-ui/react";
import type {NextPage} from "next";

import SideImage from "@components/SideImage";
import Hero from "@components/Hero";
import Layout from "@components/Layout";
import {instagram} from "@utils/links";
import ImageDivider from "@components/ImageDivider";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <SideImage.container alt="Questioning mark" src="/vectors/question.svg">
        <SideImage.title>What is the Rhodochrosite?</SideImage.title>
        <Text>
          The rhodochrosite is a semi-precious stone with a distinctive pink color. It comes from
          Catamarca, a province located on the north west of Argentina.
        </Text>
        <Text>
          It is known by its uses by the <i>Inca</i>, pre-Columbian emperors of South America.
          According to an old legend, the stone is symbol of peace, forgiveness and deep love.
        </Text>
      </SideImage.container>
      <ImageDivider alt="Rhodochrosite stalactite" src="/images/stalactite.jpg" />

      <SideImage.container isEven alt="Woman with jewelry" src={"/vectors/jewelry.svg"}>
        <SideImage.title>See our work.</SideImage.title>
        <Text>
          You can see our work on the RhodoKros Instagram feed where we post our featured products
          periodically.
        </Text>
        <SideImage.external href={instagram.url}>RhodoKros on Instagram</SideImage.external>
      </SideImage.container>
      <ImageDivider alt="Workshop at La Boca" src="/images/frontdoor.jpg" />
      <SideImage.container alt="Map illustration" src={"/vectors/map.svg"}>
        <SideImage.title>Visit our shop</SideImage.title>
        <Text>
          We are in <i>&quot;El conventillo de los sueños&quot;</i> at La Boca, Buenos Aires.
        </Text>
        <Text>Usually from Monday to Saturday, between 10:00-16:00.</Text>
        <SideImage.external href="https://www.google.com/maps/place/RhodoKros/@-34.6398246,-58.3626528,15z/data=!4m5!3m4!1s0x0:0xf8455fab32e62143!8m2!3d-34.6398009!4d-58.3626664">
          See on Google Maps
        </SideImage.external>
      </SideImage.container>
      <ImageDivider alt="Guillermo Montes working at the workshop" src="/images/about.jpg" />
      <SideImage.container
        isEven
        alt="Introductory illustration"
        id="about"
        src="/vectors/about.svg"
      >
        <SideImage.title>About</SideImage.title>
        <Text>
          Guillermo Montes has been working with rhodochrosite and silver since 2005 and throughout
          the years he became an expert in crafting jewelry.
        </Text>
      </SideImage.container>
    </Layout>
  );
};

export default Home;
