export const CONTACT_INFO = {
  whatsapp: "5562992818038", // Número atualizado
  message: "Olá! Gostaria de saber mais sobre os serviços da VK Company.",
};

export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.message)}`;
