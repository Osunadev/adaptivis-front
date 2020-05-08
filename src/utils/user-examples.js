// En vez de type, podría ser roles: ['admin', 'teacher'], por ejemplo

const admin = {
  type: 'admin',
  name: 'Omar Osuna',
  imgUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQG-X5nVKPyG0Q/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=fn-JBl496mBa1_RcemQxCO20TGUaYSDShXvNpl55KCM',
  id: 1246437
};

const teacher = {
  type: 'teacher',
  name: 'Omar Osuna',
  imgUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQG-X5nVKPyG0Q/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=fn-JBl496mBa1_RcemQxCO20TGUaYSDShXvNpl55KCM',
  id: 1246437
};

const student = {
  type: 'student',
  name: 'Omar Alonso Osuna Angulo',
  imgUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQG-X5nVKPyG0Q/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=fn-JBl496mBa1_RcemQxCO20TGUaYSDShXvNpl55KCM',
  id: 1246437,
  isFirstTimeAccess: false
};

export const getCurrentUser = () => {
  return student;
};
