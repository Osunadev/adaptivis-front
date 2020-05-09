// En vez de type, podría ser roles: ['admin', 'teacher'], por ejemplo

export const admin = {
  type: 'admin',
  name: 'J. Reyes Juárez Ramirez',
  imgUrl: '',
  id: 22854656
};

export const teacher = {
  type: 'teacher',
  name: 'Guillermo Licea',
  imgUrl: '',
  id: 24512
};

export const student = {
  type: 'student',
  name: 'Omar Alonso Osuna Angulo',
  imgUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQG-X5nVKPyG0Q/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=fn-JBl496mBa1_RcemQxCO20TGUaYSDShXvNpl55KCM',
  id: 1246437,
  isFirstTimeAccess: false
};

export const getCurrentUser = () => {
  return admin;
};
