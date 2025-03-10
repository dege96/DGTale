import React from 'react';
import '@/app/styles/Blog.css';

const BlogPost = () => {
  return (
    <article className="blog-post-container">
      <div className="blog-post-content">
        <h1>Vikten av en Hemsida för Småföretag</h1>
        <p className="blog-date">Januari 15, 2024</p>
        
        <div className="blog-text">
          <p>
            I dagens digitala samhälle är en välutvecklad hemsida avgörande för småföretag. 
            När majoriteten av konsumenter vänder sig till internet för att hitta information 
            och produkter, blir en hemsida ett kraftfullt verktyg för att marknadsföra 
            verksamheten, öka kännedomen och omvandla besökare till kunder. Att skapa en 
            skräddarsydd och modern webbplats som speglar företagets identitet är en 
            investering som ger långsiktig avkastning.
          </p>

          <h2>Statistik som understryker vikten av webbdesign</h2>
          
          <div className="stat-box">
            <h3>Webbdesign och köpbeslut (92,6%)</h3>
            <p>
              Nästan alla köpare säger att en webbplats design påverkar deras köpbeslut. 
              Detta understryker vikten av att ha en visuellt tilltalande, användarvänlig 
              och responsiv design för att maximera konverteringar.
            </p>
          </div>

          <div className="stat-box">
            <h3>Trovärdighet baserat på webbdesign (75%)</h3>
            <p>
              En stor majoritet av konsumenterna bedömer ett varumärkes trovärdighet baserat 
              på dess webbplatsdesign. Dålig design kan skada varumärkets rykte, medan en 
              professionell design bygger förtroende.
            </p>
          </div>

          <div className="stat-box">
            <h3>Avhopp på grund av oattraktiv design (38%)</h3>
            <p>
              Över en tredjedel av användarna lämnar en webbplats om de tycker att designen 
              är oattraktiv. Detta visar hur viktigt det är att investera i estetik, layout 
              och funktionalitet för att behålla besökare och minska avvisningsfrekvensen.
            </p>
          </div>

          <h2>Varför Småföretag Behöver en Hemsida</h2>
          <p>
            En professionell hemsida är mer än bara ett digitalt visitkort – det är en 
            grundläggande plattform för att bygga trovärdighet, öka synligheten online och 
            skapa en direkt kanal till både befintliga och potentiella kunder. Genom att 
            erbjuda en smidig och engagerande upplevelse kan du säkerställa att din 
            verksamhet sticker ut i dagens konkurrensutsatta marknad.
          </p>

          <h2>Skapa Ett Bestående Intryck</h2>
          <p>
            Hemsidan är ofta det första mötet mellan ditt företag och potentiella kunder. 
            En professionellt utformad webbplats signalerar trovärdighet och seriositet, 
            samtidigt som den fångar besökarens uppmärksamhet och väcker deras intresse. 
            Med en design som är anpassad efter företagets unika behov och mål kan du skapa 
            en positiv och minnesvärd upplevelse som leder till större kundlojalitet och 
            högre försäljning.
          </p>

          <h2>Fördelar med en Skräddarsydd Hemsida</h2>
          <p>
            En specialanpassad hemsida erbjuder flera strategiska fördelar som kan hjälpa 
            ditt företag att lyckas:
          </p>
          
          <ul>
            <li>
              <strong>Unik Design:</strong> Istället för generiska mallar kan du få en 
              design som återspeglar ditt varumärkes personlighet och värderingar. Detta 
              gör att ditt företag skiljer sig från konkurrenterna och lämnar ett starkt 
              intryck.
            </li>
            <li>
              <strong>Sökmotoroptimering (SEO):</strong> En skräddarsydd hemsida gör det 
              möjligt att optimera innehållet för sökmotorer. Genom att använda relevanta 
              sökord och skapa kvalitativt innehåll kan du öka din synlighet i sökresultat 
              och attrahera fler besökare.
            </li>
            <li>
              <strong>Användarvänlighet:</strong> En logisk struktur och enkel navigering 
              skapar en positiv upplevelse för användarna. Responsiv design som fungerar 
              på alla enheter, från datorer till mobiltelefoner, ökar tillgängligheten 
              och engagerar en bredare publik.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 