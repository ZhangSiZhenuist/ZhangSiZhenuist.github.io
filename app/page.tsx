const posts = [
  {
    date: '2026.09.03',
    category: '随笔',
    title: '从这里开始',
    excerpt:
      '欢迎来到我的个人博客。这里将收录学习笔记、项目复盘，以及那些值得反复琢磨的问题。',
    href: '#hello',
    featured: true,
  },
  {
    date: '即将发布',
    category: '技术',
    title: '正在整理第一篇技术笔记',
    excerpt: '把复杂问题拆开，把解决过程写清楚。新的文章正在路上。',
    href: '#hello',
    featured: false,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">
          <span className="wordmark-mark">ZS</span>
          <span>章思哲</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#writing">文章</a>
          <a href="#about">关于</a>
          <a
            className="nav-github"
            href="https://github.com/ZhangSiZhenuist"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">⌘</span>
            GitHub
          </a>
        </nav>
      </header>

      <div className="page-shell" id="top">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-kicker">
            <span className="status-dot" />
            NOTES · BUILDS · LIFE
          </div>
          <div className="intro-grid">
            <h1 id="intro-title">
              保持好奇，
              <br />
              持续<span>构建。</span>
            </h1>
            <div className="intro-copy">
              <p>
                你好，我是章思哲。这里记录代码、学习与生活中值得留下来的想法。
              </p>
              <a href="#writing" className="text-link">
                开始阅读 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="signal" aria-hidden="true">
            <span>01</span>
            <div className="signal-line" />
            <span>思考</span>
            <div className="signal-line signal-line-short" />
            <span>表达</span>
            <div className="signal-line signal-line-short" />
            <span>连接</span>
          </div>
        </section>

        <section className="writing-section" id="writing" aria-labelledby="writing-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">RECENT WRITING</p>
              <h2 id="writing-title">最近文章</h2>
            </div>
            <p>不追热点，只记录真正解决过的问题。</p>
          </div>

          <div className="post-list">
            {posts.map((post, index) => (
              <a
                className={post.featured ? 'post-card post-card-featured' : 'post-card'}
                href={post.href}
                key={post.title}
              >
                <div className="post-index">0{index + 1}</div>
                <div className="post-main">
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <time>{post.date}</time>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <span className="post-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <article className="hello-note" id="hello" aria-labelledby="hello-title">
          <div className="note-rail">
            <span>WELCOME NOTE</span>
            <time dateTime="2026-09-03">2026 / 09 / 03</time>
          </div>
          <div className="note-body">
            <p className="eyebrow">第一篇</p>
            <h2 id="hello-title">从这里开始</h2>
            <p className="note-lead">
              写作是整理思考最诚实的方式。这个博客会慢慢长成一份公开的学习档案。
            </p>
            <p>
              我会在这里分享技术实践、项目中的取舍，以及偶尔闪过但不想遗忘的念头。文章不一定频繁，但希望每一次更新都有清晰的主题和真实的收获。
            </p>
            <blockquote>先把事情做出来，再把为什么写清楚。</blockquote>
            <p>
              如果你也在学习、创造，或者只是对某个问题保持好奇，欢迎通过 GitHub 与我交流。
            </p>
          </div>
        </article>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-profile">
            <img
              src="https://avatars.githubusercontent.com/u/241056224?v=4"
              alt="章思哲的 GitHub 头像"
              width="112"
              height="112"
            />
            <span className="avatar-orbit" aria-hidden="true" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT</p>
            <h2 id="about-title">章思哲</h2>
            <p>正在学习，也在持续把想法变成作品。</p>
          </div>
          <div className="contact-links">
            <a href="mailto:202413460043@nuist.edu.cn">
              <span aria-hidden="true">@</span>
              邮件联系
            </a>
            <a
              href="https://github.com/ZhangSiZhenuist"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">⌘</span>
              @ZhangSiZhenuist
            </a>
          </div>
        </section>
      </div>

      <footer>
        <span>© 2026 章思哲</span>
        <span>写作 · 思考 · 保持好奇</span>
      </footer>
    </main>
  );
}
