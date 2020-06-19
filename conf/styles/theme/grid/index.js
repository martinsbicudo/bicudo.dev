import config from './config';

const getQueries = (responsives, action = (_) => _) => {
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
};

const setGrid = (params = {}) => {
  const {
    wrap = false,
    columns = false,
    align = false,
    justify = false,
    content = false,
    reverse = false,
  } = params;

  return `
    display: flex;
    ${wrap ? `flex-wrap: ${wrap === 'reverse' ? 'wrap-reverse' : 'wrap'};` : ''}
    ${
      columns ? `flex-direction: ${reverse ? 'column-reverse' : 'column'};` : ''
    }
    ${!columns && reverse ? 'flex-direction: row-reverse;' : ''}
    ${align ? `align-items: ${align};` : ''}
    ${justify ? `justify-content: ${justify};` : ''}
    ${content ? `align-content: ${content};` : ''}
  `;
};

const setGridResponsive = (responsives) =>
  getQueries(responsives, (style) => setGrid(style));

const setCol = (params = {}) => {
  const { col = 'auto', align = false } = params;
  const selfAlign = align ? `align-self: ${align};` : '';

  if (Number.isInteger(Number(col))) {
    return `
      flex: 1 0 calc((100% / ${config.COLUMNS} * ${col}));
      max-width: calc((100% / ${config.COLUMNS} * ${col}));
      width: calc((100% / ${config.COLUMNS} * ${col}));
      ${selfAlign}
    `;
  }

  if (col === 'content') {
    return `
      flex: 0 0 auto;
      ${selfAlign}
    `;
  }

  return `
    flex: 1 1 auto;
    ${selfAlign}
  `;
};

const setColResponsive = (responsives) =>
  getQueries(responsives, (style) => setCol(style));

const setResponsive = (responsives) => getQueries(responsives);

const GRID = {
  ...config,
  HELPERS: {
    setGrid,
    setGridResponsive,
    setCol,
    setColResponsive,
    setResponsive,
  },
};

export default GRID;
