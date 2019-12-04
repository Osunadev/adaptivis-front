export const basicRules = requiredMsg => [
  {
    whitespace: true,
    message: 'Campo vacío, no introduzca espacios en blanco.'
  },
  {
    required: true,
    message: `Por favor introduzca su ${requiredMsg}.`
  }
];

export const universities = [
  {
    value: 'UABC',
    label: 'UABC',
    children: [
      {
        value: 'OTAY',
        label: 'OTAY'
      },
      {
        value: 'VALLE DE LAS PALMAS',
        label: 'VALLE DE LAS PALMAS'
      },
      {
        value: 'MEXICALI',
        label: 'MEXICALI'
      },
      {
        value: 'ENSENADA',
        label: 'ENSENADA'
      }
    ]
  },
  {
    value: 'ITT',
    label: 'ITT',
    children: [
      {
        value: 'OTAY',
        label: 'OTAY'
      },
      {
        value: 'TOMAS AQUINO',
        label: 'TOMAS AQUINO'
      }
    ]
  }
];
