// Dados e transcrições fornecidos em 21/10/2026; sem atualização automática.
export const brand = {
  name: "Rafhaela Silva",
  businessName: "Rafhaela Silva — Advocacia e Consultoria Jurídica",
  specialty: "Advocacia e Consultoria Jurídica",
  phone: "(34) 99725-1415",
  phoneDigits: "5534997251415",
  whatsappDigits: "5534997251415",
  address: "R. das Gameleiras, 444 · Campestre · São Gotardo — MG · CEP 38800-000",
  location: "São Gotardo · Minas Gerais",
  coverage: "São Gotardo, Distrito Federal e exterior",
  logo: "/rafhaela-silva-logo.png",
  portrait: "/rafhaela-silva-assessoria.png",
  googleReviewCount: 17,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/advrafhaela/",
  instagramHandle: "@advrafhaela",
};
export const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(brand.businessName + ", " + brand.address);
export const reviews = maps;
// O relato de Helena veio truncado. Exibimos apenas o trecho recebido.
export const testimonials = [
  { name: "Thais Carvalho", text: "Excelente advogada! Muito prestativa, atenciosa, dedicada! Ouve com atenção e cuidado os seus clientes! Super indico!", source: reviews },
  { name: "Helena Faustino", text: "Dra Rafhaela ,uma advogada excepcional na área de direito trabalhista . Sua capacidade de ouvir e entender as necessidades dos clientes é admirável. Desde o início se mostrou competente e sempre esteve disponível para esclarecer dúvidas.", source: reviews, excerpt: true },
  { name: "Samira Oliveira", text: "Profissional extremamente competente, dedicada e atenciosa. Transmite confiança e conduz cada caso com seriedade e empatia. Super indico!", source: reviews },
  { name: "Nelly Gontijo", text: "Advogada super competente e responsável.\nSempre com uma prestatividade fora do normal e agilidade em todos os seus atendimentos e processos.", source: reviews },
  { name: "Rafael Ribeiro", text: "Excelente profissional , muito prestativa e atenciosa .", source: reviews },
  { name: "Yalita Arianne", text: "Muito boa!! Advogada super prestativa!!", source: reviews },
  { name: "Larissa Fialho", text: "Excelente profissional, dedicada , empenhada, integra. Espaco super aconchegante", source: reviews },
  { name: "Henrique Oliveira", text: "Uma excelente profissional, recomendo", source: reviews },
  { name: "Mauricio Nakao", text: "Excelente profissional!!!", source: reviews },
];
export function contactFor(subject?: string) {
  const message = subject
    ? "Olá, Dra. Rafhaela! Gostaria de informações sobre " + subject + "."
    : "Olá, Dra. Rafhaela! Gostaria de agendar um atendimento jurídico.";
  return "https://wa.me/" + brand.whatsappDigits + "?text=" + encodeURIComponent(message);
}
export const telephone = "tel:+" + brand.phoneDigits;
export const contact = contactFor();
export const contactAction = "Fale pelo WhatsApp";
