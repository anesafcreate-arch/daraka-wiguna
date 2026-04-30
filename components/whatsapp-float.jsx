import { MessageCircleMore } from "lucide-react";
import { company } from "@/lib/site-data";

export default function WhatsAppFloat() {
  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-lime-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-lime-700"
    >
      <MessageCircleMore className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
