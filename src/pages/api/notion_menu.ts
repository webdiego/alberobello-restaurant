// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

let notionDatabaseId = process.env.NOTION_DATABASE_ID
let notionKey = process.env.NOTION_SECRET_KEY

const notion = new Client({
  auth: notionKey,
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionDatabaseId) throw new Error('Missing NOTION_DATABASE_ID')

  const response = await notion.databases.query({
    database_id: notionDatabaseId,
  })
  const results = response.results.map((page) => {
    return {
      //@ts-ignore
      tag: page.properties.Tag.select.name,
      //@ts-ignore
      title: page.properties.Name.title[0].text.content,
      description:
        //@ts-ignore
        page.properties.Descrizione.rich_text[0]?.text.content ?? null,
      //@ts-ignore
      price: page.properties.Prezzo.rich_text[0].text.content,
    }
  })

  let menu = {
    antipasti: results.filter((item) => item.tag === 'Antipasti'),
    insalatone: results.filter((item) => item.tag === 'Insalatone'),
    primi: results.filter((item) => item.tag === 'Primi'),
    secondi: results.filter((item) => item.tag === 'Secondi'),
    contorni: results.filter((item) => item.tag === 'Contorni'),
    pizze_classiche: results.filter((item) => item.tag === 'Pizze classiche'),
    pizze_speciali: results.filter((item) => item.tag === 'Pizze speciali'),
    pizze_bianche: results.filter((item) => item.tag === 'Pizze bianche'),
  }
  console.log(results)
  res.status(200).json({ menu })
}
