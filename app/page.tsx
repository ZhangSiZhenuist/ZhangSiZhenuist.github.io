import { ArrowRight, ArrowUpRight, Code2, Mail } from 'lucide-react';
import Image from 'next/image';
import Magnet from '@/components/magnet';

const githubUrl = 'https://github.com/ZhangSiZhenuist';
const email = '202413460043@nuist.edu.cn';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <main id="main-content">
      <div className="home-frame" id="top">
        <header className="site-header" aria-label="网站页眉">
          <a className="wordmark" href="#top" aria-label="章思哲的个人博客首页">
            <span className="wordmark-dot" aria-hidden="true" />
            <span>章思哲</span>
          </a>

          <nav className="nav-links" aria-label="主导航">
            <a className="nav-active" href="#writing">文章</a>
            <a href="#about">关于</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
          </nav>
        </header>

        <section className="intro-section" aria-labelledby="intro-title">
          <div className="intro-copy reveal reveal-first">
            <h1 id="intro-title">
              <span>你好，我是</span>
              <span>章思哲。</span>
            </h1>
            <span className="title-rule" aria-hidden="true" />
            <p>
              <span>这里记录代码、学习与生活中</span>
              <span>值得留下来的想法。</span>
            </p>
          </div>

          <aside className="profile-note reveal reveal-second" aria-label="个人状态">
            <Image
              src="/assets/plates/avatar.png"
              alt="章思哲的 GitHub 头像"
              width="152"
              height="152"
              priority
              unoptimized
            />
            <p>
              <span className="status-dot" aria-hidden="true" />
              正在学习，也在持续把想法变成作品。
            </p>
          </aside>
        </section>

        <section className="writing-section reveal reveal-third" id="writing" aria-labelledby="writing-title">
          <h2 id="writing-title">最近文章</h2>
          <span className="section-rule" aria-hidden="true" />

          <article className="article-row">
            <time dateTime="2026-09-03">2026.09.03</time>
            <div className="article-copy">
              <p className="article-category">随笔</p>
              <h3><a href="#hello">从这里开始</a></h3>
              <p className="article-excerpt">
                欢迎来到我的个人博客。这里将收录学习笔记、项目复盘，以及那些值得反复琢磨的问题。
              </p>
            </div>
            <Magnet padding={28} magnetStrength={8} wrapperClassName="article-action-wrap">
              <a className="article-action" href="#hello">
                阅读文章
                <ArrowRight aria-hidden="true" size={30} strokeWidth={1.5} />
              </a>
            </Magnet>
          </article>
        </section>

        <section className="contact-section reveal reveal-fourth" id="about" aria-labelledby="about-title">
          <h2 id="about-title">关于我</h2>
          <span className="section-rule" aria-hidden="true" />
          <div className="contact-links">
            <a href={`mailto:${email}`}>
              <Mail aria-hidden="true" size={25} strokeWidth={1.7} />
              {email}
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={25} strokeWidth={1.7} />
              @ZhangSiZhenuist
            </a>
          </div>
        </section>

        <article className="post" id="hello" aria-labelledby="post-title">
          <header className="post-header">
            <p className="post-kicker">随笔 · 2026.09.03</p>
            <h2 id="post-title">从这里开始</h2>
            <p className="post-lead">
              写作是整理思考最诚实的方式。这个博客会慢慢长成一份公开的学习档案。
            </p>
          </header>

          <div className="post-body">
            <p>
              我会在这里分享技术实践、项目中的取舍，以及偶尔闪过但不想遗忘的念头。文章不一定频繁，但希望每一次更新都有清晰的主题和真实的收获。
            </p>
            <blockquote>先把事情做出来，再把为什么写清楚。</blockquote>
            <p>
              如果你也在学习、创造，或者只是对某个问题保持好奇，欢迎通过
              <a href={githubUrl} target="_blank" rel="noreferrer"> GitHub </a>
              与我交流。
            </p>
          </div>
        </article>

        <footer className="site-footer">
          <p>© 2026 章思哲</p>
          <a href="#top">回到顶部</a>
        </footer>
      </div>
      </main>
    </>
  );
}
