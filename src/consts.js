const DataTypeUrl = {
  SMALL: '?rows=32&id={index}&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
  BIG: '?rows=1000&id={index}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
};

const START_PAGE = 1;

const RESULTS_ON_PAGE = 50;

const SortType = {
  ID_UP: 'id-up',
  ID_DOWN: 'id-down',
  FIRST_NAME_UP: 'first-name-up',
  FIRST_NAME_DOWN: 'first-name-down',
  LAST_NAME_UP: 'last-name-up',
  LAST_NAME_DOWN: 'last-name-down',
  EMAIL_UP: 'email-up',
  EMAIL_DOWN: 'email-down',
  PHONE_UP: 'phone-up',
  PHONE_DOWN: 'phone-down',
};

const TABLE_HEADERS = [
  'id',
  'First Name',
  'Last Name',
  'Email',
  'Phone'
];

const EMAIL_REG = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const PHONE_REG = /^\+7 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
const NUMBER_REG = /^[0-9]*$/;

export {
  DataTypeUrl,
  SortType,
  RESULTS_ON_PAGE,
  TABLE_HEADERS,
  START_PAGE,
  EMAIL_REG,
  PHONE_REG,
  NUMBER_REG
};
