import React from "react";
import Header from "./Header.js";
import { Global, css } from "@emotion/react";
import Head from "next/head.js";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --azul: #0000ff;
            
            
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family:'Roboto', sans-serif; 
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }

          h1,
          h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }

          h3 {
            font-family:'Roboto', sans-serif; 
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }

          img{
            max-width: 100%;
            border-radius: 20px;
          }
        `}
      />

      <Head>
        <title>Helper People</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto:ital,wght@0,700;1,300&display=swap"
          rel="stylesheet"
        />

        <link href="/static/css/app.css" rel="stylesheet"/>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

      </Head>

      {/* <Header /> */}

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
