// Animations de défilement, communes à toutes les pages.
//
// Chaque bloc porteur d'un attribut `data-reveal` apparaît lorsqu'il entre dans
// l'écran. Les compteurs marqués `data-compteur` s'incrémentent, les images
// marquées `data-parallaxe` se décalent légèrement.
//
// Rien n'est masqué tant que ce script n'a pas pris la main : la classe `js`
// est posée dans le gabarit, et si GSAP échoue à se charger la classe
// `sans-gsap` bascule sur une simple transition CSS.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const reveler = () => {
  const blocs = document.querySelectorAll("[data-reveal]");

  if (reduit) {
    blocs.forEach((bloc) => bloc.classList.add("revele"));
    return;
  }

  blocs.forEach((bloc) => {
    const delai = Number(bloc.dataset.revealDelay ?? 0) / 1000;
    const sens = bloc.dataset.reveal;

    let depart = { opacity: 0, y: 36 };
    let arrivee = { opacity: 1, y: 0 };

    if (sens === "zoom") {
      depart = { opacity: 0, scale: 0.94 };
      arrivee = { opacity: 1, scale: 1 };
    } else if (sens === "flou") {
      depart = { opacity: 0, y: 18, filter: "blur(10px)" };
      arrivee = { opacity: 1, y: 0, filter: "blur(0px)" };
    }

    gsap.fromTo(bloc, depart, {
      ...arrivee,
      duration: 0.7,
      delay: delai,
      ease: "power3.out",
      // La classe neutralise la règle CSS qui masque le bloc au départ.
      onStart: () => bloc.classList.add("revele"),
      scrollTrigger: {
        trigger: bloc,
        start: "top 88%",
        once: true,
      },
    });
  });
};

// Compteurs : le nombre grimpe jusqu'à sa valeur au premier passage.
const compter = () => {
  document.querySelectorAll("[data-compteur]").forEach((cible) => {
    const valeur = Number(cible.dataset.compteur);
    const suffixe = cible.dataset.suffixe ?? "";
    const locale = document.documentElement.lang === "fr" ? "fr-FR" : "en-GB";
    const brut = cible.dataset.brut === "true";

    const ecrire = (n) =>
      (cible.textContent = brut
        ? `${Math.round(n)}${suffixe}`
        : `${Math.round(n).toLocaleString(locale)}${suffixe}`);

    if (reduit || Number.isNaN(valeur)) {
      ecrire(valeur);
      return;
    }

    const etat = { n: 0 };
    gsap.to(etat, {
      n: valeur,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => ecrire(etat.n),
      scrollTrigger: { trigger: cible, start: "top 92%", once: true },
    });
  });
};

// Parallaxe discrète : l'image glisse plus lentement que la page.
const parallaxe = () => {
  if (reduit) return;
  document.querySelectorAll("[data-parallaxe]").forEach((image) => {
    gsap.fromTo(
      image,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
};


// Barre de progression de lecture, en haut de la fenêtre.
const progression = () => {
  const barre = document.getElementById("progression");
  if (!barre) return;
  gsap.to(barre, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
};

reveler();
compter();
parallaxe();
progression();

// Les images arrivant après coup décalent les seuils : on recalcule.
window.addEventListener("load", () => ScrollTrigger.refresh());
