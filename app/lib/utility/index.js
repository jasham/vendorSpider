export const fontSize = (size) => {
  switch (size) {
    case 'smallest':
      return '0.8125rem';
    case 'small':
      return '0.875rem';
    case 'normal':
      return '1rem';
    case 'medium':
      return '1.125rem';
    case 'big':
      return '1.375rem';
    case 'biggest':
      return '1.75rem';
    case 'large':
      return '2.1875rem';
    case 'largest':
      return '3.125rem';
    default:
      return '0.875rem';
  }
};

export const fontSize1 = (size) => {
  switch (size) {
    case 'smallest':
      return '13px';
    case 'small':
      return '14px';
    case 'normal':
      return '16px';
    case 'medium':
      return '18px';
    case 'big':
      return '22px';
    case 'biggest':
      return '28px';
    case 'large':
      return '35px';
    case 'largest':
      return '50px';
    default:
      return '13px';
  }
};
