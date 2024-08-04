"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [certificatesExpanded, setCertificatesExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setExperienceExpanded(true);
        setEducationExpanded(true);
        setSkillsExpanded(true);
        setCertificatesExpanded(true);
      } else if (window.innerWidth >= 1024) {
        setExperienceExpanded(false);
        setEducationExpanded(false);
        setSkillsExpanded(false);
        setCertificatesExpanded(false);
      }
    };

    handleResize(); // Call the function initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="md:w-1/3 lg:w-1/4">
        <div className="bg-muted p-8 rounded-lg">
          <div className="flex items-center gap-4">
            <Avatar className="h-[120px] w-[120px]">
              <AvatarImage src="/silas1.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold">Silas Kaae Klaveness</h2>
              <p className="text-lg">pokesilas@gmail.com</p>
              <p className="text-lg">+47 45786703</p>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h3
              className="text-xl font-semibold mb-3 cursor-pointer flex items-center"
              onClick={() => setExperienceExpanded(!experienceExpanded)}
            >
              {experienceExpanded ? (
                <FaChevronDown className="mr-2" />
              ) : (
                <FaChevronRight className="mr-2" />
              )}
              Jobberfaring
            </h3>
            {experienceExpanded && (
              <div className="space-y-4 transition-all duration-300">
                <div>
                  <h4 className="text-lg font-medium">Kaiarbeider</h4>
                  <p className="text-sm font-bold text-muted-foreground">
                    COLOR LINE AS AVD SANDEFJORD (25.05.2023 - 15.08.2023)
                  </p>
                  <p className="text-base">
                    Jobbet som kaimedarbeider der jeg var med på å fortøye båten
                    og handterte fartøy som skulle med båten.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    Undervisningsassistent
                  </h4>
                  <p className="text-sm font-bold text-muted-foreground">
                    MENTORNORGE AS (26.01.2023 - 31.12.2023)
                  </p>
                  <p className="text-base">
                    Jobbet som undervisningsassistent online i IT, Matte 1T og
                    Kjemi 1
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Butikkselger</h4>
                  <p className="text-sm font-bold text-muted-foreground">
                    NARVESEN BUTIKKEN 461 (31.07.2022 - 31.08.2022)
                  </p>
                  <p className="text-base">
                    Jobbet som buttikselger, der jeg behandlet kunder og tok
                    hand om varebeholdningen.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Restaurantmedarbeider</h4>
                  <p className="text-sm font-bold text-muted-foreground">
                    MCDONALDS FOKSERØD AVD 6 (09.04.2022 - 13.12.2022)
                  </p>
                  <p className="text-base">
                    Jobbet som restaurantmedarbeider der jeg lagde mat og
                    utførte kundeservice.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Lagermedarbeider</h4>
                  <p className="text-sm font-bold text-muted-foreground">
                    PEPPER NORGE AS (01.12.2021 - 31.01.2022)
                  </p>
                  <p className="text-base">
                    Jobbet med å sortere klær og gjøre klar til utsending til
                    nettbuttik og fysisk butikk
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Førstegangstjeneste</h4>
                  <p className="text-sm font-bold text-muted-foreground">
                    Forsvaret (07.08.2023 - Present)
                  </p>
                  <p className="text-base">
                    Jeg er i ingeniørbataljonen som befinner seg på Skjold Leir.
                    Her er jeg i en tropp som heter båt og dykk, der min rolle
                    er å være båtfører/reservenavigatør.
                  </p>
                </div>
              </div>
            )}
          </div>
          <Separator className="my-6" />
          <div>
            <h3
              className="text-xl font-semibold mb-3 cursor-pointer flex items-center"
              onClick={() => setEducationExpanded(!educationExpanded)}
            >
              {educationExpanded ? (
                <FaChevronDown className="mr-2" />
              ) : (
                <FaChevronRight className="mr-2" />
              )}
              Utdanning
            </h3>
            {educationExpanded && (
              <div className="space-y-4 transition-all duration-300">
                <div>
                  <h4 className="text-lg font-medium">
                    Sandefjord videregående skole
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Realfag, Vg3 2022 - 2023 Bestått
                  </p>
                </div>
              </div>
            )}
          </div>
          <Separator className="my-6" />
          <div>
            <h3
              className="text-xl font-semibold mb-3 cursor-pointer flex items-center"
              onClick={() => setSkillsExpanded(!skillsExpanded)}
            >
              {skillsExpanded ? (
                <FaChevronDown className="mr-2" />
              ) : (
                <FaChevronRight className="mr-2" />
              )}
              Nøkkelegenskaper
            </h3>
            {skillsExpanded && (
              <div className="flex flex-wrap gap-3 transition-all duration-300">
                <Badge variant="outline">Punktlighet</Badge>
                <Badge variant="outline">Fleksibel</Badge>
                <Badge variant="outline">Selvstendig</Badge>
                <Badge variant="outline">Løsningsorientert</Badge>
                <Badge variant="outline">Effektiv</Badge>
                <Badge variant="outline">Organisert</Badge>
                <Badge variant="outline">Problemløser</Badge>
                <Badge variant="outline">Teamorientert</Badge>
                <Badge variant="outline">Ansvarsbevisst</Badge>
              </div>
            )}
          </div>
          <Separator className="my-6" />
          <div>
            <h3
              className="text-xl font-semibold mb-3 cursor-pointer flex items-center"
              onClick={() => setCertificatesExpanded(!certificatesExpanded)}
            >
              {certificatesExpanded ? (
                <FaChevronDown className="mr-2" />
              ) : (
                <FaChevronRight className="mr-2" />
              )}
              Sertifikater
            </h3>
            {certificatesExpanded && (
              <div className="space-y-4 transition-all duration-300">
                <div>
                  <h4 className="text-lg font-medium">
                    Bilsertifikat (Automat)
                  </h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    Nasjonal Grunnutdanning For Vektere
                  </h4>
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    Truckførerlappen (T1-T4)
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:w-2/3 lg:w-3/4">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Om meg</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Jeg er 19 år gammel og tjenestegjør nå for tiden i
                ingeniørbataljonen i militæret. Jeg er en aktiv og dedikert
                person som søker jobb under permisjon og etter fullført
                førstegangstjeneste. Mine interesser inkluderer fysisk trening,
                programmering, matlaging, sosialt samvær og fotball. Jeg har
                førerkort for automatgir og tilgang til egen bil. <br></br>
                <br></br>Jeg er kjent for å være positivt innstilt, presis,
                ansvarsfull og villig til å lære og tilpasse meg nye
                situasjoner. Med høy arbeidsmoral og gode sosiale antenner,
                evner jeg å yte under stressende situasjoner og ta initiativ.
                <br></br>
                <br></br>
                Jeg er alltid ivrig etter å lære nye ting og ta på meg nye
                utfordringer for å fremme min karriere. Mine erfaringer har lært
                meg viktigheten av ansvar, nøyaktighet og evnen til å jobbe både
                selvstendig og som en del av et team. Jeg er motivert og klar
                til å bidra med mine ferdigheter og egenskaper i en ny og
                spennende rolle.
              </p>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-2xl">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline">
                      Engelsk - flytende muntlig/skriftlig
                    </Badge>
                    <Badge variant="outline">Norsk - flytende</Badge>
                    <Badge variant="outline">Dansk - forstår </Badge>
                    <Badge variant="outline">Svensk - forstår det meste</Badge>
                    <Badge variant="outline">Spansk - kan litt</Badge>
                    {/* Add more languages as needed */}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
