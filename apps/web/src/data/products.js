/**
 * Portfolio produits Medicalex — source : PDF portfolio fabricants.
 *
 * Structure (conforme au PDF) :
 *   Produits → Fournisseur → « Par spécialité » (spécialités médicales)
 *                            → « Par type »      (types de produit)
 *
 * Chaque produit est enregistré UNE SEULE FOIS (productList) et référencé
 * par plusieurs specialtyGroups / typeGroups via productIds. Un même produit
 * peut donc apparaître dans plusieurs spécialités et plusieurs types sans
 * duplication d'enregistrement.
 *
 * Images démo : apps/web/public/catalog-demo/{supplierId}/_products/{productSlug}.svg|jpg|png
 * Remplacez ces fichiers pour afficher des visuels authentiques (même nom de fichier).
 */

export const CATALOG_DEMO_PATH = '/catalog-demo';
export const CATALOG_DEMO_FS_HINT =
  'apps/web/public/catalog-demo/{fournisseur}/_products/{produit}.svg|jpg|png';

const LOGO = {
  'karl-storz':
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/153411f6235aa3a281f7cd747e45e8a0.jpg',
  erbe: 'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/7cc152a20acb3a0c5dd912df7d96df8b.jpg',
  rocamed:
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/b55251f6864851c3adbe9070d6b42ee6.png',
  integra:
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/6723005268cf6fbc19f3ad080d49257f.jpg',
  schmitz:
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/6dfc251e313107680f354968e21c3e00.jpg',
  'dr-mach':
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/abb4680e9a6e34a84ec16293f1ae4ee0.jpg',
};

/** @typedef {{ id: string, slug: string, name: string, ref: string, description: string, applications: string, technical: string, sourceUrl: string }} Product */
/** @typedef {{ id: string, slug: string, titleFr: string, titleEn: string, productIds: string[] }} Group */
/** @typedef {{ id: string, slug: string, name: string, shortName: string, logo: string, focus: {fr:string,en:string}, specialties: {fr:string,en:string}, sourceUrl: string, productList: Product[], specialtyGroups: Group[], typeGroups: Group[] }} Supplier */

