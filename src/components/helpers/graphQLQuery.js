export function createQueryFactory({queryName, parameters, body}){
  const query = `{
      ${queryName}(${parameters}){
          ${body}
      }
  }`
  return query;
}