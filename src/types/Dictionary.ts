export interface HeaderDictionary {
  HeaderTitle: string
  NavInit: string
  NavExperiences: string
  NavBeneficios: string
}
export interface AboutUsDictionary {
  AboutTitle: string
  FirstParagraph: string
  SecondParagraph: string
}
export interface ExperienceDictionary {
  ExperiencesTitle: string
  ExperiencesIntro?: string
  ExperiencesImg: string
  ExperiencesDesc: string
}
export interface BoutiqueDictionary {
  boutiqueTitle: string
  boutiqueDesc: string
}
export interface BeneficiosDictionary {
  BeneficiosTitle: string
  BeneficiosDesc: string
  BeneficiosRentLogo: string
}
export interface FooterDictionary {
  FooterRights: string
  FooterContact: string
}

export interface Dictionary {
  title: string
  header: HeaderDictionary
  aboutUs: AboutUsDictionary
  experiencesUco: ExperienceDictionary[]
  experiencesBoutiqueUco: ExperienceDictionary[]
  boutiqueUco: BoutiqueDictionary

  experiencesLujan: ExperienceDictionary[]
  experiencesBoutiqueLujan: ExperienceDictionary[]
  boutiqueLujan: BoutiqueDictionary

  experiencesMaipu: ExperienceDictionary[]
  experiencesBoutiqueMaipu: ExperienceDictionary[]
  boutiqueMaipu: BoutiqueDictionary

  experiencesPotrerillos: ExperienceDictionary[]

  experiencesMas: ExperienceDictionary[]
  masTitle: string

  beneficios: BeneficiosDictionary

  footer: FooterDictionary
}
