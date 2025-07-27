import React from 'react'
import { Client } from '@notionhq/client'
import Image from 'next/image'
import Layout from '../components/Layout'

let notionDatabaseId = process.env.NOTION_DATABASE_ID
let notionKey = process.env.NOTION_SECRET_KEY

const notion = new Client({
  auth: notionKey,
})

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Menu({ menu }: { menu: any }) {
  let tabsMenu = Object.keys(menu).map((key) => {
    return {
      name: key,
      current: false,
    }
  })

  tabsMenu[0].current = true
  const [tabs, setTabs] = React.useState(tabsMenu)

  const handleSelectTab = (name: string) => {
    setTabs((tabs) =>
      tabs.map((tab) => {
        if (tab.name === name) return { ...tab, current: true }
        return { ...tab, current: false }
      })
    )
  }

  return (
    <Layout>
      <div className="pb-10">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-14 px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 p py-16 md:py-24 text-left shadow-2xl rounded-3xl sm:px-16 ">
              <h2 className="mr-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg	">
                Il nostro menù
              </h2>
              <p className="mr-auto mt-6 max-w-xl text-base md:text-lg  text-white drop-shadow-lg	">
                Il nostro menù è ricco di piatti tipici della tradizione
                pugliese, troverai antipasti, primi, secondi, pizze e molto
                altro ancora.
              </p>
              <div className="absolute left-0 top-0 -z-10 w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1510382160188-0990ce845b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="logo"
                  fill
                  style={{ objectFit: 'cover' }}
                  objectPosition="center"
                  priority
                  className="blur-sm"
                />
                <div className="bg-white w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8">
          <div className="relative border-b">
            <nav
              className="flex space-x-4 w-full overflow-x-auto items-center pb-4 pr-10"
              aria-label="Tabs"
            >
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  className={classNames(
                    tab.current
                      ? 'bg-black text-white'
                      : 'text-gray-500 hover:text-gray-700 border',
                    'rounded-md px-3 py-2 text-sm font-medium cursor-pointer min-w-max'
                  )}
                  // set the current tab to true on click to change the active tab style to "bg-black text-white"
                  onClick={() => handleSelectTab(tab.name)}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </div>
              ))}
              {/* <div className="absolute right-0 top-0 w-14 h-full bg-gradient-to-r from-transparent to-white" /> */}
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-5">
          {menu[tabs.find((tab) => tab.current)!.name].map(
            (item: any, i: number) => (
              <div key={i} className={`flex justify-between items-start py-2`}>
                <div className="w-2/3">
                  <h2 className="text-sm md:text-base font-medium pr-5">
                    {item.title}
                  </h2>
                  <p className="italic text-sm">{item.description}</p>
                </div>
                <p className="text-sm md:text-base text-right">
                  € {item.price}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await notion.databases.query({
    database_id: notionDatabaseId as string,
  })
  const results = response.results.map((page) => {
    return {
      //@ts-ignore
      tag: page.properties.Tag.select?.name ?? null,
      //@ts-ignore
      title: page.properties.Name.title[0]?.text.content ?? null,
      description:
        //@ts-ignore
        page.properties.Descrizione.rich_text[0]?.text.content ?? null,
      //@ts-ignore
      price: page.properties.Prezzo.rich_text[0]?.text.content ?? null,
    }
  })

  let menu = {
    Antipasti: results.filter((item) => item.tag === 'Antipasti').reverse(),
    Insalatone: results.filter((item) => item.tag === 'Insalatone').reverse(),
    Primi: results.filter((item) => item.tag === 'Primi').reverse(),
    Secondi: results.filter((item) => item.tag === 'Secondi').reverse(),
    Contorni: results.filter((item) => item.tag === 'Contorni'),
    'Pizze classiche': results
      .filter((item) => item.tag === 'Pizze classiche')
      .reverse(),
    'Pizze speciali': results
      .filter((item) => item.tag === 'Pizze speciali')
      .reverse(),
    'Pizze bianche': results
      .filter((item) => item.tag === 'Pizze bianche')
      .reverse(),
  }
  return {
    props: {
      menu,
    },
    revalidate: 604800, // 1 week
  }
}
