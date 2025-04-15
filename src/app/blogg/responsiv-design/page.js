import React from 'react';
import '@/app/styles/Blog.css';
import '@/app/styles/globals.css';

const BlogPost = () => {
  return (
    <main className="main">
      <article className="blog-post-container">
        <div className="blog-post-content">
          <h1>Responsiv Design: En Nödvändighet för Moderna Webbplatser</h1>
          <p className="blog-date">Mars 1, 2024</p>
          
          <div className="blog-text">
            <p>
              I en värld där människor använder allt från smartphones och surfplattor 
              till laptops och smarta TV-apparater för att surfa på nätet, har det 
              blivit avgörande att webbplatser fungerar och ser bra ut på alla typer 
              av enheter. Responsiv design är inte längre en trend – det är en nödvändighet.
            </p>

            <h2>Vad är responsiv design?</h2>
            <p>
              Responsiv webbdesign handlar om att skapa webbsidor som automatiskt 
              anpassar sig efter användarens skärmstorlek och enhet. Istället för att 
              bygga separata webbplatser för mobil, surfplatta och dator, använder 
              responsiv design ett enda kodbas som flexibelt anpassas med hjälp av CSS 
              Media Queries, flexibla rutnät (grids) och skalbara bilder.
            </p>

            <h2>Varför är responsiv design så viktig?</h2>
            
            <h3>1. Mobilanvändning dominerar</h3>
            <p>
              Över 60 % av all internettrafik sker via mobila enheter. En webbplats 
              som inte fungerar bra på mobil riskerar att tappa majoriteten av sina besökare.
            </p>

            <h3>2. Bättre användarupplevelse</h3>
            <p>
              Responsiv design ger en smidig och konsekvent upplevelse oavsett enhet. 
              Detta minskar studsfrekvensen (bounce rate) och ökar chansen att användare 
              stannar kvar och interagerar med innehållet.
            </p>

            <h3>3. SEO-fördelar</h3>
            <p>
              Google prioriterar mobilvänliga webbplatser i sina sökresultat. En responsiv 
              webbplats förbättrar alltså inte bara användarupplevelsen, utan även din 
              synlighet i sökmotorer.
            </p>

            <h3>4. Framtidssäker lösning</h3>
            <p>
              Med responsiv design behöver du inte oroa dig varje gång en ny enhet släpps 
              på marknaden. Designen är flexibel nog att anpassas till framtida skärmstorlekar.
            </p>

            <h2>Hur implementerar man responsiv design?</h2>

            <h3>1. Använd ett flexibelt rutnätsystem</h3>
            <p>
              CSS Grid och Flexbox är kraftfulla verktyg för att skapa layouter som kan 
              anpassas efter olika skärmstorlekar. Dessa tekniker hjälper till att 
              strukturera innehåll på ett sätt som enkelt kan omformas.
            </p>

            <div className="code-block">
              <pre>
                <code>
{`.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}
                </code>
              </pre>
            </div>

            <h3>2. Media Queries</h3>
            <p>
              Dessa gör det möjligt att applicera olika stilar beroende på skärmens 
              bredd, höjd eller enhetstyp.
            </p>

            <div className="code-block">
              <pre>
                <code>
{`@media (max-width: 600px) {
  body {
    font-size: 16px;
  }
}`}
                </code>
              </pre>
            </div>

            <h3>3. Använd skalbara enheter</h3>
            <p>
              Undvik att använda fasta pixlar. Istället kan du använda relativa enheter 
              som procent, em eller rem. Detta gör innehållet mer flexibelt.
            </p>

            <div className="code-block">
              <pre>
                <code>
{`img {
  max-width: 100%;
  height: auto;
}`}
                </code>
              </pre>
            </div>

            <h3>4. Tänk mobil först ("mobile-first")</h3>
            <p>
              Designa för små skärmar först och bygg sedan upp för större enheter. Det 
              gör att du fokuserar på det mest väsentliga och ger en bättre upplevelse 
              för mobilanvändare.
            </p>

            <h3>5. Testa på flera enheter</h3>
            <p>
              Använd verktyg som Chrome DevTools, Responsinator eller BrowserStack för 
              att se hur din webbplats ser ut och fungerar på olika enheter och skärmstorlekar.
            </p>

            <h2>Sammanfattning</h2>
            <p>
              Responsiv design är inte bara ett tekniskt krav – det är en grundförutsättning 
              för att skapa moderna, användarvänliga och konkurrenskraftiga webbplatser. 
              Genom att implementera en responsiv strategi förbättrar du inte bara 
              användarupplevelsen, utan också din synlighet i sökresultat och din 
              långsiktiga digitala hållbarhet.
            </p>

            <div className="conclusion">
              <p>
                Vill du att din webbplats ska vara redo för framtiden? Då är responsiv 
                design inte ett val – det är ett måste.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost; 