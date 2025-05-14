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
                Adress:{' '}
                <a href="https://www.google.se/maps/place/Gamla+Almedalsv%C3%A4gen,+412+63+G%C3%B6teborg/@57.6870945,11.9985216,198m/data=!3m1!1e3!4m6!3m5!1s0x464ff3a2c020f22f:0x1da9d9e98bee0776!8m2!3d57.687048!4d11.9988513!16s%2Fg%2F11c43tv1m9?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D">
                  Gamla Almedalsv. 3A
                </a>
                <br />
                Spårvagnshållsplats:{' '}
                <a href="https://www.google.com/maps/place/G%C3%B6teborg+Almedal/@57.6872004,11.9970057,19.71z/data=!4m6!3m5!1s0x464ff3a2f454901d:0xa8b81f94a62ed5d9!8m2!3d57.68717!4d11.99702!16s%2Fg%2F11dyk6w46?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D">
                  Almedal
                </a>
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
                Har du något du vill säga, sjunga eller överraska oss med under
                kvällen? Kontakta då våra fantastiska toastmasters senast den 6
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
