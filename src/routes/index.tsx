import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Rocket, Search, Video, EyeOff, DollarSign, Check, Lock, Zap, Users, ChevronDown, Flame } from "lucide-react";
import tourVideo from "@/assets/metodo_zn_tour.mp4.asset.json";
import { CHECKOUT_URL, PRICE } from "@/config/offer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método ZN — Venda pelo TikTok Shop do Zero" },
      { name: "description", content: "Treinamento completo + Grupo VIP para vender pelo TikTok Shop como afiliado, sem estoque, por menos de R$ 100." },
      { property: "og:title", content: "Método ZN — Venda pelo TikTok Shop do Zero" },
      { property: "og:description", content: "Treinamento completo + acompanhamento no Grupo VIP por menos de R$ 100." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="animate-pulse-glow shadow-glow inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 text-center font-display text-xl uppercase tracking-wide text-primary-foreground transition hover:brightness-110 sm:text-2xl"
    >
      <Rocket className="h-6 w-6 shrink-0" /> {children}
    </a>
  );
}

const benefits = [
  { icon: Rocket, t: "Aprenda do zero", d: "Entenda como começar no TikTok Shop." },
  { icon: Search, t: "Produtos vencedores", d: "Aprenda a identificar oportunidades." },
  { icon: Video, t: "Vídeos que vendem", d: "Desenvolva conteúdos estratégicos." },
  { icon: EyeOff, t: "Sem aparecer", d: "Produza conteúdo sem mostrar o rosto." },
  { icon: DollarSign, t: "Views em comissões", d: "Estratégias para buscar resultados." },
];

const included = [
  "Acesso ao treinamento completo",
  "Orientação para começar do zero",
  "Acompanhamento no grupo VIP",
  "Estratégias práticas para aplicar",
  "Acesso imediato após a confirmação do pagamento",
];

const faq = [
  ["Preciso ter experiência para começar?", "Não. O método foi feito para quem está começando do zero."],
  ["Preciso aparecer nos vídeos?", "Não. Você aprende estratégias para criar conteúdo sem mostrar o rosto."],
  ["Preciso ter produtos em estoque?", "Não. Você divulga produtos como afiliado e ganha comissões, sem estoque."],
  ["Como funciona o acompanhamento no grupo VIP?", "Você entra num grupo exclusivo para tirar dúvidas e receber orientações."],
  ["Como recebo meu acesso após a compra?", "O acesso é enviado ao seu e-mail logo após a confirmação do pagamento."],
];

function Badges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
      <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-highlight" /> Pagamento seguro</span>
      <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-highlight" /> Acesso imediato</span>
      <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-highlight" /> Grupo VIP</span>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden bg-background pb-24 text-foreground md:pb-0">
      {/* Hero */}
      <section className="relative px-4 pb-14 pt-10" style={{ background: "radial-gradient(ellipse at top, oklch(0.6 0.25 25 / 35%), transparent 60%)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-center">
            <p className="font-display text-lg uppercase tracking-widest text-primary">Método ZN · TikTok Shop</p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              Aprenda a vender pelo <span className="neon-text text-primary">TikTok Shop</span>, mesmo começando do zero!
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Aprenda a divulgar produtos, criar vídeos estratégicos e ganhar comissões como afiliado, <strong className="text-foreground">sem precisar ter estoque</strong>.
            </p>
            <div className="mt-8 rounded-3xl border-2 border-primary bg-card p-6 shadow-glow sm:p-8">
              <p className="flex items-center justify-center gap-2 font-display uppercase text-highlight"><Flame className="h-5 w-5" /> Oferta especial</p>
              <p className="mt-2 text-lg font-bold uppercase">Treinamento completo + acompanhamento no Grupo VIP</p>
              <p className="mt-2 font-display text-3xl uppercase text-highlight sm:text-4xl">Por menos de R$ 100,00!</p>
            </div>
            <div className="mt-8 flex justify-center"><Cta>Quero entrar no Método ZN agora!</Cta></div>
            <div className="mt-6"><Badges /></div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal text-center font-display text-3xl uppercase sm:text-4xl">O que você vai <span className="text-primary">aprender</span></h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((b) => (
              <div key={b.t} className="reveal rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-glow">
                <b.icon className="h-9 w-9 text-primary" />
                <h3 className="mt-4 font-bold uppercase">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video tour */}
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="reveal text-center md:text-left">
            <h2 className="font-display text-3xl uppercase sm:text-4xl">Veja <span className="text-primary">por dentro</span></h2>
            <p className="mt-3 text-muted-foreground">Confira como é a área do Método ZN antes de entrar.</p>
          </div>
          <video src={tourVideo.url} className="reveal mx-auto max-h-[80vh] w-full max-w-sm rounded-3xl border border-primary shadow-glow" autoPlay muted loop playsInline controls preload="auto" aria-label="Vídeo de apresentação do Método ZN" />
        </div>
      </section>

      {/* Differential */}
      <section className="px-4 py-16">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border-2 border-primary bg-card p-8 shadow-glow sm:p-12">
          <h2 className="text-center font-display text-3xl uppercase sm:text-4xl">Você não vai estar <span className="text-primary">sozinho</span> nessa jornada!</h2>
          <p className="mt-4 text-center text-muted-foreground">Ao entrar no Método ZN, você terá:</p>
          <ul className="mt-6 space-y-3">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {i}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Offer */}
      <section className="px-4 py-16" style={{ background: "radial-gradient(ellipse at center, oklch(0.6 0.25 25 / 30%), transparent 70%)" }}>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="font-display text-xl uppercase text-highlight">🔥 Oferta especial</p>
          <h2 className="mt-2 font-display text-3xl uppercase sm:text-5xl">Todo o treinamento + acompanhamento no Grupo VIP</h2>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Por apenas</p>
          <p className="neon-text font-display text-7xl text-foreground sm:text-8xl">{PRICE}</p>
          <p className="mt-2 font-display text-2xl uppercase text-highlight">Menos de R$ 100,00!</p>
          <div className="mt-8 flex justify-center"><Cta>Sim! Quero meu acesso agora!</Cta></div>
          <div className="mt-5"><Badges /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal text-center font-display text-3xl uppercase sm:text-4xl">Perguntas <span className="text-primary">frequentes</span></h2>
          <div className="mt-8 space-y-3">
            {faq.map(([q, a], i) => (
              <div key={q} className="reveal rounded-2xl border border-border bg-card">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                  <span className="min-w-0">{q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="px-5 pb-5 text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase sm:text-5xl">Seu próximo passo pode ser o começo de uma <span className="neon-text text-primary">nova oportunidade!</span></h2>
          <p className="mt-4 text-muted-foreground">Comece hoje a aprender a trabalhar com TikTok Shop usando o Método ZN.</p>
          <div className="mt-8 flex justify-center"><Cta>Quero começar agora!</Cta></div>
          <div className="mt-5"><Badges /></div>
        </div>
      </section>

      {/* Mobile floating CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={CHECKOUT_URL} className="shadow-glow flex items-center justify-center rounded-xl bg-primary py-4 font-display text-lg uppercase text-primary-foreground">
          Quero meu acesso · {PRICE}
        </a>
      </div>
    </main>
  );
}
