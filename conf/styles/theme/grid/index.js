import config from './config';

function getQueries(responsives, action = (_) => _) {
  return Object.entries(responsives).reduce((currentStyle, [key, style]) => {
    const tags = Object.entries(config.TAGS).map(([tag, width]) => [
      new RegExp(tag.toLowerCase(), 'g'),
      `${width}px)`,
    ]);
    const replaces = [
      [/ /g, ''],
      [/&/g, ' and '],
      [/\|/g, ','],
      [/</g, '(max-width:'],
      [/>/g, '(min-width:'],
      [/=/g, '(width:'],
      ...tags,
    ];

    const query = replaces.reduce(
      (currentQuery, [regex, string]) => currentQuery.replace(regex, string),
      key
    );

    return `${currentStyle}@media ${query}{${action(style)}}`;
  }, '');
}

class Grid {
  constructor() {
    this.style = '';
  }

  addStyle(newStyle) {
    this.style += newStyle;
  }

  getStyle() {
    return this.style;
  }

  flex(params = {}) {
    const {
      wrap = false,
      columns = false,
      align = false,
      justify = false,
      content = false,
      reverse = false,
    } = params;

    this.addStyle(`
      display: flex;
      ${
        wrap
          ? `flex-wrap: ${wrap === 'reverse' ? 'wrap-reverse' : 'wrap'};`
          : ''
      }
      ${
        columns
          ? `flex-direction: ${reverse ? 'column-reverse' : 'column'};`
          : ''
      }
      ${!columns && reverse ? 'flex-direction: row-reverse;' : ''}
      ${align ? `align-items: ${align};` : ''}
      ${justify ? `justify-content: ${justify};` : ''}
      ${content ? `align-content: ${content};` : ''}
    `);

    return this;
  }

  flexResponsive(responsives) {
    this.addStyle(getQueries(responsives, (style) => this.setFlex(style)));

    return this;
  }

  col(params = {}) {
    const { col = 'auto', align = false } = params;
    const selfAlign = align ? `align-self: ${align};` : '';

    if (Number.isInteger(Number(col))) {
      this.addStyle(`
        flex: 1 0 calc((100% / ${config.COLUMNS} * ${col}));
        max-width: calc((100% / ${config.COLUMNS} * ${col}));
        width: calc((100% / ${config.COLUMNS} * ${col}));
        ${selfAlign}
      `);
    }

    if (col === 'content') {
      this.addStyle(`
        flex: 0 0 auto;
        ${selfAlign}
      `);
    }

    this.addStyle(`
      flex: 1 1 auto;
      ${selfAlign}
    `);

    return this;
  }

  colResponsive(responsives) {
    this.addStyle(getQueries(responsives, (style) => this.setCol(style)));

    return this;
  }

  responsive(responsives) {
    this.addStyle(getQueries(responsives));

    return this;
  }
}

export default {
  ...config,
  set: () => new Grid(),
};
