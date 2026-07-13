# Osnovna škola Ljubljanica — web stranica

Moderna, responzivna (mobile-first) web stranica za **Osnovnu školu Ljubljanica** u Zagrebu
— *„Mala škola, velikog srca.“*

Statička stranica (HTML / CSS / JavaScript, bez ovisnosti o build alatima) izrađena prema
vizualnom identitetu škole: brendirana paleta boja, logotip s motivom kule, drveta, brežuljka
i vode te tipografija **Poppins**.

## ✨ Značajke

- 📱 **Potpuno responzivno** — prilagođeno mobitelima, tabletima i računalima (breakpointi na 1000 / 860 / 720 / 460 px)
- 🎨 **Brendirani dizajn** — boje `#1E3A5F`, `#4C8C5A`, `#8DB7E3`, `#F2B54A`, `#F2F2F2`
- 🏰 **SVG logotip i ilustracije** — sve slike izrađene su kao lagane vektorske grafike u bojama škole
- 🍔 **Mobilna navigacija** s hamburger izbornikom
- ✳️ **Suptilne animacije** pri skrolanju (uz poštivanje `prefers-reduced-motion`)
- ♿ Pristupačna semantika, `aria` oznake i dobar kontrast
- ⚡ Bez vanjskih ovisnosti (osim Google Fonts za Poppins)

## 📄 Stranice

| Datoteka | Sadržaj |
|---|---|
| `index.html` | Naslovnica — hero, statistika, vrijednosti, novosti |
| `skola.html` | O školi — misija, vizija, povijest (vremenska crta), djelatnici |
| `nastava.html` | Razredna i predmetna nastava, produženi boravak, izvannastavne aktivnosti |
| `upisi.html` | Upisi u prvi razred — koraci, dokumentacija |
| `galerija.html` | Fotogalerija (brendirane ilustracije) |
| `kontakt.html` | Kontakt podaci, karta i obrazac za poruku |

## 🗂 Struktura

```
.
├── index.html
├── skola.html
├── nastava.html
├── upisi.html
├── galerija.html
├── kontakt.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/{logo.svg, favicon.svg}
```

## 🚀 Pokretanje lokalno

Nije potreban build. Otvorite `index.html` u pregledniku ili poslužite mapu:

```bash
python3 -m http.server 8080
# pa otvorite http://localhost:8080
```

## 🌐 Objava na GitHub Pages

1. **Settings → Pages**
2. *Source:* `Deploy from a branch`
3. Odaberite granu (npr. `claude/lucid-carson-flsl73` ili `main`) i mapu `/ (root)`
4. Spremite — stranica će biti dostupna na `https://<korisnik>.github.io/<repozitorij>/`

## ℹ️ Napomena o sadržaju

Tekstualni sadržaj (povijest, kontakt, programi) temelji se na javno dostupnim informacijama
o Osnovnoj školi Ljubljanica u Zagrebu. Sve slike na stranici su originalne SVG ilustracije
izrađene u vizualnom identitetu škole. Obrazac za kontakt je demonstracijski (bez pozadinske obrade).

## 📇 Podaci o školi

- **Adresa:** Svetoivanska 33, 10110 Zagreb
- **Telefon:** 01 3694 704 · 01 3633 920
- **E-pošta:** ljubljanica@os-ljubljanica-zg.skole.hr
- **Osnivač:** Grad Zagreb
