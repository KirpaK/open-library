/**
 * Хелпер для получения свойства объекта.
 * На основании запрошенного пути к свойству, разделенного через '.'
 * @export
 * @param {*} value Ссылка на объект
 * @param {*} path Вложенный путь
 * @returns Возвращает undefined | null при обнаружении
 */
export function get(value: Object, path: string): any {
  let result: any = value;
  const steps = path.split(".");
  for (const step of steps) {
    if (result === undefined || result === null) break;
    result = result[step];
  }
  return result;
}