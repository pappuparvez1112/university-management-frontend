export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  // let propertyPath="admin.name.firstName"
  // let propertyPath="admin.name.lastName"

  const properties = propertyPath.split(".");
  //after split
  //["admin" ,"name" ,"firstName"]
  //obj=errors
  let value = obj;
  for (let prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }
  return value.message;
};
