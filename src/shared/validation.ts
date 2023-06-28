
export const Validations = {
  number: (value: string | undefined) => {
    if (!value) {
      return false;
    }
    if (/^[0-9]+$/i.test(value)) {
      return true;
    }
    return false;
  },
  alphanumeric: (value: string | undefined) => {
    if (!value) {
      return false;
    }
    if (/^[a-záéíóúÁÉÍÓÚñÑ 0-9]+$/i.test(value)) {
      return true;
    }
    return false;
  },
};
