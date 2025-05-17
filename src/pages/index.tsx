import type {ReactNode} from 'react'

import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'

import styles from './index.module.css'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  )
}

function WorkBlock(props) {
  return <div className={`flex flex-nowrap gap-4 ${props?.className}`}>
    <div className={`size-[64px] flex-none bg-cover ${props?.borderImg ?'border border-gray-300 rounded' :''}`}
    style={{
      backgroundImage: `url(${props?.img})`,
    }}></div>
    <div className="w-full shrink">
      <Heading className="!mb-1" as="h4">{props?.jobTitle}・<span className="font-[400] text-[15px] text-primary">{props?.companyName}</span></Heading>
      <div className="text-[12px] mb-1 font-bold">{props?.jobTime}</div>
      <div className="text-[14px] opacity-70">{props?.description}</div>
    </div>
  </div>
}

function SchoolBlock(props) {
  return <div className={`flex flex-nowrap gap-4 ${props?.className}`}>
    <div className={`size-[64px] flex-none bg-cover ${props?.borderImg ?'border border-gray-300 rounded' :''}`}
    style={{
      backgroundImage: `url(${props?.img})`,
    }}></div>
    <div className="w-full shrink">
      <Heading className="!mb-1" as="h4">{props?.schoolName}</Heading>
      <div className="text-[14px]">{props?.description}</div>
      <div className="text-[12px] text-primary">{props?.schoolTime}</div>
    </div>
  </div>
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hi there! I\'m Vann a software developer.">

      <div className="relative mx-auto" style={{maxWidth:'680px'}}>

        <div className="lg:mt-6 mt-4">
          <div className="container">
            <div className="grid sm:grid-cols-[180px_1fr] grid-cols-1 lg:gap-4 gap-2 items-start">
              <div className="sm:size-[180px] size-[120px] rounded-full bg-cover"
              style={{
                backgroundImage: 'url(img/vann.jpg)',
              }}></div>
              <div>
                <Heading as="h1"
                style={{ textIndent: '-4px', marginBottom: '4px' }}>
                Vann Liu
                </Heading>
                <div className="mb-2">我從 2014 開始從事網頁應用程式開發，累積了超過 10 年的網頁工程相關工作經驗，從接案到 SaaS，製作過的專案類型豐富，包括「形象官網」、「互動遊戲」、「電商平台」、「CRM 管理系統」...等皆有涉獵，雖然主力是做前端，但是對於後端和資料庫亦有相當地了解，不少專案皆以 Full Stack 獨立完成，也熟悉 DevOps 的流程與 CI/CD 的實作。</div>
                <div className="flex flex-wrap sm:gap-2 gap-1">
                  <div className="flex-none flex flex-nowrap">
                    <i className="bi bi-geo-alt-fill flex-none"></i>
                    <div className="whitespace-nowrap shrink pl-0.5 font-bold">Taipei, Taiwan</div>
                  </div>
                  <div>
                    <Link className="flex-none" href="mailto:vann@cpcpt.tw">vann@cpcpt.tw</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <hr className="my-6"/>
        </div>

        <div className="container !mb-8">
          <Heading as="h2" className="!mb-8">Work Experience</Heading>

          <WorkBlock
          className="mb-8"
          img="img/work4.png"
          borderImg
          jobTitle="前端技術總監"
          companyName="JGB Smart Property"
          jobTime="2020年2月 - "
          description="加入 SaaS 智慧租賃管理平台，管理 5 - 10 人團隊，一手建立整個產品的前端架構，在產品的開發與運營期間，並不止步於一開始所選擇的技術，持續關注並積極導入最新前端技術如 Vite、SSR、TypeScript、TailwindCSS...等，持續優化團隊的開發體驗" />

          <WorkBlock
          className="mb-8"
          img="img/work3.png"
          borderImg
          jobTitle="全端工程師"
          companyName="結晶計劃設計工作室"
          jobTime="2016 年 1 月 - 2020 年 1 月"
          description="自行創業成立工作室，開始以 Full Stack 獨立完成前後端程式以及部署，合作品牌與廠商包括：商業周刊、台積電、文曄科技、勤美誠品綠園道、金典綠園道、得正、一芳水果茶、嘉鴻遊艇...等，專案類型豐富" />

          <WorkBlock
          className="mb-8"
          img="img/work2.png"
          jobTitle="兼任講師"
          companyName="中華大學推廣教育部"
          jobTime="2015 年 6 月 - 2015 年 12 月"
          description="《網路行銷與廣告》課程兼任講師" />

          <WorkBlock
          img="img/work1.png"
          jobTitle="前端工程師"
          companyName="毅達創意實業有限公司"
          jobTime="2015 年 1 月 - 2015 年 6 月"
          description="精確實現需求規格的版型以及人機互動情境，使命必達，製作過包括：台北 101、金車、桂格、麒麟 KIRIN、FHM 男人幫、NU SKIN、台灣之星、飛利浦...等眾多知名品牌廠商的形象官網、表現型網頁以及 JS 遊戲，亦製作過許多線上線下的虛實整合活動的網頁應用" />
        </div>

        <div className="container !mb-8">
          <Heading as="h2" className="!mb-8">Education</Heading>
          <div className="flex flex-wrap">
            <SchoolBlock
            className="lg:w-1/2 w-full lg:mb-0 mb-8"
            img="img/school2.png"
            schoolName="嶺東科技大學"
            schoolTime="2010 - 2014"
            description="碩士學位・視覺傳達設計" />

            <SchoolBlock
            className="lg:w-1/2 w-full"
            img="img/school1.png"
            schoolName="亞洲大學"
            schoolTime="2006 - 2010"
            description="學士學位・數位媒體設計" />
          </div>
        </div>
      </div>

      <div className="bg-[#697b71] py-8">
        <div  className="relative mx-auto" style={{maxWidth:'680px'}}>
          <div className="container">
            <div className="flex lg:flex-nowrap flex-wrap gap-8">
              <div className="lg:w-1/2 w-full">
                <Heading as="h2" className="!text-white !mb-0">Skills</Heading>
                <hr className="border-white !mt-2 !mb-3" />
                <div className="flex flex-wrap gap-x-2 gap-y-3 text-white text-[14px]">
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">JavaScript</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">TypeScript</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Node.js</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Vue</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">React</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Next.js</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Nuxt.js</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">HTML</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">CSS</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Sass / SCSS</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Vite</div>
                  <div className="border border-gray-400 rounded px-1.5 py-1 leading-none">Webpack</div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <Heading as="h2" className="!text-white !mb-0">Language</Heading>
                <hr className="border-white !my-2" />
                <div className="text-white text-[15px]"><b>中文</b>・<span className="text-gray-300">母語</span></div>
                <div className="text-white text-[15px]"><b>English</b>・<span className="text-gray-300">初階</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
