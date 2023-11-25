// DeveloperTeam.js
import React from "react";
import linkedin from "../assets/Icons/icon-linkedin.svg";
import instagram from "../assets/Icons/icon-instagram.svg";
import github from "../assets/Icons/icon-github.svg";
import Image from "next/image";

const developers = [
  {
    name: "Gustavo Luche",
    github: "https://github.com/GustavoLuche",
    linkedin: "https://www.linkedin.com/in/gustavoluche/",
    instagram: "https://www.instagram.com/gustavo_luche/",
    photoURL:
      "https://media.licdn.com/dms/image/D4D03AQEoSb5iN0J-9A/profile-displayphoto-shrink_800_800/0/1681698959464?e=1706140800&v=beta&t=-2DTv67z2YQwyeKu2si-YoMr-g-Mpz-Ycw1WAnd6KGk",
  },
  {
    name: "Ian Correia",
    github: "https://github.com/IanDesc",
    linkedin: "https://www.linkedin.com/in/ian-da-silva-correia-804707208/",
    instagram: "https://www.instagram.com/ian_sem_sono/",
    photoURL:
      "https://media.licdn.com/dms/image/C4E03AQG4O-zwbnO6cA/profile-displayphoto-shrink_800_800/0/1654231312916?e=1706140800&v=beta&t=oKZUI3Jsg4L5G073gMvj9lzRZpeitklg9gc40RtB01Y",
  },
  {
    name: "Kainã Richalski",
    github: "https://github.com/krichalski",
    linkedin: "https://www.linkedin.com/in/kainarichalski/",
    instagram: "https://www.instagram.com/kainarichalski/",
    photoURL:
      "https://media.licdn.com/dms/image/D4D03AQEyi5yJSqasTg/profile-displayphoto-shrink_800_800/0/1694438922971?e=1706140800&v=beta&t=92VJ8SZCTpD5KtTLCig_2o6ZxBnTMqRabBWec1DEhVs",
  },
  {
    name: "Matheus Peres",
    github: "https://github.com/matheuspmb",
    linkedin: "https://www.linkedin.com/in/matheuspmb6378/",
    instagram: "https://www.instagram.com/matheuspmb_/",
    photoURL:
      "https://media.licdn.com/dms/image/D4D03AQFGLPUG40ORuA/profile-displayphoto-shrink_800_800/0/1677604178514?e=1706140800&v=beta&t=pU1I79eZ2mUwAoxJaVfsIBezb76kIdEyqKf_mmaUK2Q",
  },
];

const DeveloperTeam = () => {
  return (
    <div className="mx-auto py-8 sm:py-16 lg:py-32">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Nossa Equipe de Desenvolvedores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.map((developer, index) => (
          <div key={index} className="text-center">
            <img
              src={developer.photoURL} // Adicione URLs reais para as imagens
              alt={developer.name}
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg text-black font-semibold mb-2">
              {developer.name}
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <Image src={github} className="w-6 h-6" />
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <Image src={linkedin} className="w-6 h-6" />
              </a>
              <a
                href={developer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                <Image src={instagram} className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperTeam;
