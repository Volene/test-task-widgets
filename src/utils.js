export const capitalizeFirstLetter = (str) =>
  str[0].toUpperCase() + str.slice(1);

export const omit = (obj, keys) => {
  const objKeys = Object.keys(obj);
  const omitKeys = new Set(keys.map(String));
  return objKeys.reduce(
    (newObj, key) =>
      omitKeys.has(key) ? newObj : { ...newObj, [key]: obj[key] },
    {}
  );
};

export const randomColor = () =>"#" + Math.floor(Math.random() * 16777215).toString(16);
