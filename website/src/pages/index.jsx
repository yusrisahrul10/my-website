import Layout from "@theme/Layout";
import React from "react";

import config from "../../docusaurus.config";

import {LinkButton} from "../components/LinkButton";

export default () => {
  return (
    <Layout>
      <img
        src={"/img/profile.jpg"}
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "auto",
          marginTop: "3rem",
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '',
          flexDirection: "column",
          fontSize: '20px',
        }}>
        <p style={{marginTop: "1rem", marginBottom: "0rem"}}>
          <span
            style={{
              "fontSize": "1.5rem",
              "fontWeight": "lighter"
            }}
          >
            Selamat Datang!
          </span>
        </p>
        <p style={{marginTop: "0rem", fontSize: "2rem", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", textAlign: "center"}}>
          Saya Yusri Sahrul, Android Developer
        </p>
        <div style={{display: "flex", flexDirection: "row", gap: "0.5rem"}}>
          <LinkButton href="/about/">About</LinkButton>
          <LinkButton href="/project/">Project</LinkButton>
          <LinkButton href="/blog/">Blog</LinkButton>
        </div>
      </div>
      <br />
    </Layout>
  );
};
