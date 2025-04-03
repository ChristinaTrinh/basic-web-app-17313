import { OpenAI } from "openai";

const docs = [];
const APIKey = process.env.OPENAI_API_KEY;

const client =  new OpenAI({ apiKey: APIKey, dangerouslyAllowBrowser: true});

async function callLLM(question) {
	const allContent = docs.join(" ");
	const llmGuide = "You are an assistant to a dementia patient. " + 
	"They will ask you question so that they can remember what they have done throughout the day. "+ 
	"You should use the information provided as below to assist the patient. " + 
	"If you cannot find anything relevant to the patient's question, " + 
	"please Generate guiding questions to help the patient recall what they’ve done in the day";
	const prompt = llmGuide + "Content: " + allContent + ". Question: " + question;
	const response = await client.responses.create({
		model: "gpt-4o",
		input: prompt
	});
	return response.output_text;
}

export default async function QueryProcessor(query) {
  if (query.toLowerCase().includes("this is information level-")) {
	const newQuery = query.substring(26);
	docs.push(newQuery);
	return "Information recorded";
  } else if (query.toLowerCase().includes("this is question level-")) {
	const response = await callLLM(query.substring(23));
	return response;
  }
  return "";
}

