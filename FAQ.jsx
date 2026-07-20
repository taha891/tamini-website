import{useState}from"react";
const _services_icons="data:image/jpeg;base64,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";
const N="#0B1F4D",G="#6EC026";

const F={
  fr:{
    title:"Questions fréquentes",
    sub:"Toutes les réponses sur l'assurance Takaful, nos produits, les sinistres et notre modèle. Vous ne trouvez pas votre réponse ? Écrivez-nous sur WhatsApp.",
    searchPh:"Rechercher une question...",
    cats:[
      {id:"takaful",label:"Le Takaful",icon:"🕌"},
      {id:"produits",label:"Nos produits",icon:"🛡️"},
      {id:"sinistres",label:"Sinistres",icon:"⚡"},
      {id:"paiement",label:"Paiement & Devis",icon:"💳"},
      {id:"compte",label:"Compte & Digital",icon:"📱"},
      {id:"groupe",label:"Tamini Group",icon:"🌍"},
    ],
    items:{
      takaful:[
        {q:"C'est quoi le Takaful ?",a:"Le Takaful est une assurance islamique fondée sur la solidarité mutuelle. Vos cotisations alimentent un fonds commun destiné à protéger tous les participants. Contrairement à l'assurance classique, ce modèle exclut l'intérêt (Riba), la spéculation (Maysir) et l'incertitude excessive (Gharar)."},
        {q:"L'assurance est-elle halal ou haram ?",a:"L'assurance conventionnelle pose question pour de nombreux savants en raison du Riba et du Gharar qu'elle comporte. Le Takaful résout ce problème en mutualisant les cotisations dans un fonds solidaire, sans intérêt, sous supervision d'un comité Charia — c'est pourquoi Tamini est certifié par le comité Al-Azhar."},
        {q:"Quelle différence entre Takaful et assurance classique ?",a:"Dans l'assurance classique, l'excédent du fonds devient le profit de la compagnie. Dans le Takaful, cet excédent est redistribué aux participants (55%) et à l'opérateur (45%) selon le modèle Mudaraba. Vous êtes copropriétaire du fonds, pas seulement client."},
        {q:"Comment fonctionne la redistribution du surplus ?",a:"Chaque année, si le fonds Takaful dégage un excédent après paiement de tous les sinistres, une partie est reversée aux participants éligibles. En 2025, Tamini a redistribué 38 millions FDJ à ses membres."},
        {q:"Qui certifie la conformité Charia de Tamini ?",a:"Tamini opère sous la supervision d'un comité Charia et applique une certification alignée sur les standards internationaux, incluant une validation Al-Azhar pour la structuration Wakala/Mudaraba de nos produits."},
      ],
      produits:[
        {q:"Quels produits d'assurance proposez-vous ?",a:"11 produits au total : Automobile, Habitation, Voyage, Éducation, Personnel & Groupe pour les particuliers ; Multirisque Pro, Maritime, RC Générale, Flotte, Chantier et Garantie de Bonne Exécution pour les entreprises."},
        {q:"L'assistance routière est-elle incluse dans l'assurance auto ?",a:"Oui, sans supplément, sur toutes nos formules auto. Dépannage et remorquage 24h/24 et 7j/7, partout à Djibouti."},
        {q:"Une attestation de voyage pour visa, en combien de temps ?",a:"Généralement sous 24 heures ouvrées après validation de votre dossier. Contactez-nous sur WhatsApp pour une demande urgente."},
        {q:"Proposez-vous une assurance pour les PME ?",a:"Oui — la Multirisque Professionnelle couvre locaux, stocks et équipements, avec des formules adaptées de la petite boutique à la grande entreprise."},
        {q:"Qu'est-ce que la Garantie de Bonne Exécution (Performance Bond) ?",a:"C'est une garantie Takaful qui certifie à un donneur d'ordre (public ou privé) que vous exécuterez votre marché dans les conditions prévues — essentielle pour répondre aux appels d'offres."},
      ],
      sinistres:[
        {q:"Comment déclarer un sinistre ?",a:"Trois options : via notre assistant WhatsApp (77 09 41 41), en agence, ou par téléphone (21 35 04 03). Photos et description des faits suffisent pour démarrer le dossier."},
        {q:"Quels documents fournir pour un sinistre auto ?",a:"Carte grise, permis de conduire, constat ou rapport de police si applicable, et photos des dommages. Notre équipe vous guide selon votre situation."},
        {q:"Quel est le délai moyen de règlement ?",a:"Notre cadence de règlement atteint 65%, contre ~18% pour le marché. La majorité des dossiers simples sont traités en 2 à 3 semaines."},
        {q:"Puis-je suivre l'état de mon dossier de sinistre ?",a:"Oui, via WhatsApp ou en contactant votre agence. Un espace de suivi en ligne est en cours de déploiement."},
      ],
      paiement:[
        {q:"Comment obtenir un devis ?",a:"Le plus rapide : WhatsApp au 77 09 41 41 (particuliers) ou 77 23 92 92 (entreprises). Notre assistant répond généralement en moins de 5 minutes."},
        {q:"Quels sont vos moyens de paiement ?",a:"Espèces en agence, virement bancaire, et mobile money (WAAFI). Le paiement en ligne est en cours de déploiement."},
        {q:"Puis-je payer en plusieurs fois ?",a:"Des formules de paiement échelonné existent pour certains produits — demandez à votre conseiller lors du devis."},
      ],
      compte:[
        {q:"Ai-je besoin d'un compte pour souscrire ?",a:"Non, la souscription se fait directement avec un conseiller, en agence ou via WhatsApp. Un espace client digital est en développement pour l'auto-service (attestations, suivi de sinistres)."},
        {q:"Comment obtenir une attestation d'assurance ?",a:"Contactez votre agence ou notre WhatsApp commercial. Une génération d'attestation en libre-service arrive prochainement."},
        {q:"Le site est-il disponible en arabe ?",a:"Oui, le site est disponible en français, anglais et arabe — cliquez sur le sélecteur de langue en haut de la page."},
      ],
      groupe:[
        {q:"Tamini est-elle présente hors de Djibouti ?",a:"Oui — le groupe Tamini est présent à Djibouti (siège), en Somaliland (Hargeisa), au Kenya (65% de Takaful Insurance of Africa) et en Ouganda (première licence Takaful du pays, mars 2026)."},
        {q:"Puis-je souscrire une assurance dans un autre pays du groupe ?",a:"Chaque filiale opère selon la réglementation locale. Contactez le siège à Djibouti qui vous orientera vers la bonne entité."},
      ],
    },
  },
  en:{
    title:"Frequently Asked Questions",
    sub:"All the answers on Takaful insurance, our products, claims and our model. Can't find your answer? Message us on WhatsApp.",
    searchPh:"Search a question...",
    cats:[
      {id:"takaful",label:"Takaful",icon:"🕌"},
      {id:"produits",label:"Our Products",icon:"🛡️"},
      {id:"sinistres",label:"Claims",icon:"⚡"},
      {id:"paiement",label:"Payment & Quotes",icon:"💳"},
      {id:"compte",label:"Account & Digital",icon:"📱"},
      {id:"groupe",label:"Tamini Group",icon:"🌍"},
    ],
    items:{
      takaful:[
        {q:"What is Takaful?",a:"Takaful is Islamic insurance based on mutual solidarity. Your contributions feed a common fund designed to protect all participants. Unlike conventional insurance, this model excludes interest (Riba), speculation (Maysir) and excessive uncertainty (Gharar)."},
        {q:"Is insurance halal or haram?",a:"Conventional insurance raises concerns for many scholars due to Riba and Gharar. Takaful solves this by pooling contributions in a solidarity fund, interest-free, under Sharia committee supervision — which is why Tamini is certified by the Al-Azhar committee."},
        {q:"What's the difference between Takaful and conventional insurance?",a:"In conventional insurance, the fund surplus becomes company profit. In Takaful, this surplus is redistributed to participants (55%) and the operator (45%) under the Mudaraba model. You co-own the fund, not just a customer."},
        {q:"How does surplus redistribution work?",a:"Every year, if the Takaful fund generates a surplus after all claims are paid, part is returned to eligible participants. In 2025, Tamini redistributed 38 million DJF to its members."},
        {q:"Who certifies Tamini's Sharia compliance?",a:"Tamini operates under Sharia committee supervision and applies certification aligned with international standards, including Al-Azhar validation for the Wakala/Mudaraba structuring of our products."},
      ],
      produits:[
        {q:"What insurance products do you offer?",a:"11 products in total: Motor, Home, Travel, Education, Personal & Group for individuals; Business Multi-risk, Marine, General Liability, Fleet, Construction and Performance Bond for businesses."},
        {q:"Is roadside assistance included in motor insurance?",a:"Yes, at no extra cost, on all our motor plans. 24/7 breakdown and towing service, anywhere in Djibouti."},
        {q:"How long for a travel visa attestation?",a:"Typically within 24 business hours after file validation. Contact us on WhatsApp for urgent requests."},
        {q:"Do you offer insurance for SMEs?",a:"Yes — Business Multi-risk covers premises, stock and equipment, with plans adapted from small shops to large enterprises."},
        {q:"What is a Performance Bond?",a:"It's a Takaful guarantee certifying to a contracting authority (public or private) that you will execute your contract as agreed — essential for tender bids."},
      ],
      sinistres:[
        {q:"How do I file a claim?",a:"Three options: via our WhatsApp assistant (77 09 41 41), in-agency, or by phone (21 35 04 03). Photos and a description of events are enough to start the file."},
        {q:"What documents are needed for a car claim?",a:"Vehicle registration, driving license, police report if applicable, and photos of damage. Our team guides you based on your situation."},
        {q:"What is the average settlement time?",a:"Our settlement rate reaches 65%, versus ~18% market average. Most straightforward claims are processed within 2-3 weeks."},
        {q:"Can I track my claim status?",a:"Yes, via WhatsApp or by contacting your agency. An online tracking portal is being deployed."},
      ],
      paiement:[
        {q:"How do I get a quote?",a:"Fastest way: WhatsApp 77 09 41 41 (individuals) or 77 23 92 92 (business). Our assistant typically replies within 5 minutes."},
        {q:"What payment methods do you accept?",a:"Cash in-agency, bank transfer, and mobile money (WAAFI). Online payment is being deployed."},
        {q:"Can I pay in installments?",a:"Installment plans exist for certain products — ask your advisor when getting your quote."},
      ],
      compte:[
        {q:"Do I need an account to subscribe?",a:"No, subscription is handled directly with an advisor, in-agency or via WhatsApp. A digital client portal is in development for self-service (attestations, claims tracking)."},
        {q:"How do I get an insurance certificate?",a:"Contact your agency or our business WhatsApp. Self-service certificate generation is coming soon."},
        {q:"Is the website available in Arabic?",a:"Yes, the site is available in French, English and Arabic — click the language selector at the top of the page."},
      ],
      groupe:[
        {q:"Is Tamini present outside Djibouti?",a:"Yes — the Tamini group is present in Djibouti (HQ), Somaliland (Hargeisa), Kenya (65% of Takaful Insurance of Africa) and Uganda (country's first Takaful license, March 2026)."},
        {q:"Can I subscribe to insurance in another group country?",a:"Each subsidiary operates under local regulation. Contact the Djibouti HQ, who will direct you to the right entity."},
      ],
    },
  },
};

