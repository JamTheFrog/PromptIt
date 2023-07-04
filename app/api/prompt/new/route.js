import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  console.log("it went in here")
  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save()
    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (err) {
    return new Response("failed to create a new prompt", {status:500})
  }
};
