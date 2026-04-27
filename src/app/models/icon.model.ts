
// object with a constant assertion insteado of enum
/*
Se usa mucho en TypeScript, JavaScript moderno y Angular porque este patrón te da casi las mismas ventajas que un enum,
pero con menos fricción,
mejor interoperabilidad y
menos código generado.


1. Objeto real en runtime

ICONS existe como un objeto normal de JavaScript.

Eso significa que puedes hacer cosas como:
console.log(ICONS.home);
Object.values(ICONS);
Object.keys(ICONS);

2. Tipo literal exacto gracias a as const

Sin as const, TypeScript inferiría algo así:

{
  logo: string;
  home: string;
  save: string;
}

Con as const, infiere:

{
  readonly logo: 'logo';
  readonly home: 'home';
  readonly save: 'save';
}


3. Generas un tipo unión muy útil

Esta línea:

export type Icons = (typeof ICONS)[keyof typeof ICONS];

produce:

type Icons = 'logo' | 'home' | 'save';

Eso en Angular viene muy bien para @Input(), signals, configs, servicios o mapeos:

icon = input<Icons>('home');

**/
export const ICONS = {
  add:'add',
  car: 'car',
  home:'home',
  truck: 'truck',
  electric: 'electric',
  warning: 'warning',
  check: 'check',
  fuel: 'fuel',
  edit: 'edit',
  logo: 'logo',
  email: 'email',
  phone: 'phone',
  save: 'save',
  cancel: 'cancel',
  location: 'location',
  delete: 'delete',
  person: 'person',
  more_horiz: 'more-horiz',
  settings: 'settings',
  help: 'help',
  search:'search',
  notification:'notification',
  filter_list:'filter_list',
  account_circle:'account_circle',
  menu:'menu'
} as const satisfies Record<string, string>;

export type icons = (typeof ICONS)[keyof typeof ICONS];
