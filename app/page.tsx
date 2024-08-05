"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Component() {
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [certificatesExpanded, setCertificatesExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setExperienceExpanded(false);
      setEducationExpanded(false);
      setSkillsExpanded(false);
      setCertificatesExpanded(false);
    };

    handleResize(); // Call the function initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto p-4 space-y-4 md:space-y-10 md:space-x-4 md:mt-10">
      <aside className="md:w-1/4 space-y-4">
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mt-12 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <AvatarImage src="/silas1.png" alt="Profile Picture" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          <div className="text-center mt-10 md:mt-12 lg:mt-14">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Silas Kaae Klaveness
            </h2>
            <p className="text-muted-foreground md:text-lg lg:text-xl">
              pokesilas@gmail.com
            </p>
            <p className="text-muted-foreground md:text-lg lg:text-xl">
              +47 45786703
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setExperienceExpanded(!experienceExpanded)}
          >
            {experienceExpanded ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            Jobberfaring
          </Button>
          {experienceExpanded && (
            <div className="space-y-4 transition-all duration-300">
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Kaiarbeider
                </h4>
                <p className="text-sm font-bold text-muted-foreground md:text-base lg:text-lg">
                  COLOR LINE AS AVD SANDEFJORD (25.05.2023 - 15.08.2023)
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Jobbet som kaimedarbeider der jeg var med på å fortøye båten
                  og handterte fartøy som skulle med båten.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Undervisningsassistent
                </h4>
                <p className="text-sm font-bold text-muted-foreground md:text-base lg:text-lg">
                  MENTORNORGE AS (26.01.2023 - 31.12.2023)
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Jobbet som undervisningsassistent online i IT, Matte 1T og
                  Kjemi 1
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Butikkselger
                </h4>
                <p className="text-sm font-bold text-muted-foreground md:text-base lg:text-lg">
                  NARVESEN BUTIKKEN 461 (31.07.2022 - 31.08.2022)
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Jobbet som buttikselger, der jeg behandlet kunder og tok hand
                  om varebeholdningen.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Restaurantmedarbeider
                </h4>
                <p className="text-sm font-bold text-muted-foreground md:text-base lg:text-lg">
                  MCDONALDS FOKSERØD AVD 6 (09.04.2022 - 13.12.2022)
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Jobbet som restaurantmedarbeider der jeg lagde mat og utførte
                  kundeservice.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Lagermedarbeider
                </h4>
                <p className="text-sm font-bold text-muted-foreground md:text-base lg:text-lg">
                  PEPPER NORGE AS (01.12.2021 - 31.01.2022)
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Jobbet med å sortere klær og gjøre klar til utsending til
                  nettbuttik og fysisk butikk
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Førstegangstjeneste
                </h4>
                <p className="text-sm font-bold text-muted-foreground md:text-base lg:text-lg">
                  Forsvaret (07.08.2023 - Present)
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Jeg er i ingeniørbataljonen som befinner seg på Skjold Leir.
                  Her er jeg i en tropp som heter båt og dykk, der min rolle er
                  å være båtfører/reservenavigatør.
                </p>
              </div>
            </div>
          )}
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setEducationExpanded(!educationExpanded)}
          >
            {educationExpanded ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            Utdanning
          </Button>
          {educationExpanded && (
            <div className="space-y-4 transition-all duration-300">
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Sandefjord videregående skole
                </h4>
                <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                  Realfag, Vg3 2022 - 2023 Bestått
                </p>
              </div>
            </div>
          )}
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setSkillsExpanded(!skillsExpanded)}
          >
            {skillsExpanded ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            Nøkkelegenskaper
          </Button>
          {skillsExpanded && (
            <div className="flex flex-wrap gap-3 transition-all duration-300">
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Punktlighet
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Fleksibel
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Selvstendig
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Løsningsorientert
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Effektiv
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Organisert
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Problemløser
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Teamorientert
              </Badge>
              <Badge variant="outline" className="md:text-lg lg:text-xl">
                Ansvarsbevisst
              </Badge>
            </div>
          )}
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setCertificatesExpanded(!certificatesExpanded)}
          >
            {certificatesExpanded ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            Sertifikater
          </Button>
          {certificatesExpanded && (
            <div className="space-y-4 transition-all duration-300">
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Bilsertifikat (Automat)
                </h4>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Nasjonal Grunnutdanning For Vektere
                </h4>
              </div>
              <div>
                <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                  Truckførerlappen (T1-T4)
                </h4>
              </div>
            </div>
          )}
        </div>
      </aside>
      <main className="md:w-3/4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl lg:text-3xl">
              Om meg
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base md:text-lg lg:text-xl">
              Jeg er 19 år gammel og tjenestegjør nå for tiden i
              ingeniørbataljonen i militæret. Jeg er en aktiv og dedikert person
              som søker jobb under permisjon og etter fullført
              førstegangstjeneste. Mine interesser inkluderer fysisk trening,
              programmering, matlaging, sosialt samvær og fotball. Jeg har
              førerkort for automatgir og tilgang til egen bil.
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Jeg er kjent for å være positivt innstilt, presis, ansvarsfull og
              villig til å lære og tilpasse meg nye situasjoner. Med høy
              arbeidsmoral og gode sosiale antenner, evner jeg å yte under
              stressende situasjoner og ta initiativ.
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Jeg er alltid ivrig etter å lære nye ting og ta på meg nye
              utfordringer for å fremme min karriere. Mine erfaringer har lært
              meg viktigheten av ansvar, nøyaktighet og evnen til å jobbe både
              selvstendig og som en del av et team. Jeg er motivert og klar til
              å bidra med mine ferdigheter og egenskaper i en ny og spennende
              rolle.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl lg:text-3xl">
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline" className="md:text-lg lg:text-xl">
              Engelsk - flytende muntlig/skriftlig
            </Badge>
            <Badge variant="outline" className="md:text-lg lg:text-xl">
              Norsk - flytende
            </Badge>
            <Badge variant="outline" className="md:text-lg lg:text-xl">
              Dansk - forstår
            </Badge>
            <Badge variant="outline" className="md:text-lg lg:text-xl">
              Svensk - forstår det meste
            </Badge>
            <Badge variant="outline" className="md:text-lg lg:text-xl">
              Spansk - kan litt
            </Badge>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
