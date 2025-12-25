import React from 'react';
import Button from '../button/Button';
import './InfoFromWedding.css';
import Icon from '../icon/Icon';
import Card from '../card/Card';

const InfoFromWedding = () => {
  return (
    <div className="info-from-wedding" id="allt-fran-brollopsdagen">
      <div className="container container--wide">
        <h2>Allt från bröllopsdagen</h2>
        <div className="grid">
          <Card
            title="Se bilder från bröllopet"
            text="<p>Här hittar du alla våra bröllopsbilder – från de romantiska
              porträtten till ögonblicken under vigseln, middagen och alla
              fantastiska tal. Och självklart: de legendariska bilderna från vår
              photobooth!</p><p>Klicka dig vidare till vår Dropbox-mapp där allt ligger samlat och
              uppdelat i olika mappar. Välj helt enkelt den kategori du vill se
              och bläddra i bilderna i lugn och ro. Och ja – det går såklart bra
              att ladda ner bilderna om du vill spara dem och återuppleva dagen
              igen (utöver i minnet!)."
            ctaLabel="Gå till bildmappen"
            ctaUrl="https://www.dropbox.com/scl/fo/kfjaiapkubpiscbsp1h8x/AP2SQEhBiDQrYXYPZExm2XE?rlkey=34oyw4a5xxkhwmh81innkp5i2&st=n1zfiv10&dl=0"
            inverted
          />
          <Card
            title="Vår bröllops&shy;folder"
            text="<p>Glömt vilken rätt som serverades – eller vem du egentligen satt bredvid? Här kan du ladda ner vår bröllopsfolder med all information från dagen: tider och plats, vår historia, festens upplägg och andra små praktiska detaljer.</p>"
            ctaLabel="Ladda ner bröllopsfolder"
            ctaUrl="/files/brollopsfolder.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoFromWedding;
