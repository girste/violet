# Boilerplate Sito Ultra Leggero

Un boilerplate per siti web semplici e modificabili con DECAP CMS.

## Caratteristiche

- ✅ Sito statico ultra leggero
- ✅ DECAP CMS per modificare contenuti senza toccare il codice
- ✅ Modificabile: testi, immagini, metadati, favicon, OG tags
- ✅ Sezione blog opzionale
- ✅ Responsive design
- ✅ SEO ottimizzato

## Setup

1. **Deploy su Netlify/Vercel/altro hosting**
2. **Configura Git Gateway** (per Netlify)
3. **Carica le immagini** nella cartella `/assets/`
4. **Accedi all'admin** su `/admin/` del tuo sito

## Struttura File

```
├── index.html              # Pagina principale
├── style.css               # Stili CSS
├── admin/
│   ├── config.yml          # Configurazione DECAP CMS
│   └── index.html          # Interfaccia admin
├── _data/                  # File di configurazione modificabili
│   ├── site.yml            # Impostazioni generali
│   ├── hero.yml            # Sezione hero
│   ├── about.yml           # Chi siamo
│   ├── services.yml        # Servizi
│   ├── contact.yml         # Contatti
│   └── footer.yml          # Footer
├── _posts/                 # Articoli blog (opzionale)
└── assets/                 # Immagini e favicon
```

## Come Modificare i Contenuti

1. Vai su `tuosito.com/admin/`
2. Accedi con Netlify Identity
3. Modifica i contenuti dall'interfaccia visuale
4. Le modifiche vengono salvate automaticamente

## Immagini da Sostituire

Carica queste immagini nella cartella `/assets/`:

- `logo.png` - Logo del sito
- `favicon.ico` - Favicon
- `og-image.jpg` - Immagine per social media
- `hero-image.jpg` - Immagine principale
- `about-image.jpg` - Immagine sezione "Chi siamo"
- `service1.jpg`, `service2.jpg`, `service3.jpg` - Icone servizi

## Note Tecniche

- Nessuna dipendenza da framework pesanti
- Codice HTML/CSS/JS pulito e modificabile
- Compatibile con tutti gli hosting statici
- Mobile-first design