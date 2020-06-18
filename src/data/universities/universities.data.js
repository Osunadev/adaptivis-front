// This array is for the signup component, to specify the university from which a user belongs
const UNIVERSITIES = [
  {
    label: 'UABC',
    // This value is the actual valid domain name for the university
    value: 'uabc.edu.mx',
    children: [
      {
        label: 'Tijuana - Facultad de Ciencias Químicas e Ingeniería',
        value: 101
      },
      {
        label: 'Mexicali - Facultad de de Ingeniería',
        value: 102
      }
    ]
  },
  {
    label: 'UASLP',
    value: 'uaslp.mx',
    children: [
      {
        label: 'Facultad de Ingeniería',
        value: 103
      },
      {
        label: 'Coordinación Académica Región Altiplano Oeste (Salinas)'
      }
    ]
  },
  {
    label: 'UADY',
    value: 'correo.uady.mx',
    children: [
      {
        label: 'Facultad de Matemáticas',
        value: 105
      }
    ]
  },
  {
    label: 'UPAEP',
    value: 'upaep.mx',
    children: [
      {
        label: 'Departamento de Ingeniería',
        value: 106
      }
    ]
  },
  {
    label: 'UAZ',
    value: 'uaz.edu.mx',
    children: [
      {
        label: 'Facultad de Estadística e Informática',
        value: 107
      }
    ]
  },
  {
    label: 'UTM',
    value: 'mixteco.utm.mx',
    children: [
      {
        label: 'Instituto de Computación',
        value: 108
      }
    ]
  },
  {
    label: 'ITH',
    value: 'ith.mx',
    children: [
      {
        label: 'Departamento de Sistemas y Computación',
        value: 109
      }
    ]
  }
];

export default UNIVERSITIES;
