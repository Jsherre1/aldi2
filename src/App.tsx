import React, { useState } from "react";
import "./styles.css";

function App() {
  const [activeTab, setActiveTab] = useState("adult");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="appContainer">
      <header className="header">
        <h1>Adult Use &amp; Hemp Protein</h1>
        <p className="tagline">Aldous 'Aldi' Loyd</p>
      </header>

      {/*  TAB NAVIGATION  */}
      <nav className="tabNavigation">
        <button
          className={activeTab === "adult" ? "tabButton active" : "tabButton"}
          onClick={() => handleTabClick("adult")}
        >
          Adult Use
        </button>

        <button
          className={
            activeTab === "hempProtein" ? "tabButton active" : "tabButton"
          }
          onClick={() => handleTabClick("hempProtein")}
        >
          Hemp Protein
        </button>

        <button
          className={
            activeTab === "proteinProcessing" ? "tabButton active" : "tabButton"
          }
          onClick={() => handleTabClick("proteinProcessing")}
        >
          Protein Processing
        </button>

        <button
          className={
            activeTab === "hempPlastic" ? "tabButton active" : "tabButton"
          }
          onClick={() => handleTabClick("hempPlastic")}
        >
          Hemp Plastic
        </button>

        <button
          className={
            activeTab === "nyEnvironment" ? "tabButton active" : "tabButton"
          }
          onClick={() => handleTabClick("nyEnvironment")}
        >
          NY Environment
        </button>

        <button
          className={activeTab === "bio" ? "tabButton active" : "tabButton"}
          onClick={() => handleTabClick("bio")}
        >
          Bio
        </button>
      </nav>

      {/*  MAIN CONTENT  */}
      <main className="contentArea">
        {/* ADULT USE TAB */}
        {activeTab === "adult" && (
          <section>
            <blockquote className="emailSnippet">
              “From my experience the adult cannabis market could be divided
              into two camps — the steakhouse connoisseurs and the mass-market
              McDonald’s consumers. I once thought the connoisseur market was
              bigger, but it’s actually smaller yet influential. There is space
              for a premier top-shelf brand with unrelenting quality and
              exclusivity, which can then influence downstream derivatives and
              establish fame, like BMW or Porsche. That’s what I’m interested
              in: making a mark on the industry and moving it in the right
              direction.”
            </blockquote>
            <ul className="researchPoints">
              <li>
                <strong>Connoisseur vs. Mass Market:</strong> Research shows a
                clear split between premium buyers seeking top-tier genetics and
                everyday consumers focused on price.
              </li>
              <li>
                <strong>Brand Halo Effect:</strong> A high-end cannabis line can
                shape overall market perception and generate hype, even if the
                bulk of sales come from budget segments.
              </li>
              <li>
                <strong>Genetic R&amp;D Potential:</strong> Owning proprietary
                strains or offering nursery services can open long-term
                licensing and medical applications.
              </li>
            </ul>
          </section>
        )}

        {/* HEMP PROTEIN TAB */}
        {activeTab === "hempProtein" && (
          <section>
            <blockquote className="emailSnippet">
              “So when I first got into hemp I grew 8 acres, second year 30,
              third year 170 acres— over 1 million wet pounds. I managed that
              harvest window from 21 farms. To me, the logistics were as
              impressive as the 87,000 medical-grade pounds of CBD we delivered.
              Now I’m thinking about all that hemp seed. Hemp seed is a viable
              product—labor is minimal and we can contract farmers instead of
              having them grow corn. Then a regional facility can process and
              sterilize those seeds for protein.”
            </blockquote>
            <ul className="researchPoints">
              <li>
                <strong>Global Trend:</strong> Plant-based protein is growing
                rapidly, projected to reach nearly $30B worldwide by 2033, with
                hemp offering unique nutritional benefits.
              </li>
              <li>
                <strong>Allergen-Friendly:</strong> Hemp protein is free of
                common allergens like soy or gluten, appealing to a broader
                consumer base.
              </li>
              <li>
                <strong>Sustainability Edge:</strong> Hemp requires fewer
                pesticides, replenishes soil, and is seen as a more eco-friendly
                crop compared to corn or soy.
              </li>
            </ul>
          </section>
        )}

        {/* PROTEIN PROCESSING TAB */}
        {activeTab === "proteinProcessing" && (
          <section>
            <blockquote className="emailSnippet">
              “The main issue I see is extracting the protein without damaging
              it while removing all traces of CBD and THC for white-label
              distribution. We could also offer a product with CBD intact, but
              that might be a smaller niche. For large-scale distribution, zero
              residual THC is critical.”
            </blockquote>
            <ul className="researchPoints">
              <li>
                <strong>Extraction Methods:</strong> Alkaline solubilization,
                ultrafiltration, and salt-based methods can produce high-purity
                hemp protein (&gt;70–80%).
              </li>
              <li>
                <strong>Taste &amp; Color:</strong> De-hulling seeds and
                refining proteins reduces the grassy flavor and dark color,
                making hemp protein more appealing to manufacturers.
              </li>
              <li>
                <strong>Compliance:</strong> GRAS status in the U.S. and
                near-zero THC ensures global market acceptance.
              </li>
            </ul>
          </section>
        )}

        {/* HEMP PLASTIC TAB */}
        {activeTab === "hempPlastic" && (
          <section>
            <blockquote className="emailSnippet">
              “The waste stream—stalks, biomass, etc. We figure out how to make
              hemp plastics with that raw material, aiming to replace single-use
              utensils in fast food. I’d want a 30 day decay window for
              hemp-based plastic. That might require consumer education, but
              it’s part of the bigger picture.”
            </blockquote>
            <ul className="researchPoints">
              <li>
                <strong>Biodegradable Composites:</strong> Blending hemp fibers
                with polymers like PLA can yield sturdy, compostable products
                (straws, utensils) for eco-minded markets.
              </li>
              <li>
                <strong>30-Day Decomposition:</strong> Some hemp-based
                bioplastics claim fast breakdown in compost, reducing landfill
                impact.
              </li>
              <li>
                <strong>Zero-Waste Loop:</strong> Hemp seed for protein, oil,
                and leftover biomass for plastics fosters a circular supply
                chain.
              </li>
            </ul>
          </section>
        )}

        {/* NY ENVIRONMENT TAB */}
        {activeTab === "nyEnvironment" && (
          <section>
            <blockquote className="emailSnippet">
              “Both ideas—premium cannabis and hemp seed—will take time to
              develop and be profitable. But the vision, based on the overall
              state of the industry here in New York, is sound. I want to create
              something that moves our market in the right direction.”
            </blockquote>
            <ul className="researchPoints">
              <li>
                <strong>Regulatory Complexity:</strong> New York prohibits
                traditional vertical integration, imposes high taxes, and faces
                a strong illicit market.
              </li>
              <li>
                <strong>Premium Opportunities:</strong> Connoisseur cannabis is
                under-served, giving high-end brands a chance to carve out a
                loyal following.
              </li>
              <li>
                <strong>Scaling Hemp:</strong> Contract farming upstate can
                expand hemp acreage; processing hubs near NYC can supply the
                growing demand for plant-based products.
              </li>
            </ul>
          </section>
        )}

        {/* BIO TAB */}
        {activeTab === "bio" && (
          <section>
            <h2 className="bioHeading">Bio</h2>
            <ul className="bioList">
              <li>Founder, Startide Sustainability LLC</li>
              <li>Co-founder, Castetter Sustainability Group</li>
              <li>Co-founder, Empire Standard</li>
              <li>Director of Agriculture, Startide</li>
              <li>Licensed New York State Cannabis Cultivator</li>
              <li>Master Grower with 30 years of experience</li>
              <li>
                Directed operations for 21 farms (170 acres, 500,000+ plants in
                the 2019 season)
              </li>
              <li>Germinated and coordinated delivery of 76,000 plants</li>
              <li>
                Developed an acclimated feminized CBD hemp seed line, producing
                over 1 million feminized seeds
              </li>
              <li>
                Operated multiple indoor grow spaces for production,
                propagation, and R&amp;D
              </li>
              <li>
                Provided consultation services for large-acreage, greenhouse,
                and indoor grow operations
              </li>
              <li>
                Managed a 65,000+ sq. ft. warehouse for drying and processing
                the 2019 harvest
              </li>
              <li>
                Skilled in facility design, grow programs, genetic development, and cultural practices
              </li>
            </ul>
          </section>
        )}
      </main>

      {/* FOOTER (EMPTY OR SIMPLE) */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
