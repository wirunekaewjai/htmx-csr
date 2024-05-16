export type HtmlAttributes = Partial<{
  accept: string;
  "accept-charset": string;
  accesskey: string;
  action: string;
  alt: string;
  async: string | boolean | undefined;
  autocomplete: string;
  autofocus: string;
  autoplay: string;
  charset: string;
  checked: string | boolean | undefined;
  cite: string;
  class: string;
  cols: string | number;
  colspan: string | number;
  content: string;
  contenteditable: string;
  controls: string;
  coords: string;
  data: string;
  datetime: string;
  default: string;
  defer: string | boolean | undefined;
  dir: string;
  dirname: string;
  disabled: string | boolean | undefined;
  download: string;
  draggable: string | boolean | undefined;
  enctype: string;
  for: string;
  form: string;
  formaction: string;
  headers: string;
  height: string | number;
  hidden: string | boolean | undefined;
  high: string;
  href: string;
  hreflang: string;
  "http-equiv": string;
  id: string;
  ismap: string;
  kind: string;
  label: string;
  lang: string;
  list: string;
  loop: string;
  low: string;
  max: string | number;
  maxlength: string | number;
  media: string;
  method: string;
  min: string | number;
  multiple: string | boolean;
  muted: string;
  name: string;
  novalidate: string;
  open: string | boolean;
  optimum: string;
  pattern: string;
  placeholder: string;
  poster: string;
  preload: string | boolean | undefined;
  readonly: string;
  rel: string;
  required: string | boolean | undefined;
  reversed: string;
  rows: string | number;
  rowspan: string | number;
  sandbox: string;
  scope: string;
  selected: string | boolean | undefined;
  shape: string;
  size: string;
  sizes: string;
  span: string;
  spellcheck: string;
  src: string;
  srcdoc: string;
  srclang: string;
  srcset: string;
  start: string;
  step: string | number;
  style: string;
  tabindex: string | number;
  target: string;
  title: string;
  translate: string;
  type: string;
  usemap: string;
  value: string | number | boolean;
  width: string | number;
  wrap: string;
}>;

export type EventAttributes = {

};

export type CustomAttributes = {
  [key: string]: string | number | boolean | undefined;
};

export type JSXChild = string | number | boolean | null | undefined;
export type JSXChildren = JSXChild | JSXChild[] | undefined;
export type JSXProps<T> = T & { children?: JSXChildren; };
export type JSXComponent<T> = (props: JSXProps<T>) => string;

export declare namespace JSX {
  type Element = string;

  interface IntrinsicElements {
    // root
    html: HtmlAttributes & EventAttributes & CustomAttributes;

    // self-closing
    area: HtmlAttributes & EventAttributes & CustomAttributes;
    base: HtmlAttributes & EventAttributes & CustomAttributes;
    br: HtmlAttributes & EventAttributes & CustomAttributes;
    col: HtmlAttributes & EventAttributes & CustomAttributes;
    command: HtmlAttributes & EventAttributes & CustomAttributes;
    embed: HtmlAttributes & EventAttributes & CustomAttributes;
    hr: HtmlAttributes & EventAttributes & CustomAttributes;
    img: HtmlAttributes & EventAttributes & CustomAttributes;
    input: HtmlAttributes & EventAttributes & CustomAttributes;
    keygen: HtmlAttributes & EventAttributes & CustomAttributes;
    link: HtmlAttributes & EventAttributes & CustomAttributes;
    meta: HtmlAttributes & EventAttributes & CustomAttributes;
    param: HtmlAttributes & EventAttributes & CustomAttributes;
    source: HtmlAttributes & EventAttributes & CustomAttributes;
    track: HtmlAttributes & EventAttributes & CustomAttributes;
    wbr: HtmlAttributes & EventAttributes & CustomAttributes;

