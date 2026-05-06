import emailjs from "@emailjs/browser";
import type { LeadData } from "./supabase";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export async function notifyLead(data: LeadData) {
  const whatsappLink = `https://wa.me/55${data.whatsapp.replace(/\D/g, "")}`;

  const templateParams = {
    nome: data.nome,
    empresa: data.empresa,
    email: data.email,
    whatsapp: data.whatsapp,
    whatsapp_link: whatsappLink,
    negocio: data.negocio,
    desafio: data.desafio,
    marketing_anterior: data.marketing_anterior,
    orcamento: data.orcamento,
    quando_comecar: data.quando_comecar,
    tempo_mercado: data.tempo_mercado,
    procedimentos_mes: data.procedimentos_mes,
    ticket_medio: data.ticket_medio,
    retorno_cliente: data.retorno_cliente,
    fonte_clientes: data.fonte_clientes,
    ciclo_vendas: data.ciclo_vendas,
    taxa_fechamento: data.taxa_fechamento,
    campanhas_pagas: data.campanhas_pagas,
    melhor_resultado: data.melhor_resultado,
    prova_social: data.prova_social,
    diferencial: data.diferencial,
    case_marcante: data.case_marcante,
    capacidade_fechamento: data.capacidade_fechamento,
    objetivo_90_dias: data.objetivo_90_dias,
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
