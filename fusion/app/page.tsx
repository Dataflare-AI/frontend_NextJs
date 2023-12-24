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
export default function Home() {
  return (
    <body className="bg-white">
      <Navbar />
      <Hero />
      <SectionTitle>
        Conectando Pontos, Revelando Oportunidades: Desvende o Potencial Oculto
        dos Seus Dados com a FusionAPI.
      </SectionTitle>
      <Benefits />
      <Benefits imgPos="right" />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </body>
  );
}