/** @type {Supplier[]} */
export const suppliers = [
  {
    id: 'karl-storz',
    slug: 'karl-storz',
    name: 'KARL STORZ',
    shortName: 'Karl Storz',
    logo: LOGO['karl-storz'],
    focus: {
      fr: 'Endoscopie, imagerie et intégration de salles d’opération',
      en: 'Endoscopy, imaging and OR integration',
    },
    specialties: {
      fr: 'Urologie, gynécologie, ORL, bronchoscopie, chirurgie générale/viscérale et autres disciplines',
      en: 'Urology, gynecology, ENT, bronchoscopy, general/visceral surgery and other disciplines',
    },
    sourceUrl: 'https://www.karlstorz.com/dz/fr/index.htm',
    productList: [
      {
        id: 'image1-s-connect-ii',
        slug: 'image1-s-connect-ii',
        name: 'IMAGE1 S CONNECT II',
        ref: 'TC201FR',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/image1_s_connect_ii_3642757-JN4Mj.webp',
        description:
          'Unité de caméra universelle et modulaire pour endoscopie rigide et flexible, avec sortie 4K, traitement numérique et compatibilité avec les modules Link, les technologies S, la 3D et la fluorescence.',
        applications:
          'Chirurgie générale, viscérale, thoracique, gynécologie, urologie, ORL et disciplines multi-applications.',
        technical:
          'Sorties jusqu’à 3840 × 2160; compatibilité AIDA via interface dédiée; enregistrement image JPEG et vidéo MPEG-4.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?cat=1000071971&productID=1000095709',
      },
      {
        id: 'image1-s-4u-rubina',
        slug: 'image1-s-4u-rubina',
        name: 'IMAGE1 S 4U RUBINA, OPAL1 NIR/ICG',
        ref: 'TH121',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/image1_s_4u_rubina_th121-2PXZv.webp',
        description:
          'Tête de caméra 4K native dédiée à l’imagerie NIR/ICG, avec modes Overlay, Monochromatic et Intensity Map. Elle s’intègre à la plateforme IMAGE1 S et aux optiques Rubina.',
        applications:
          'Chirurgie générale et viscérale, thoracique, ORL, gynécologie, pédiatrie, urologie.',
        technical:
          '3840 × 2160; CMOS double capteur; zoom numérique 3x; Technologies S CLARA, CHROMA, SPECTRA A/B.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000108831',
      },
      {
        id: 'tipcam1-rubina-0',
        slug: 'tipcam1-rubina-0',
        name: 'TIPCAM1 RUBINA 0° OPAL1 NIR/ICG 4K 3D',
        ref: '26606ACA',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/tipcam1_rubina_26606aca-CzbrP.webp',
        description:
          'Vidéo-endoscope « all-in-one » combinant 4K, 3D et NIR/ICG dans un seul instrument, avec contrôle automatique de l’horizon et bascule 3D/2D.',
        applications:
          'Laparoscopie et chirurgie mini-invasive dans les disciplines compatibles avec la chaîne Rubina.',
        technical:
          'Ø 10,3 mm; longueur utile 317 mm; 0°; capteur CMOS double; 50/60 Hz; autoclavable.',
        sourceUrl:
          'https://www.karlstorz.com/dz/en/product-detail-page.htm?cat=1000071971&productID=1000108797',
      },
      {
        id: 'tipcam1-rubina-30',
        slug: 'tipcam1-rubina-30',
        name: 'TIPCAM1 RUBINA 30° OPAL1 NIR/ICG 4K 3D',
        ref: '26616BCA',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/tipcam1_rubina26616bca-KyAy3.webp',
        description:
          'Version 30° de la vidéo-optique TIPCAM1 Rubina pour visualisation 4K/3D et fluorescence NIR/ICG.',
        applications:
          'Laparoscopie et chirurgie mini-invasive nécessitant une vision oblique.',
        technical:
          'Ø 10,3 mm; longueur utile 320 mm; 30°; 4K; NIR/ICG avec Power LED Rubina.',
        sourceUrl:
          'https://www.karlstorz.com/fr/en/product-detail-page.htm?cat=1000161016&productID=1000144318',
      },
      {
        id: 'power-led-rubina',
        slug: 'power-led-rubina',
        name: 'POWER LED RUBINA, OPAL1 NIR/ICG',
        ref: 'TL400',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/power_led_rubina_tl400-w7ZTi.webp',
        description:
          'Source de lumière LED froide pour lumière blanche, NIR/ICG et fluorescence en proche infrarouge. Elle fournit une intensité lumineuse stable et une interface tactile.',
        applications: 'Chaînes d’imagerie Rubina en chirurgie et endoscopie.',
        technical:
          'Technologie LED; NIR/ICG; durée de vie annoncée 30 000 h; faible niveau sonore.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000194405&productID=1000108833',
      },
      {
        id: 'rubina-lens-exoscope',
        slug: 'rubina-lens-exoscope',
        name: 'RUBINA LENS, EXOSCOPE NIR/ICG 90°',
        ref: 'TH020',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rubina_lens_th020-8MkRy.webp',
        description:
          'Exoscope 2D destiné à la lumière blanche et au NIR/ICG en chirurgie ouverte, avec large champ de vision et distance de travail flexible.',
        applications: 'Chirurgie ouverte et microchirurgie interdisciplinaire.',
        technical:
          '90°; format 16:9; distance de travail 10-30 cm; utilisation manuelle ou sur support; autoclavable.',
        sourceUrl:
          'https://www.karlstorz.com/ae/en/product-detail-page.htm?cat=1000071971&productID=1000144754',
      },
      {
        id: 'vitom-eagle',
        slug: 'vitom-eagle',
        name: 'VITOM EAGLE',
        ref: 'TH201',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_oblique_th201-3p4gW.webp',
        description:
          'Exoscope 3D 4K haute résolution pour chirurgie ouverte et microchirurgie, avec options de fluorescence NIR/ICG, BLI/5-ALA et fluorescéine.',
        applications:
          'Microchirurgie, chirurgie ouverte, ORL, neurochirurgie, chirurgie générale et autres applications.',
        technical:
          '4K; 3D stéréo; zoom 6x optique + 2x numérique; distance de travail 20-50 cm.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000144756',
      },
      {
        id: 'tele-pack-plus',
        slug: 'tele-pack-plus',
        name: 'TELE PACK+',
        ref: 'TP101',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_front_tp101-1-01BId.webp',
        description:
          'Système vidéo-endoscopique portable tout-en-un intégrant écran tactile FULL HD, source LED, gestion des données patient et fonctions de stockage/réseau.',
        applications:
          'Cabinet, ambulatoire, ORL, bronchoscopie, petites procédures et environnement hospitalier.',
        technical:
          'Écran 18,5"; LED; 2 entrées caméra; compatibilité avec endoscopes rigides, flexibles et à usage unique.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000108843',
      },
      {
        id: 'telecam-c3',
        slug: 'telecam-c3',
        name: 'TELECAM C3',
        ref: 'TC100',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/telecam-c3_tc100-5mV4Z.webp',
        description:
          'Unité de commande caméra FULL HD pour endoscopie rigide, flexible et à usage unique, avec saisie des données patient et stockage interne/USB.',
        applications: 'Nombreuses disciplines; cabinet privé et bloc opératoire.',
        technical:
          '1920 × 1080; 2 connexions caméra X-Line/C-Line; mémoire interne jusqu’à 50 Go; LAN et USB.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000108827',
      },
      {
        id: 'or1-avm-air',
        slug: 'or1-avm-air',
        name: 'OR1 .avm / OR1 AIR',
        ref: 'WO301',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/or1-avm-system_wo301-pdWbL.webp',
        description:
          'Solution compacte d’intégration du bloc opératoire, basée sur OR1 .avm et AIDA, pour distribution vidéo, documentation et communication audiovisuelle.',
        applications:
          'Bloc opératoire intégré; salles à espace limité; architecture OR1 AIR.',
        technical:
          '4K UHD/3D/FULL HD; 5 entrées 12G-SDI et 6 sorties; HDMI 2.0; audio bidirectionnel; maintenance à distance.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?cat=1000071971&productID=1000136653',
      },
      {
        id: 'aida',
        slug: 'aida',
        name: 'AIDA',
        ref: 'WD300',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/aida_wd300-2BK6H.webp',
        description:
          'Solution de documentation pour salle d’examen et bloc opératoire, intégrable avec les infrastructures hospitalières et les systèmes SIH/archivage.',
        applications: 'Documentation chirurgicale multi-spécialités.',
        technical:
          '2 sources; FULL HD à 4K UHD; 2D/3D; DICOM et HL7; commandes vocales; 2 To annoncés.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000160941&productID=1000136652',
      },
      {
        id: 'aida-c',
        slug: 'aida-c',
        name: 'AIDA C',
        ref: 'WD310',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/aida-c_wd310-OIRQW.webp',
        description:
          'Version allégée pour documentation à partir d’une source visuelle, en FULL HD et 2D, avec interface DICOM.',
        applications:
          'Salles d’examen et blocs opératoires nécessitant une documentation simplifiée.',
        technical: 'SD/HD/FULL HD; DICOM; 1 source; 1 To annoncé.',
        sourceUrl:
          'https://www.karlstorz.com/de/fr/product-detail-page.htm?cat=1000071971&productID=1000136654',
      },
      {
        id: 'optic-hopkins-0-4mm',
        slug: 'optic-hopkins-0-4mm',
        name: 'OPTIC HOPKINS 0° 4 mm / 30 cm',
        ref: '27005AA',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/hopkins_telescope_27005aa-Q2LWF.webp',
        description:
          'Optique HOPKINS 0° grand champ pour endoscopie rigide, avec traitement antireflet.',
        applications: 'Laparoscopie et endoscopie rigide selon configuration.',
        technical: 'Ø 4 mm; longueur utile 30 cm; 0°; grand champ; autoclavable.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000105474',
      },
      {
        id: 'optic-hopkins-30-29mm',
        slug: 'optic-hopkins-30-29mm',
        name: 'OPTIC HOPKINS 30° 2,9 mm',
        ref: '27020BA',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/hopkins-telescope_27020ba-1orTW.webp',
        description:
          'Optique HOPKINS 30° de petit diamètre destinée aux applications nécessitant une optique fine et une vision oblique.',
        applications: 'Endoscopie rigide et applications mini-invasives.',
        technical: 'Ø 2,9 mm; longueur utile 30 cm; 30°; autoclavable.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000144268',
      },
      {
        id: 'flex-x2s-set',
        slug: 'flex-x2s-set',
        name: 'FLEX-X2S URETERO-RENOSCOPE SET',
        ref: '11278AUK1',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/uretero-reno-fiberscope-flex-x2s-3oDRX.webp',
        description:
          'Urétéro-néphroscope flexible à double capacité de fibres, à gaine fine et double béquillage contraposé pour accéder aux calices complexes et traiter les calculs difficiles.',
        applications: 'Urétéroscopie flexible, chirurgie des calculs rénaux.',
        technical:
          'Gaine 7,5 Fr; canal opérateur 3,6 Fr; longueur utile 67 cm; béquillage 270°/270°.',
        sourceUrl:
          'https://www.karlstorz.com/dz/en/product-detail-page.htm?cat=1000111992&productID=1000134007',
      },
      {
        id: 'ureteroscope-8ch',
        slug: 'ureteroscope-8ch',
        name: 'Urétéroscope, 8 Charr., 34 cm',
        ref: '27001KK',
        description:
          'Urétéro-néphroscope fin permettant un travail stable et ergonomique. Son diamètre de chemise réduit, son canal opérateur large et sa pointe distale atraumatique facilitent l’introduction dans l’uretère et permettent un traitement simple et atraumatique.',
        applications:
          'Urologie et procédures d’urétéroscopie et de néphroscopie nécessitant un instrument fin, une introduction aisée dans l’uretère et un canal opérateur adapté.',
        technical:
          'Longueur utile : 34 cm; direction de visée : 6°; pointe distale : 7 Charr.; chemise d’instrument : 8–12 Charr.; canal opérateur : 5 Charr.; oculaire : coudé; autoclavable : oui; conduction de la lumière : fibre optique; raccord d’irrigation : 2 raccords latéraux; instruments utilisables : inférieur à 4 Charr.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000144306&cat=1000151735',
      },
      {
        id: 'ureteroscope-set-95ch',
        slug: 'ureteroscope-set-95ch',
        name: 'Urétéroscope, set, 9,5 Charr., 34 cm',
        ref: '27002KK',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ureteroscope_27002k-sie8I.webp',
        images: [
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ureteroscope-27002k-4wUxc.webp',
        ],
        description:
          'Urétéro-néphroscope fin offrant un diamètre de chemise réduit et un canal opérateur large. Sa pointe distale atraumatique facilite l’introduction dans l’uretère et contribue à un travail stable et ergonomique.',
        applications:
          'Urologie et procédures d’urétéroscopie et de néphroscopie nécessitant un instrument fin avec un canal opérateur de plus grand diamètre.',
        technical:
          'Longueur utile : 34 cm; direction de visée : 6°; pointe distale : 8 Charr.; chemise d’instrument : 9,5–12 Charr.; canal opérateur : 6 Charr.; oculaire : coudé; autoclavable : oui; conduction de la lumière : fibre optique; raccord d’irrigation : 2 raccords latéraux; instruments utilisables : inférieur à 5 Charr.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000144299&cat=1000151735',
      },
      {
        id: 'ureteroscope-set-7ch',
        slug: 'ureteroscope-set-7ch',
        name: 'Urétéroscope, set, 7 Charr., 34 cm',
        ref: '27010KK',
        description:
          'Urétéroscope à diamètre minimal de chemise, avec canal d’irrigation séparé et canal opérateur permettant l’utilisation d’instruments et de sondes jusqu’à 3 Charr.',
        applications:
          'Urologie et procédures d’urétéroscopie nécessitant un instrument de faible diamètre et un canal opérateur adapté à des instruments fins.',
        technical:
          'Longueur utile : 34 cm; pointe distale : 7 Charr.; chemise d’instrument : conique, 8,4–9,9 Charr.; canal opérateur : 3,4 Charr.; oculaire : droit; autoclavable : oui; conduction de la lumière : fibre optique; raccord d’irrigation : 1; instruments utilisables : inférieur à 3 Charr.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000144282&cat=1000151735',
      },
      {
        id: 'ureteroscope-8ch-6deg',
        slug: 'ureteroscope-8ch-6deg',
        name: 'Urétéroscope, 8 Charr., 6°, 34 cm',
        ref: '27011KK',
        description:
          'Urétéroscope rigide de 34 cm avec pointe distale de 8 Charr., direction de visée de 6° et canal opérateur de 5 Charr., adapté aux procédures nécessitant une instrumentation fine.',
        applications:
          'Urologie et procédures d’urétéroscopie nécessitant une visualisation avec direction de visée de 6° et un canal opérateur de 5 Charr.',
        technical:
          'Longueur utile : 34 cm; direction de visée : 6°; pointe distale : 8 Charr.; chemise d’instrument : conique, 8–13,5 Charr.; canal opérateur : 5 Charr.; oculaire : droit; autoclavable : oui; conduction de la lumière : fibre optique; raccord d’irrigation : 2 raccords latéraux; instruments utilisables : inférieur à 4 Charr.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000144276&cat=1000151735',
      },
      {
        id: 'video-cystoscope-su',
        slug: 'video-cystoscope-su',
        name: 'VIDEO-CYSTOSCOPE FLEXIBLE À USAGE UNIQUE',
        ref: '0935308-20',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/video-cystoscope_flexible-single_use_0935308-20-hO38P.webp',
        description:
          'Vidéo-cystoscope flexible à usage unique, intégrable aux dispositifs existants et utilisable également pour une néphroscopie flexible antégrade peropératoire.',
        applications: 'Cystoscopie flexible et NLPC avec néphroscopie antégrade.',
        technical:
          'Béquillage 210°/210°; Ø extérieur 16 Ch; canal 6,6 Ch; longueur utile 38 cm; lumière intégrée.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000111972&productID=1000231497',
      },
      {
        id: 'video-bronchoscope-live-hd',
        slug: 'video-bronchoscope-live-hd',
        name: 'VIDÉO-BRONCHOSCOPE LIVE HD 5,5/2,0',
        ref: '11910DK',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/video-bronchoscope_live_11910d-Yp4AT.webp',
        description:
          'Vidéo-bronchoscope LIVE HD avec source LED intégrée dans la poignée, offrant éclairage homogène et restitution fidèle des couleurs.',
        applications: 'Bronchoscopie diagnostique et thérapeutique.',
        technical:
          'Ø distal 5,6 mm; canal opérateur 2,4 × 2 mm; longueur utile 60 cm; béquillage haut 200°/bas 140°.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?cat=1000071971&productID=1000118017',
      },
      {
        id: 'trophyscope-campo',
        slug: 'trophyscope-campo',
        name: 'TROPHYSCOPE CAMPO',
        ref: '26120BAC',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/campo_trophyscope_26120bac-WhMuk.webp',
        description:
          'Système d’hystéroscopie mini-invasive avec optique fine, introduction atraumatique et deux chemises Continuous-Flow pour instruments et électrodes.',
        applications:
          'Hystéroscopie diagnostique et opératoire, gynécologie ambulatoire.',
        technical:
          'Ø optique 3,7 mm; longueur utile 220 mm; 30°; instruments jusqu’à 7 Ch selon chemise.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000118784',
      },
      {
        id: 'drillcut-x-ii-35',
        slug: 'drillcut-x-ii-35',
        name: 'Pièce main shaver DRILLCUT-X II-35',
        ref: '40712035',
        imageUrl: 'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/drillcut-x-ii-35_shaver_handpiece_40712035-dXSKn.webp',
        description:
          'Pièce à main haute vitesse combinant fonctions de perçage et shaver pour interventions ORL nécessitant une abrasion osseuse intensive et précise.',
        applications: 'ORL, chirurgie sinusienne.',
        technical:
          '1 500 à 35 000 tr/min; jusqu’à 7 000 tr/min en mode shaver; interface de raccord rapide KARL STORZ.',
        sourceUrl:
          'https://www.karlstorz.com/gb/en/product-detail-page.htm?cat=1000246889&productID=1000138696',
      },
      {
        id: 'systeme-c-mac',
        slug: 'systeme-c-mac',
        name: 'SYSTÈME C-MAC',
        ref: 'C-MAC',
        description:
          "Plateforme unique réunissant sur un même écran vidéolaryngoscopes, endoscopes flexibles d’intubation (FIVE / FIVE S) et vidéo-stylet (C-MAC VS), pour une prise en charge complète des voies aériennes, du bloc opératoire à l’urgence pré-hospitalière. Imagerie Full HD, mode Picture-in-Picture et Side-by-Side pour comparer deux vues en temps réel. Documentation par enregistrement vidéo et micro intégré pour la formation des jeunes médecins et la traçabilité des intubations.",
        applications:
          "Bloc opératoire, unités de soins intensifs (USI), urgences et pré-hospitalier ; continuité des soins avec mêmes consommables et même écran d’un service à l’autre.",
        technical:
          "Compatible C-MAC HD Monitor, TELECAM C3, TELE PACK+ et POCKET MONITOR (usage nomade / urgence). Visualisation Full HD, modes Picture-in-Picture et Side-by-Side, micro intégré. Solution hybride : le bon mix réutilisable / usage unique selon le volume de procédures, la capacité de retraitement et le taux de rotation du service.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/index.htm',
      },
      {
        id: 'five-s-3-5',
        slug: 'five-s-3-5',
        name: 'FIVE S 3.5',
        ref: '091361-06',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/five-s-3.5_091361-06-YvQ0Z.webp',
        description:
          "Endoscope flexible d’intubation à usage unique, stérile dès livraison et prêt à l’emploi immédiat. Même standard d’image et de maniabilité que le FIVE réutilisable, sans coût de retraitement ni de réparation. Circuit de suction dédié sur toute la gamme.",
        applications:
          "Unités de soins intensifs pédiatriques (USIP), bloc opératoire, oncologie.",
        technical:
          "Ø externe 3,5 mm ; canal opérateur 1,2 mm ; longueur utile 65 cm ; déflexion haut/bas 180°/180°. Compatible Image 1S (X-LINK), TELECAM C3, TELE PACK+ et moniteur C-MAC. Emballage stérile individuel avec protection anti-chocs, aucun cycle de stérilisation à gérer.",
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000065193&cat=1000071971',
      },
      {
        id: 'five-s-5-3',
        slug: 'five-s-5-3',
        name: 'FIVE S 5.3',
        ref: '0915612-06',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/five-s-5.3_0915612-sRax5.webp',
        description:
          "Endoscope flexible d’intubation à usage unique, stérile dès livraison et prêt à l’emploi immédiat. Même standard d’image et de maniabilité que le FIVE réutilisable, sans coût de retraitement ni de réparation. Circuit de suction dédié sur toute la gamme.",
        applications:
          "Unités de soins intensifs (USI), bloc opératoire, oncologie, bronchoscopie.",
        technical:
          "Ø externe 5,3 mm ; canal opérateur 2,2 mm ; longueur utile 65 cm ; déflexion haut/bas 180°/180°. Compatible Image 1S (X-LINK), TELECAM C3, TELE PACK+ et moniteur C-MAC. Emballage stérile individuel avec protection anti-chocs, aucun cycle de stérilisation à gérer.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000134420&cat=1000071971',
      },
      {
        id: 'five-s-6-5',
        slug: 'five-s-6-5',
        name: 'FIVE S 6.5',
        ref: '0916612-06',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/five-s-6.5_0916612-06-lLaLp.webp',
        description:
          "Endoscope flexible d’intubation à usage unique, stérile dès livraison et prêt à l’emploi immédiat. Même standard d’image et de maniabilité que le FIVE réutilisable, sans coût de retraitement ni de réparation. Aspiration puissante : circuit de suction dédié à débit renforcé (15 mL de blanc d’œuf aspirés en moins de 5 secondes*).",
        applications:
          "Unités de soins intensifs (USI), bloc opératoire, bronchoscopie (forte aspiration).",
        technical:
          "Ø externe 6,5 mm ; canal opérateur 3,0 mm ; longueur utile 65 cm ; déflexion haut/bas 140°/180°. Compatible Image 1S (X-LINK), TELECAM C3, TELE PACK+ et moniteur C-MAC. Emballage stérile individuel avec protection anti-chocs, aucun cycle de stérilisation à gérer. *Résultats basés sur des tests internes KARL STORZ ; peuvent varier selon les conditions cliniques.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000134411&cat=1000071971',
      },
      {
        id: 'c-mac-s-mac-3',
        slug: 'c-mac-s-mac-3',
        name: 'C-MAC S LAME MAC #3',
        ref: '051213-10',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/c-mac-s-mac-3_051213-10-0yxAs.webp',
        description:
          "Vidéolaryngoscope C-MAC S à lame à usage unique : lame et poignée en une seule pièce pour un risque de contamination croisée minimal, changement en quelques secondes. Compatible avec l’IMAGER C-MAC S (adulte) et l’IMAGER pédiatrique.",
        applications:
          "Vidéolaryngoscopie à usage unique ; bloc opératoire, urgences et USI.",
        technical:
          "Lame MAC #3 à usage unique ; lame et poignée monobloc ; compatible IMAGER C-MAC S (adulte) et IMAGER pédiatrique. Solution hybride réutilisable / single-use selon le volume de procédures.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000115177&cat=1000071971',
      },
      {
        id: 'c-mac-s-mac-4',
        slug: 'c-mac-s-mac-4',
        name: 'C-MAC S LAME MAC #4',
        ref: '051214-10',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/c-mac-s-mac-4_051214-Cg4Qt.webp',
        description:
          "Vidéolaryngoscope C-MAC S à lame à usage unique : lame et poignée en une seule pièce pour un risque de contamination croisée minimal, changement en quelques secondes. Compatible avec l’IMAGER C-MAC S (adulte) et l’IMAGER pédiatrique.",
        applications:
          "Vidéolaryngoscopie à usage unique ; bloc opératoire, urgences et USI.",
        technical:
          "Lame MAC #4 à usage unique ; lame et poignée monobloc ; compatible IMAGER C-MAC S (adulte) et IMAGER pédiatrique. Solution hybride réutilisable / single-use selon le volume de procédures.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000115179&cat=1000071971',
      },
      {
        id: 'c-mac-s-d-blade',
        slug: 'c-mac-s-d-blade',
        name: 'C-MAC S LAME D-BLADE',
        ref: '051216-10',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/c-mac-s-d-blade_051216-10-5FZbQ.webp',
        description:
          "Vidéolaryngoscope C-MAC S à lame D-Blade à usage unique : lame et poignée en une seule pièce pour un risque de contamination croisée minimal, changement en quelques secondes. Compatible avec l’IMAGER C-MAC S (adulte) et l’IMAGER pédiatrique.",
        applications:
          "Vidéolaryngoscopie à usage unique ; intubations difficiles ; bloc opératoire, urgences et USI.",
        technical:
          "Lame D-BLADE à usage unique ; lame et poignée monobloc ; compatible IMAGER C-MAC S (adulte) et IMAGER pédiatrique. Solution hybride réutilisable / single-use selon le volume de procédures.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000115181&cat=1000071971',
      },
      {
        id: 'c-mac-s-mil-0',
        slug: 'c-mac-s-mil-0',
        name: 'C-MAC S LAME MILLER #0',
        ref: '051110-10',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/c-mac-s-mil-0_051110-10-3ppMG.webp',
        description:
          "Vidéolaryngoscope C-MAC S à lame Miller #0 à usage unique : lame et poignée en une seule pièce pour un risque de contamination croisée minimal, changement en quelques secondes. Compatible avec l’IMAGER C-MAC S (adulte) et l’IMAGER pédiatrique.",
        applications:
          "Vidéolaryngoscopie pédiatrique à usage unique ; bloc opératoire, urgences et USI.",
        technical:
          "Lame MILLER #0 à usage unique ; lame et poignée monobloc ; compatible IMAGER C-MAC S (adulte) et IMAGER pédiatrique. Solution hybride réutilisable / single-use selon le volume de procédures.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000065145&cat=1000071971',
      },
      {
        id: 'c-mac-s-mil-1',
        slug: 'c-mac-s-mil-1',
        name: 'C-MAC S LAME MILLER #1',
        ref: '051111-10',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/c-mac-s-mil-1_051111-10-3EJ9w.webp',
        description:
          "Vidéolaryngoscope C-MAC S à lame Miller #1 à usage unique : lame et poignée en une seule pièce pour un risque de contamination croisée minimal, changement en quelques secondes. Compatible avec l’IMAGER C-MAC S (adulte) et l’IMAGER pédiatrique.",
        applications:
          "Vidéolaryngoscopie pédiatrique à usage unique ; bloc opératoire, urgences et USI.",
        technical:
          "Lame MILLER #1 à usage unique ; lame et poignée monobloc ; compatible IMAGER C-MAC S (adulte) et IMAGER pédiatrique. Solution hybride réutilisable / single-use selon le volume de procédures.",
        sourceUrl: 'https://www.karlstorz.com/dz/fr/product-detail-page.htm?productID=1000065143&cat=1000071971',
      },
      {
        id: 'multilase-tfl',
        slug: 'multilase-tfl',
        name: 'MultiLASE TFL',
        ref: 'UL600',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-15-Th7jQ.webp',
        description:
          'Système laser TFL (Thulium Fiber Laser) destiné aux applications urologiques.',
        applications:
          'Urologie — la page Urologie de KARL STORZ présente la MultiLASE TFL parmi ses produits phares.',
        technical:
          'Laser : TFL (Thulium Fiber Laser); longueur d’onde 1940 nm; puissance maximale P0 60 W; puissance de crête Pp 500 kW; 7 modes d’impulsion, de court à long; énergie 0,02 à 6 J; connecteur de fibre RFID; diamètres de fibres 150 à 1000 µm selon configuration; alimentation 100–240 VAC, 50/60 Hz.',
        sourceUrl:
          'https://www.karlstorz.com/dz/en/product-detail-page.htm?cat=1000258137&productID=1000258057',
      },
      {
        id: 'endomat-select',
        slug: 'endomat-select',
        name: 'ENDOMAT SELECT',
        ref: 'UP220',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endomat_select_up220-6Lg39.webp',
        description:
          'Pompe péristaltique interdisciplinaire pour l’irrigation et l’aspiration des liquides lors d’interventions chirurgicales ou d’examens diagnostiques.',
        applications:
          'Irrigation et aspiration dans différentes disciplines grâce à des modules logiciels adaptés aux applications.',
        technical:
          'Fonction : pompe d’irrigation ou d’aspiration; type : pompe péristaltique; débit d’aspiration 10–1000 ml/min; débit d’irrigation 0–3500 ml/min; pression d’irrigation 20–500 mmHg; alimentation 100–240 V~, 50/60 Hz; écran tactile TFT; identification automatique du set de tuyaux; mise en place du set d’une seule main; dimensions 370 × 305 × 124 mm; poids 5,9 kg; équipement de type CF.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000151312',
      },
      {
        id: 'endoflator-plus',
        slug: 'endoflator-plus',
        name: 'ENDOFLATOR +',
        ref: 'UI600',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endoflator_ui600-qNYq7.webp',
        description:
          'Système d’insufflation avancée avec chauffage, humidification et évacuation intégrée des fumées.',
        applications:
          'Insufflation en chirurgie générale et viscérale, chirurgie thoracique, gynécologie et pédiatrie; modes dédiés à TEO, TaTME et au prélèvement endoscopique de veines.',
        technical:
          'Débit maximal 50 l/min; aspiration intégrée des gaz de combustion avec exsufflation; réchauffage du gaz; humidification du gaz; mode pédiatrique; modes TEO et TaTME; mode pour prélèvement endoscopique de veines (EVH); pression High Flow 1–30 mmHg; alimentation 100–240 V~, 50/60 Hz; écran tactile; dimensions 305 × 370 × 150 mm; poids 10,7 kg.',
        sourceUrl:
          'https://www.karlstorz.com/ma/fr/product-detail-page.htm?cat=1000200838&productID=1000252028',
      },
      {
        id: 'vitom-3d',
        slug: 'vitom-3d',
        name: 'VITOM 3D',
        ref: 'TH200',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_det_back_th200-hGR8v.webp',
        description:
          'Système de visualisation 3D pour la microchirurgie et la chirurgie ouverte, intégrable dans la tour d’endoscopie.',
        applications:
          'Visualisation 3D en microchirurgie et chirurgie ouverte.',
        technical:
          'Capteur CMOS; résolution 3840 × 2160 pixels; balayage progressif; objectif stéréo; zoom quadruple; distance de travail 20–50 cm; fréquence d’image 50/60 Hz; dimensions 45 × 80 × 351 mm; poids 950 g; câble 500 cm; touches programmables; housses stériles pour l’asepsie.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000082890',
      },
      {
        id: 'image1-s-d3-link',
        slug: 'image1-s-d3-link',
        name: 'IMAGE1 S D3-LINK',
        ref: 'TC302',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_oblique_tc302-oGMoR.webp',
        description:
          'Module de liaison pour l’endoscopie 3D et VITOM® 3D, destiné à la technologie FULL HD 3D et à l’utilisation avec TIPCAM®1.',
        applications:
          'Endoscopie 3D et visualisation 3D; utilisation avec TIPCAM®1 et VITOM® 3D.',
        technical:
          'Technologie FULL HD 3D; 3 modes de visualisation en 2D et 3D; nombre de sorties Link 1; alimentation 100–120 V~ et 200–240 V~; consommation 62 VA; fréquence 50/60 Hz; dimensions 305 × 320 × 54 mm; poids 1,86 kg; désinfection par essuyage; équipement de type CF / protégé contre les défibrillateurs.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000084655',
      },
      {
        id: 'video-laryngoscope-c-mac-mac-3',
        slug: 'video-laryngoscope-c-mac-mac-3',
        name: 'Vidéo-laryngoscope C-MAC MAC #3',
        ref: '8404AXC',
        description:
          'Vidéo-laryngoscope C-MAC® HD à lame MACINTOSH n°3 pour la visualisation HD de l’intubation chez l’adulte.',
        applications:
          'Visualisation de l’intubation et prise en charge des voies respiratoires chez l’adulte.',
        technical:
          'Forme MACINTOSH; direction de visée 0°; longueur utile 104 mm; largeur extrémité distale 18 mm; taille de lame 3; résolution 1280 × 800 pixels; capteur CMOS; éclairage 2 × LED blanches, 1 W; angle d’ouverture 70°; interface C-MAC®; documentation HD; indice de protection IPX8.',
        sourceUrl:
          'https://www.karlstorz.com/dz/fr/product-detail-page.htm?cat=1000105424&productID=1000111729',
      },
      {
        id: 'flex-x2s-fibroscope',
        slug: 'flex-x2s-fibroscope',
        name: 'Urétéro-néphro-fibroscope FLEX-X2S',
        ref: '11278AK1',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/uretero-reno-fiberscope-flex-x2s_11278ak1-py3Bi.webp',
        images: [
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/uretero-reno-fiberscope-flex-x2s_11278ak1-py3Bi.webp',
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/uretero-reno-fiberscope-flex-x2s-11278ak1-SVFFL.webp',
        ],
        description:
          'Urétéro-néphroscope flexible à doublement du nombre de fibres, avec gaine fine et double béquillage bilatéral, conçu notamment pour l’accès aux calices rénaux.',
        applications:
          'Urétéroscopie flexible et prise en charge des calculs rénaux, notamment les calculs difficilement accessibles.',
        technical:
          'Gaine 7,5 Ch; canal opérateur 3,6 Ch; béquillage 270° bilatéralement; commande monomanuelle; gaine anti-torsion; pointe distale protégée par isolation céramique Laserite; accès aux cavités anatomiques étroites; doublement du nombre de fibres par rapport au modèle précédent.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000134009',
      },
      {
        id: 'endoflator-40',
        slug: 'endoflator-40',
        name: 'ENDOFLATOR 40',
        ref: 'UI400',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_oblique_ui400-vUTfB.webp',
        description:
          'Système d’insufflation ENDOFLATOR® avec débit maximal de 40 l/min et mode pédiatrique.',
        applications:
          'Insufflation en chirurgie générale et viscérale, gynécologie, chirurgie thoracique et pédiatrique.',
        technical:
          'Débit maximal 40 l/min; pression High Flow 1–30 mmHg; pression pédiatrique 1–15 mmHg; débit pédiatrique 0,1–15 l/min; mode pédiatrique; système de sécurité SECUVENT®; communication avec IMAGE1 S™; commande depuis la zone stérile; alimentation 100–240 V~, 50/60 Hz; écran tactile; dimensions 305 × 351 × 164 mm; poids 7,3 kg.',
        sourceUrl:
          'https://www.karlstorz.com/fr/fr/product-detail-page.htm?cat=1000071971&productID=1000130599',
      },
    ],
    /* Par spécialité — spécialités médicales (PDF §2A / mapping spécialités) */
    specialtyGroups: [
      {
        id: 'urologie-endourologie',
        slug: 'urologie-endourologie',
        titleFr: 'Urologie',
        titleEn: 'Urology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-urologie-mS3yJ.jpg',
        productIds: [
          'flex-x2s-set',
          'flex-x2s-fibroscope',
          'ureteroscope-8ch',
          'ureteroscope-set-95ch',
          'ureteroscope-set-7ch',
          'ureteroscope-8ch-6deg',
          'video-cystoscope-su',
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tele-pack-plus',
          'telecam-c3',
          'multilase-tfl',
          'endomat-select',
        ],
      },
      {
        id: 'gynecologie',
        slug: 'gynecologie',
        titleFr: 'Gynécologie',
        titleEn: 'Gynecology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-gynecologie-ckSXr.jpg',
        productIds: [
          'trophyscope-campo',
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tipcam1-rubina-0',
          'tipcam1-rubina-30',
          'tele-pack-plus',
          'telecam-c3',
          'endomat-select',
          'endoflator-plus',
          'endoflator-40',
        ],
      },
      {
        id: 'orl',
        slug: 'orl',
        titleFr: 'ORL (Oto-rhino-laryngologie)',
        titleEn: 'ENT (Otorhinolaryngology)',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-orl-CPKvS.jpg',
        productIds: [
          'drillcut-x-ii-35',
          'vitom-eagle',
          'rubina-lens-exoscope',
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tele-pack-plus',
          'telecam-c3',
          'endomat-select',
          'vitom-3d',
          'image1-s-d3-link',
        ],
      },
      {
        id: 'bronchoscopie-pneumologie',
        slug: 'bronchoscopie-pneumologie',
        titleFr: 'Bronchoscopie',
        titleEn: 'Bronchoscopy',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-pneumo-5Beos.jpg',
        productIds: [
          'video-bronchoscope-live-hd',
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tele-pack-plus',
          'telecam-c3',
        ],
      },
      {
        id: 'chirurgie-generale-viscerale',
        slug: 'chirurgie-generale-viscerale',
        titleFr: 'Chirurgie générale et viscérale',
        titleEn: 'General and visceral surgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-chirurgie-generale-HApG5.jpg',
        productIds: [
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tipcam1-rubina-0',
          'tipcam1-rubina-30',
          'optic-hopkins-0-4mm',
          'optic-hopkins-30-29mm',
          'power-led-rubina',
          'vitom-eagle',
          'or1-avm-air',
          'aida',
          'aida-c',
          'endoflator-plus',
          'vitom-3d',
          'endoflator-40',
        ],
      },
      {
        id: 'chirurgie-thoracique',
        slug: 'chirurgie-thoracique',
        titleFr: 'Chirurgie thoracique',
        titleEn: 'Thoracic surgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-chirurgie-thoracique-vDmD5.jpg',
        productIds: [
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tipcam1-rubina-0',
          'tipcam1-rubina-30',
          'vitom-eagle',
          'tele-pack-plus',
          'or1-avm-air',
          'endoflator-plus',
          'vitom-3d',
          'endoflator-40',
        ],
      },
      {
        id: 'neurochirurgie-microchirurgie',
        slug: 'neurochirurgie-microchirurgie',
        titleFr: 'Neurochirurgie',
        titleEn: 'Neurosurgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-microchirurgie-NoEwX.jpg',
        productIds: [
          'vitom-eagle',
          'rubina-lens-exoscope',
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'endomat-select',
          'vitom-3d',
          'image1-s-d3-link',
        ],
      },
      {
        id: 'gestion-voies-aeriennes',
        slug: 'gestion-voies-aeriennes',
        titleFr: 'Gestion des voies respiratoires',
        titleEn: 'Airway management',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/gestion-voies-aeriennes-zUvKq.jpg',
        productIds: [
          'systeme-c-mac',
          'five-s-3-5',
          'five-s-5-3',
          'five-s-6-5',
          'c-mac-s-mac-3',
          'c-mac-s-mac-4',
          'c-mac-s-d-blade',
          'c-mac-s-mil-0',
          'c-mac-s-mil-1',
          'video-laryngoscope-c-mac-mac-3',
        ],
      },
      {
        id: 'transversal',
        slug: 'transversal',
        titleFr: 'Transversal',
        titleEn: 'Cross-disciplinary',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/transversal-storz-U4CCi.jpg',
        productIds: [
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tipcam1-rubina-0',
          'tipcam1-rubina-30',
          'telecam-c3',
          'power-led-rubina',
          'or1-avm-air',
          'aida',
          'aida-c',
          'endomat-select',
          'image1-s-d3-link',
        ],
      },
    ],
    /* Par type de produit (PDF §2B / taxonomie recommandée) */
    typeGroups: [
      {
        id: 'endoscopes-rigides',
        slug: 'endoscopes-rigides',
        titleFr: 'Endoscopes rigides',
        titleEn: 'Rigid endoscopes',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endoscopes-rigides-REPoi.webp',
        productIds: [
          'trophyscope-campo',
          'ureteroscope-8ch',
          'ureteroscope-set-95ch',
          'ureteroscope-set-7ch',
          'ureteroscope-8ch-6deg',
        ],
      },
      {
        id: 'endoscopes-flexibles-reutilisables',
        slug: 'endoscopes-flexibles-reutilisables',
        titleFr: 'Endoscopes flexibles réutilisables',
        titleEn: 'Reusable flexible endoscopes',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-lVqkk.webp',
        productIds: ['flex-x2s-set', 'flex-x2s-fibroscope', 'video-bronchoscope-live-hd'],
      },
      {
        id: 'endoscopes-usage-unique',
        slug: 'endoscopes-usage-unique',
        titleFr: 'Endoscopes flexibles à usage unique',
        titleEn: 'Flexible single-use endoscopes',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-2-qQwWW.webp',
        productIds: ['video-cystoscope-su', 'five-s-3-5', 'five-s-5-3', 'five-s-6-5'],
      },
      {
        id: 'cameras-plateformes-imagerie',
        slug: 'cameras-plateformes-imagerie',
        titleFr: 'Caméras et plateformes d’imagerie',
        titleEn: 'Cameras & imaging platforms',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-3-UN7Aq.webp',
        productIds: [
          'image1-s-connect-ii',
          'image1-s-4u-rubina',
          'tipcam1-rubina-0',
          'tipcam1-rubina-30',
          'image1-s-d3-link',
        ],
      },
      {
        id: 'exoscopes-systemes-visualisation',
        slug: 'exoscopes-systemes-visualisation',
        titleFr: 'Exoscopes et systèmes de visualisation',
        titleEn: 'Exoscopes & visualization systems',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-5-EioW0.webp',
        productIds: ['vitom-eagle', 'rubina-lens-exoscope', 'vitom-3d'],
      },
      {
        id: 'optiques-lentilles',
        slug: 'optiques-lentilles',
        titleFr: 'Optiques et lentilles',
        titleEn: 'Optics & lenses',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-1-bVsZE.webp',
        productIds: ['optic-hopkins-0-4mm', 'optic-hopkins-30-29mm'],
      },
      {
        id: 'sources-lumineuses',
        slug: 'sources-lumineuses',
        titleFr: 'Sources lumineuses',
        titleEn: 'Light sources',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-6-f4KEm.webp',
        productIds: ['power-led-rubina'],
      },
      {
        id: 'systemes-video-compacts',
        slug: 'systemes-video-compacts',
        titleFr: 'Systèmes vidéo compacts',
        titleEn: 'Compact video systems',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-7-fkWCW.webp',
        productIds: ['tele-pack-plus', 'telecam-c3'],
      },
      {
        id: 'insufflation',
        slug: 'insufflation',
        titleFr: 'Insufflation',
        titleEn: 'Insufflation',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-8-MMJbO.webp',
        productIds: ['endoflator-plus', 'endoflator-40'],
      },
      {
        id: 'irrigation-aspiration',
        slug: 'irrigation-aspiration',
        titleFr: 'Irrigation / aspiration',
        titleEn: 'Irrigation / aspiration',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-9-3Lu95.webp',
        productIds: ['endomat-select'],
      },
      {
        id: 'shaver-motorisation',
        slug: 'shaver-motorisation',
        titleFr: 'Shaver / motorisation',
        titleEn: 'Shaver / motorization',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-14-6WA6V.webp',
        productIds: ['drillcut-x-ii-35'],
      },
      {
        id: 'laryngoscopes-gestion-voies-respiratoires',
        slug: 'laryngoscopes-gestion-voies-respiratoires',
        titleFr: 'Laryngoscopes / gestion des voies respiratoires',
        titleEn: 'Laryngoscopes / airway management',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-11-5iWCs.webp',
        productIds: [
          'systeme-c-mac',
          'five-s-3-5',
          'five-s-5-3',
          'five-s-6-5',
          'c-mac-s-mac-3',
          'c-mac-s-mac-4',
          'c-mac-s-d-blade',
          'c-mac-s-mil-0',
          'c-mac-s-mil-1',
          'video-laryngoscope-c-mac-mac-3',
        ],
      },
      {
        id: 'documentation-medicale',
        slug: 'documentation-medicale',
        titleFr: 'Documentation médicale',
        titleEn: 'Medical documentation',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-13-NKuii.webp',
        productIds: ['aida', 'aida-c'],
      },
      {
        id: 'integration-bloc-operatoire',
        slug: 'integration-bloc-operatoire',
        titleFr: 'Intégration du bloc opératoire',
        titleEn: 'OR integration',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-12-GHX1Z.webp',
        productIds: ['or1-avm-air'],
      },
      {
        id: 'systemes-specialises-urologiques',
        slug: 'systemes-specialises-urologiques',
        titleFr: 'Systèmes spécialisés urologiques',
        titleEn: 'Specialized urology systems',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-15-vApT4.webp',
        productIds: ['multilase-tfl'],
      },
    ],
  },

  {
    id: 'erbe',
    slug: 'erbe',
    name: 'ERBE Elektromedizin',
    shortName: 'Erbe',
    logo: LOGO.erbe,
    focus: {
      fr: 'Électrochirurgie et énergie chirurgicale',
      en: 'Electrosurgery and surgical energy',
    },
    specialties: {
      fr: 'Chirurgie générale & viscérale, urologie, gynécologie, ORL, neurochirurgie, chirurgie thoracique, chirurgie pédiatrique et disciplines transversales',
      en: 'General & visceral surgery, urology, gynecology, ENT, neurosurgery, thoracic surgery, pediatric surgery and transversal disciplines',
    },
    sourceUrl: 'https://en.erbe-med.com/en-en/erbe-service/product-codes/',
    productList: [
      {
        id: 'vio-300-d',
        slug: 'vio-300-d',
        name: 'VIO 300 D',
        ref: '10140-100',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_p_10140-100__vio_300d_zoom_9a4ed7f588-1-wfscR.jpg',
        description:
          'Générateur électrochirurgical haute performance pour la coupe et la coagulation monopolaire et bipolaire, avec régulation automatique de la puissance et possibilité d’intégrer des fonctions avancées pour différentes disciplines chirurgicales. Le VIO 300 D est le modèle haut de gamme de la série VIO D et peut être configuré avec différents modules et fonctions selon la discipline, l’indication ou la procédure. Il peut notamment servir de module maître pour des systèmes complémentaires tels que l’APC et les instruments de thermofusion vasculaire BiClamp/BiCision.',
        applications:
          'Chirurgie générale et viscérale, urologie, gynécologie, chirurgie vasculaire, chirurgie thoracique, endoscopie et autres disciplines chirurgicales.',
        technical:
          'Jusqu’à 6 instruments; écran couleur TFT haute résolution; coupe jusqu’à 300 W; coagulation jusqu’à 200 W; régulation automatique de la puissance; modes monopolaire et bipolaire; BICLAMP et TWIN COAG disponibles selon configuration; compatible avec les modules APC. Modes : AUTO CUT, HIGH CUT, DRY CUT, BIPOLAR CUT, BIPOLAR CUT+ / ++, SOFT COAG, SWIFT COAG, FORCED COAG, SPRAY COAG, BIPOLAR SOFT COAG, BIPOLAR FORCED COAG et FORCED APC, avec fonctions supplémentaires en upgrade. Puissance CUT max. 300 W / 500 Ω; fréquence 350 kHz; sécurité NESSY; alimentation 100–120 / 220–240 V ±10 %, 50/60 Hz; dimensions 410 × 165 × 380 mm; poids 9,5 kg.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-200-s',
        slug: 'vio-200-s',
        name: 'VIO 200 S',
        ref: '10140-400',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_p_10140-400__vio_200s_zoom_a2b0ce5f64-1-NqQdn.jpg',
        description:
          'Générateur électrochirurgical compact et polyvalent pour la coupe et la coagulation monopolaire et bipolaire, avec régulation automatique de la puissance et fonctions dédiées notamment à l’endoscopie. Le VIO 200 S est destiné à de nombreuses procédures électrochirurgicales ainsi qu’aux cabinets spécialisés. Il utilise la régulation de tension avec dosage automatique de la puissance pour obtenir des effets de coupe et de coagulation reproductibles.',
        applications:
          'Endoscopie digestive, chirurgie générale et viscérale, gynécologie, urologie et autres interventions chirurgicales, ainsi que cabinets spécialisés.',
        technical:
          'Coupe jusqu’à 200 W; coagulation jusqu’à 120 W; modes monopolaire et bipolaire; régulation automatique de la puissance; FocusView; jusqu’à 9 programmes mémorisables; système de sécurité NESSY; compatibilité avec le module APC. Fonctions principales : AUTO CUT, SOFT COAG, FORCED COAG et BIPOLAR SOFT COAG. ENDO CUT I et ENDO CUT Q disponibles en option/selon configuration. Puissance CUT max. 200 W / 500 Ω; puissance COAG max. 120 W; fréquence 350 kHz; sécurité NESSY; alimentation 100–120 / 220–240 V ±10 %, 50/60 Hz; dimensions 410 × 165 × 380 mm; poids 8,8 kg.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-3',
        slug: 'vio-3',
        name: 'VIO 3',
        ref: '10160-000',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/compressed-Mrvqq.jpg',
        description:
          'Le générateur tout-en-un avec résection bipolaire. Avantages : générateur de 400 W, adapté aux techniques exigeantes telles que la résection bipolaire; réglage précis des effets grâce à des modes facilement ajustables; haute reproductibilité grâce à une technologie de mesure avancée garantissant des effets de coupe et de coagulation constants; effets tissulaires homogènes : le VIO® 3 réagit immédiatement aux variations des propriétés du tissu, indépendamment de la forme de l’électrode ou de la technique d’incision; nombreuses possibilités de connexion permettant une large combinaison d’instruments.',
        applications:
          'TUR-P et TUR-B bipolaires; hystérectomie; TEM-ESD; thyroïdectomie; néphrectomie; cystectomie; reconstruction mammaire.',
        technical:
          'Configuration individuelle des prises et possibilité de connecter jusqu’à six instruments avec APC 3; embases de sortie interchangeables; compatible avec APC 3 et différents sous-modules; fonction « Plug and operate » avec les instruments Erbe; sous-modules et accessoires compatibles : VIO® seal, APC 3, ERBEJET 2, IES 3, EIP 2, ERBECRYO 2, pédale VIO® 3; instruments compatibles : HybridAPC, HYBRIDknife flex, FiAPC, TriSect rapide®, BiClamp®, pinces bipolaires.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-seal',
        slug: 'vio-seal',
        name: 'VIO seal',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/vio-family-standalone-seal-o01dE.webp',
        description:
          'Générateur entièrement dédié aux applications bipolaires. Avantages : compatible avec la gamme complète d’instruments bipolaires; compatible avec le dernier dissecteur tripolaire TriSect rapide® et la technologie avancée de scellement des vaisseaux BiClamp®; permet l’utilisation simultanée, en double équipe, de deux instruments bipolaires lorsqu’il est associé à un second générateur VIO®; conçu comme une solution autonome.',
        applications:
          'Toutes les interventions chirurgicales nécessitant le scellement des vaisseaux, notamment : hystérectomie, thyroïdectomie, néphrectomie, cystectomie, DIEP-Flap et reconstruction mammaire (avec VIO® 3n Water).',
        technical:
          'Interface utilisateur similaire à celle du VIO® 3, incluant la fonction stepGUIDE; fonction « Plug and operate » avec les instruments Erbe; peut être utilisé comme générateur autonome ou intégré au poste de travail Erbe; peut être combiné avec d’autres générateurs : VIO® 3n, VIO® 3 ou VIO® D/S; compatible avec les systèmes de montage VIO® CART, SystemCarrier performance et SystemCarrier compact; modules et accessoires compatibles : VIO® 3n, IES 3, pédale VIO® 3; instruments compatibles : TriSect rapide®, BiClamp®, pinces bipolaires.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-3n-stone',
        slug: 'vio-3n-stone',
        name: 'VIO 3n Stone',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/vio-family-standalone-stone-oW8c8.webp',
        description:
          'Conçu pour les interventions courantes en endoscopie digestive. Avantages : compatible avec une large gamme d’instruments standard; conception compacte, particulièrement adaptée aux environnements ambulatoires; compatible notamment avec le module EIP 2.',
        applications:
          'Polypectomie; papillotomie / sphinctérotomie.',
        technical:
          '2 sorties actives : 1 sortie bipolaire et 1 sortie monopolaire; modules et accessoires compatibles : EIP 2, pédale VIO® 3; instruments compatibles : anses de polypectomie.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-3n-metal',
        slug: 'vio-3n-metal',
        name: 'VIO 3n Metal',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/vio-family-standalone-metal-YviBn.webp',
        description:
          'Conçu pour les procédures avancées en endoscopie digestive et en pneumologie. Avantages : offre toutes les fonctionnalités du VIO® 3n Stone; combinaison optimale avec les sondes FiAPC® et l’ensemble des modes de plasma argon Erbe; permet la coagulation et la séparation des tissus grâce au mode swiftCOAG; compatible notamment avec les modules APC 3, ERBEJET 2 et EIP 2.',
        applications:
          'Polypectomie; papillotomie / sphinctérotomie; coagulation au plasma argon (APC); résection muqueuse endoscopique (EMR); ablation de la marge post-EMR et du lit de résection avec APC 3.',
        technical:
          '3 sorties actives : 1 sortie bipolaire et 2 sorties monopolaires; éclairage de la sortie utilisée; compatible avec le module APC 3; modules et accessoires compatibles : APC 3, ERBEJET 2, ERBECRYO 2, EIP 2, pédale VIO® 3; instruments compatibles : HybridAPC, HYBRIDknife® flex I-Type, FiAPC®, anses de polypectomie.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-3n-fire',
        slug: 'vio-3n-fire',
        name: 'VIO 3n Fire',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/vio-family-standalone-fire-xds2C.webp',
        description:
          'Pour réaliser des interventions d’endoscopie digestive et de pneumologie au plus haut niveau. Avantages : offre toutes les fonctionnalités des modèles VIO® 3n Metal et Stone; coupe précise et contrôlée, y compris en milieu immergé, grâce au mode endoCUT U; dissection sélective des tissus permettant d’exposer les structures sensibles avec le mode preciseSECT; avec MOVIVA® et moveAPD®, permet une coagulation efficace et rapide, y compris sur de grandes surfaces; combinaison optimale avec les instruments hybrides exclusifs Erbe, notamment HYBRIDknife® flex et HybridAPC; compatible notamment avec APC 3, ERBEJET 2 et EIP 2.',
        applications:
          'Polypectomie; papillotomie / sphinctérotomie; ESD — dissection sous-muqueuse endoscopique; STER — résection endoscopique sous-muqueuse par tunnel; POEM — myotomie endoscopique perorale; EMR — résection muqueuse endoscopique; interventions sous eau; ablation de la marge post-EMR et du lit de résection avec APC 3; procédures endobronchiques, par exemple la recanalisation tumorale; GMA.',
        technical:
          '3 sorties actives : 1 sortie bipolaire et 2 sorties monopolaires; éclairage de la sortie utilisée; compatible avec le module APC 3; sous-modules et accessoires compatibles : APC 3, ERBEJET 2, ERBECRYO 2, EIP 2, pédales VIO® 3; instruments compatibles : HybridAPC, HYBRIDknife® flex I-Type, FiAPC®, anses de polypectomie, MOVIVA®.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-3n-amber',
        slug: 'vio-3n-amber',
        name: 'VIO 3n Amber',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/vio-family-standalone-water-g48lM.webp',
        description:
          'Conçu pour les interventions chirurgicales quotidiennes à complexes. Avantages : permet une double équipe monopolaire avec un seul appareil grâce au mode twinCOAG; permet la coagulation au plasma d’argon sans contact avec le mode forcedAPC; compatible notamment avec VIO® seal, APC 3 et IES 3.',
        applications:
          'Cholécystectomie; chirurgie des hernies; césarienne (C-section); chirurgie hépatique.',
        technical:
          '3 sorties actives : 1 sortie bipolaire et 2 sorties monopolaires; éclairage de la sortie utilisée; compatible avec le module APC 3; modules et accessoires compatibles : VIO® seal, APC 3, IES 3, pédales VIO® 3; instruments compatibles : pinces bipolaires, manches d’aspiration des fumées, applicateur APC.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'vio-3n-water',
        slug: 'vio-3n-water',
        name: 'VIO 3n Water',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/vio-family-standalone-water-OLyFS.webp',
        description:
          'Conçu pour les cas complexes dans les blocs opératoires multidisciplinaires. Avantages : offre toutes les fonctionnalités du VIO® 3n Amber; permet une double équipe bipolaire avec le VIO® seal; dissection sélective des tissus pour exposer les structures sensibles grâce au mode preciseSECT; résection monopolaire et coupe douce avec le mode highCUT; combinaison optimale avec l’applicateur APC et l’ensemble des modes de plasma argon Erbe; compatible notamment avec VIO® seal, APC 3, IES 3, ERBEJET® 2 et ESM 2.',
        applications:
          'Chirurgie des hernies; césarienne (C-section); TUR/TCR monopolaire; LEEP; chirurgie hépatique; cholécystectomie; traitement de l’endométriose. Avec VIO® seal : LASH, hystérectomie, thyroïdectomie, néphrectomie, cystectomie, DIEP, reconstruction mammaire.',
        technical:
          '3 sorties actives : 1 sortie bipolaire et 2 sorties monopolaires; éclairage de la sortie utilisée; compatible avec le module APC 3; modules et accessoires compatibles : VIO® seal, APC 3, ERBEJET 2, IES 3, pédales VIO® 3; instruments compatibles : pinces bipolaires, résecteurs monopolaires, manches d’aspiration des fumées, applicateur APC.',
        sourceUrl: 'https://fr.erbegroup.com/fr-fr/highlights/vio-3-family/',
      },
      {
        id: 'apc-3',
        slug: 'apc-3',
        name: 'APC 3',
        ref: '10135-000',
        description:
          'Générateur de coagulation au plasma d’argon de nouvelle génération, intégré à l’écosystème VIO 3 pour des traitements sans contact et un réglage précis de l’effet.',
        applications:
          'Gastro-entérologie, chirurgie, hémostase et dévitalisation tissulaire.',
        technical:
          'Modes pulsé, forcé et preciseAPC; possibilité de gérer jusqu’à 6 instruments avec VIO 3.',
        imageUrl: 'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_apc_3_product_listing_f5d88321c7_upscaled-2PG6W.jpg',
        sourceUrl: 'http://register.erbe-med.com/erbe/media/Marketingmaterialien/85135-100_ERBE_EN_APC_3__D112163.pdf',
      },
      {
        id: 'apc-2',
        slug: 'apc-2',
        name: 'APC 2',
        ref: '10134-000',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/apc2_upscaled-PZxVg.jpg',
        description:
          'Module de coagulation au plasma d’argon pour le traitement sans contact des saignements et la dévitalisation de tissus pathologiques.',
        applications:
          'Gastro-entérologie, chirurgie et applications endoscopiques.',
        technical:
          'Référence officielle Erbe; conçu pour fonctionner avec les plateformes VIO compatibles.',
        sourceUrl:
          'https://en.erbe-med.com/en-en/erbe-service/product-codes/?cHash=60340255dfc4c08ea96a12a725ab7416&tx_erbeclassification_classifications%5Baction%5D=list&tx_erbeclassification_classifications%5Bcontroller%5D=Classification&tx_erbeclassification_classifications%5BshowAll%5D=1',
      },
      {
        id: 'erbejet-2',
        slug: 'erbejet-2',
        name: 'ERBEJET 2',
        ref: '10150-000',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_p_10150-000__erbejet_2_zoom_ea6f97247c-1-6NLiL.jpg',
        description:
          'Système d’hydrochirurgie par jet d’eau permettant une dissection sélective et sans effet thermique des structures riches en fibrine, avec élévation et séparation contrôlées des plans tissulaires.',
        applications:
          'Chirurgie ouverte et laparoscopique; notamment foie, pancréas, rein et autres structures parenchymateuses.',
        technical:
          'Dissection heatless; pression d’injection; compatible VIO/APC; conception pouvant être montée au plafond.',
        sourceUrl:
          'https://us.erbe-med.com/us-en/products/hydrosurgery/erbejetr-2/',
      },
      {
        id: 'erbecryo-2',
        slug: 'erbecryo-2',
        name: 'ERBECRYO 2',
        ref: '10402-000',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-18-mbp4M.png',
        description:
          'Unité de cryochirurgie au CO2 destinée notamment à la cryorecanalisation, au prélèvement de tissus et à l’extraction de corps étrangers par congélation de la sonde.',
        applications: 'Pneumologie, endoscopie interventionnelle et cryothérapie.',
        technical:
          'Cryosondes flexibles à usage unique; diamètre de sonde 1,1 à 2,4 mm selon modèle.',
        sourceUrl:
          'https://us.erbe-med.com/fileadmin/user_upload/documents/PDF/USA/MKT-5074_ERBECRYO-2_2023-06.pdf',
      },
      {
        id: 'biclamp-190-c',
        slug: 'biclamp-190-c',
        name: 'BICLAMP 190 C',
        ref: '21195-190',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/upscalemedia-transformed-thhRc.jpeg',
        description:
          'Instrument réutilisable de thermofusion pour scellement de vaisseaux et de faisceaux tissulaires, conçu pour les procédures chirurgicales nécessitant un effet bipolaire maîtrisé.',
        applications: 'Chirurgie générale, viscérale, gynécologie, urologie.',
        technical: 'Mors coudés 23°; longueur 190 mm; gamme BiClamp réutilisable.',
        sourceUrl:
          'https://register.erbe-med.com/productfinder/Marketingmaterialien/_ERBE_EN_Products_for__surg_procedures%2C_eFlyer__D206288.pdf',
      },
      {
        id: 'biclamp-210',
        slug: 'biclamp-210',
        name: 'BICLAMP 210',
        ref: '21195-200',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/upscalemedia-transformed-1-vpRDo.jpeg',
        description:
          'Version BiClamp à mors coudés pour thermofusion permanente de structures tissulaires, avec ergonomie adaptée à l’accès chirurgical.',
        applications: 'Chirurgie générale, viscérale, gynécologie, urologie.',
        technical: 'Mors coudés 25°; longueur 210 mm; réutilisable.',
        sourceUrl:
          'https://register.erbe-med.com/productfinder/Marketingmaterialien/_ERBE_EN_Products_for__surg_procedures%2C_eFlyer__D206288.pdf',
      },
      {
        id: 'biclamp-lap-maryland',
        slug: 'biclamp-lap-maryland',
        name: 'BICLAMP LAP FORCEPS MARYLAND',
        ref: '21195-134',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/upscalemedia-transformed-9Jou0.webp',
        description:
          'Pince BiClamp laparoscopique de type Maryland pour scellement de vaisseaux et tissus, avec revêtement anti-adhérent et géométrie dédiée à la laparoscopie.',
        applications: 'Laparoscopie et chirurgie générale/gynécologique/urologique.',
        technical: 'Ø tige 5 mm; longueur 340 mm; mors semi-crantés; réutilisable.',
        sourceUrl:
          'https://register.erbe-med.com/productfinder/Marketingmaterialien/_ERBE_EN_BiClamp__for_laparoscopy%2C_eFlyer__D217486.pdf',
      },
      {
        id: 'biclamp-lap-fenestrated',
        slug: 'biclamp-lap-fenestrated',
        name: 'BICLAMP LAP FORCEPS FENESTRATED',
        ref: '21195-136',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/21195-136-CxbY3.jpeg',
        description:
          'Version fenestrée BiClamp pour préhension et scellement de faisceaux tissulaires sous contrôle laparoscopique.',
        applications: 'Laparoscopie, chirurgie générale, gynécologie et urologie.',
        technical: 'Ø tige 5 mm; longueur 340 mm; mors semi-crantés; réutilisable.',
        sourceUrl:
          'https://register.erbe-med.com/productfinder/Marketingmaterialien/_ERBE_EN_BiClamp__for_laparoscopy%2C_eFlyer__D217486.pdf',
      },
      {
        id: 'biclamp-lap-kelly',
        slug: 'biclamp-lap-kelly',
        name: 'BICLAMP LAP FORCEPS KELLY',
        ref: '21195-228',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/21195-228_biclamp_lap_zange_zoom-5G9Wp.webp',
        description:
          'Pince BiClamp de type Kelly destinée au scellement de vaisseaux et structures tissulaires en laparoscopie.',
        applications: 'Laparoscopie, chirurgie générale, gynécologie et urologie.',
        technical: 'Ø tige 5 mm; longueur 340 mm; réutilisable.',
        sourceUrl:
          'https://register.erbe-med.com/productfinder/Marketingmaterialien/_ERBE_EN_BiClamp__for_laparoscopy%2C_eFlyer__D217486.pdf',
      },
      {
        id: 'bicision-sml',
        slug: 'bicision-sml',
        name: 'BiCiSION S / M / L',
        ref: '20195-310 / 311 / 312',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/erbe-bicision-s-20195-310-1000x1000-Nx8Rc.jpeg',
        description:
          'Instrument laparoscopique à usage unique combinant dissection, coagulation et section par thermofusion dans un seul dispositif, avec arbre rotatif.',
        applications: 'Chirurgie générale, gynécologie, urologie.',
        technical: 'Ø 5 mm; tiges 200 / 350 / 450 mm; S, M et L selon profondeur d’accès.',
        sourceUrl:
          'https://register.erbe-med.com/productfinder/Marketingmaterialien/85100-285_ERBE_FR_Scellement_des_vaisseaux__D079711.pdf',
      },
      {
        id: 'hybridapc',
        slug: 'hybridapc',
        name: 'HYBRIDAPC',
        ref: '20150-215',
        description:
          'Instrument hybride combinant hydrodissection par ERBEJET 2 et ablation APC sans échange d’instrument, pour le traitement endoscopique des lésions muqueuses.',
        applications: 'Endoscopie digestive et traitement de lésions muqueuses.',
        technical: 'Sonde Ø 2,3 mm; longueur 1,9 m; technologie lift-cushion-ablate.',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/hybridapc-txqgb.jpg',
        sourceUrl:
          'https://us.erbe-med.com/us-en/products/hydrosurgery/hybridapcr/',
      },
    ],
    /* Par spécialité — structure définitive */
    specialtyGroups: [
      {
        id: 'chirurgie-generale-viscerale',
        slug: 'chirurgie-generale-viscerale',
        titleFr: 'Chirurgie générale & viscérale',
        titleEn: 'General & visceral surgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/chirurgie-generale-erbe-irWMm.jpg',
        productIds: [
          'vio-3',
          'vio-300-d',
          'vio-200-s',
          'erbejet-2',
          'apc-3',
          'apc-2',
          'biclamp-190-c',
          'biclamp-210',
          'biclamp-lap-maryland',
          'biclamp-lap-fenestrated',
          'biclamp-lap-kelly',
          'bicision-sml',
          'hybridapc',
        ],
      },
      {
        id: 'urologie',
        slug: 'urologie',
        titleFr: 'Urologie',
        titleEn: 'Urology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-urologie-erbe-q4ZAN.jpg',
        productIds: [
          'vio-3',
          'vio-300-d',
          'vio-200-s',
          'erbejet-2',
          'biclamp-190-c',
          'biclamp-210',
          'biclamp-lap-maryland',
          'biclamp-lap-fenestrated',
          'biclamp-lap-kelly',
          'bicision-sml',
        ],
      },
      {
        id: 'gynecologie',
        slug: 'gynecologie',
        titleFr: 'Gynécologie',
        titleEn: 'Gynecology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-gynecologie-erbe-TBPMW.jpg',
        productIds: [
          'vio-3',
          'vio-300-d',
          'vio-200-s',
          'apc-3',
          'apc-2',
          'biclamp-190-c',
          'biclamp-210',
          'biclamp-lap-maryland',
          'biclamp-lap-fenestrated',
          'biclamp-lap-kelly',
          'bicision-sml',
        ],
      },
      {
        id: 'orl',
        slug: 'orl',
        titleFr: 'ORL',
        titleEn: 'ENT',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/orl-erbe-gvTyO.jpg',
        productIds: ['vio-3', 'vio-300-d'],
      },
      {
        id: 'neurochirurgie',
        slug: 'neurochirurgie',
        titleFr: 'Neurochirurgie',
        titleEn: 'Neurosurgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/neurochirurgie-erbe-FPvPq.jpg',
        productIds: ['vio-3', 'vio-300-d'],
      },
      {
        id: 'chirurgie-thoracique',
        slug: 'chirurgie-thoracique',
        titleFr: 'Chirurgie thoracique',
        titleEn: 'Thoracic surgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/chirurgie-thoracique-erbe-nvTxP.jpg',
        productIds: ['vio-3', 'vio-300-d', 'erbecryo-2'],
      },
      {
        id: 'chirurgie-pediatrique',
        slug: 'chirurgie-pediatrique',
        titleFr: 'Chirurgie pédiatrique',
        titleEn: 'Pediatric surgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/chirurgie-pediatrique-erbe-GYBfz.jpg',
        productIds: ['vio-3', 'vio-300-d', 'vio-200-s'],
      },
      {
        id: 'transversal',
        slug: 'transversal',
        titleFr: 'Transversal',
        titleEn: 'Transversal',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/transversal-erbe-Yo2RA.jpg',
        productIds: [
          'vio-3',
          'vio-300-d',
          'vio-200-s',
          'apc-3',
          'apc-2',
          'erbejet-2',
          'erbecryo-2',
          'biclamp-190-c',
          'biclamp-210',
          'biclamp-lap-maryland',
          'biclamp-lap-fenestrated',
          'biclamp-lap-kelly',
          'bicision-sml',
          'hybridapc',
        ],
      },
    ],
    /* Par type de produit — structure définitive */
    typeGroups: [
      {
        id: 'generateurs-electrochirurgie',
        slug: 'generateurs-electrochirurgie',
        titleFr: 'Générateurs d’électrochirurgie',
        titleEn: 'Electrosurgical generators',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-17-whMep.webp',
        productIds: [
          'vio-300-d',
          'vio-200-s',
          'vio-3',
          'vio-seal',
          'vio-3n-stone',
          'vio-3n-metal',
          'vio-3n-fire',
          'vio-3n-amber',
          'vio-3n-water',
        ],
      },
      {
        id: 'coagulation-plasma-argon-apc',
        slug: 'coagulation-plasma-argon-apc',
        titleFr: 'APC',
        titleEn: 'APC',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_apc_3_product_listing_f5d88321c7-jmuEI.jpg',
        productIds: ['apc-3', 'apc-2'],
      },
      {
        id: 'hydrochirurgie-hydrodissection',
        slug: 'hydrochirurgie-hydrodissection',
        titleFr: 'Hydrochirurgie',
        titleEn: 'Hydrosurgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_p_10150-000__erbejet_2_zoom_ea6f97247c-qRs6G.jpg',
        productIds: ['erbejet-2'],
      },
      {
        id: 'cryochirurgie',
        slug: 'cryochirurgie',
        titleFr: 'Cryochirurgie',
        titleEn: 'Cryosurgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/resized-18-tTyIJ.png',
        productIds: ['erbecryo-2'],
      },
      {
        id: 'scellement-vasculaire',
        slug: 'scellement-vasculaire',
        titleFr: 'Scellement vasculaire',
        titleEn: 'Vessel sealing',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/21195-200-PExPJ.jpg',
        productIds: [
          'biclamp-190-c',
          'biclamp-210',
          'biclamp-lap-maryland',
          'biclamp-lap-fenestrated',
          'biclamp-lap-kelly',
        ],
      },
      {
        id: 'dissection-thermofusion',
        slug: 'dissection-thermofusion',
        titleFr: 'Dissection / thermofusion',
        titleEn: 'Dissection / thermofusion',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/erbe-bicision-s-20195-310-1000x1000-CCzlA.jpeg',
        productIds: ['bicision-sml'],
      },
      {
        id: 'technologie-hybride',
        slug: 'technologie-hybride',
        titleFr: 'Technologie hybride',
        titleEn: 'Hybrid technology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/erbe-hybride-QEpjp.jpg',
        productIds: ['hybridapc'],
      },
    ],
  },

  {
    id: 'rocamed',
    slug: 'rocamed',
    name: 'ROCAMED',
    shortName: 'Rocamed',
    logo: LOGO.rocamed,
    focus: {
      fr: 'Endo-urologie, gestion des calculs, drainage, irrigation et chirurgie prostatique',
      en: 'Endo-urology, stone management, drainage, irrigation and prostate surgery',
    },
    specialties: {
      fr: 'Urologie, gynécologie (hystéroscopie, cœlioscopie) et chirurgie mini-invasive / cœlioscopie',
      en: 'Urology, gynecology (hysteroscopy, laparoscopy) and minimally invasive surgery / laparoscopy',
    },
    sourceUrl: 'https://www.rocamed.com/products/endo-urology/',
    productList: [
      {
        id: 'kobot',
        slug: 'kobot',
        name: 'KOBOT® – Paniers d’extraction de calculs en nitinol',
        ref:
          'ROSZ1300ST / ROSZ1900ST / ROSZ2200ST / ROSZ1930ST / ROSZ1940ST / ROKT1800ST / ROKS1700ST / ROKM1900ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/kobot_2020-EPHPC.png',
        description:
          'Gamme de paniers d’extraction de calculs en nitinol, sans pointe (tipless), développée selon le concept de « cobotique » de ROCAMED : des paniers diversifiés, intégrés au travail du chirurgien et de ses assistants. La poignée ergonomique KOBOT™ Criterium, disponible avec système de fermeture assistée, facilite la capture, la rétention et le retrait des fragments de calculs.',
        applications:
          'Capture, rétention et retrait de fragments de calculs ; endo-urologie.',
        technical:
          'Paniers en nitinol sans pointe (tipless); quatre modèles : Tipless (panier 4 fils), Filter (filtre 4/16 fils), Six (panier 6 fils) et Mitt (3 fils); tailles de 1,3 Fr à 2,2 Fr; longueur utile de 120 cm; poignée KOBOT™ Criterium ergonomique, disponible avec système de fermeture assistée; amélioration Flexi-Tip pour une meilleure déflexion de l’endoscope; livrés avec connecteur Luer lock / Tuohy-Borst.',
        descriptionEn:
          'Range of tipless nitinol stone extraction baskets, developed according to ROCAMED’s “cobotics” concept: a diverse range of baskets integrated into the work of the surgeon and their assistants. The ergonomic KOBOT™ Criterium handle, available with an assisted closing system, facilitates the capture, retention and removal of stone fragments.',
        applicationsEn:
          'Capture, retention and removal of stone fragments; endourology.',
        technicalEn:
          'Tipless nitinol baskets; four models: Tipless (4-wire basket), Filter (4/16-wire filter), Six (6-wire basket) and Mitt (3 wires); sizes from 1.3 Fr to 2.2 Fr; working length of 120 cm; ergonomic KOBOT™ Criterium handle, available with an assisted closing system; Flexi-Tip improvement: designed for better endoscope deflection; supplied with Luer lock / Tuohy-Borst connector.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/kobot-2/',
      },
      {
        id: 'rocastone',
        slug: 'rocastone',
        name: 'RocaStone® – Extracteur de calculs pour urétéroscopie semi-rigide',
        ref:
          'ROSS2500ST / ROSS4000ST / ROSS2590ST / ROSH2500ST / ROSH4000ST / ROSH2590ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocastone1-1-K3CtB.webp',
        description:
          'Extracteur de calculs en nitinol conçu pour l’urétéroscopie semi-rigide, avec panier à 4 fils disponible en version fil droit ou fil hélicoïdal.',
        applications: 'Urétéroscopie semi-rigide.',
        technical:
          'Panier à 4 fils en nitinol; deux configurations : fil droit (Straight) ou fil hélicoïdal (Helical); tailles 2,5 Fr et 4,0 Fr; diamètres de panier de 11,5 à 16 mm; longueurs disponibles : 90 cm et 120 cm.',
        descriptionEn:
          'Nitinol stone extractor designed for semi-rigid ureteroscopy, with a 4-wire basket available in a straight-wire or helical-wire version.',
        applicationsEn:
          'Semi-rigid ureteroscopy.',
        technicalEn:
          '4-wire nitinol basket; two configurations: straight wire or helical wire; sizes 2.5 Fr and 4.0 Fr; basket diameters from 11.5 to 16 mm; available lengths: 90 cm and 120 cm.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/rocastone-2/',
      },
      {
        id: 'perkx',
        slug: 'perkx',
        name: 'PerKX® – Extracteur coaxial de calculs pour NLPC',
        ref: 'ROKP1001ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/percx-qAi4n.webp',
        description:
          'Extracteur de calculs coaxial conçu pour les procédures de néphrolithotomie percutanée (NLPC), destiné à retirer facilement les gros fragments.',
        applications:
          'Néphrolithotomie percutanée (NLPC / PCNL) ; retrait de gros fragments de calculs.',
        technical:
          'Fils plats en nitinol : mémoire de forme et flexibilité; panier sans pointe (tipless), pour un traumatisme minimal; extracteur coaxial revêtu de PTFE; poignée ergonomique avec Tuohy-Borst connecté, permettant l’introduction d’une fibre de 272 µm; compatible avec les fibres laser ROCAMED jusqu’à 272 µm; 10 Fr; 4 fils; longueur utile 38 cm; Ø panier 20 mm; longueur panier 17,5 mm.',
        descriptionEn:
          'Coaxial stone extractor designed for percutaneous nephrolithotomy (PCNL) procedures, intended for easy removal of large fragments.',
        applicationsEn:
          'Percutaneous nephrolithotomy (PCNL); removal of large stone fragments.',
        technicalEn:
          'Flat nitinol wires: shape memory and flexibility; tipless basket for minimal trauma; PTFE-coated coaxial extractor; ergonomic handle with connected Tuohy-Borst, allowing the introduction of a 272 µm fiber; compatible with ROCAMED laser fibers up to 272 µm; 10 Fr; 4 wires; working length 38 cm; basket Ø 20 mm; basket length 17.5 mm.',
        sourceUrl:
          'https://www.rocamed.com/products/percutaneous-nephrostomy/percx-coaxial-pcnl-stone-extractor/',
      },
      {
        id: 'jfil-minijfil',
        slug: 'jfil-minijfil',
        name: 'JFil® & MiniJFil® – Stents urétéraux à sutures',
        ref:
          'ROJV0708ST / ROJV0716ST / ROJV0500ST / ROJV5708ST / ROJV5716ST / ROJV5500ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-minidfil-fRLA6.webp',
        description:
          'Stents urétéraux à sutures en polyuréthane, conçus pour assurer une dilatation de l’uretère par les sutures et améliorer la qualité de vie du patient par rapport au stent double pigtail. Durée d’implantation : jusqu’à 12 mois.',
        applications:
          'Dilatation pré-opératoire, calcul obstructif de la JPU, calcul non obstructif (JFil®) ; dilatation pré-opératoire et calcul non obstructif (MiniJFil®).',
        technical:
          'Stent à sutures en polyuréthane; JFil® : 7 Fr, longueurs de 80 et 160 mm; MiniJFil® : 4,8 Fr; KIT : stent, poussoir connectable de 63 cm avec anneau radio-opaque (poussoir simple de 70 cm pour ROJV0500ST), guide nitinol STIFF hydrophile Ø 0,035"; ECO KIT : stent, poussoir simple avec anneau radio-opaque, sans guide.',
        descriptionEn:
          'Polyurethane suture ureteral stents, designed to provide dilation of the ureter via the sutures and to improve patient quality of life compared with the double pigtail stent. Dwell time: up to 12 months.',
        applicationsEn:
          'Pre-operative dilation, obstructive UPJ stone, non-obstructive stone (JFil®); pre-operative dilation and non-obstructive stone (MiniJFil®).',
        technicalEn:
          'Polyurethane suture stent; JFil®: 7 Fr, lengths of 80 and 160 mm; MiniJFil®: 4.8 Fr; KIT: stent, 63 cm connectable pusher with radiopaque ring (70 cm simple pusher for ROJV0500ST), hydrophilic STIFF nitinol guidewire Ø 0.035"; ECO KIT: stent, simple pusher with radiopaque ring, no guidewire.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/jfil-minijfil/',
      },
      {
        id: 'rocajj-soft',
        slug: 'rocajj-soft',
        name: 'RocaJJ Soft – Stent urétéral JJ en polyuréthane',
        ref:
          'ROJG9524ST…ROJG9830ST / ROJS0524ST…ROJS0830ST / ROJS9524ST…ROJS9830ST / ROJC2624ST…ROJC2728ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-jj-soft-stiff-kit-i3ZxK.png',
        description:
          'Stent urétéral JJ en polyuréthane thermosensible, hautement radio-opaque, avec fil de retrait, pour une implantation jusqu’à 12 mois. Disponible en quatre conditionnements : Stiff Kit, Simple Kit, Eco Kit et Eco Connect Kit.',
        applications:
          'Drainage urétéral par stent JJ ; implantation de longue durée (jusqu’à 12 mois).',
        technical:
          'Polyuréthane thermosensible; fil de retrait (retrieval tether); hautement radio-opaque; tailles de 4,8 à 8,0 Ch/Fr; longueurs de 24 à 30 cm; Stiff Kit : guide nitinol STIFF Ø 0,035", poussoir connectable; Simple Kit : guide PTFE Ø 0,035", poussoir simple; Eco Kit : sans guide, poussoir simple; Eco Connect Kit : sans guide, poussoir connectable; carte patient incluse.',
        descriptionEn:
          'Thermosensitive polyurethane JJ ureteral stent, highly radiopaque, with a retrieval tether, for dwell times of up to 12 months. Available in four packaging options: Stiff Kit, Simple Kit, Eco Kit and Eco Connect Kit.',
        applicationsEn:
          'Ureteral drainage with a JJ stent; long-term implantation (up to 12 months).',
        technicalEn:
          'Thermosensitive polyurethane; retrieval tether; highly radiopaque; sizes from 4.8 to 8.0 Ch/Fr; lengths from 24 to 30 cm; Stiff Kit: STIFF nitinol guidewire Ø 0.035", connectable pusher; Simple Kit: PTFE guidewire Ø 0.035", simple pusher; Eco Kit: no guidewire, simple pusher; Eco Connect Kit: no guidewire, connectable pusher; patient card included.',
        sourceUrl:
          'https://www.rocamed.com/products/endo-urology/rocajj-soft-stent-stiff-kit-2/',
      },
      {
        id: 'endofirm',
        slug: 'endofirm',
        name: 'EndoFirm® – Stent urétéral JJ en polyuréthane',
        ref:
          'ROJF9624ST…ROJF9728ST / ROJF0624ST…ROJF0728ST / ROJF2624ST…ROJF2728ST / ROJF5622ST…ROJF5728ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endofirm-noC5E.webp',
        description:
          'Stent urétéral JJ EndoFirm® en polyuréthane thermosensible, hautement radio-opaque, avec fil de retrait, pour une implantation jusqu’à 12 mois. Disponible en Stiff Kit, Simple Kit, Eco Connect Kit et Eco Kit.',
        applications:
          'Drainage urétéral par stent JJ ; implantation de longue durée (jusqu’à 12 mois).',
        technical:
          'Polyuréthane thermosensible; fil de retrait; hautement radio-opaque; tailles 6,0 et 7,0 Ch/Fr; longueurs de 22 à 28 cm selon le conditionnement; poussoir de 40 cm avec anneau radio-opaque, connectable (Stiff Kit, Eco Connect Kit) ou simple (Simple Kit, Eco Kit); Stiff Kit : guide nitinol STIFF Ø 0,035"; Simple Kit : guide PTFE Ø 0,035"; Eco Kits : sans guide; carte patient incluse dans chaque kit.',
        descriptionEn:
          'EndoFirm® JJ ureteral stent in thermosensitive polyurethane, highly radiopaque, with a retrieval tether, for dwell times of up to 12 months. Available in Stiff Kit, Simple Kit, Eco Connect Kit and Eco Kit.',
        applicationsEn:
          'Ureteral drainage with a JJ stent; long-term implantation (up to 12 months).',
        technicalEn:
          'Thermosensitive polyurethane; retrieval tether; highly radiopaque; sizes 6.0 and 7.0 Ch/Fr; lengths from 22 to 28 cm depending on the packaging; 40 cm pusher with radiopaque ring, connectable (Stiff Kit, Eco Connect Kit) or simple (Simple Kit, Eco Kit); Stiff Kit: STIFF nitinol guidewire Ø 0.035"; Simple Kit: PTFE guidewire Ø 0.035"; Eco Kits: no guidewire; patient card included in every kit.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/jj-firm-stiff-kit/',
      },
      {
        id: 'endosil',
        slug: 'endosil',
        name: 'EndoSil® – Stent urétéral JJ en silicone',
        ref:
          'ROJB9624ST…ROJB9830ST (Stiff Kit) / ROJB2624ST…ROJB2728ST (Eco Connect Kit)',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endosil-AOJJq.webp',
        description:
          'Stent urétéral JJ en silicone, hautement radio-opaque, pour une implantation jusqu’à 12 mois. Disponible en Stiff Kit et Eco Connect Kit.',
        applications:
          'Drainage urétéral par stent JJ ; implantation de longue durée (jusqu’à 12 mois).',
        technical:
          'Silicone; hautement radio-opaque; tailles 6,0, 7,0 et 8,0 Ch/Fr; longueurs de 24 à 30 cm (Stiff Kit) et de 24 à 28 cm (Eco Connect Kit); Stiff Kit : stent, poussoir connectable de 40 cm avec anneau radio-opaque, guide nitinol STIFF Ø 0,035", carte patient; Eco Connect Kit : stent, poussoir connectable de 40 cm avec anneau radio-opaque, carte patient, sans guide.',
        descriptionEn:
          'Silicone JJ ureteral stent, highly radiopaque, for dwell times of up to 12 months. Available in Stiff Kit and Eco Connect Kit.',
        applicationsEn:
          'Ureteral drainage with a JJ stent; long-term implantation (up to 12 months).',
        technicalEn:
          'Silicone; highly radiopaque; sizes 6.0, 7.0 and 8.0 Ch/Fr; lengths from 24 to 30 cm (Stiff Kit) and from 24 to 28 cm (Eco Connect Kit); Stiff Kit: stent, 40 cm connectable pusher with radiopaque ring, STIFF nitinol guidewire Ø 0.035", patient card; Eco Connect Kit: stent, 40 cm connectable pusher with radiopaque ring, patient card, no guidewire.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/endosil/',
      },
      {
        id: 'rocajj-soft-multilongueur',
        slug: 'rocajj-soft-multilongueur',
        name: 'RocaJJ Soft Multilongueur – Stent JJ hydrophile multilongueur',
        ref:
          'ROJM0500ST / ROJM0600ST / ROJM0700ST / ROJM5500ST / ROJM5600ST / ROJM5700ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/roca-jj-multilength-jj-soft-YVdeu.webp',
        description:
          'Stent urétéral JJ hydrophile multilongueur en polyuréthane thermosensible, revêtu Hydromer®. Une même référence couvre les longueurs de 22 à 32 cm pour une position autostatique.',
        applications:
          'Drainage urétéral par stent JJ ; implantation de longue durée (jusqu’à 12 mois).',
        technical:
          'Polyuréthane thermosensible, présenté par ROCAMED comme offrant une excellente tolérance patient; hydrocoaté : revêtement Hydromer®; longueurs de 22 à 32 cm pour une position autostatique; fil de retrait; hautement radio-opaque; tailles 4,8, 6 et 7 Ch/Fr; KIT : stent, poussoir simple de 40 cm avec anneau radio-opaque, guide nitinol STIFF Ø 0,035", carte patient; ECO KIT : stent, poussoir simple de 40 cm avec anneau radio-opaque, carte patient, sans guide.',
        descriptionEn:
          'Multilength hydrophilic JJ ureteral stent in thermosensitive polyurethane, Hydromer® coated. A single reference covers lengths from 22 to 32 cm for a self-retaining position.',
        applicationsEn:
          'Ureteral drainage with a JJ stent; long-term implantation (up to 12 months).',
        technicalEn:
          'Thermosensitive polyurethane, presented by ROCAMED as offering excellent patient tolerance; hydrocoated: Hydromer® coating; lengths from 22 to 32 cm for a self-retaining position; retrieval tether; highly radiopaque; sizes 4.8, 6 and 7 Ch/Fr; KIT: stent, 40 cm simple pusher with radiopaque ring, STIFF nitinol guidewire Ø 0.035", patient card; ECO KIT: stent, 40 cm simple pusher with radiopaque ring, patient card, no guidewire.',
        sourceUrl:
          'https://www.rocamed.com/products/endo-urology/jj-soft-hydro-coated-multilength/',
      },
      {
        id: 'rocajj-simple-j',
        slug: 'rocajj-simple-j',
        name: 'RocaJJ Simple J – Stent urétéral',
        ref: 'ROJG4690ST / ROJG4790ST / ROJG4890ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocajj-simplej-IBz71.webp',
        description:
          'Stent urétéral Simple J (Mono J) en polyuréthane thermosensible, présentant des orifices de drainage dans la tige sur une longueur de 30 cm à partir du pigtail du cathéter.',
        applications:
          'Drainage urétéral ; implantation de longue durée (jusqu’à 12 mois).',
        technical:
          '100 % polyuréthane thermosensible, présenté par ROCAMED comme offrant une bonne tolérance patient et une haute résistance à l’incrustation; type pigtail pour une position autostatique; deux extrémités ouvertes; orifices de drainage sur 30 cm à partir du pigtail; longueur 90 cm; 6, 7 ou 8 Fr; kit : stent Simple J en polyuréthane, guide revêtu de PTFE Ø 0,035", carte patient.',
        descriptionEn:
          'Simple J (Mono J) ureteral stent in thermosensitive polyurethane, featuring drainage holes in the shaft over a length of 30 cm from the catheter’s pigtail.',
        applicationsEn:
          'Ureteral drainage; long-term implantation (up to 12 months).',
        technicalEn:
          '100% thermosensitive polyurethane, presented by ROCAMED as offering good patient tolerance and high resistance to encrustation; pigtail type for a self-retaining position; two open ends; drainage holes over 30 cm from the pigtail; length 90 cm; 6, 7 or 8 Fr; kit: polyurethane Simple J stent, PTFE-coated guidewire Ø 0.035", patient card.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/rocajj-simplej/',
      },
      {
        id: 'bi-flex-evo',
        slug: 'bi-flex-evo',
        name: 'Bi-Flex™ EVO – Gaine d’accès urétéral',
        ref:
          'ROUS1028ST / ROUS1228ST / ROUS1035ST / ROUS1235ST / ROUS1045ST / ROUS1245ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed_2020_biflex-evo_fr-O6Q3J.webp',
        description:
          'Gaine d’accès urétéral à revêtement hydrophile et spirale interne anti-pliure. ROCAMED la présente comme la gaine au plus grand diamètre interne du marché, pour une meilleure irrigation et une meilleure visibilité.',
        applications:
          'Accès urétéral et protection de l’uretère ; amélioration de la vision et réduction de la pression.',
        technical:
          '2 canaux de travail (3 Fr); revêtement hydrophile Hydromer®; anneau distal en platine; spirale interne anti-pliure : structure PEBAX®, ressort en acier et PTFE; introducteur / dilatateur effilé; extrémité souple atraumatique; modèle 10/12 Fr : diamètre interne de 10,5 Fr pour un diamètre externe de 12 Fr; longueurs de 28, 35 et 45 cm.',
        descriptionEn:
          'Ureteral access sheath with hydrophilic coating and an internal anti-kink spiral. ROCAMED presents it as the sheath with the largest inner diameter on the market, for better irrigation and better visibility.',
        applicationsEn:
          'Ureteral access and ureter protection; improved vision and reduced pressure.',
        technicalEn:
          '2 working channels (3 Fr); Hydromer® hydrophilic coating; platinum distal ring; internal anti-kink spiral: PEBAX® structure, steel spring and PTFE; tapered introducer / dilator; soft atraumatic tip; 10/12 Fr model: inner diameter of 10.5 Fr for an outer diameter of 12 Fr; lengths of 28, 35 and 45 cm.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/biflex-evo/',
      },
      {
        id: 'x-filter',
        slug: 'x-filter',
        name: 'X-Filter™ – Dispositif anti-migration',
        ref: 'ROXE363609ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/x-filter-30svI.webp',
        description:
          'Dispositif anti-migration pour lithotritie urétérale : une tresse occlusive en nitinol, déployée pour prévenir la migration rétrograde des fragments, permet de retenir et d’immobiliser les fragments pendant la fragmentation du calcul.',
        applications:
          'Lithotritie endoscopique avec prévention de la migration rétrograde des fragments ; rétention des fragments de calculs et évacuation des débris par irrigation.',
        technical:
          'Tresse occlusive en nitinol; embout Flexi pour franchir le calcul et atteindre le bassinet rénal; concept en quatre temps selon ROCAMED : PASS (navigation au-delà de l’occlusion), FRAGMENT (fragmentation), TRAP (rétention et immobilisation des fragments), CLEAR (évacuation des débris par irrigation); longueur 150 cm; 3,6 Fr; embout de 9 cm.',
        descriptionEn:
          'Anti-migration device for ureteral lithotripsy: an occlusive nitinol braid, deployed to prevent retrograde migration of fragments, allows fragments to be retained and immobilized during stone fragmentation.',
        applicationsEn:
          'Endoscopic lithotripsy with prevention of retrograde fragment migration; retention of stone fragments and clearance of debris by irrigation.',
        technicalEn:
          'Occlusive nitinol braid; Flexi tip to pass the stone and reach the renal pelvis; four-step concept according to ROCAMED: PASS (navigation beyond the occlusion), FRAGMENT (fragmentation), TRAP (retention and immobilization of fragments), CLEAR (clearance of debris by irrigation); length 150 cm; 3.6 Fr; 9 cm tip.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/x-filter/',
      },
      {
        id: 'rio-tracer',
        slug: 'rio-tracer',
        name: 'Rio Tracer™ – Fil guide Rocawire en nitinol',
        ref: 'ROWR3500ST / ROWR3501ST / ROWR3502ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rio-tracer-JnUbX.webp',
        description:
          'Fil guide Rocawire en nitinol à âme rigide, extrémité souple hydrophile et embout radio-opaque, avec motif rayé bleu et jaune pour la visualisation endoscopique du mouvement du fil.',
        applications:
          'Guidage en endo-urologie ; franchissement d’obstructions et progression dans les anatomies tortueuses.',
        technical:
          'Embout radio-opaque rempli de baryum : visualisation améliorée en fluoroscopie; extrémité souple hydrophile : facilite le passage au-delà des obstructions et la négociation des anatomies tortueuses; âme rigide en nitinol : tige résistante aux plicatures pour un meilleur contrôle; revêtement PTFE : surface facilitant l’avancée; motif rayé bleu et jaune : visualisation endoscopique claire du mouvement du fil; Ø 0,035"; longueur 150 cm.',
        descriptionEn:
          'Rocawire nitinol guidewire with a stiff core, hydrophilic soft tip and radiopaque tip, with a blue and yellow striped pattern for endoscopic visualization of wire movement.',
        applicationsEn:
          'Guidance in endourology; crossing obstructions and navigating tortuous anatomy.',
        technicalEn:
          'Barium-filled radiopaque tip: improved fluoroscopic visualization; hydrophilic soft tip: facilitates passage beyond obstructions and negotiation of tortuous anatomy; stiff nitinol core: kink-resistant shaft for better control; PTFE coating: surface that facilitates advancement; blue and yellow striped pattern: clear endoscopic visualization of wire movement; Ø 0.035"; length 150 cm.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/riotracer/',
      },
      {
        id: 'rocawire-nitinol',
        slug: 'rocawire-nitinol',
        name: 'RocaWire® Nitinol – Fil guide en nitinol',
        ref:
          'ROWP3200ST / ROWP3500ST / ROWP3502ST / ROWP3503ST / ROWP3510ST / ROWP3802ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocawire-nitinol-FRlb4.webp',
        description:
          'Fil guide en nitinol avec revêtement polyuréthane et hydrophile, hautement radio-opaque.',
        applications: 'Guidage en endo-urologie.',
        technical:
          'Fil guide en nitinol; revêtement polyuréthane et hydrophile; hautement radio-opaque; extrémités droite flexible, droite flexible STIFF ou angulée flexible; diamètres 0,032", 0,035" et 0,038"; longueurs 150 cm et 180 cm (version LONG).',
        descriptionEn:
          'Nitinol guidewire with polyurethane and hydrophilic coating, highly radiopaque.',
        applicationsEn:
          'Guidance in endourology.',
        technicalEn:
          'Nitinol guidewire; polyurethane and hydrophilic coating; highly radiopaque; straight flexible, straight flexible STIFF or flexible angled tips; diameters 0.032", 0.035" and 0.038"; lengths 150 cm and 180 cm (LONG version).',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/rocawire-nitinol/',
      },
      {
        id: 'rocawire-ptfe',
        slug: 'rocawire-ptfe',
        name: 'RocaWire® PTFE – Fil guide en acier revêtu de PTFE',
        ref: 'ROWG3500ST / ROWG3502ST / ROWG3510ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocawire-8TY0n.webp',
        description: 'Fil guide en acier revêtu de PTFE, hautement radio-opaque.',
        applications: 'Guidage en endo-urologie.',
        technical:
          'Fil guide en acier revêtu de PTFE; hautement radio-opaque; trois configurations : droit flexible, avec stylet amovible, extrémité « J » flexible; longueur 150 cm; Ø 0,035".',
        descriptionEn:
          'PTFE-coated steel guidewire, highly radiopaque.',
        applicationsEn:
          'Guidance in endourology.',
        technicalEn:
          'PTFE-coated steel guidewire; highly radiopaque; three configurations: straight flexible, with removable stylet, flexible “J” tip; length 150 cm; Ø 0.035".',
        sourceUrl: 'https://www.rocamed.com/equipments/rocawire-ptfe/',
      },
      {
        id: 'rocatub',
        slug: 'rocatub',
        name: 'RocaTub® – Cathéter urétéral (dont FlexiKat)',
        ref:
          'ROTA4200ST…ROTA8200ST / ROTG4000ST…ROTG8000ST / ROTH4000ST…ROTH8000ST / ROTP5000ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/roca-tube-RSu5m.webp',
        description:
          'Cathéter urétéral en polyuréthane thermosensible, hydrocoaté, gradué et radio-opaque, fourni avec un stylet. Disponible avec extrémité distale droite ou courbe, ouverte, avec 2 yeux ou sans œil. La version FlexiKat est un cathéter de 5 Fr à extrémité droite ouverte Flexi, sans œil.',
        applications: 'Cathétérisme urétéral.',
        technical:
          'Polyuréthane thermosensible; hydrocoaté, gradué et radio-opaque; fourni avec stylet; longueur 80 cm; extrémité droite ou courbe, ouverte; avec 2 yeux ou sans œil; tailles de 4 à 8 Fr; FlexiKat en 5 Fr.',
        descriptionEn:
          'Ureteral catheter in thermosensitive polyurethane, hydrocoated, graduated and radiopaque, supplied with a stylet. Available with a straight or curved, open distal end, with 2 eyes or no eye. The FlexiKat version is a 5 Fr catheter with a straight, open Flexi tip and no eye.',
        applicationsEn:
          'Ureteral catheterization.',
        technicalEn:
          'Thermosensitive polyurethane; hydrocoated, graduated and radiopaque; supplied with stylet; length 80 cm; straight or curved, open end; with 2 eyes or no eye; sizes from 4 to 8 Fr; FlexiKat in 5 Fr.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/rocatub-catheter/',
      },
      {
        id: 'rocanephro',
        slug: 'rocanephro',
        name: 'RocaNephro® – Aiguilles de néphrostomie',
        ref: 'RONN1821ST / RONN1820ST / RONN1822ST / RONN2222ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocanephro-Q5ZvQ.webp',
        description:
          'Aiguilles échogéniques de 20 cm conçues pour une meilleure visibilité à l’échographie. La pointe Diamant est utilisée pour l’accès de néphrostomie percutanée ; la pointe Chiba pour la localisation initiale et le positionnement du système collecteur rénal lors d’une néphrostomie percutanée.',
        applications:
          'Néphrostomie percutanée ; localisation et positionnement du système collecteur rénal.',
        technical:
          'Aiguille échogène pour une meilleure visibilité échographique; longueur 20 cm; aiguilles en 2 ou 3 parties; pointe Diamant ou pointe Chiba; calibres 18 G et 22 G.',
        descriptionEn:
          '20 cm echogenic needles designed for better ultrasound visibility. The Diamond tip is used for percutaneous nephrostomy access; the Chiba tip for initial localization and positioning of the renal collecting system during percutaneous nephrostomy.',
        applicationsEn:
          'Percutaneous nephrostomy; localization and positioning of the renal collecting system.',
        technicalEn:
          'Echogenic needle for better ultrasound visibility; length 20 cm; 2-part or 3-part needles; Diamond tip or Chiba tip; gauges 18 G and 22 G.',
        sourceUrl:
          'https://www.rocamed.com/products/percutaneous-nephrostomy/needles-chiba-and-trocart/',
      },
      {
        id: 'traxerflow',
        slug: 'traxerflow',
        name: 'TraxerFlow™ DUAL PORT – Gravity Line (ligne d’irrigation par gravité)',
        ref: 'ONGT2000ST12',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/t-flow-Qtiic.webp',
        description:
          'Ligne d’irrigation par gravité pour urétéroscopie laser, équipée d’un double port, d’une pompe manuelle et d’une chambre de pression. Compatible, selon ROCAMED, avec toutes les principales marques d’endoscopes.',
        applications: 'Urétéroscopie laser (irrigation par gravité).',
        technical:
          'Pompe manuelle : débit supplémentaire pour dégager le champ opératoire; joint Tuohy-Borst : maintient la fibre laser et évite les fuites; raccord Luer lock mâle rotatif à 360° : libre mouvement de l’endoscope; chambre de pression avec clapet anti-retour; compatibilité illustrée au catalogue : Olympus P6, Storz, Wolf.',
        descriptionEn:
          'Gravity irrigation line for laser ureteroscopy, equipped with a dual port, a manual pump and a pressure chamber. According to ROCAMED, compatible with all major endoscope brands.',
        applicationsEn:
          'Laser ureteroscopy (gravity irrigation).',
        technicalEn:
          'Manual pump: additional flow to clear the operative field; Tuohy-Borst seal: holds the laser fiber and prevents leaks; 360° rotating male Luer lock connector: free movement of the endoscope; pressure chamber with non-return valve; compatibility illustrations in the catalog: Olympus P6, Storz, Wolf.',
        sourceUrl: 'https://www.rocamed.com/products/endo-urology/traxerflow/',
      },
      {
        id: 'endoflow-ii',
        slug: 'endoflow-ii',
        name: 'EndoFlow® II – Console de gestion des fluides',
        ref: 'MEN01 / MEN02P',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endoflow-ii-mono-chamber-BZrIM.webp',
        description:
          'Système de gestion des fluides nouvelle génération (irrigation, aspiration, irrigation haute pression), avec large gamme de modes de pression pour l’urologie, la gynécologie et la chirurgie générale. Disponible en version simple chambre ou double chambre.',
        applications:
          'Urologie : urétéroscopie, RTUP (TURP), cœlioscopie. Gynécologie : hystéroscopie, cœlioscopie. Chirurgie générale : cœlioscopie.',
        technical:
          'Gestion précise de la pression : auto-régulation, sans effet de pulsation; pression indiquée par la machine identique à la pression dans la cavité fermée; poche de liquide chauffée et maintenue à 38 °C ±2; système d’irrigation isostatique; pompe d’aspiration; identification RFID des tubulures; interface tactile; plages de pression : endo-urologie 0–190 mbar, hystéroscopie 0–230 mbar, cœlioscopie 0–1000 mbar, résection 0–1000 mbar, arthroscopie 0–350 mbar; caractéristiques électriques : 230 V (Europe) – 50 Hz – 420 VA.',
        descriptionEn:
          'Next-generation fluid management system (irrigation, aspiration, high-pressure irrigation), with a wide range of pressure modes for urology, gynecology and general surgery. Available in single-chamber or double-chamber version.',
        applicationsEn:
          'Urology: ureteroscopy, TURP, laparoscopy. Gynecology: hysteroscopy, laparoscopy. General surgery: laparoscopy.',
        technicalEn:
          'Precise pressure management: self-regulating, with no pulsation effect; pressure displayed by the machine identical to the pressure in the closed cavity; fluid bag heated and maintained at 38 °C ±2; isostatic irrigation system; aspiration pump; RFID identification of tubing; touch interface; pressure ranges: endourology 0–190 mbar, hysteroscopy 0–230 mbar, laparoscopy 0–1000 mbar, resection 0–1000 mbar, arthroscopy 0–350 mbar; electrical characteristics: 230 V (Europe) – 50 Hz – 420 VA.',
        sourceUrl: 'https://www.rocamed.com/equipments/endoflow2-2/',
      },
      {
        id: 'sets-endoflow-ii',
        slug: 'sets-endoflow-ii',
        name: 'Sets EndoFlow® II – Tubulures d’irrigation / aspiration',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endoflow-tubulures-EtQgL.webp',
        ref:
          'SOUR9107ST12 / SOUR9207ST12 / SOUR9201ST12 / SOUR9200ST12 / SOUR9212ST12 / SOUR2002ST12 / SOUR9208ST12 / SOLA9100ST12 / SOLA0533ST12 / SOLA1033ST12 / SOLA0500ST12 / SOLA2500ST12 / SOHY9100ST12 / SOHY9200ST12 / SOHY9102ST12 / SOHY9202ST12',
        description:
          'Gamme de tubulures et de sets à usage spécifique pour la console EndoFlow® II, destinée à l’irrigation et/ou à l’aspiration en urologie, gynécologie et chirurgie mini-invasive. Les tubulures d’irrigation et d’aspiration sont identifiées par un code couleur : bleu pour l’irrigation et rouge pour l’aspiration.',
        applications:
          'Urologie : urétéroscopie et procédures de résection transurétrale de la prostate (RTUP). Gynécologie : hystéroscopie. Chirurgie mini-invasive : cœlioscopie.',
        technical:
          'Sets conçus pour fonctionner avec la console EndoFlow® II; tubes jumelés avec identification couleur : bleu = irrigation / rouge = aspiration; urétéroscopie : joint Tuohy-Borst pour maintenir la fibre laser, raccord Luer lock mâle rotatif à 360°, pompe manuelle et chambre de pression avec valve anti-retour; RTUP : raccord résecteur adaptable par Luer lock ou connecteur à étages, segment de pompe pour l’aspiration et raccord canister; cœlioscopie : sets avec ou sans poignée et sondes de diamètre 3, 5 ou 10 mm; hystéroscopie : lignes séparées d’irrigation et d’aspiration avec raccord canister; configurations disponibles avec 1 ou 2 pics (spikes) selon le modèle.',
        descriptionEn:
          'Range of dedicated tubing and sets for the EndoFlow® II console, intended for irrigation and/or aspiration in urology, gynecology and minimally invasive surgery. Irrigation and aspiration tubes are color-coded: blue for irrigation and red for aspiration.',
        applicationsEn:
          'Urology: ureteroscopy and transurethral resection of the prostate (TURP) procedures. Gynecology: hysteroscopy. Minimally invasive surgery: laparoscopy.',
        technicalEn:
          'Sets designed to work with the EndoFlow® II console; twin tubes with color identification: blue = irrigation / red = aspiration; ureteroscopy: Tuohy-Borst seal to hold the laser fiber, 360° rotating male Luer lock connector, manual pump and pressure chamber with non-return valve; TURP: resectoscope connector adaptable via Luer lock or stepped connector, pump segment for aspiration and canister connector; laparoscopy: sets available with or without handle and with probes of 3, 5 or 10 mm diameter; hysteroscopy: separate irrigation and aspiration lines with canister connector; configurations available with 1 or 2 spikes depending on the model.',
        sourceUrl: 'https://www.rocamed.com/equipments/endoflow2-2/',
      },
      {
        id: 'sirius-60w',
        slug: 'sirius-60w',
        name: 'SIRIUS® – Laser à fibre thulium 60 W',
        ref: 'MS01',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-sirius-F8ZCG.webp',
        description:
          'Laser à fibre thulium de 60 W, de conception compacte, destiné à la lithotritie et au traitement de l’hyperplasie bénigne de la prostate (HBP) et des tissus mous. Il est livré avec un écran tactile intuitif et des pédales, et fonctionne avec des fibres à usage unique ou réutilisables.',
        applications:
          'Solution calculs : lithotritie. Solution HBP : traitement de l’HBP, hémostase, tissus mous.',
        technical:
          'Type de laser : fibre thulium; longueur d’onde : 1940 nm ±20 nm; puissance : 60 W; énergie par impulsion : jusqu’à 6 J; modes : pulsé et continu (CW); durée d’impulsion : 75 µs < durée < 1000 µs; fréquence de répétition : jusqu’à 2500 Hz; puissance crête : jusqu’à 500 W; design compact, installation électrique standard, niveaux sonores réduits; écran tactile intuitif et pédales.',
        descriptionEn:
          '60 W thulium fiber laser of compact design, intended for lithotripsy and for the treatment of benign prostatic hyperplasia (BPH) and soft tissue. It is delivered with an intuitive touchscreen and foot pedals, and works with single-use or reusable fibers.',
        applicationsEn:
          'Stone solution: lithotripsy. BPH solution: BPH treatment, hemostasis, soft tissue.',
        technicalEn:
          'Laser type: thulium fiber; wavelength: 1940 nm ±20 nm; power: 60 W; pulse energy: up to 6 J; modes: pulsed and continuous (CW); pulse duration: 75 µs < duration < 1000 µs; repetition rate: up to 2500 Hz; peak power: up to 500 W; compact design, standard electrical installation, reduced noise levels; intuitive touchscreen and foot pedals.',
        sourceUrl: 'https://www.rocamed.com/equipments/sirius/',
      },
      {
        id: 'laser-holmium-30w',
        slug: 'laser-holmium-30w',
        name: 'Laser Holmium 30 W (MH01)',
        ref: 'MH01',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/30w-holmium-laser-nWox6.webp',
        description:
          'Laser Holmium YAG de 30 W offrant, selon ROCAMED, une large gamme de fréquences et d’énergies. Le réglage de la fréquence et de l’énergie est intégré à un menu intuitif préprogrammé, pour une stratégie de traitement fine et précise sur calculs ou tissus mous.',
        applications:
          'Lithotritie : calculs de type oxalate de calcium monohydrate, oxalate de calcium dihydrate, cystine, acide urique, struvite / infectieux et autres. Tissus : résection – tumeur – UTUC, section / coupe, coagulation.',
        technical:
          'Longueur d’onde : Ho:YAG 2100 nm (±20 nm); puissance moyenne : jusqu’à 30 W; énergie par impulsion : 0,2–4 J; fréquence : 3–25 Hz; durée d’impulsion : 150–850 µs, régulation automatique; deux modes d’application : lithotritie ou tissus; lithotritie : « Dusting » (vaporisation, impulsion longue) ou « Fragmentation » (impulsion courte); préréglages enregistrés par type de calcul sélectionné; alarme de recoupe de la fibre; identification de la fibre par RFID; alimentation : 100–120 VAC, 50/60 Hz, 16 A ou 200–240 VAC, 50/60 Hz, 10 A; poids : 60 kg.',
        descriptionEn:
          '30 W Holmium YAG laser offering, according to ROCAMED, a wide range of frequencies and energies. Frequency and energy settings are integrated into an intuitive preprogrammed menu, for a fine and precise treatment strategy on stones or soft tissue.',
        applicationsEn:
          'Lithotripsy: stones of the following types: calcium oxalate monohydrate, calcium oxalate dihydrate, cystine, uric acid, struvite / infection stones and others. Tissue: resection – tumor – UTUC, incision / cutting, coagulation.',
        technicalEn:
          'Wavelength: Ho:YAG 2100 nm (±20 nm); average power: up to 30 W; pulse energy: 0.2–4 J; frequency: 3–25 Hz; pulse duration: 150–850 µs, automatic regulation; two application modes: lithotripsy or tissue; lithotripsy: “Dusting” (vaporization, long pulse) or “Fragmentation” (short pulse); presets saved by selected stone type; fiber re-cut alarm; fiber identification by RFID; power supply: 100–120 VAC, 50/60 Hz, 16 A or 200–240 VAC, 50/60 Hz, 10 A; weight: 60 kg.',
        sourceUrl:
          'https://www.rocamed.com/equipments/laser-equipment/rocamed-holmium-laser/',
      },
      {
        id: 'fibres-laser',
        slug: 'fibres-laser',
        name: 'Fibres laser – Fibres optiques chirurgicales SIRIUS® et Holmium',
        ref:
          'MS150ST / MF200ST / MF272ST / MF365ST / MF550ST / MF800ST / MF1000ST / MS200RST / MS272RST / MS365RST / MS550RST / MS800RST / MS1000RST / MF200RST / MF272RST / MF365RST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-fibres-laser-04ePg.webp',
        description:
          'Fibres optiques chirurgicales stériles à usage unique ou réutilisables, avec identification RFID, pour les lasers SIRIUS® 60 W et Holmium 30 W.',
        applications:
          'Fibres pour les lasers SIRIUS® 60 W et Laser Holmium 30 W ; lithotritie et traitement des tissus selon le laser utilisé.',
        technical:
          'Fibres optiques chirurgicales stériles; versions à usage unique et réutilisables (jusqu’à ×5 ou ×10 selon la référence); identification RFID; SIRIUS® : diamètres de 150 à 1000 µm; Holmium : diamètres 200, 272 et 365 µm; 5 unités par boîte.',
        descriptionEn:
          'Sterile single-use or reusable surgical optical fibers, with RFID identification, for the SIRIUS® 60 W and Holmium 30 W lasers.',
        applicationsEn:
          'Fibers for the SIRIUS® 60 W and Holmium Laser 30 W lasers; lithotripsy and tissue treatment depending on the laser used.',
        technicalEn:
          'Sterile surgical optical fibers; single-use and reusable versions (up to ×5 or ×10 depending on the reference); RFID identification; SIRIUS®: diameters from 150 to 1000 µm; Holmium: diameters of 200, 272 and 365 µm; 5 units per box.',
        sourceUrl:
          'https://www.rocamed.com/equipments/laser-equipment/30w-holmium-laser-fibers/',
      },
      {
        id: 'exime',
        slug: 'exime',
        name: 'EXIME® – Stent prostatique temporaire',
        ref: 'ROFV2200ST',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/exime-X6SON.webp',
        description:
          'Stent prostatique temporaire destiné à rétablir le flux urinaire et à permettre la miction volontaire chez l’homme présentant une rétention urinaire aiguë ou chronique. Utilisation temporaire, jusqu’à 1 mois. Livré prêt à l’emploi.',
        applications:
          'Rétention urinaire aiguë ou chronique chez l’homme ; utilisation temporaire (jusqu’à 1 mois).',
        technical:
          'Partie prostatique : tube urétral spiralé en silicone, pour une meilleure stabilité; partie bulbaire : tube urétral droit en silicone, flottant dans l’urètre bulbeux, prévient la migration vers le haut; ailettes anti-migration de part et d’autre du sphincter; extrémité droite, sans ballonnet : moins de stimulation du trigone; fil de connexion monofilament non résorbable, préservant la fonction sphinctérienne normale; fil de sécurité et de retrait; kit : stent prostatique 20 Ch, tube poussoir gradué rigide avec connexion Luer, tube aplatisseur translucide avec butée rose, 2 bougies (22 et 24 Fr) pour le calibrage du méat et de l’urètre avant insertion; mise en place en cinq étapes : préparation et calibrage, insertion, libération, contrôle, retrait par traction sur le fil.',
        descriptionEn:
          'Temporary prostatic stent intended to restore urinary flow and allow voluntary voiding in men with acute or chronic urinary retention. Temporary use, up to 1 month. Delivered ready to use.',
        applicationsEn:
          'Acute or chronic urinary retention in men; temporary use (up to 1 month).',
        technicalEn:
          'Prostatic part: spiral silicone urethral tube, for better stability; bulbar part: straight silicone urethral tube, floating in the bulbar urethra, prevents upward migration; anti-migration fins on either side of the sphincter; straight tip, no balloon: less stimulation of the trigone; non-absorbable monofilament connecting thread, preserving normal sphincter function; safety and retrieval thread; kit: 20 Ch prostatic stent, rigid graduated pusher tube with Luer connection, translucent flattening tube with pink stop, 2 bougies (22 and 24 Fr) for calibration of the meatus and urethra before insertion; five-step placement: preparation and calibration, insertion, release, check, removal by pulling on the thread.',
        sourceUrl: 'https://www.rocamed.com/products/prostate/exime/',
      },
      {
        id: 'echolaser-tpla',
        slug: 'echolaser-tpla',
        name: 'EchoLaser® TPLA™ – Ablation laser transpérinéale',
        ref: 'MEL01 / ROEL_KITX20',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/echolaser-5NPWd.webp',
        description:
          'Solution micro-invasive guidée par échographie pour le traitement de l’hyperplasie bénigne de la prostate (HBP) avec symptômes du bas appareil urinaire. La lumière laser chauffe le tissu à traiter jusqu’à l’obtention de lésions irréversibles in situ ; de très fines aiguilles (21G) sont insérées par voie transpérinéale, sans toucher l’urètre.',
        applications:
          'Hyperplasie bénigne de la prostate (HBP) avec symptômes du bas appareil urinaire.',
        technical:
          'Technique micro-invasive par voie transpérinéale, aiguilles de 21G; traitement pouvant être réalisé sous guidage échographique, avec suivi en temps réel du positionnement des applicateurs laser; EchoLaser X4 : module laser à 4 canaux pour la délivrance du rayonnement laser; interface ESI (EchoLaser Smart Interface) : logiciel dédié aux traitements urologiques, assistance en temps réel, pouvant être associé à la plupart des systèmes d’échographie; kit de fibres à usage unique : fibre optique et aiguille introductrice Chiba 21G; systèmes de guidage multi-aiguilles; procédure en quatre étapes : préparation, insertion des aiguilles, délivrance de l’énergie (5–10 min) et pull-back si nécessaire, sortie du patient généralement le jour de la procédure.',
        descriptionEn:
          'Ultrasound-guided, minimally invasive solution for the treatment of benign prostatic hyperplasia (BPH) with lower urinary tract symptoms. The laser light heats the tissue to be treated until irreversible lesions are obtained in situ; very fine needles (21G) are inserted transperineally, without touching the urethra.',
        applicationsEn:
          'Benign prostatic hyperplasia (BPH) with lower urinary tract symptoms.',
        technicalEn:
          'Minimally invasive transperineal technique, 21G needles; treatment can be performed under ultrasound guidance, with real-time monitoring of laser applicator positioning; EchoLaser X4: 4-channel laser module for delivery of laser radiation; ESI interface (EchoLaser Smart Interface): software dedicated to urological treatments, real-time assistance, can be combined with most ultrasound systems; single-use fiber kit: optical fiber and 21G Chiba introducer needle; multi-needle guidance systems; four-step procedure: preparation, needle insertion, energy delivery (5–10 min) and pull-back if necessary, patient discharge generally on the day of the procedure.',
        sourceUrl: 'https://www.rocamed.com/equipments/echolaser/',
      },
    ],
    /* Par spécialité — spécialités médicales (PDF §4A) */
    specialtyGroups: [
      {
        id: 'urologie',
        slug: 'urologie',
        titleFr: 'Urologie',
        titleEn: 'Urology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/urologie-rocamed-bmOZH.jpg',
        productIds: [
          'kobot',
          'rocastone',
          'perkx',
          'jfil-minijfil',
          'rocajj-soft',
          'endofirm',
          'endosil',
          'rocajj-soft-multilongueur',
          'rocajj-simple-j',
          'bi-flex-evo',
          'x-filter',
          'rio-tracer',
          'rocawire-nitinol',
          'rocawire-ptfe',
          'rocatub',
          'rocanephro',
          'traxerflow',
          'endoflow-ii',
          'sets-endoflow-ii',
          'sirius-60w',
          'laser-holmium-30w',
          'fibres-laser',
          'exime',
          'echolaser-tpla',
        ],
      },
      {
        id: 'gynecologie',
        slug: 'gynecologie',
        titleFr: 'Gynécologie',
        titleEn: 'Gynecology',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/categorie-gynecologie-erbe-nwM4o.jpg',
        productIds: ['endoflow-ii', 'sets-endoflow-ii'],
      },
      {
        id: 'chirurgie-mini-invasive-coelioscopie',
        slug: 'chirurgie-mini-invasive-coelioscopie',
        titleFr: 'Chirurgie mini-invasive / Cœlioscopie',
        titleEn: 'Minimally invasive surgery / Laparoscopy',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/visualisation-de-chirurgie-laparoscopique-Pgy6N.webp',
        productIds: ['endoflow-ii', 'sets-endoflow-ii'],
      },
    ],
    /* Par type de produit (PDF §4B) */
    typeGroups: [
      {
        id: 'extraction-calculs',
        slug: 'extraction-calculs',
        titleFr: 'Extraction de calculs',
        titleEn: 'Stone extraction',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocastone1-1-iheV6.webp',
        productIds: ['kobot', 'rocastone', 'perkx'],
      },
      {
        id: 'stents-ureteraux',
        slug: 'stents-ureteraux',
        titleFr: 'Stents urétéraux',
        titleEn: 'Ureteral stents',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-jj-soft-stiff-kit-BBAxU.png',
        productIds: [
          'jfil-minijfil',
          'rocajj-soft',
          'endofirm',
          'endosil',
          'rocajj-soft-multilongueur',
          'rocajj-simple-j',
        ],
      },
      {
        id: 'acces-ureteral-protection',
        slug: 'acces-ureteral-protection',
        titleFr: 'Accès urétéral & protection',
        titleEn: 'Ureteral access & protection',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/x-filter-D7Pw8.webp',
        productIds: ['bi-flex-evo', 'x-filter'],
      },
      {
        id: 'fils-guides',
        slug: 'fils-guides',
        titleFr: 'Fils guides',
        titleEn: 'Guidewires',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocawire-g54cp.webp',
        productIds: ['rio-tracer', 'rocawire-nitinol', 'rocawire-ptfe'],
      },
      {
        id: 'catheters-drainage-acces-percutane',
        slug: 'catheters-drainage-acces-percutane',
        titleFr: 'Cathéters, drainage & accès percutané',
        titleEn: 'Catheters, drainage & percutaneous access',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/roca-tube-ivY4p.webp',
        productIds: ['rocatub', 'rocanephro', 'perkx'],
      },
      {
        id: 'irrigation-gestion-fluides',
        slug: 'irrigation-gestion-fluides',
        titleFr: 'Irrigation & gestion des fluides',
        titleEn: 'Irrigation & fluid management',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/endoflow-ii-mono-chamber-P7X00.webp',
        productIds: ['traxerflow', 'endoflow-ii', 'sets-endoflow-ii'],
      },
      {
        id: 'lasers-fibres-laser',
        slug: 'lasers-fibres-laser',
        titleFr: 'Lasers & fibres laser',
        titleEn: 'Lasers & laser fibers',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-sirius-BEmzJ.webp',
        productIds: ['sirius-60w', 'laser-holmium-30w', 'fibres-laser'],
      },
      {
        id: 'prostate',
        slug: 'prostate',
        titleFr: 'Prostate',
        titleEn: 'Prostate',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/echolaser-Zjwra.webp',
        productIds: ['exime', 'echolaser-tpla'],
      },
    ],
  },

  {
    id: 'integra',
    slug: 'integra',
    name: 'INTEGRA LifeSciences',
    shortName: 'Integra',
    logo: LOGO.integra,
    focus: {
      fr: 'Neurochirurgie, monitoring et reconstruction tissulaire',
      en: 'Neurosurgery, monitoring and tissue reconstruction',
    },
    specialties: {
      fr: 'Neurochirurgie crânienne et rachidienne, hydrocéphalie, soins neurocritiques, réparation durale',
      en: 'Cranial and spine neurosurgery, hydrocephalus, neurocritical care, dural repair',
    },
    sourceUrl: 'https://www.integralife.com/',
    productList: [
      {
        id: 'cusa-clarity',
        slug: 'cusa-clarity',
        name: 'CUSA Clarity',
        ref: 'CUSA-CLARITY',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusa-clarity-console-NxrWe.avif',
        description:
          'Système d’aspiration ultrasonique CUSA Clarity pour la résection contrôlée de tumeurs et de tissus pathologiques en neurochirurgie et disciplines associées. La plateforme combine cavitation ultrasonique, irrigation et aspiration pour une dissection sélective tout en préservant les structures critiques.',
        applications:
          'Neurochirurgie crânienne et rachidienne, résection tumorale, chirurgie de la base du crâne et applications où une aspiration ultrasonique précise est requise.',
        technical:
          'Aspiration ultrasonique avec contrôle d’amplitude et d’irrigation ; pièces à main et embouts dédiés selon indication ; console et consommables de la gamme CUSA Clarity. Vérifier configuration locale, embouts et IFU fabricant avant offre.',
        sourceUrl: 'https://products.integralife.com/cusa-clarity/category/cusa-tissue-ablation-cusa-clarity',
      },
      {
        id: 'aurora-surgiscope',
        slug: 'aurora-surgiscope',
        name: 'Aurora Surgiscope',
        ref: 'AURORA-SURGISCOPE',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/aurora-surgiscope-8ZZbC.avif',
        description:
          'Système de visualisation et d’accès Aurora Surgiscope conçu pour guider les procédures neurochirurgicales mini-invasives. Il offre un canal de travail et une optique adaptés à la navigation dans des corridors étroits.',
        applications:
          'Neurochirurgie mini-invasive, accès intracérébral, procédures guidées nécessitant visualisation et instrumentation coaxiale.',
        technical:
          'Surgiscope / tube d’accès avec optique intégrée ou compatible ; diamètres et longueurs selon kit ; usage avec instrumentation dédiée Aurora. Confirmer disponibilité des kits et homologation pays.',
        sourceUrl: 'https://products.integralife.com/aurora-surgiscope-system/product/aurora-minimally-invasive-surgery-aurora-surgiscope',
      },
      {
        id: 'aurora-evacuator-coag',
        slug: 'aurora-evacuator-coag',
        name: 'Aurora Evacuator + Coag',
        ref: 'AURORA-EVAC-COAG',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/aurora-evacuator-coag-Ce7hv.avif',
        description:
          'Module d’évacuation et de coagulation associé à l’écosystème Aurora pour le contrôle de l’hémostase et l’évacuation des tissus/fluides pendant les procédures d’accès guidé.',
        applications:
          'Complément des procédures Aurora Surgiscope ; hémostase et évacuation en neurochirurgie mini-invasive.',
        technical:
          'Évacuation + coagulation intégrées ou couplées selon configuration ; compatibilité avec la plateforme Aurora. Vérifier consommables et générateur associés auprès du fabricant.',
        sourceUrl: 'https://products.integralife.com/aurora-evacuator-coag/product/aurora-evacuator-coag',
      },
      {
        id: 'duragen',
        slug: 'duragen',
        name: 'DuraGen',
        ref: 'DURAGEN',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duragen-dural-graft-matrix-g92Mk.avif',
        description:
          'Matrice de régénération durale DuraGen à base de collagène, destinée à la réparation de la dure-mère lorsque une greffe durale est indiquée. Conçue pour servir de support à la repousse tissulaire.',
        applications:
          'Neurochirurgie crânienne et rachidienne nécessitant une plastie ou un renfort dural.',
        technical:
          'Matrice collagène ; formats et épaisseurs selon références catalogue Integra ; stérile, usage unique. Suivre IFU pour orientation, hydratation et fixation.',
        sourceUrl: 'https://products.integralife.com/duragen-dural-graft-matrix/product/dural-repair-grafts-duragen-classic',
      },
      {
        id: 'duragen-plus',
        slug: 'duragen-plus',
        name: 'DuraGen Plus',
        ref: 'DURAGEN-PLUS',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duragen-plus-GEUPB.avif',
        description:
          'Évolution de la gamme DuraGen offrant une matrice collagène renforcée pour la reconstruction durale, avec manipulation adaptée aux besoins du chirurgien en crânien et rachis.',
        applications:
          'Réparation durale en neurochirurgie lorsque une matrice de type DuraGen Plus est indiquée.',
        technical:
          'Matrice collagène DuraGen Plus ; tailles multiples ; usage unique stérile. Vérifier références exactes et indications locales.',
        sourceUrl: 'https://products.integralife.com/duragen-plus-dural-regeneration-matrix/product/dural-repair-grafts-duragen-plus',
      },
      {
        id: 'duraseal',
        slug: 'duraseal',
        name: 'DuraSeal',
        ref: 'DURASEAL',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duraseal-dural-sealant-system-MMhW8.avif',
        description:
          'Système de scellement dural DuraSeal (hydrogel) destiné à compléter la fermeture durale et à contribuer à l’étanchéité face aux fuites de LCR, selon les indications du fabricant.',
        applications:
          'Complément de suture durale en neurochirurgie crânienne et rachidienne ; prévention des fuites de liquide céphalo-rachidien lorsque indiqué.',
        technical:
          'Hydrogel polymérisable ; kits applicateur ; temps de prise et volume selon IFU. Ne se substitue pas toujours à une réparation mécanique complète — respecter les contre-indications.',
        sourceUrl: 'https://products.integralife.com/duraseal-dural-sealant-system/product/dural-repair-sealants-duraseal-dural-sealant-system-5-ml',
      },
      {
        id: 'duraflex',
        slug: 'duraflex',
        name: 'DuraFlex',
        ref: 'DURAFLEX',
        description:
          'Solution de reconstruction / greffe durale DuraFlex de la gamme Integra, proposée pour les situations cliniques nécessitant un substitut dural souple et adaptable.',
        applications:
          'Plastie durale crânienne ou rachidienne selon indication et disponibilité locale.',
        technical:
          'Substitut dural ; formats catalogue Integra ; stérile. Confirmer la référence exacte (DuraFlex) et le statut réglementaire pays avant commande.',
        sourceUrl: 'https://www.integralife.com/',
      },
      {
        id: 'mayfield-systems',
        slug: 'mayfield-systems',
        name: 'MAYFIELD Systems',
        ref: 'MAYFIELD',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-mayfield-1mDVA.jpg',
        description:
          'Systèmes de fixation crânienne MAYFIELD pour le positionnement stable de la tête en neurochirurgie. La gamme comprend têtes de fixation, broches et accessoires de table selon configuration.',
        applications:
          'Neurochirurgie crânienne, procédures nécessitant une immobilisation crânienne précise au bloc opératoire.',
        technical:
          'Cadres et têtes MAYFIELD ; broches adulte/pédiatrique selon kit ; compatibilité rails de table. Vérifier composition du set et pièces de rechange autorisées.',
        sourceUrl: 'https://marketing.integralife.com/integramayfield',
      },
      {
        id: 'budde-halo',
        slug: 'budde-halo',
        name: 'BUDDE Halo',
        ref: 'BUDDE-HALO',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-budde-halo-retractor-nhDBJ.webp',
        description:
          'Système BUDDE Halo de rétracteurs / support pour exposition chirurgicale en neurochirurgie, conçu pour un positionnement stable des écarteurs pendant la procédure.',
        applications:
          'Exposition crânienne et assistance au champ opératoire en neurochirurgie.',
        technical:
          'Anneau / halo BUDDE avec bras et lames d’écartement selon configuration. Contrôler compatibilité avec la fixation crânienne et le set d’instruments.',
        sourceUrl:
          'https://products.integralife.com/budde-halo-retractor-system/product/brain-retraction-budde-halo-retractor-system',
      },
      {
        id: 'certas-plus',
        slug: 'certas-plus',
        name: 'CERTAS Plus',
        ref: 'CERTAS-PLUS',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/codman-certas-2Mtax.avif',
        description:
          'Valve de dérivation programmable CERTAS Plus pour la prise en charge de l’hydrocéphalie, permettant un réglage non invasif de la pression d’ouverture selon le protocole clinique.',
        applications:
          'Hydrocéphalie ; dérivations ventriculo-péritonéales ou configurations compatibles Codman/Integra.',
        technical:
          'Valve programmable CERTAS Plus ; outils de réglage et lecture magnétique selon kit ; compatibilité IRM à vérifier dans l’IFU. Programmation par personnel formé uniquement.',
        sourceUrl:
          'https://products.integralife.com/codman-certas-plus-programmable-valve/product/hydrocephalus-programmable-valves-codman-certas-plus-small-programmable-valve',
      },
      {
        id: 'osv-ii',
        slug: 'osv-ii',
        name: 'OSV II',
        ref: 'OSV-II',
        description:
          'Valve OSV II (Orbis-Sigma) à débit contrôlé pour le traitement de l’hydrocéphalie, conçue pour limiter les risques de surdrainage grâce à sa régulation de flux caractéristique.',
        applications:
          'Dérivation du LCR / hydrocéphalie lorsque une valve de type OSV II est indiquée.',
        technical:
          'Mécanisme à contrôle de débit ; configurations et réservoirs selon catalogue. Suivre protocoles d’implantation et de suivi fabricant.',
        sourceUrl: 'https://www.integralife.com/',
      },
      {
        id: 'codman-hakim-programmable',
        slug: 'codman-hakim-programmable',
        name: 'Codman Hakim Programmable Valve',
        ref: 'CODMAN-HAKIM-PV',
        description:
          'Valve programmable Codman Hakim permettant d’ajuster la pression d’ouverture de façon non invasive pour individualiser le traitement de l’hydrocéphalie.',
        applications:
          'Hydrocéphalie de l’adulte et de l’enfant selon indication ; systèmes de dérivation Codman.',
        technical:
          'Réglages de pression multiples ; kit programmeur ; précautions IRM et vérification post-réglage décrites dans l’IFU. Formation au programmeur recommandée.',
        sourceUrl: 'https://www.integralife.com/',
      },
      {
        id: 'bactiseal',
        slug: 'bactiseal',
        name: 'Bactiseal',
        ref: 'BACTISEAL',
        description:
          'Cathéters de dérivation Bactiseal imprégnés d’agents antimicrobiens (rifampicine / clindamycine selon génération), destinés à réduire le risque de colonisation des composants de shunt.',
        applications:
          'Dérivations ventriculaires et systèmes de drainage du LCR lorsque des cathéters anti-infectieux sont indiqués.',
        technical:
          'Cathéters imprégnés ; longueurs et diamètres catalogue ; association possible aux valves Codman/Integra. Respecter contre-indications allergiques et IFU.',
        sourceUrl: 'https://www.integralife.com/',
      },
      {
        id: 'cerebroflo',
        slug: 'cerebroflo',
        name: 'CerebroFlo',
        ref: 'CEREBROFLO',
        description:
          'Cathéter CerebroFlo avec technologie de surface Endexo visant à limiter la thrombogénicité et améliorer les performances du drainage du LCR dans les applications de dérivation.',
        applications:
          'Shunts et drainage du LCR ; hydrocéphalie et situations de dérivation ventriculaire.',
        technical:
          'Surface Endexo ; références de longueur/diamètre selon catalogue Integra. Vérifier association valve/cathéter recommandée.',
        sourceUrl: 'https://www.integralife.com/',
      },
      {
        id: 'cerelink',
        slug: 'cerelink',
        name: 'CereLink',
        ref: 'CERELINK',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cerelink-icp-monitor-HUQfx.avif',
        description:
          'Système de monitoring CereLink pour le suivi avancé de la pression intracrânienne et des paramètres associés en unité de soins neurocritiques.',
        applications:
          'USI neurochirurgicale, surveillance multimodale de patients cérébro-lésés.',
        technical:
          'Console CereLink et consommables de mesure ; interfaces de documentation selon configuration. Confirmer compatibilité réseau/hôpital local.',
        sourceUrl: 'https://products.integralife.com/cerelink-icp-monitor/product/advanced-monitoring-cerelink-icp-monitoring-system-cerelink-icp-monitor-cerelink-icp-monitor',
      },
      {
        id: 'licox',
        slug: 'licox',
        name: 'Licox',
        ref: 'LICOX',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-licox-HTs4J.avif',
        description:
          'Système Licox de mesure de la pression tissulaire en oxygène cérébral (PbtO₂) pour guider la prise en charge des patients en neuro-réanimation.',
        applications:
          'Monitoring de l’oxygénation tissulaire cérébrale ; traumatisme crânien grave et soins neurocritiques.',
        technical:
          'Sondes Licox à usage unique ; moniteur et câbles ; placement intraparenchymateux selon technique. Interprétation clinique réservée aux équipes formées.',
        sourceUrl: 'https://products.integralife.com/file/general/1465323701.pdf',
      },
      {
        id: 'codman-microsensor',
        slug: 'codman-microsensor',
        name: 'Codman Microsensor',
        ref: 'CODMAN-MICROSENSOR',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/codman-microsensor-basic-kit-ZmT5Y.avif',
        description:
          'Capteur de pression intracrânienne Codman Microsensor pour une mesure fine de la PIC, utilisé avec les moniteurs compatibles Codman/Integra.',
        applications:
          'Surveillance de la PIC en neurochirurgie et réanimation.',
        technical:
          'Microsensor à usage unique ; kit d’introduction ; compatibilité moniteur à vérifier. Calibration zéro selon IFU avant insertion.',
        sourceUrl: 'https://products.integralife.com/codman-microsensor-basic-kit/product/advanced-monitoring-3t-microsensor-codman-microsensor-basic-kit',
      },
      {
        id: 'ruggles-redmond',
        slug: 'ruggles-redmond',
        name: 'Ruggles–Redmond Neuro/Spine Instruments',
        ref: 'RUGGLES-REDMOND',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-rongeurs-01PO1.avif',
        description:
          'Gamme d’instruments de microchirurgie et de chirurgie du rachis Ruggles–Redmond (pinces, porte-aiguilles, écarteurs, dissecteurs, etc.) pour la neurochirurgie et la spine surgery.',
        applications:
          'Neurochirurgie crânienne, chirurgie du rachis, microdissection et sutures fines.',
        technical:
          'Instruments réutilisables en acier/qualité chirurgicale ; sets par spécialité ; retraitement selon instructions de nettoyage Integra. Composer les plateaux selon préférence du chirurgien.',
        sourceUrl: 'https://products.integralife.com/ruggles-redmond-/category/surgical-instruments-hospitals-surgery-centers-tissue-banks-ruggles-redmond',
      },
      {
        id: 'integra-duo-headlight',
        slug: 'integra-duo-headlight',
        name: 'Integra Duo Surgical Headlight',
        ref: 'INTEGRA-DUO-HL',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-duo-led-surgical-headlight-system-HSY49.avif',
        description:
          'Lampe frontale chirurgicale Integra Duo offrant un éclairage puissant et homogène pour les gestes de précision en neurochirurgie et disciplines associées.',
        applications:
          'Éclairage de champ opératoire porté ; neurochirurgie, rachis, ORL et chirurgie générale selon usage.',
        technical:
          'Source LED / fibre selon modèle Duo ; autonomie batterie ; intensité réglable ; harnais et accessoires. Vérifier références exactes du pack commercialisé localement.',
        sourceUrl: 'https://products.integralife.com/integra-duo-led-surgical-headlight-system/product/surgical-lighting-integra-led-accessories-headlights-integra-duo-led-surgical-headlight-system',
      },
    ],
    /* Par spécialité — spécialités médicales (PDF §5A) */
    specialtyGroups: [
      {
        id: 'neurochirurgie',
        slug: 'neurochirurgie',
        titleFr: 'Neurochirurgie',
        titleEn: 'Neurosurgery',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/neurochirurgie-cranienne-integra-YzIZ1.jpg',
        productIds: [
          'cusa-clarity',
          'aurora-surgiscope',
          'aurora-evacuator-coag',
          'duragen',
          'duragen-plus',
          'duraseal',
          'duraflex',
          'mayfield-systems',
          'budde-halo',
          'certas-plus',
          'osv-ii',
          'codman-hakim-programmable',
          'bactiseal',
          'cerebroflo',
          'cerelink',
          'licox',
          'codman-microsensor',
          'ruggles-redmond',
          'integra-duo-headlight',
        ],
      },
    ],
    /* Par type de produit (PDF §5B) */
    typeGroups: [
      {
        id: 'stabilisation-cranienne',
        slug: 'stabilisation-cranienne',
        titleFr: 'Stabilisation cranienne',
        titleEn: 'Cranial stabilization',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-mayfield-M7tZC.jpg',
        productIds: ['mayfield-systems'],
      },
      {
        id: 'retraction-neurochirurgicale',
        slug: 'retraction-neurochirurgicale',
        titleFr: 'Rétraction neurochirurgicale',
        titleEn: 'Neurosurgical retraction',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-budde-halo-retractor-DKhpq.webp',
        productIds: ['budde-halo'],
      },
      {
        id: 'aspiration-ultrasonique',
        slug: 'aspiration-ultrasonique',
        titleFr: 'Aspiration ultrasonique / ablation tissulaire',
        titleEn: 'Ultrasonic aspiration / tissue ablation',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusa-clarity-console-6V5UE.avif',
        productIds: ['cusa-clarity'],
      },
      {
        id: 'neuroendoscopie-acces-mini-invasif',
        slug: 'neuroendoscopie-acces-mini-invasif',
        titleFr: 'Neuroendoscopie / accès mini-invasif',
        titleEn: 'Neuroendoscopy / minimally invasive access',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/aurora-surgiscope-cMB0Q.avif',
        productIds: ['aurora-surgiscope', 'aurora-evacuator-coag'],
      },
      {
        id: 'substituts-duraux',
        slug: 'substituts-duraux',
        titleFr: 'Substituts duraux',
        titleEn: 'Dural substitutes',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duragen-dural-graft-matrix-S5FZg.avif',
        productIds: ['duragen', 'duragen-plus', 'duraflex'],
      },
      {
        id: 'scellement-dural',
        slug: 'scellement-dural',
        titleFr: 'Scellement dural',
        titleEn: 'Dural sealant',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duraseal-dural-sealant-system-wDtP4.avif',
        productIds: ['duraseal'],
      },
      {
        id: 'monitoring-pression-intracranienne',
        slug: 'monitoring-pression-intracranienne',
        titleFr: 'Monitoring de pression intracrânienne',
        titleEn: 'ICP monitoring',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cerelink-icp-monitor-OVJf6.avif',
        productIds: ['cerelink', 'codman-microsensor'],
      },
      {
        id: 'monitoring-oxygene-cerebral',
        slug: 'monitoring-oxygene-cerebral',
        titleFr: 'Monitoring de l’oxygène cérébral',
        titleEn: 'Brain oxygen monitoring',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-licox-ZGb8w.avif',
        productIds: ['licox'],
      },
      {
        id: 'gestion-hydrocephalie-lcr',
        slug: 'gestion-hydrocephalie-lcr',
        titleFr: 'Gestion de l’hydrocéphalie / LCR',
        titleEn: 'Hydrocephalus / CSF management',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/codman-certas-S3UnO.avif',
        productIds: [
          'certas-plus',
          'osv-ii',
          'codman-hakim-programmable',
          'bactiseal',
          'cerebroflo',
        ],
      },
      {
        id: 'instruments-neurochirurgiques',
        slug: 'instruments-neurochirurgiques',
        titleFr: 'Instruments neurochirurgicaux',
        titleEn: 'Neurosurgical instruments',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-microsurgery-t6XQK.avif',
        productIds: ['ruggles-redmond'],
      },
      {
        id: 'accessoires-eclairage-neurochirurgical',
        slug: 'accessoires-eclairage-neurochirurgical',
        titleFr: 'Accessoires / éclairage neurochirurgical',
        titleEn: 'Neurosurgical accessories / lighting',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/integra-duo-led-surgical-headlight-system-y95Ht.avif',
        productIds: ['integra-duo-headlight'],
      },
    ],
  },

  {
    id: 'schmitz',
    slug: 'schmitz',
    name: 'SCHMITZ medical GmbH',
    shortName: 'SCHMITZ',
    logo: LOGO.schmitz,
    /* Catalogue local réduit : une catégorie, un produit — pas de hubs Par spécialité / Par type */
    catalogMode: 'direct',
    focus: {
      fr: 'Tables d’opération et mobilier de bloc',
      en: 'Operating tables and OR furniture',
    },
    specialties: {
      fr: 'Tables opératoires pour le bloc central',
      en: 'Operating tables for the central OR',
    },
    sourceUrl:
      'https://schmitz-medical.com/fr/catalogues/catalogue-tables-doperation-diamond/',
    productList: [
      {
        id: 'diamond-60-blk',
        slug: 'diamond-60-blk',
        name: 'Table d’opération universelle DIAMOND® 60 BLK',
        ref: '170.6000.1',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/211130_op-einrichtung-zubehor-kopie-Ppdlo.jpg',
        description:
          'Table d’opération universelle électrohydraulique avec translation longitudinale pour une utilisation optimisée sous amplificateur de brillance. La DIAMOND® est conçue pour les exigences du bloc opératoire central et associe mobilité, flexibilité, radiotransparence et possibilités de positionnement étendues. Le modèle 60 BLK dispose en particulier d’une translation longitudinale électrohydraulique d’environ 300 mm, destinée à optimiser la radiographie du patient avec un arceau en C.',
        descriptionEn:
          'Universal electrohydraulic operating table with longitudinal shift for optimised use under an image intensifier. DIAMOND® is designed for the demands of the central operating theatre and combines mobility, flexibility, radiolucency and extensive positioning options. The 60 BLK model features in particular an electrohydraulic longitudinal shift of approximately 300 mm, intended to optimise patient radiography with a C-arm.',
        applications:
          'Chirurgie générale, urologie / RTU et chirurgie mini-invasive / laparoscopique, avec de nombreuses possibilités d’adaptation grâce aux accessoires dédiés. La gamme DIAMOND® est destinée à l’utilisation dans les différentes disciplines chirurgicales du bloc opératoire central.',
        applicationsEn:
          'General surgery, urology / TUR and minimally invasive / laparoscopic surgery, with many adaptation options thanks to dedicated accessories. The DIAMOND® range is intended for use across the various surgical disciplines of the central operating theatre.',
        technical:
          'Hauteur réglable de 680 à 1 180 mm ; déclive/proclive électrohydraulique 30° ; inclinaison latérale ±20° ; translation longitudinale électrohydraulique d’environ 300 mm ; réglage du dossier -40°/+70° ; réglage électrohydraulique des plateaux de jambes -90°/+70° ; zone radiotransparente continue jusqu’à 1 680 mm avec plateau carbone ; charge maximale statique jusqu’à 454 kg et charge dynamique jusqu’à 360 kg. Fonctionnement sur batterie rechargeable avec chargeur intégré et possibilités de secours mécanique.',
        technicalEn:
          'Height adjustable from 680 to 1,180 mm; electrohydraulic Trendelenburg/reverse Trendelenburg 30°; lateral tilt ±20°; electrohydraulic longitudinal shift of approximately 300 mm; back section adjustment -40°/+70°; electrohydraulic leg plate adjustment -90°/+70°; continuous radiolucent area up to 1,680 mm with carbon tabletop; maximum static load up to 454 kg and dynamic load up to 360 kg. Operation on rechargeable battery with integrated charger and mechanical backup options.',
        sourceUrl:
          'https://schmitz-medical.com/fr/catalogues/catalogue-tables-doperation-diamond/',
      },
    ],
    specialtyGroups: [
      {
        id: 'tables-operatoires',
        slug: 'tables-operatoires',
        titleFr: 'Tables opératoires',
        titleEn: 'Operating tables',
        productIds: ['diamond-60-blk'],
      },
    ],
    typeGroups: [],
  },

  {
    id: 'dr-mach',
    slug: 'dr-mach',
    name: 'Dr. Mach GmbH & Co. KG',
    shortName: 'DR.MACH',
    logo: LOGO['dr-mach'],
    /* Catalogue local : catégorie Scialytiques extensible — pas de hubs Par spécialité / Par type */
    catalogMode: 'direct',
    focus: {
      fr: 'Scialytiques et éclairage chirurgical LED',
      en: 'Surgical lights and LED OR lighting',
    },
    specialties: {
      fr: 'Éclairage des champs opératoires',
      en: 'Operating field lighting',
    },
    sourceUrl:
      'https://dr-mach.de/resources/public/Downloads/59356002_DrMach_OT-lights_EN_V3.1.pdf',
    productList: [
      {
        id: 'scialytique-8mc',
        slug: 'scialytique-8mc',
        name: 'Mach LED 8MC',
        ref: '27805',
        imageUrl:
          'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/csm_led-8mc_lk_62ca79b3b0-YZA6i.png',
        description:
          'Scialytique chirurgical LED haute performance offrant une intensité lumineuse de 160 000 lux à 1 mètre, une température de couleur réglable de 3 750 à 4 750 K et de nombreuses options pour adapter l’éclairage aux besoins du bloc opératoire. Le système est conçu pour assurer un éclairage homogène, une bonne profondeur d’éclairage et une restitution fidèle des couleurs. Désignation fabricant : Mach LED 8MC. Dr. Mach développe et fabrique ses éclairages médicaux en Allemagne.',
        descriptionEn:
          'High-performance LED surgical light delivering 160,000 lux at 1 metre, adjustable colour temperature from 3,750 to 4,750 K and numerous options to adapt lighting to OR needs. The system is designed for homogeneous illumination, good light depth and faithful colour rendering. Manufacturer designation: Mach LED 8MC. Dr. Mach develops and manufactures its medical lights in Germany.',
        applications:
          'Éclairage des champs opératoires en bloc opératoire pour les interventions chirurgicales. Le Mach LED 8MC est proposé comme scialytique suspendu au plafond et peut être configuré en combinaison avec d’autres éclairages et équipements, notamment des systèmes vidéo et porte-moniteurs.',
        applicationsEn:
          'Illumination of operating fields in the OR for surgical procedures. The Mach LED 8MC is offered as a ceiling-mounted surgical light and can be configured in combination with other lights and equipment, including video systems and monitor holders.',
        technical:
          'Intensité lumineuse : 160 000 lux à 1 mètre ; Température de couleur : 3 750 – 4 750 K ; Indice de rendu des couleurs Ra : 98 ; R9 : 99 ; Diamètre du champ d’éclairage : 19 – 30 cm ; Diamètre du corps de lampe : 66 cm ; Nombre de LED : 99 ; Durée de vie des LED : 60 000 h ; Distance de travail : 70 – 160 cm ; Système en cascade pour mise au point verticale de la profondeur du champ opératoire et gestion automatique des zones d’ombre (modulation des LED) ; Options : gestion des zones d’ombre, pointeur laser, communication, réglage mécanique du diamètre du champ lumineux, commande murale, calibration individuelle de la température de couleur et de l’intensité, interfaces et connexions externes, préparation pour caméra HD ou 4K.',
        technicalEn:
          'Illuminance: 160,000 lux at 1 metre; Colour temperature: 3,750 – 4,750 K; Colour rendering index Ra: 98; R9: 99; Light field diameter: 19 – 30 cm; Light head diameter: 66 cm; Number of LEDs: 99; LED lifetime: 60,000 h; Working distance: 70 – 160 cm; Cascade system for vertical focusing of OR field depth and automatic shadow management (LED modulation); Options: shadow management, laser pointer, communication, mechanical light-field diameter adjustment, wall control, individual colour temperature and intensity calibration, external interfaces and connections, preparation for HD or 4K camera.',
        sourceUrl:
          'https://dr-mach.de/resources/public/Downloads/59356002_DrMach_OT-lights_EN_V3.1.pdf',
      },
    ],
    specialtyGroups: [
      {
        id: 'scialytiques',
        slug: 'scialytiques',
        titleFr: 'Scialytiques',
        titleEn: 'Surgical lights',
        productIds: ['scialytique-8mc'],
      },
    ],
    typeGroups: [],
  },
];

