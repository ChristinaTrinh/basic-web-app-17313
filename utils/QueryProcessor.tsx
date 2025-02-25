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

  if (query.toLowerCase().includes("largest")) {
	const matches = query.match(/\d+/g);
	let numbers = [];
	if (matches) {
		numbers = matches.map(num => parseInt(num,10));
		const firstNum = numbers[0];
		const secondNum = numbers[1];
		const thirdNum = numbers[2];
		let largest = firstNum;
		if (secondNum > largest) {
			largest = secondNum;
		} 
	    if (thirdNum > largest) {
			largest = thirdNum;
		}
		return largest.toString();
	}
  }

  if (query.toLowerCase().includes("multiplied")) {
	let firstNum = parseInt(query.substring(8,10));
	let secondNum = parseInt(query.substring(25,27));
	let mult = firstNum * secondNum;
	return mult.toString();
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
	const matches = query.match(/\d+/g);
	let numbers = [];
	if (matches) {
		numbers = matches.map(num => parseInt(num,10));
		let value = numbers.filter(find);
		return value[0].toString();
	}
  }

  if (query.toLowerCase().includes("minus")) {
	const match = query.match(/(\d+)\s*minus\s*(\d+)/);
	if (match) {
		const firstNum = parseInt(match[1], 10);
		const secondNum = parseInt(match[2], 10);
		let sub = firstNum - secondNum;
		return sub.toString();
	}
  }

  return "";
}

function find(value: number, index: any, array: any) {
	let sqrt = Math.sqrt(value);
	let cb = Math.cbrt(value);
	return Number.isInteger(sqrt) && Number.isInteger(cb);
}
