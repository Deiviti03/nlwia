import { pipeline } from "@xenova/transformers"

export async function summarize(text){
  try {
    console.log("Realizando o resumo...")

    const generator = await pipeline("summarization", "Xenova/distilbart-cnn-12-6"
    )

    const output = await generator(text)

    console.log("Resumo concluido com sucesso!")
    return output[0].summary_text
  } catch (error) {
    console.log("Não fois possivel realizar o resumo", error)
    throw new Error(error)
  }
}