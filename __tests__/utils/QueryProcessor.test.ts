// import QueryProcessor from "../../utils/QueryProcessor";
// import '@testing-library/jest-dom'

// describe("QueryProcessor", () => {
//     test("should return a string", () => {
//         const query = "test";
//         const response: string = QueryProcessor(query);
//         expect(typeof response).toBe("string");
//     });

//     test('should return shakespeare description', () => {
//         const query = "shakespeare";
//         const response: string = QueryProcessor(query);
//         expect(response).toBe((
//             "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
//             "English poet, playwright, and actor, widely regarded as the greatest " +
//             "writer in the English language and the world's pre-eminent dramatist."
//           ));
//     });

//     test('should return name', () => {
//         const query = "What is your name?";
//         const response: string = QueryProcessor(query);
//         expect(response).toBe((
//             "mythut"
//           ));
//     });

// 	test('should return andrew id', () => {
// 		const query = "What is your Andrew ID?";
// 		const response: string = QueryProcessor(query);
// 		expect(response).toBe(("mythut"));
// 	});

// 	test('should return multiply', () => {
// 		const query = "What is 24 multiplied by 21?";
// 		const response: string = QueryProcessor(query);
// 		expect(response).toBe(("504"));
// 	});

// 	test('should return square and cube', () => {
// 		const query = "Which of the following numbers is both a square and a cube: 4857, 4096, 1331, 1884, 1988, 2060, 1024?";
// 		const response: string = QueryProcessor(query);
// 		expect(response).toBe(("4096"));
// 	});
// });