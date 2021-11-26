import React from "react";
import {Text, Link} from "@chakra-ui/react";
import type {NextPage} from "next";

import SideImage from "@components/SideImage";
import Hero from "@components/Hero";
import Layout from "@components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <SideImage.container isEven alt="Woman with jewelry" src={"/vectors/jewelry.svg"}>
        <SideImage.title>See our work.</SideImage.title>
        <Text>
          {"You can see our gallery or go to our "}
          <SideImage.external fontWeight={400} href="https://www.instagram.com/rhodokros">
            Instagram
          </SideImage.external>
          {" were we post our featured products periodically."}
        </Text>
        <Link>Go to gallery</Link>
      </SideImage.container>
      <SideImage.container alt="Map illustration" src={"/vectors/map.svg"}>
        <SideImage.title>Visit our shop</SideImage.title>
        <Text>
          We are in <i>&quot;El conventillo de los sueños&quot;</i> at La Boca, Buenos Aires.
          Usually from Monday to Saturday, between 10:00-16:00.
        </Text>
        <SideImage.external href="https://www.google.com/maps/place/RhodoKros/@-34.6398246,-58.3626528,15z/data=!4m5!3m4!1s0x0:0xf8455fab32e62143!8m2!3d-34.6398009!4d-58.3626664">
          See on Google Maps
        </SideImage.external>
      </SideImage.container>
      <SideImage.container isEven alt="Sharing vector" src="/vectors/share.svg">
        <SideImage.title>Veritatis obcaecati</SideImage.title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur.
        </Text>
        <Text>
          Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
        </Text>
      </SideImage.container>
    </Layout>
  );
};

export default Home;
