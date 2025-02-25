export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "mythut";
  }

  if (query.toLowerCase().includes("andrew id")) {
	return "mythut";
  }

  if (query.toLowerCase().includes("plus")) {
	let firstNum = parseInt(query.substring(8,10));
	let secondNum = parseInt(query.substring(16,18));
	let sum = firstNum + secondNum;
    return sum.toString();
  }

  return "";
}
