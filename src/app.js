/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const domainGene = document.querySelector("#domain-gen");
window.onload = function() {
  domainGene.innerHTML = createRandomDomains();
};

let pronoun = ["the", "our", "a", "its"];
let adj = ["great", "big", "lovely", "warm"];
let noun = ["jogger", "racoon", "student", "developer"];
let dotExtension = [".com", ".es", ".org", ".net", ".4geeks"];

const createRandomDomains = () => {
  pronoun.forEach(pron =>
    adj.forEach(adjectiv =>
      noun.forEach(non =>
        dotExtension.forEach(extension =>
          console.log(`${pron}${adjectiv}${non}${extension}`)
        )
      )
    )
  );
};
