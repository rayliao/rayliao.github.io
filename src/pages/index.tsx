import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useLang } from "common";
import Cookies from "js-cookie";
import Svg from "../components/Svg";
import languages from "../common/lang";

const Home: NextPage = () => {
  const lang = useLang();
  return (
    <div className="font-mono bg-[#f3f3f2] h-screen relative text-center overflow-hidden text-gray-800 text-sm">
      <Head>
        <title>RayLiao</title>
      </Head>
      <div className="absolute top-0 z-[3] w-full p-[10px] h-[48px] box-border flex items-center justify-between">
        <nav className="flex gap-3">
          <Link href="/">{lang.home}</Link>
          <a href="/blog">{lang.blog}</a>
          <Link href="/shoot/2021">{lang.image}</Link>
          <Link href="/about">{lang.about}</Link>
        </nav>
        <div className="group relative">
          <Svg
            name="language"
            className="fill-gray-800 w-5 h-5 cursor-pointer"
          />
          <div className="hidden group-hover:flex flex-col gap-2 pr-1 pt-1 text-right absolute right-0 border-t border-t-gray-500 border-dotted">
            {Object.keys(languages).map((key) => (
              <Link href="/" className="cursor-pointer" key={key} locale={key}>
                <a onClick={() => Cookies.set("NEXT_LOCALE", key)}>
                  {languages[key].name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        {/* <IntlContext.Consumer>
          {(state: AppState | null) =>
            state ? (
              <div className={styles.headerRight}>
                <div onClick={state.switchTheme} className={styles.theme}>
                  {state.dark ? <BulbFilled /> : <BulbOutlined />}
                </div>
                <div className={styles.language}>
                  <TranslationOutlined className={styles.languageIcon} />
                  <div className={styles.languageList}>
                    {Object.keys(languages).map((key) => (
                      <p
                        onClick={() => state.switchLocale(key)}
                        className={state.locale === key ? "active" : ""}
                        key={key}
                      >
                        {languages[key]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : null
          }
        </IntlContext.Consumer> */}
      </div>
      {/* <div className={styles.main}>
        <div className={styles.glitch}>
          <div className={styles.glitchImg} />
          <div className={styles.glitchImg} />
          <div className={styles.glitchImg} />
          <div className={styles.glitchImg} />
          <div className={styles.glitchImg} />
        </div>
        <h1>WingRay Liao</h1>
        <p>
          <FormattedMessage id="home.frontEnd" defaultMessage="前端渣滓" />
          &nbsp;/&nbsp;
          <FormattedMessage id="home.photography" defaultMessage="摄影爱好者" />
          &nbsp;/&nbsp;
          <FormattedMessage id="home.swimfan" defaultMessage="游泳爱好者" />
        </p>
      </div>
      <div className={styles.belong}>
        <svg className={styles.belongSvg}>
          <defs>
            <path id="textPath" d="m61,149.99998a89,89 0 1 1 0,0.00004" />
          </defs>
          <text className={styles.circleText}>
            <textPath xlinkHref="#textPath">{`24°01'50.4"N  116°28'40.6"E`}</textPath>
          </text>
        </svg>
        <EnvironmentOutlined className={styles.belongIcon} />
      </div>
      <div className={styles.sns}>
        <a
          href="https://github.com/rayliao"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://instagram.com/wingrayliao/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.facebook.com/wingrayliao"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook"
        >
          <FacebookFilled />
        </a>
        <a
          href="http://weibo.com/574954033"
          target="_blank"
          rel="noopener noreferrer"
          title="weibo"
        >
          <WeiboOutlined />
        </a>
        <span title="rayliao1989@gmail.com">
          <MailOutlined />
        </span>
      </div> */}
    </div>
  );
};

export default Home;
