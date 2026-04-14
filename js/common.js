/**
 * 부가세를 계산해서 리턴하는 함수
 * @param {*} productPrice
 * @returns
 */
function taxAmount(productPrice) {
  let tax = 0.5;
  return productPrice * tax;
}
/**
 * 우리 나라 5대 부자를 리턴
 * @returns
 */

function getTop5() {
  return ["이재용", 2, 3, 4, "정예준"];
}
