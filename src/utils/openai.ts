


/*


const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function setup() {
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        temperature: 0.6,
        messages: []
    });

   
};
translateMessages: (messages: ChatMessage[]) => {
    let reqMessages: ChatCompletionRequestMessage[] = [];

    for(let i in messages) {
        reqMessages.push({
            role: messages[i].author === 'me' ? 'user' : 'assistant', 
            content: messages[i].body 
    })
    }
    return reqMessages;
*/




/*
import  Configuration  from 'openai';
import  OpenAIApi  from 'openai';
import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';

const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

const api = new OpenAIApi(configuration)

export const  openai = {
    genetate: async (messages: CreateChatCompletionRequestMessage[]) => {
        const response = await api.createChatCompletion({
            model: 'gpt-3.5-turbo',
            temperature: 0.6,
            messages: 
        });
    },
    translate
}
*/

/*

ESTÁ QUASE DANDO CERTOO 

import { ChatMessage } from '@/types/ChatMessage';
//import { OpenAI, Configuration } from 'openai';
import ChatCompletionRequestMessage  from 'openai'
const { Configuration, OpenAIApi } = require("openai")

const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

const api = new OpenAIApi(config);


export const openai = {
    generate: async (messages: ChatCompletionRequestMessage[]) => {
        try{
            const response = await api.createChatCompletion({
                model: 'gpt-3.5-turbo',
                temperature: 0.6,
                messages: [{ }]
            });
            return response.data.choices[0]?.message?.content;
        } catch (error) {
            return undefined;
        }
    }, 
    translateMessages: (messages: ChatMessage[]) => {
        let reqMessages: ChatCompletionRequestMessage[] = [];
    
        for (let i in messages) {
            reqMessages.push({
                role: "messages[i].author === 'me' ? 'user' : 'assistant'", 
                content: messages[i].body,   
            })
        }   
        
        return reqMessages;
    }
}

*/