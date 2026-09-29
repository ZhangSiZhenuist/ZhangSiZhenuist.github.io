import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Code2,
  GitBranch,
  Mail,
  Map,
  Plane,
  Repeat2,
  Rss,
  Sparkles,
} from "lucide-react";

type Post = {
  title: string;
  description: string;
  href: string;
  date: string;
  tags: string[];
};

type Props = { posts: Post[] };

const VIDEO_URL =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/mountain_bg_video_2.mp4";
const WINDOW_URL =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/in-flight-image-1.png";
const REFERENCE_IMAGE =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781661103945-Skyway_Website.webp";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));
}

export default function SkywayBlog({ posts }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLImageElement>(null);
  const aboutImageRef = useRef<HTMLImageElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const [reversed, setReversed] = useState(false);

  const latest = posts[0];
  const destinations = useMemo(
    () => [
      ...(latest
        ? [
            {
              title: latest.title,
              description: latest.description,
              href: latest.href,
              meta: `${formatDate(latest.date)} · 最新文章`,
              image: REFERENCE_IMAGE,
            },
          ]
        : []),
      {
        title: "全部文章",
        description: "沿时间线浏览每一篇公开写作。",
        href: "/posts/",
        meta: "文章航线",
      },
      {
        title: "关于我",
        description: "认识章思哲，以及这个博客为何存在。",
        href: "/about/",
        meta: "作者档案",
      },
      {
        title: "标签索引",
        description: "按主题找到技术实践与学习记录。",
        href: "/tags/",
        meta: "主题地图",
      },
      {
        title: "时间归档",
        description: "看看写作如何随时间慢慢生长。",
        href: "/archives/",
        meta: "公开记录",
      },
    ],
    [latest]
  );

  useEffect(() => {
    if (!rootRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let frame = 0;
    let lenis: Lenis | undefined;
    let bob: gsap.core.Tween | undefined;

    if (!reduceMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }

    const context = gsap.context(() => {
      if (!reduceMotion && windowRef.current && heroRef.current) {
        gsap.set(windowRef.current, { scale: 1.05 });
        bob = gsap.to(windowRef.current, {
          y: -15,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=110%",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });
        timeline
          .to(editorialRef.current, { autoAlpha: 0, y: -24 }, 0)
          .to(heroCopyRef.current, { autoAlpha: 0, scale: 0.96 }, 0.08)
          .to(windowRef.current, { scale: 2.15, y: 0, ease: "none" }, 0);
      }

      if (!reduceMotion && aboutImageRef.current) {
        gsap.fromTo(
          aboutImageRef.current,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: aboutImageRef.current.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, rootRef);

    return () => {
      context.revert();
      bob?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis?.destroy();
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollCarousel = (direction: number) => {
    const element = carouselRef.current;
    if (!element) return;
    const amount = Math.min(element.clientWidth * 0.82, 460) * direction;
    const atEnd =
      element.scrollLeft + element.clientWidth >= element.scrollWidth - 8;
    const atStart = element.scrollLeft <= 8;
    if (direction > 0 && atEnd)
      element.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction < 0 && atStart)
      element.scrollTo({ left: element.scrollWidth, behavior: "smooth" });
    else element.scrollBy({ left: amount, behavior: "smooth" });
  };

  const moveMagnet = (event: ReactMouseEvent<HTMLDivElement>) => {
    const button = magneticRef.current;
    if (
      !button ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    gsap.to(button, {
      x: (event.clientX - (rect.left + rect.width / 2)) * 0.16,
      y: (event.clientY - (rect.top + rect.height / 2)) * 0.16,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const resetMagnet = () => {
    if (magneticRef.current)
      gsap.to(magneticRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
  };

  const primaryHref = latest?.href ?? "/posts/";

  return (
    <div className="skyway" ref={rootRef}>
      <a className="skyway-skip" href="#main-content">
        跳到正文
      </a>

      <header className="skyway-nav" aria-label="主导航">
        <a className="skyway-brand" href="/" aria-label="章思哲首页">
          <Plane aria-hidden="true" />
          <span>章思哲</span>
        </a>
        <nav>
          <a href="#experience">写作</a>
          <a href="#about">关于</a>
          <a href="#destinations">探索</a>
          <a href="/posts/">文章</a>
          <a className="nav-cta" href="#contact">
            联系
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section
          className="zoom-hero"
          ref={heroRef}
          aria-labelledby="hero-title"
        >
          <div className="hero-stage">
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={REFERENCE_IMAGE}
              aria-hidden="true"
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="hero-wash" aria-hidden="true" />

            <div className="hero-copy" ref={heroCopyRef}>
              <h1 id="hero-title">沿着思考的航线</h1>
              <p>
                <strong>我是章思哲。</strong>
                这里记录技术实践、学习过程，以及那些值得被认真写下来的真实思考。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={primaryHref}>
                  开始阅读 <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="button button-quiet" href="/about/">
                  认识我
                </a>
              </div>
            </div>

            <div className="hero-editorial" ref={editorialRef}>
              <span>Begin with</span>
              <strong>curiosity.</strong>
              <p>每一次记录，都是为下一次出发留下坐标。</p>
            </div>

            <img
              ref={windowRef}
              className="aircraft-window"
              src={WINDOW_URL}
              alt=""
              aria-hidden="true"
            />
            <div className="scroll-cue" aria-hidden="true">
              <span>向下探索</span>
              <ChevronDown />
            </div>
          </div>
        </section>

        <section className="route-search" aria-label="阅读导航">
          <div className="route-tabs" aria-label="阅读方式">
            <span className="active">从最新开始</span>
            <a href="/posts/">浏览全部</a>
          </div>
          <div className="route-fields">
            <div className="route-field">
              <small>{reversed ? "目的地" : "当前位置"}</small>
              <strong>{reversed ? "一篇真实文章" : "此刻"}</strong>
            </div>
            <button
              className="swap-button"
              type="button"
              onClick={() => setReversed(value => !value)}
              aria-label="交换阅读起点与目的地"
              title="交换起点与目的地"
            >
              <Repeat2 aria-hidden="true" />
            </button>
            <div className="route-field">
              <small>{reversed ? "当前位置" : "目的地"}</small>
              <strong>{reversed ? "此刻" : "一篇真实文章"}</strong>
            </div>
            <div className="route-field route-date">
              <small>出发时间</small>
              <strong>现在</strong>
            </div>
            <div className="route-field route-class">
              <small>阅读方式</small>
              <strong>自由探索</strong>
            </div>
            <a className="route-submit" href={primaryHref}>
              开始阅读 <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="offers section-shell" id="destinations">
          <div className="section-heading offers-heading">
            <div>
              <h2>选择下一站</h2>
              <p>从一篇文章出发，也可以先了解这个人和这座站点。</p>
            </div>
            <div className="carousel-controls">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="上一组"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="下一组"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="offers-track" ref={carouselRef}>
            {destinations.map((item, index) => (
              <a
                className={`offer-card offer-card-${index + 1}`}
                href={item.href}
                key={item.href}
              >
                {item.image && <img src={item.image} alt="山峰与云海" />}
                <span className="offer-shade" aria-hidden="true" />
                <small>{item.meta}</small>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-heading">
            <h2>一份持续生长的公开记录</h2>
            <p>
              不包装不存在的经历，只把做过的事情、学到的东西和仍在思考的问题写清楚。
            </p>
          </div>
          <div className="experience-grid">
            <article>
              <BookOpen aria-hidden="true" />
              <div>
                <h3>真实写作</h3>
                <p>用完整文章保存判断过程，而不是只留下结论。</p>
              </div>
            </article>
            <article>
              <Code2 aria-hidden="true" />
              <div>
                <h3>技术实践</h3>
                <p>记录实现、取舍和踩过的坑，让经验能够被复用。</p>
              </div>
            </article>
            <article>
              <Sparkles aria-hidden="true" />
              <div>
                <h3>持续学习</h3>
                <p>给正在形成的认知留下版本，也坦诚面对未知。</p>
              </div>
            </article>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="about-copy">
            <h2>你好，我是章思哲</h2>
            <p className="about-lead">
              我在这里分享技术实践、项目中的取舍，以及偶尔闪过但不想遗忘的念头。
            </p>
            <p>
              文章不一定频繁，但希望每一次更新都有清晰的主题和真实的收获。你可以把这里当作一份公开的学习档案，也可以随时从
              GitHub 找到我。
            </p>
            <div className="about-links">
              <a href="/about/">
                完整介绍 <ArrowRight aria-hidden="true" />
              </a>
              <a
                href="https://github.com/ZhangSiZhenuist"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
          <div className="about-image-wrap">
            <img
              ref={aboutImageRef}
              src="/assets/zhang-sizhe-avatar.png"
              alt="章思哲的 GitHub 头像"
            />
            <span>ZHANG SIZHE · GITHUB</span>
          </div>
        </section>

        <section className="impact" aria-label="博客信息">
          <div>
            <strong>{String(posts.length).padStart(2, "0")}</strong>
            <span>公开文章</span>
          </div>
          <div>
            <strong>OPEN</strong>
            <span>GitHub 主页</span>
          </div>
          <div>
            <strong>RSS</strong>
            <span>持续订阅</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>保持好奇</span>
          </div>
        </section>

        <section className="journey section-shell">
          <div className="journey-copy">
            <Map aria-hidden="true" />
            <h2>写作是整理思考最诚实的方式。</h2>
            <p>先把事情做出来，再把为什么写清楚。</p>
          </div>
          {latest && (
            <a className="latest-manifest" href={latest.href}>
              <span>最新记录</span>
              <div>
                <time dateTime={latest.date}>{formatDate(latest.date)}</time>
                <h3>{latest.title}</h3>
                <p>{latest.description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </section>

        <section className="contact" id="contact">
          <div>
            <h2>准备好，一起出发了吗？</h2>
            <p>从一篇文章开始，或直接来和我聊聊。</p>
          </div>
          <div
            className="magnetic-area"
            onMouseMove={moveMagnet}
            onMouseLeave={resetMagnet}
          >
            <a ref={magneticRef} className="magnetic-button" href={primaryHref}>
              <span>开始阅读</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="skyway-footer">
        <a className="skyway-brand" href="/">
          <Plane aria-hidden="true" />
          <span>章思哲</span>
        </a>
        <p>记录技术、学习与真实思考。</p>
        <div>
          <a
            href="https://github.com/ZhangSiZhenuist"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch aria-hidden="true" />
          </a>
          <a href="mailto:202413460043@nuist.edu.cn" aria-label="发送邮件">
            <Mail aria-hidden="true" />
          </a>
          <a href="/rss.xml" aria-label="RSS 订阅">
            <Rss aria-hidden="true" />
          </a>
        </div>
        <small>© {new Date().getFullYear()} 章思哲</small>
      </footer>
    </div>
  );
}
