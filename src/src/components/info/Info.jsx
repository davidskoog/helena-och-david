import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className="info" id="praktisk-information">
      <div className="container">
        <h2>Praktisk information</h2>

        <div className="two-columns">
          <ul>
            <li>
              <h3>Plats</h3>
              <p>
                Bröllopet äger rum i Almedal, på mkmedias kontor, där både
                vigsel och fest hålls.
              </p>
            </li>
            <li>
              <h3>Hitta hit</h3>
              <p>
                Adress: Gamla Almedalsv. 3A
                <br />
                Spårvagnshållsplats: Almedal
                <br />
                Parkering: Finns i närheten
              </p>
            </li>
            <li>
              <h3>OSA</h3>
              <p>Svar önskas senast 6 juni till Helena eller David.</p>
            </li>
            <li>
              <h3>Mat och allergier</h3>
              <p>
                Meddela eventuella allergier eller specialkost i samband med
                OSA.
              </p>
            </li>
            <li>
              <h3>Klädsel</h3>
              <p>Klä er sommarfint och festligt – och ta med dansskorna!</p>
            </li>
            <li>
              <h3>Barnfritt</h3>
              <p>
                Vi älskar era små, men denna dag är för vuxna. Ammande barn är
                självklart välkomna.
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Hålla tal?</h3>
              <p>
                Har du något du vill säga, sjunga eller överraska med under
                kvällen? Kontakta våra fantastiska toastmasters senast den 6
                augusti, så hjälper de till att planera kvällen på bästa sätt!
              </p>
            </li>
            <li>
              <h3>Toastmasters</h3>
              <p>
                <strong>Linda Ruhwald</strong>
                <br />
                Tel: <a href="tel:+46703456889">070-345 68 89</a>
                <br />
                E-post: <a href="mailto:liru@liljewall.se">liru@liljewall.se</a>
              </p>
              <p>
                <strong>Mattias Modh</strong>
                <br />
                Tel: <a href="tel:+46708632670">070-863 26 70</a>
                <br />
                E-post:{' '}
                <a href="mailto:mattias.modh@engelhardt.se">
                  mattias.modh@engelhardt.se
                </a>
              </p>
            </li>
            <li>
              <h3>Gåvor</h3>
              <p>
                Er närvaro är det viktigaste för oss, men om ni ändå vill ge
                något blir vi jätteglada för bidrag till vår bröllopsresa – det
                går fint att swisha på plats. Har ni istället en sak ni gärna
                vill ge, så blir vi förstås lika glada för det!
              </p>
            </li>
            <li>
              <h3>Hashtag</h3>
              <p>
                Vi vill se kvällen genom era ögon – fota, dela och använd:{' '}
                <strong>#helenaochdavid2025</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