    // normal
    a: HtmlAttributes & EventAttributes & CustomAttributes;
    abbr: HtmlAttributes & EventAttributes & CustomAttributes;
    address: HtmlAttributes & EventAttributes & CustomAttributes;
    aside: HtmlAttributes & EventAttributes & CustomAttributes;
    audio: HtmlAttributes & EventAttributes & CustomAttributes;
    b: HtmlAttributes & EventAttributes & CustomAttributes;
    bdo: HtmlAttributes & EventAttributes & CustomAttributes;
    blockquote: HtmlAttributes & EventAttributes & CustomAttributes;
    body: HtmlAttributes & EventAttributes & CustomAttributes;
    button: HtmlAttributes & EventAttributes & CustomAttributes;
    canvas: HtmlAttributes & EventAttributes & CustomAttributes;
    caption: HtmlAttributes & EventAttributes & CustomAttributes;
    cite: HtmlAttributes & EventAttributes & CustomAttributes;
    code: HtmlAttributes & EventAttributes & CustomAttributes;
    colgroup: HtmlAttributes & EventAttributes & CustomAttributes;
    datagrid: HtmlAttributes & EventAttributes & CustomAttributes;
    datalist: HtmlAttributes & EventAttributes & CustomAttributes;
    dd: HtmlAttributes & EventAttributes & CustomAttributes;
    del: HtmlAttributes & EventAttributes & CustomAttributes;
    details: HtmlAttributes & EventAttributes & CustomAttributes;
    dfn: HtmlAttributes & EventAttributes & CustomAttributes;
    dialog: HtmlAttributes & EventAttributes & CustomAttributes;
    div: HtmlAttributes & EventAttributes & CustomAttributes;
    dl: HtmlAttributes & EventAttributes & CustomAttributes;
    dt: HtmlAttributes & EventAttributes & CustomAttributes;
    em: HtmlAttributes & EventAttributes & CustomAttributes;
    eventsource: HtmlAttributes & EventAttributes & CustomAttributes;
    fieldset: HtmlAttributes & EventAttributes & CustomAttributes;
    figcaption: HtmlAttributes & EventAttributes & CustomAttributes;
    figure: HtmlAttributes & EventAttributes & CustomAttributes;
    footer: HtmlAttributes & EventAttributes & CustomAttributes;
    form: HtmlAttributes & EventAttributes & CustomAttributes;
    h1: HtmlAttributes & EventAttributes & CustomAttributes;
    h2: HtmlAttributes & EventAttributes & CustomAttributes;
    h3: HtmlAttributes & EventAttributes & CustomAttributes;
    h4: HtmlAttributes & EventAttributes & CustomAttributes;
    h5: HtmlAttributes & EventAttributes & CustomAttributes;
    h6: HtmlAttributes & EventAttributes & CustomAttributes;
    head: HtmlAttributes & EventAttributes & CustomAttributes;
    header: HtmlAttributes & EventAttributes & CustomAttributes;
    hgroup: HtmlAttributes & EventAttributes & CustomAttributes;
    i: HtmlAttributes & EventAttributes & CustomAttributes;
    iframe: HtmlAttributes & EventAttributes & CustomAttributes;
    ins: HtmlAttributes & EventAttributes & CustomAttributes;
    kbd: HtmlAttributes & EventAttributes & CustomAttributes;
    label: HtmlAttributes & EventAttributes & CustomAttributes;
    legend: HtmlAttributes & EventAttributes & CustomAttributes;
    li: HtmlAttributes & EventAttributes & CustomAttributes;
    main: HtmlAttributes & EventAttributes & CustomAttributes;
    map: HtmlAttributes & EventAttributes & CustomAttributes;
    mark: HtmlAttributes & EventAttributes & CustomAttributes;
    menu: HtmlAttributes & EventAttributes & CustomAttributes;
    meter: HtmlAttributes & EventAttributes & CustomAttributes;
    nav: HtmlAttributes & EventAttributes & CustomAttributes;
    noscript: HtmlAttributes & EventAttributes & CustomAttributes;
    object: HtmlAttributes & EventAttributes & CustomAttributes;
    ol: HtmlAttributes & EventAttributes & CustomAttributes;
    optgroup: HtmlAttributes & EventAttributes & CustomAttributes;
    option: HtmlAttributes & EventAttributes & CustomAttributes;
    output: HtmlAttributes & EventAttributes & CustomAttributes;
    p: HtmlAttributes & EventAttributes & CustomAttributes;
    pre: HtmlAttributes & EventAttributes & CustomAttributes;
    progress: HtmlAttributes & EventAttributes & CustomAttributes;
    q: HtmlAttributes & EventAttributes & CustomAttributes;
    rp: HtmlAttributes & EventAttributes & CustomAttributes;
    ruby: HtmlAttributes & EventAttributes & CustomAttributes;
    s: HtmlAttributes & EventAttributes & CustomAttributes;
    samp: HtmlAttributes & EventAttributes & CustomAttributes;
    script: HtmlAttributes & EventAttributes & CustomAttributes;
    section: HtmlAttributes & EventAttributes & CustomAttributes;
    select: HtmlAttributes & EventAttributes & CustomAttributes;
    small: HtmlAttributes & EventAttributes & CustomAttributes;
    span: HtmlAttributes & EventAttributes & CustomAttributes;
    strong: HtmlAttributes & EventAttributes & CustomAttributes;
    style: HtmlAttributes & EventAttributes & CustomAttributes;
    sub: HtmlAttributes & EventAttributes & CustomAttributes;
    sup: HtmlAttributes & EventAttributes & CustomAttributes;
    table: HtmlAttributes & EventAttributes & CustomAttributes;
    tbody: HtmlAttributes & EventAttributes & CustomAttributes;
    td: HtmlAttributes & EventAttributes & CustomAttributes;
    textarea: HtmlAttributes & EventAttributes & CustomAttributes;
    tfoot: HtmlAttributes & EventAttributes & CustomAttributes;
    th: HtmlAttributes & EventAttributes & CustomAttributes;
    thead: HtmlAttributes & EventAttributes & CustomAttributes;
    time: HtmlAttributes & EventAttributes & CustomAttributes;
    title: HtmlAttributes & EventAttributes & CustomAttributes;
    tr: HtmlAttributes & EventAttributes & CustomAttributes;
    u: HtmlAttributes & EventAttributes & CustomAttributes;
    ul: HtmlAttributes & EventAttributes & CustomAttributes;

    // unknown
    [other: string]: HtmlAttributes & EventAttributes & CustomAttributes;
  }
}