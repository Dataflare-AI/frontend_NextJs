import React from "react";
import Navbar from "./ui/navbar";
import Hero from "./ui/hero";
import SectionTitle from "./ui/sectionTitle";
import Benefits from "./ui/benefits";
import Video from "./ui/video";
import Testimonials from "./ui/testimonials";
import Faq from "./ui/faq";
import Cta from "./ui/cta";
import Footer from "./ui/footer";
import PopupWidget from "./ui/popupWidget";
import { benefitTwo, benefitOne } from "./ui/data";

import "./ui/global.css";

export default function Home() {
  return (
    <div className="app-container bg-white">
      <Navbar />
      <Hero />
      <SectionTitle pretitle="Vantagens" title="Potencialize Seus Resultados!">
        Desbloqueie Insights Poderosos com Nossa Solução! Conecte-se ao futuro
        da análise de dados e impulsione seu produto com nossa plataforma.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits data={benefitTwo} />
      <SectionTitle
        pretitle="Assista a um Vídeo"
        title="Descubra como a nossa solução pode atender às suas necessidades."
      >
        Explore as funcionalidades e benefícios do nosso produto em ação. Veja
        como nossa solução em análise de dados pode revolucionar sua compreensão
        e aproveitamento de informações assistindo ao vídeo abaixo!
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Avaliações"
        title="O que nossos usuários estão dizendo"
      >
        Avaliações são uma ótima maneira de aumentar a confiança e a
        conscientização da marca. Utilize esta seção para destacar os
        depoimentos dos nossos usuários mais satisfeitos.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers' possible questions here; it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>
  );
}