/* ROCAMED — indications / filtres transverses.
   Ces cinq termes ne sont plus des catégories de navigation "Par spécialité"
   (seule l'Urologie reste visible), mais ils restent des critères de recherche
   et d'orientation auxquels chaque produit peut être associé (plusieurs par produit). */
export const ROCAMED_INDICATION_TERMS = [
  { id: 'rirs', fr: 'RIRS / chirurgie rénale rétrograde', en: 'RIRS / retrograde renal surgery' },
  { id: 'ureteroscopie', fr: 'Urétéroscopie', en: 'Ureteroscopy' },
  { id: 'lithotritie', fr: 'Lithotritie / calculs urinaires', en: 'Lithotripsy / urinary stones' },
  { id: 'drainage', fr: 'Drainage urétéral', en: 'Ureteral drainage' },
  { id: 'prostate', fr: 'Chirurgie de la prostate', en: 'Prostate surgery' },
];

const ROCAMED_INDICATIONS_BY_PRODUCT = {
  'kobot': ['rirs', 'ureteroscopie', 'lithotritie'],
  'rocastone': ['ureteroscopie', 'lithotritie'],
  'perkx': ['lithotritie'],
  'jfil-minijfil': ['drainage'],
  'rocajj-soft': ['drainage'],
  'endofirm': ['drainage'],
  'endosil': ['drainage'],
  'rocajj-soft-multilongueur': ['drainage'],
  'rocajj-simple-j': ['drainage'],
  'bi-flex-evo': ['rirs', 'ureteroscopie'],
  'x-filter': ['rirs', 'ureteroscopie', 'lithotritie'],
  'rio-tracer': ['rirs', 'ureteroscopie'],
  'rocawire-nitinol': ['rirs', 'ureteroscopie'],
  'rocawire-ptfe': ['rirs', 'ureteroscopie'],
  'rocatub': ['ureteroscopie', 'drainage'],
  'rocanephro': ['lithotritie'],
  'traxerflow': ['rirs', 'ureteroscopie'],
  'endoflow-ii': ['rirs', 'ureteroscopie', 'prostate'],
  'sets-endoflow-ii': ['rirs', 'ureteroscopie', 'prostate'],
  'sirius-60w': ['rirs', 'lithotritie', 'prostate'],
  'laser-holmium-30w': ['rirs', 'lithotritie', 'prostate'],
  'fibres-laser': ['rirs', 'lithotritie', 'prostate'],
  'exime': ['prostate'],
  'echolaser-tpla': ['prostate'],
};