export default function FAQPage(){
  const[lang,setLang]=useState("fr");
  const[cat,setCat]=useState("takaful");
  const[open,setOpen]=useState(0);
  const[q,setQ]=useState("");
  const t=F[lang];

  const allItems = Object.entries(t.items).flatMap(([c,arr])=>arr.map(it=>({...it,cat:c})));
  const filtered = q.trim() ? allItems.filter(it=>it.q.toLowerCase().includes(q.toLowerCase())||it.a.toLowerCase().includes(q.toLowerCase())) : t.items[cat];

  return(
    <div style={{fontFamily:"'Inter',system-ui,sans-serif",color:"#1E293B",background:"#fff",minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');*{box-sizing:border-box}`}</style>

      {/* Hero with real photo */}
      <div style={{position:"relative",background:N,padding:"64px 24px 48px",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${_services_icons})`,backgroundSize:"cover",backgroundPosition:"center 20%",opacity:.18}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(7,16,40,.92), rgba(11,31,77,.85))"}}/>
        <div style={{position:"absolute",top:20,right:24,display:"flex",borderRadius:8,overflow:"hidden",border:"1px solid rgba(255,255,255,.2)",zIndex:2}}>
          {["fr","en"].map(l=><button key={l} onClick={()=>setLang(l)} style={{padding:"6px 14px",border:"none",fontSize:12,fontWeight:700,cursor:"pointer",background:lang===l?G:"transparent",color:"#fff"}}>{l.toUpperCase()}</button>)}
        </div>
        <div style={{position:"relative",zIndex:2,maxWidth:700,margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:800,color:"#fff",marginBottom:14}}>{t.title}</h1>
          <p style={{fontSize:14.5,color:"rgba(255,255,255,.65)",lineHeight:1.7,marginBottom:28}}>{t.sub}</p>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder={t.searchPh} style={{width:"100%",maxWidth:440,padding:"14px 20px",borderRadius:50,border:"none",fontSize:14,outline:"none"}}/>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"40px 24px 80px"}}>
        {/* Category tabs (hidden during search) */}
        {!q.trim()&&(
          <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:36}}>
            {t.cats.map(c=>(
              <button key={c.id} onClick={()=>{setCat(c.id);setOpen(0)}} style={{
                padding:"10px 20px",borderRadius:50,border:"2px solid",cursor:"pointer",fontSize:13.5,fontWeight:700,
                background:cat===c.id?N:"#fff",color:cat===c.id?"#fff":"#64748b",borderColor:cat===c.id?N:"#e2e8f0",
                display:"flex",alignItems:"center",gap:6,
              }}><span>{c.icon}</span>{c.label}</button>
            ))}
          </div>
        )}

        {/* FAQ items with schema-ready structure */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {filtered.length===0&&<p style={{textAlign:"center",color:"#94a3b8",padding:40}}>{lang==="fr"?"Aucun résultat. Essayez WhatsApp !":"No results. Try WhatsApp!"}</p>}
          {filtered.map((f,i)=>(
            <div key={i} itemScope itemType="https://schema.org/Question" style={{background:"#F8FAFF",borderRadius:14,border:"1px solid #e8ecf0",overflow:"hidden"}}>
              <button onClick={()=>setOpen(open===i?-1:i)} style={{width:"100%",padding:"18px 22px",background:"none",border:"none",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",textAlign:"left"}}>
                <span itemProp="name" style={{fontSize:14.5,fontWeight:700,color:N}}>{f.q}</span>
                <span style={{fontSize:20,color:G,transform:open===i?"rotate(45deg)":"none",transition:"transform .2s",flexShrink:0,marginLeft:12}}>+</span>
              </button>
              {open===i&&(
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" style={{padding:"0 22px 20px"}}>
                  <p itemProp="text" style={{fontSize:14,color:"#475569",lineHeight:1.75}}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp fallback CTA */}
        <div style={{marginTop:40,textAlign:"center",padding:"32px 24px",background:N,borderRadius:18}}>
          <p style={{color:"#fff",fontSize:15,fontWeight:600,marginBottom:16}}>{lang==="fr"?"Vous ne trouvez pas votre réponse ?":"Can't find your answer?"}</p>
          <button onClick={()=>window.open(`https://wa.me/25377094141?text=${encodeURIComponent(lang==="fr"?"Bonjour, j'ai une question":"Hello, I have a question")}`,"_blank")} style={{padding:"13px 28px",background:G,color:"#fff",border:"none",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"}}>
            {lang==="fr"?"💬 Discuter sur WhatsApp":"💬 Chat on WhatsApp"}
          </button>
        </div>
      </div>
    </div>
  );
}
