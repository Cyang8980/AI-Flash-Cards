import { NextResponse } from "next/server";
import OpenAI from 'openai'

const systemPrompt = `
You are a flashcard creator. 
Your task is to generate concise, clear, and informative flashcards on the topic of Pokémon. 
Each flashcard should contain a question on one side and a brief, accurate answer on the other. 
Ensure that the content is educational and easy to understand. 
If applicable, include examples, definitions, or key points to enhance learning. 
Focus on creating flashcards that facilitate quick recall and review of the material.

Remember, the goal is to facilitate effective learnign and retention of information through these flashcards.

Return in the following json format

{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`;

export async function POST(req) {
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: "gpt-4o",
        response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}