function normalizeSupplier(raw) {
  const specialtyBlurb =
    raw.specialties && !Array.isArray(raw.specialties) && raw.specialties.fr
      ? raw.specialties
      : { fr: '', en: '' };

  const products = (raw.productList || []).map((p) => {
    const base = { ...p, imageGroup: '_products' };
    if (raw.id === 'rocamed' && ROCAMED_INDICATIONS_BY_PRODUCT[p.id]) {
      base.indications = ROCAMED_INDICATIONS_BY_PRODUCT[p.id]
        .map((iid) => ROCAMED_INDICATION_TERMS.find((term) => term.id === iid))
        .filter(Boolean);
    }
    return base;
  });

  return {
    ...raw,
    specialtyBlurb,
    products,
    specialties: raw.specialtyGroups || [],
    types: raw.typeGroups || [],
    catalogMode: raw.catalogMode || 'standard',
  };
}

/** Fournisseur sans navigation « Par spécialité » / « Par type » (catégorie unique). */
export function isDirectCatalogSupplier(supplier) {
  if (!supplier) return false;
  if (supplier.catalogMode === 'direct') return true;
  const specs = supplier.specialties || supplier.specialtyGroups || [];
  const types = supplier.types || supplier.typeGroups || [];
  return specs.length > 0 && types.length === 0 && supplier.catalogMode === 'direct';
}

