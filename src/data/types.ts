export type Slug = string;

export interface FAQ {
  q: string;
  a: string;
}

export interface CityInfo {
  slug: Slug;
  name: string;
  region: string;
  state: string;
  isNational: boolean;
  intro: string;
  areas: string[];
  /** Practical, location-specific relocation considerations. */
  notes: string[];
  /** Route slugs (national routes) this city appears in. */
  routes: string[];
  faqs: FAQ[];
}

export interface NationalRouteInfo {
  slug: Slug;
  from: string;
  to: string;
  km: number;
  time: string;
  intro: string;
  tips: string[];
  included: string[];
  faqs: FAQ[];
}

export interface DestinationInfo {
  slug: Slug;
  name: string;
  km: number;
  hours: string;
  intro: string;
}

export interface ServiceInfo {
  slug: Slug;
  name: string;
  h1: string;
  short: string;
  bullets: string[];
  process: string[];
  whoFor: string[];
  included: string[];
  faqs: FAQ[];
  related: string[];
}

export interface BlogPost {
  slug: Slug;
  title: string;
  description: string;
  date: string;
  minutes: number;
  body: string[];
}
