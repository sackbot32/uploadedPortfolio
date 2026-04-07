
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/uploadedPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio"
  },
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio/proyectos"
  },
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio/proyectos/osha"
  },
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio/proyectos/posttalker"
  },
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio/proyectos/kindxo"
  },
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio/proyectos/moais"
  },
  {
    "renderMode": 2,
    "route": "/uploadedPortfolio/contacto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 656, hash: 'a679e1baecea59b98185a4199e6ae70169c3c8f30583b91080a7d18ab354ce98', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '02aac2840d56202aa64395410c64e25986cb3afe606cc8c611750107813e4c73', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9115, hash: '07af5e2f8261b0932cee735b167e664b4034a6ecf7706a1eff5b8ae13e17e9f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 8202, hash: 'b1703bbf14739138c34d715c8231e20f91dd10b48edc056cd26bd34ecafed2ac', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 6029, hash: 'd323f88b66a5aea58be070608489467ab1e8518cb1fdea6fed09217949bfc218', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'proyectos/osha/index.html': {size: 7652, hash: '271454294b2d66d53be540bc5b11e5c073d47f48a96a1dc9f5a644c299fe1845', text: () => import('./assets-chunks/proyectos_osha_index_html.mjs').then(m => m.default)},
    'proyectos/kindxo/index.html': {size: 7502, hash: 'ccd43a0cfbf9086a258ac4545642c9137a04d874a0a53581750a3553970a6f72', text: () => import('./assets-chunks/proyectos_kindxo_index_html.mjs').then(m => m.default)},
    'proyectos/posttalker/index.html': {size: 8725, hash: 'b55be5821971dc3ab5a3ce5edcd39a0e8672b20b97faa528969517ea825e4a00', text: () => import('./assets-chunks/proyectos_posttalker_index_html.mjs').then(m => m.default)},
    'proyectos/moais/index.html': {size: 7847, hash: '60b291d7c45d989f6d64a9cb81e0dbf221fa69befb08766fa4964ecf4fdd4909', text: () => import('./assets-chunks/proyectos_moais_index_html.mjs').then(m => m.default)},
    'styles-ZDRPQITW.css': {size: 2054, hash: '3oWOXxXdUH8', text: () => import('./assets-chunks/styles-ZDRPQITW_css.mjs').then(m => m.default)}
  },
};