/** Chemin catalogue produit (direct legacy ou mode par-spécialité / par-type). */
export function productCatalogPath(supplier, product) {
  if (!supplier || !product) return '/products';
  const specs = supplier.specialtyGroups || supplier.specialties || [];
  const types = supplier.typeGroups || supplier.types || [];
  const firstSpec = specs.find((g) => (g.productIds || []).includes(product.id));
  const firstType = types.find((g) => (g.productIds || []).includes(product.id));
  if (isDirectCatalogSupplier(supplier) && firstSpec) {
    return `/products/${supplier.slug}/${firstSpec.slug}/${product.slug}`;
  }
  if (firstSpec) {
    return `/products/${supplier.slug}/par-specialite/${firstSpec.slug}/${product.slug}`;
  }
  if (firstType) {
    return `/products/${supplier.slug}/par-type/${firstType.slug}/${product.slug}`;
  }
  return `/products/${supplier.slug}`;
}

export function groupCatalogPath(supplier, group) {
  if (!supplier || !group) return '/products';
  if (isDirectCatalogSupplier(supplier)) {
    return `/products/${supplier.slug}/${group.slug}`;
  }
  const isType = (supplier.types || supplier.typeGroups || []).some(
    (g) => g.id === group.id || g.slug === group.slug,
  );
  const mode = isType ? 'par-type' : 'par-specialite';
  return `/products/${supplier.slug}/${mode}/${group.slug}`;
}

