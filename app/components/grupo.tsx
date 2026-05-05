"use client";

import Image from "next/image";

const cards = [
  {
    title: "Conatus Procedures",
    image: "/images/grupo4.png",
    logo: "/images/logo-procedures.svg",
    className: "grupo__card grupo__card--green",
  },
  {
    title: "Conatus Institute",
    image: "/images/grupo2.png",
    logo: "/images/logo-institute.svg",
    className: "grupo__card grupo__card--purple",
  },
  {
    title: "Conatus Operations & Technology",
    image: "/images/grupo3.png",
    logo: "/images/logo-operations.svg",
    className: "grupo__card grupo__card--cyan",
  },
];

export default function Grupo() {
  return (
    <section className="grupo" id="grupo">
      <div className="grupo__container">
        <div className="grupo__left">
          <h2 className="grupo__title grupo__title--main">
            <span style={{ display: 'block', fontSize: 'inherit', lineHeight: '1.2' }}>CONATUS</span>
            <span style={{ display: 'block', fontSize: '0.5em', lineHeight: '1.2', marginTop: '0.2em' }}>DATA CENTERS</span>
          </h2>
        </div>

        <div className="grupo__right">
          {cards.map((card, index) => (
            <article key={index} className={card.className}>
              <div className="grupo__media">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="grupo__img"
                />
                <div className="grupo__overlay" />
              </div>

              <div className="grupo__content">
                <div className="grupo__logoWrap">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    width={280}
                    height={70}
                    className="grupo__logoImage"
                  />
                </div>
              </div>

              <div className="grupo__arrow">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}