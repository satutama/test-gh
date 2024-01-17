import { IPResponse } from './ip-address-tracker.service';

export const MOCK_API: IPResponse = {
  ip: '178.84.86.148',
  location: {
    country: 'NL',
    region: 'Provincie Zuid-Holland',
    city: 'Rotterdam-Albrandswaard',
    lat: 51.86902,
    lng: 4.41994,
    postalCode: '3165',
    timezone: '+01:00',
    geonameId: 11525000,
  },
  as: {
    asn: 33915,
    name: 'TNF-AS',
    route: '178.84.0.0/16',
    domain: 'http://www.vodafone.nl/zakelijk/',
    type: 'Cable/DSL/ISP',
  },
  isp: 'Vodafone Ziggo',
};

export const OTHER_MOCK_API: IPResponse = {
  ip: '178.84.86.212',
  location: {
    country: 'FR',
    region: 'Provincie Noord-Holland',
    city: 'Amsterdam',
    lat: 51.56902,
    lng: 4.41994,
    postalCode: '3165',
    timezone: '+01:00',
    geonameId: 11525000,
  },
  as: {
    asn: 33915,
    name: 'TNF-AS',
    route: '178.84.0.0/16',
    domain: 'http://www.vodafone.nl/zakelijk/',
    type: 'Cable/DSL/ISP',
  },
  isp: 'Vodafone Ziggo',
};