const normalizedSuppliers = suppliers.map(normalizeSupplier);

/** Alias historique pour Home / Footer */
export const brands = normalizedSuppliers;

export function getSupplier(supplierId) {
  return (
    normalizedSuppliers.find((s) => s.id === supplierId || s.slug === supplierId) || null
  );
}

export function getSpecialty(supplierId, groupId) {
  const s = getSupplier(supplierId);
  if (!s) return null;
  return s.specialties.find((g) => g.id === groupId || g.slug === groupId) || null;
}

export function getTypeGroup(supplierId, groupId) {
  const s = getSupplier(supplierId);
  if (!s) return null;
  return s.types.find((g) => g.id === groupId || g.slug === groupId) || null;
}

/** @deprecated — préférer getSpecialty / getTypeGroup */
export function getCategory(supplierId, categoryId) {
  return getSpecialty(supplierId, categoryId) || getTypeGroup(supplierId, categoryId);
}

export function getProductById(supplierId, productId) {
  const s = getSupplier(supplierId);
  if (!s) return null;
  return s.products.find((p) => p.id === productId || p.slug === productId) || null;
}

export function getProduct(supplierId, categoryId, productId) {
  const p = getProductById(supplierId, productId);
  if (!p) return null;
  if (!categoryId) return p;
  const g = getCategory(supplierId, categoryId);
  if (!g) return p;
  return g.productIds.includes(p.id) ? p : p;
}

export function getProductsForGroup(supplierId, group) {
  const s = getSupplier(supplierId);
  if (!s || !group) return [];
  return group.productIds.map((id) => s.products.find((p) => p.id === id)).filter(Boolean);
}

export function catalogImageBase(supplierId, categoryId, productSlug) {
  const s = getSupplier(supplierId);
  const p = s?.products.find((x) => x.slug === productSlug || x.id === productSlug);
  const group = categoryId || p?.imageGroup || '_products';
  return `${CATALOG_DEMO_PATH}/${supplierId}/${group}/${productSlug}`;
}

export function categoryImageBase(supplierId, categoryId) {
  return `${CATALOG_DEMO_PATH}/${supplierId}/_categories/${categoryId}`;
}

export function groupImageBase(supplierId, browseMode, groupId) {
  return `${CATALOG_DEMO_PATH}/${supplierId}/_${browseMode}/${groupId}`;
}

export { normalizedSuppliers as catalogSuppliers };
