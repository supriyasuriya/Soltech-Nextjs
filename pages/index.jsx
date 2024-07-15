// pages/index.js
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Soltech | Supriya</title>
        <link rel="stylesheet" href="./css/style.css" />
      </Head>
      <div className="soltech_container">
        <nav>
          <header className="sol_header">
            <div className="logo_section">
              <div className="logo">
                <img src="./img/logo.png" alt="logo" />
              </div>
            </div>
            <div className="header_nav_link">
              <div className="nav_data">
                <ul>
                  <li>
                    <a href="#home">About</a>
                  </li>
                  <li>
                    <a href="#news">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Customers</a>
                  </li>
                  <li>
                    <a href="#contact">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact">FAQs</a>
                  </li>
                  <li>
                    <a href="#contact">En</a>
                  </li>
                  <button>Get Started</button>
                </ul>
                <div className="menu">
                  <img src="./img/menu-bar.png" alt="" />
                </div>
              </div>
            </div>
          </header>
        </nav>
        <section className="social_marketing">
          <div className="social_media_head">
            <div className="social_marketing_heading_content">
              Reach your audience through social media marketing
            </div>
            <div className="social_marketing_description">
              Mauris donec ociis diam magnis sapien sagittis sapien tempor a volute
              gravida and aliquet tortor undo aliquet in tortor congue quaerat
            </div>
            <div className="services_buttons">
              <div className="core_services_button">
                <button>Our Core Services</button>
              </div>
              <div className="started_now_button">
                <button>Get Started Now</button>
              </div>
            </div>
          </div>
          <section className="first_image">
            <div className="first_imagepic">
              <img src="./img/first_image.png" alt="" />
            </div>
          </section>
        </section>
        <section className="company_logo">
          <div className="companies_logo_brand">
            <div className="companies_logo_brand_name">
              Trusted by companies, big or not-so-big:
            </div>
            <div className="companies_logo_brand_images">
              <div className="brand_logo_images">
                <div className="brand_logo1">
                  <img src="./img/brand-1.png" alt="" />
                </div>
                <div className="brand_logo2">
                  <img src="./img/brand-2.png" alt="" />
                </div>
                <div className="brand_logo3">
                  <img src="./img/brand-3.png" alt="" />
                </div>
                <div className="brand_logo4">
                  <img src="./img/brand-4.png" alt="" />
                </div>
                <div className="brand_logo5">
                  <img src="./img/brand-5.png" alt="" />
                </div>
                <div className="brand_logo6">
                  <img src="./img/brand-6.png" alt="" />
                </div>
                <div className="brand_logo7">
                  <img src="./img/brand-7.png" alt="" />
                </div>
                <div className="brand_logo8">
                  <img src="./img/brand-8.png" alt="" />
                </div>
                <div className="brand_logo9">
                  <img src="./img/brand-9.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section">
          <div className="whole_contents_S-C">
            <div className="contents_blocks">
              <div className="heading">STRATEGY &amp; CONSULTING</div>
              <div className="para">Interact with your customers faster</div>
              <div className="para_1">
                Sapien tempor sodales quaerat ipsum congue undo laoreet <br />
                turpis neque auctor turpis vitae dolor luctus placerat magna and
                <br />
                ligula cursus purus vitae purus an ipsum auris suscipit
              </div>
              <div className="para_2">
                Tempor sapien sodales quaerat ipsum congue undo laoreet <br />
                turpis neque auctor turpis vitae dolor luctus placerat magna and
                <br />
                ligula cursus purus vitae purus ipsum suscipit and auris diam
                <br />
                dapibus libero at fusce blandit neque sagittis laoreet
              </div>
            </div>
            <div className="strategy_image">
              <img src="./img/strategy_image.png" alt="" />
            </div>
          </div>
        </section>
        <section className="content-section-1">
          <div className="whole_content">
            <div className="cards">
              <div className="subcard">
                <img src="./img/target.png" alt="" />
                <h1>Digital Marketing</h1>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a ligula
                  auctor
                </p>
              </div>
              <div className="subcard">
                <img src="./img/development.png" alt="" />
                <h1>Dev &amp; Design</h1>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a ligula
                  auctor
                </p>
              </div>
              <div className="subcard">
                <img src="./img/analysis.png" alt="" />
                <h1>Data &amp; Analytics</h1>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a ligula
                  auctor
                </p>
              </div>
              <div className="subcard">
                <img src="./img/process.png" alt="" />
                <h1>Content Strategy</h1>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a ligula
                  auctor
                </p>
              </div>
            </div>
            <div className="one-stop-content">
              <div className="one-stop">ONE-STOP SOLUTIONS</div>
              <div className="one-stop-heading">
                Cutting-edge <br />
                solutions for <br /> your online <br /> business
              </div>
              <div className="one-stop-para1">
                Sodales tempor sapien quaerat ipsum congue and <br />
                undo laoreet turpis neque auctor turpis vitae dolor <br />
                luctus placerat magna ligula cursus vitae
              </div>
              <div className="one-stop-para2">
                Tempor sapien sodales quaerat ipsum congue and
                <br /> undo laoreet turpis neque auctor turpis vitae dolor
                <br /> luctus placerat magna ligula cursus vitae egestas <br />
                varius laoreet suscipit ipsum placerat magna
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-2">
          <div className="whole_content">
            <div className="whole_content_1_heading">
              <h2>Everything in One Place</h2>
              <p>Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
            </div>
            <div className="whole_content_2">
              <div className="cards">
                <div className="subcard">
                  <img src="./img/revenue.png" alt="" />
                  <h2>Advanced Analytics</h2>
                  <p>
                    Egestas luctus augue undo ultrice quisque in <br />
                    lacus cursus feugiat eget ultrice laoreet <br /> cubilia
                    sagittis
                  </p>
                </div>
                <div className="subcard">
                  <img src="./img/revenue_2.png" alt="" />
                  <h2>Effortless Integration</h2>
                  <p>
                    Augue egestas luctus undo ultrice quisque in <br />
                    lacus cursus feugiat eget ultrice sagittis <br /> cubilia
                    laoreet
                  </p>
                </div>
                <div className="subcard">
                  <img src="./img/revenue_3.png" alt="" />
                  <h2>Content Management</h2>
                  <p>
                    Egestas luctus augue undo ultrice quisque in <br />
                    lacus cursus feugiat eget ultrice laoreet <br /> sagittis
                    cubilia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-3">
          <div className="whole_content">
            <div className="whole_content1">
              <span>
                <div className="heading">PERSONALIZED STRATEGY</div>
              </span>
              <h2>
                Reach your target <br /> audience effectively
              </h2>
              <p>
                Tempor sapien sodales quaerat ipsum congue undo laoreet turpis{" "}
                <br />
                neque auctor turpis vitae dolor luctus placerat magna and ligula{" "}
                <br />
                cursus purus vitae purus an ipsum suscipit auris
              </p>
              <ul className="items">
                <li className="items_list">
                  <p>
                    {" "}
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam{" "}
                    <br />
                    ultrice ipsum aliquam congue and dolor cursus dolor cursus purus{" "}
                    <br />
                    congue an ipsum purus sapien blandit
                  </p>
                </li>
                <li className="items_list">
                  <p>
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam{" "}
                    <br />
                    ultrice ipsum aliquam congue and dolor cursus
                  </p>
                </li>
              </ul>
              <a href="#content-section-8">
                Discover More <img src="./img/next.png" alt="" />
              </a>
            </div>
            <a href="#content-section-8"> </a>
            <div className="whole_content2">
              <img src="./img/tablet-01.png" alt="" />
            </div>
          </div>
        </section>
        <section className="content-section-4">
          <div className="whole_content">
            <div className="whole_content1">
              <img src="./img/section4_image.png" alt="" />
            </div>
            <div className="whole_content2">
              <span>
                <div className="heading">COMPLETE SOLUTIONS</div>
              </span>
              <h2>
                Handling your <br />
                marketing needs in <br />a better way
              </h2>
              <ul className="list-items">
                <li>
                  <p>
                    Tempor sapien quaerat undo ipsum laoreet purus and <br />
                    sapien dolor ociis ultrice quisque and congue aliquam <br />
                    dolor cursus a congue varius
                  </p>
                </li>
                <li>
                  <p>
                    Quaerat sapien tempor undo ipsum laoreet purus and <br />
                    sapien dolor ociis ultrice quisque and congue aliquam <br />
                    dolor cursus a varius congue ultrices
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="content-section-5">
          <div className="whole_content">
            <div className="heading">
              <h2>
                Build a customer-centric <br />
                marketing strategy
              </h2>
              <p>Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
            </div>
            <div className="cards">
              <div className="subcard">
                <img src="./img/shuffle.png" alt="" />
                <h5>Business Intelligence</h5>
                <ul className="list-items">
                  <li>
                    Quaerat ipsum magna congue ipsum laoreet cursus <br />
                    placerat neque auctor purus quaerat
                  </li>
                  <li>
                    Tempor sapien luctus egestas varius laoreet suscipit <br />
                    ipsum a purus sapien dolor cursus
                  </li>
                </ul>
                <div className="card1">
                  <img src="./img/content_section5.1.png" alt="" />
                </div>
              </div>
              <div className="subcard">
                <img src="./img/align-objects.png" alt="" />
                <h5>Marketing Integrations</h5>
                <ul className="list-items">
                  <li>
                    Tempor sapien luctus egestas varius laoreet suscipit <br />
                    ipsum a purus sapien dolor cursus
                  </li>
                  <li>
                    Quaerat ipsum magna congue ipsum laoreet cursus <br />
                    placerat neque auctor purus quaerat
                  </li>
                </ul>
                <div className="card1">
                  <img src="./img/content_section5.2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-6">
          <div className="whole_content">
            <div className="whole_content1">
              <img src="./img/computer.png" alt="" />
              <h5>
                Solutions that will make your <br />
                business successful
              </h5>
              <p></p>
              <ul className="list-items">
                <li>
                  Tempor sapien quaerat ociis laoreet ipsum purus <br />
                  and sapien dolor ultrice semper undo aliquam <br />
                  congue purus and pretium
                </li>
                <li>
                  Cursus purus suscipit vitae egestas augue volute <br />
                  placerat undo vitae ultrice sapien
                </li>
              </ul>
              <p />
              <a href="features">
                Discover More <img src="./img/next.png" alt="" />
              </a>
            </div>
            <div className="whole_content2">
              <img src="./img/progress.png" alt="" />
            </div>
          </div>
        </section>
        <section className="content-section-7">
          <div className="whole_content">
            <div className="cards">
              <div className="subacard">
                <span>
                  <h2>
                    42
                    <small>%</small>
                  </h2>
                </span>
                <div className="bar"></div>
                <p>
                  Augue magna justo integer and velna <br /> vitae auctor suscipit
                </p>
              </div>
              <div className="subacard">
                <span>
                  <h2>
                    78
                    <small>%</small>
                  </h2>
                </span>
                <div className="bar"></div>
                Augue magna justo integer and velna <br /> vitae auctor suscipit
              </div>
              <div className="subacard">
                <span>
                  <h2>
                    46.3
                    <small>k</small>
                  </h2>
                </span>
                <div className="bar"></div>
                Augue magna justo integer and velna <br /> vitae auctor suscipit
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-8">
          <div className="whole_content">
            <div className="content_section1">
              <img src="./img/section8_image.png" alt="" />
            </div>
            <div className="content_section2">
              <div className="heading">
                <span>OPTIMIZE YOUR RESULTS</span>
              </div>
              <h2>
                Content is the key to <br /> building an audience
              </h2>
              <p>
                Tempor sapien sodales quaerat ipsum congue undo laoreet turpis{" "}
                <br />
                neque auctor turpis vitae dolor luctus placerat magna and ligula{" "}
                <br />
                cursus purus vitae purus ipsum suscipit and auris diam dapibus
                libero <br />
                at fusce blandit neque sagittis laoreet
              </p>
              <ul className="list-items">
                <li>
                  <p>
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam{" "}
                    <br />
                    ultrice ipsum aliquam congue and dolor cursus dolor cursus purus{" "}
                    <br /> congue an ipsum purus sapien blandit
                  </p>
                </li>
                <li>
                  <p>
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam{" "}
                    <br /> ultrice ipsum aliquam congue and dolor cursus
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="content-section-9">
          <div className="whole_content">
            <div className="content">
              <h2>
                Seamless integration with all <br />
                your essential tools
              </h2>
              <p>Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
            </div>
            <div className="cards">
              <div className="subcards">
                <img src="./img/zapier.png" alt="" />
                <h6>zapier</h6>
              </div>
              <div className="subcards">
                <img src="./img/intercom.png" alt="" />
                <h6>Intercom</h6>
              </div>
              <div className="subcards">
                <img src="./img/zendesk.png" alt="" />
                <h6>Zendesk</h6>
              </div>
              <div className="subcards">
                <img src="./img/slack.png" alt="" />
                <h6>Slack</h6>
              </div>
              <div className="subcards">
                <img src="./img/trello.png" alt="" />
                <h6>Trello</h6>
              </div>
              <div className="subcards">
                <img src="./img/notion.png" alt="" />
                <h6>Notion</h6>
              </div>
              <div className="subcards">
                <img src="./img/discord.png" alt="" />
                <br />
                <h6>Discord</h6>
              </div>
              <div className="subcards">
                <img src="./img/shopify.png" alt="" />
                <br />
                <h6>Shopify</h6>
              </div>
              <div className="subcards">
                <img src="./img/hubspot.png" alt="" />
                <br />
                <h6>Hubspot</h6>
              </div>
              <div className="subcards">
                <img src="./img/firebase.png" alt="" />
                <br />
                <h6>Firebase</h6>
              </div>
              <div className="subcards">
                <img src="./img/mailchimp.png" alt="" />
                <br />
                <h6>Mailchimp</h6>
              </div>
              <div className="subcards">
                <img src="./img/zoom.png" alt="" />
                <br />
                <h6>Zoom</h6>
              </div>
            </div>
            <div className="button">
              <button>View All Integrations</button>
            </div>
          </div>
        </section>
        <section className="content-section-10">
          <div className="whole_content">
            <div className="content">
              <div className="heading">
                <span>STRATEGIES THAT WORK</span>
              </div>
              <h2>
                Digital marketing <br />
                with real results
              </h2>
              <p>
                Sodales tempor sapien diam quaerat congue primis ipsum <br />
                laoreet turpis neque auctor vitae fusce dolor laoreet placerat{" "}
                <br />
                magna ligula and cursus purus nulla
              </p>
              <p>
                Tempor sapien sodales diam quaerat congue primis ipsum <br />
                laoreet turpis neque auctor vitae fusce dolor laoreet placerat{" "}
                <br />
                magna ligula and cursus sagittis
              </p>
            </div>
            <div className="image">
              <img src="./img/section10_image.png" alt="" />
            </div>
          </div>
        </section>
        <section className="content-section-11">
          <div className="whole_content">
            <div className="content">
              <h2>Our Happy Customers</h2>
              <p>Read what our lovely customers think about us</p>
            </div>
            <div className="cards">
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Really impressed by the level of service.</h5>
                <p>
                  An augue cubilia laoreet a magnasuscipit diam egestas ipsum lectus
                  purus ipsum a primis augue auctor ultrice ligula egestas suscipit
                  lectus gestas tempus feugiat impedit
                </p>
                <h6>Paul Briggs</h6>
                <p>
                  CTO, <b> Company Name </b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Excellent service and good quality</h5>
                <p>
                  Etiam sapien sagittis ociis congue augue massa varius egestas
                  ultrice varius magna tempus aliquet undo egestas and cursus
                  suscipit
                </p>
                <h6>Alexander McCaig</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/halfstar.png" />
                <h5>Great product, service and results!</h5>
                <p>
                  "Augue vitae purus tempus egestas volutpat augue undo cubilia
                  laoreet magna suscipit luctus dolor blandit undo purus tempus
                  feugiat impedit luctus donec ltrice"
                </p>
                <h6>Paul S.Chun</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/bodystar.png" alt="" />
                <h5>Best support, high performer, and more</h5>
                <p>
                  "Mauris gestas magnis and sapien etiam sapien congue augue integer
                  egestas ipsum ultrice a vitae purus congue magna ligula egestas "
                </p>
                <h6>Pavid Bromberg</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Really impressed by the level of service.</h5>
                <p>
                  "An augue cubilia laoreet a magna suscipit diam egestas ipsum
                  lectus purus ipsum a primis augue auctor ultrice ligula egestas
                  suscipit lectus gestas tempus feugiat impedit "
                </p>
                <h6>Paul Briggs</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Perfect choice to speed up your work!</h5>
                <p>
                  "Augue vitae purus tempus egestas volutpat augue undo cubilia
                  laoreet magna suscipit luctus dolor blandit and purus tempus
                  feugiat impedit"
                </p>
                <h6>Maria Haver</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Really impressed by the level of service.</h5>
                <p>
                  "An augue cubilia laoreet a magna suscipit diam egestas ipsum
                  lectus purus ipsum a primis augue auctor ultrice ligula egestas
                  suscipit lectus gestas tempus feugiat impedit "
                </p>
                <h6>Paul Briggs</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Really impressed by the level of service.</h5>
                <p>
                  "An augue cubilia laoreet a magna suscipit diam egestas ipsum
                  lectus purus ipsum a primis augue auctor ultrice ligula egestas
                  suscipit lectus gestas tempus feugiat impedit "
                </p>
                <h6>Paul Briggs</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Really impressed by the level of service.</h5>
                <p>
                  "An augue cubilia laoreet a magna suscipit diam egestas ipsum
                  lectus purus ipsum a primis augue auctor ultrice ligula egestas
                  suscipit lectus gestas tempus feugiat impedit "
                </p>
                <h6>Paul Briggs</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
              <div className="subacards">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <h5>Really impressed by the level of service.</h5>
                <p>
                  "An augue cubilia laoreet a magna suscipit diam egestas ipsum
                  lectus purus ipsum a primis augue auctor ultrice ligula egestas
                  suscipit lectus gestas tempus feugiat impedit "
                </p>
                <h6>Paul Briggs</h6>
                <p>
                  CEO, <b>Company Name</b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-12">
          <div className="whole_content">
            <div className="content1">
              <img src="./img/section12.1.jpg" alt="" />
            </div>
            <div className="content2">
              <div className="image">
                <img src="./img/section12.2.jpg" alt="" />
                <img src="./img/section12.3.jpg" alt="" />
              </div>
              <div className="content">
                <h5>Solutions that drives success</h5>
                <p>
                  Sapien tempor sodales quaerat ipsum congue undo laoreet turpis{" "}
                  <br /> neque auctor turpis vitae dolor luctus placerat magna and
                  ligula <br />
                  cursus purus vitae purus an ipsum auris suscipit
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-13">
          <div className="whole_content">
            <div className="content">
              <span>
                <div className="heading">COMPLETE SOLUTIONS</div>
              </span>
              <h2>
                Unlock the potential of <br />
                your brand online
              </h2>
              <p>
                Tempor sapien sodales quaerat ipsum congue undo laoreet turpis{" "}
                <br />
                neque auctor turpis vitae dolor luctus placerat magna and ligula{" "}
                <br />
                cursus purus vitae purus an ipsum suscipit auris diam dapibus libero{" "}
                <br />
                at fusce blandit neque sagittis
              </p>
              <div className="cards">
                <div className="subcard">
                  <h2>65k</h2>
                  <p>
                    Porta justo integer <br />a velna vitae auctor
                  </p>
                </div>
                <div className="subcard">
                  <h2>86%</h2>
                  <p>
                    Porta justo integer <br />a velna vitae auctor
                  </p>
                </div>
              </div>
            </div>
            <div className="image">
              <img src="./img/content_section13.png" alt="" />
            </div>
          </div>
        </section>
        <section className="content-section-14">
          <div className="whole_content">
            <div className="heading">
              <h2>Any Questions? Look Here</h2>
              <p>Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
            </div>
            <div className="contents">
              <div className="content1">
                <h6>Getting started with SolTech</h6>
                <p>
                  Tempor sapien sodales quaerat ipsum congue undo laoreet turpis{" "}
                  <br />
                  neque auctor turpis vitae dolor luctus placerat magna and ligula{" "}
                  <br />
                  cursus purus vitae purus an ipsum suscipit auris
                </p>
                <h6>
                  How much time will it take to deploy <br /> your solutions in my
                  business?
                </h6>
                <p>
                  Sapien tempor sodales quaerat ipsum congue undo laoreet turpis{" "}
                  <br />
                  neque auctor turpis vitae dolor luctus placerat magna and ligula{" "}
                  <br />
                  cursus purus vitae purus auris diam auris suscipit ipsum cursus{" "}
                  <br />
                  purus vitae purus an ipsum sodales laoreet
                </p>
                <h6>How do I choose a plan?</h6>
                <ul>
                  <li>
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam{" "}
                    <br />
                    ultrice ipsum aliquam congue and dolor cursus
                  </li>
                  <li>
                    Quaerat sapien tempor ipsum laoreet purus and sapien dolor diam{" "}
                    <br />
                    ultrice ipsum aliquam congue and congue dolor turpis neque
                    auctor <br />
                    turpis vitae a dolor luctus placerat
                  </li>
                </ul>
              </div>
              <div className="content2">
                <h6>How long do you provide support?</h6>
                <p>
                  Sodales sapien tempor quaerat ipsum congue undo laoreet turpis{" "}
                  <br /> neque auctor turpis vitae dolor luctus placerat magna and
                  ligula <br />
                  cursus purus vitae purus an auris suscipit ipsum
                </p>
                <h6>How do I make a payment?</h6>
                <p>
                  Tempor sapien sodales quaerat ipsum congue undo laoreet turpis{" "}
                  <br />
                  neque auctor turpis vitae luctus dolor magna
                </p>
                <p>
                  An enim nullam tempor sapien gravida and donec congue metus.{" "}
                  <br />
                  Vitae arcu mollis blandit integer massa velna
                </p>
                <h6>I have an issue with my account</h6>
                <p>
                  Tempor sapien sodales quaerat ipsum congue undo laoreet turpis{" "}
                  <br />
                  neque auctor turpis vitae dolor luctus placerat magna and ligula{" "}
                  <br />
                  cursus purus vitae purus an ipsum suscipit auris
                </p>
                <ul>
                  <li>Fringilla risus, luctus mauris orci auctor purus</li>
                  <li>
                    Quaerat sodales sapien an euismod blandit purus ipsum and <br />
                    primis in cubilia porttitor laoreet augue luctus
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              Still have Questions? <a href="#contacts"> Reach out</a> any time.
            </h6>
          </div>
        </section>
        <section className="content-section-15">
          <div className="whole_content">
            <div className="contents">
              <h4>
                Join 25K+ businesses <br />
                already growing with SolTech
              </h4>
              <p>Start your free 14-day trial. No credit card required.</p>
              <div className="button">
                <div className="button1">
                  <button>Get Started</button>
                </div>
                <div className="button2">
                  <button>View Pricing</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-16">
          <div className="whole_content">
            <div className="contents">
              <h6>SolTech</h6>
              <p>
                Core Services <br />
                Integrations <br />
                Latest Projects <br />
                Pricing Plans <br />
                Help &amp; Support <br />
                Advertising <br />
              </p>
            </div>
            <div className="contents">
              <h6>Solutions</h6>
              <p>
                Libero quisque and massa <br />
                Aliquam auris dapibus libero <br />
                Purus justo lacus ligula <br />
                Tortor sagittis lacinia <br />
                Gravida aliquet ipsum ultrices <br />
                Lacinia molestie egestas <br />
              </p>
            </div>
            <div className="content1">
              <div className="contents">
                <h6>Discover</h6>
                <p>
                  Success Stories <br />
                  Our Blog
                </p>
              </div>
              <div className="contents">
                <h6>Legal</h6>
                <p>
                  Terms of Use <br />
                  Privacy Policy <br />
                  Cookie Policy <br />
                </p>
              </div>
            </div>
            <div className="content2">
              <div className="contents">
                <h6>About Us</h6>
                <p>
                  About Us <br />
                  Our Team <br />
                  Careers <br />
                </p>
              </div>
              <div className="contents">
                <h6>Follow the Best</h6>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="EMAIL"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="content-section-17">
          <hr />
          <div className="whole_cont">
            <div className="line">
              <p>© 2024 SolTech. All Rights Reserved</p>
            </div>
            <div className="right">
              <img src="./img/facebook.png" alt="" />
              <img src="./img/logos.png" alt="" />
              <img src="./img/linkedin.png" alt="" />
              <img src="./img/instagram.png" alt="" />
            </div>
          </div>
        </footer>
      </div>
    </>

  );
};

