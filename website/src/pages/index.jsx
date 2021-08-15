import Layout from "@theme/Layout";
import React from "react";

import config from "../../docusaurus.config";

import {LinkButton} from "../components/LinkButton";

export default () => {
  return (
    <Layout>
      <img
        src={"/assets/img/nt192.png"}
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
              "fontSize": "3rem",
              "fontWeight": "lighter"
            }}
          >
            Comming Soon
          </span>
        </p>
        <p style={{marginTop: "0rem", fontSize: "1.15rem", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", textAlign: "center"}}>
          Yusri Sahrul Personal Website
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