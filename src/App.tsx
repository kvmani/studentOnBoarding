import {
  ArrowLeft,
  BookOpen,
  Check,
  Clock3,
  Command,
  Copy,
  ExternalLink,
  FileSearch,
  Gauge,
  Home,
  Layers3,
  Monitor,
  Network,
  PlayCircle,
  Search,
  Server,
  Tags,
  TerminalSquare
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type React from "react";
import { LessonVisual } from "./components/Visuals";
import { loadEnvironmentConfig } from "./config";
import { getLessonById, lessons } from "./data/lessons";
import type { EnvironmentConfig, Lesson, LessonBlock } from "./types";

const categoryIcons: Record<string, React.ReactNode> = {
  "Start Here": <Home size={18} />,
  Tools: <Monitor size={18} />,
  Python: <TerminalSquare size={18} />,
  Data: <FileSearch size={18} />,
  "Machine Learning": <Gauge size={18} />,
  "Command Line": <TerminalSquare size={18} />,
  "Remote Access": <Server size={18} />,
  Segmentation: <Layers3 size={18} />,
  Compute: <Server size={18} />
};

function App() {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [config, setConfig] = useState<EnvironmentConfig | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    loadEnvironmentConfig()
      .then(setConfig)
      .catch((error: Error) => setConfigError(error.message));
  }, []);

  const filteredLessons = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      return lessons;
    }
    return lessons.filter((lesson) => {
      const searchable = [
        lesson.title,
        lesson.summary,
        lesson.category,
        ...lesson.tags,
        ...lesson.sections.flatMap((section) => [
          section.heading,
          ...section.blocks.flatMap((block) => blockText(block))
        ])
      ]
        .join(" ")
        .toLowerCase();
      return searchable.includes(needle);
    });
  }, [query]);

  const activeLesson = activeLessonId ? getLessonById(activeLessonId) : null;

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand-button" type="button" onClick={() => setActiveLessonId(null)}>
          <BookOpen size={24} />
          <span>
            <strong>{config?.siteTitle ?? "Student Onboarding Hub"}</strong>
            <small>{config?.officeName ?? "Offline lab learning platform"}</small>
          </span>
        </button>
        <div className="config-pill" title="Runtime config source">
          <Network size={16} />
          {configError ? "config error" : config?.source === "real" ? "real config" : "example config"}
        </div>
      </header>

      {configError ? <div className="error-banner">{configError}</div> : null}

      <main className="layout">
        <aside className="sidebar">
          <label className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search lessons, tools, datasets..."
            />
          </label>

          <nav className="lesson-nav" aria-label="Lessons">
            {filteredLessons.map((lesson) => (
              <button
                key={lesson.id}
                className={lesson.id === activeLessonId ? "nav-item active" : "nav-item"}
                type="button"
                onClick={() => setActiveLessonId(lesson.id)}
              >
                <span className="nav-icon">{categoryIcons[lesson.category] ?? <BookOpen size={18} />}</span>
                <span>
                  <strong>{lesson.title}</strong>
                  <small>{lesson.category}</small>
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="content-panel">
          {activeLesson ? (
            <LessonPage lesson={activeLesson} config={config} onBack={() => setActiveLessonId(null)} onOpen={setActiveLessonId} />
          ) : (
            <Dashboard lessons={filteredLessons} onOpen={setActiveLessonId} query={query} />
          )}
        </section>
      </main>
    </div>
  );
}

function Dashboard({ lessons: visibleLessons, onOpen, query }: { lessons: Lesson[]; onOpen: (id: string) => void; query: string }) {
  const categories = Array.from(new Set(lessons.map((lesson) => lesson.category)));

  return (
    <>
      <section className="dashboard-header">
        <div>
          <p className="eyebrow">Offline intranet onboarding</p>
          <h1>Start working with lab code, data, and GPU workflows.</h1>
          <p>
            Each module is a short, searchable lesson for beginners. The focus is practical: open the right folder, use the right
            environment, prepare clean datasets, and understand the training workflow before touching production runs.
          </p>
          <div className="hero-actions">
            <button type="button" onClick={() => onOpen("vscode-basics")}>
              <PlayCircle size={18} />
              Start with VS Code
            </button>
            <button type="button" onClick={() => onOpen("jupyter-notebooks-vscode")}>
              <BookOpen size={18} />
              Open notebook guide
            </button>
          </div>
        </div>
        <div className="hero-media">
          <img src="tutorial-assets/onboarding-hero.svg" alt="Lab onboarding workflow illustration" />
          <div className="stat-strip">
            <span>
              <strong>{lessons.length}</strong>
              lessons
            </span>
            <span>
              <strong>10-15</strong>
              min
            </span>
            <span>
              <strong>0</strong>
              internet
            </span>
          </div>
        </div>
      </section>

      <section className="workflow-strip" aria-label="Recommended starting workflow">
        <div>
          <Command size={19} />
          Open folder
        </div>
        <div>
          <TerminalSquare size={19} />
          Activate .venv
        </div>
        <div>
          <FileSearch size={19} />
          Check data
        </div>
        <div>
          <Server size={19} />
          Submit GPU job
        </div>
      </section>

      <div className="category-row">
        {categories.map((category) => (
          <span key={category} className="category-chip">
            {categoryIcons[category] ?? <BookOpen size={16} />}
            {category}
          </span>
        ))}
      </div>

      {query ? <p className="result-count">{visibleLessons.length} matching lesson(s)</p> : null}

      {visibleLessons.length > 0 ? (
        <div className="lesson-grid">
          {visibleLessons.map((lesson) => (
            <button key={lesson.id} className="lesson-card" type="button" onClick={() => onOpen(lesson.id)}>
              <span className="card-icon">{categoryIcons[lesson.category] ?? <BookOpen size={22} />}</span>
              <span className="card-meta">
                <Clock3 size={15} />
                {lesson.durationMinutes} min
              </span>
              <strong>{lesson.title}</strong>
              <span>{lesson.summary}</span>
              <span className="tag-list">
                {lesson.tags.slice(0, 3).map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <strong>No matching lessons</strong>
          <p>Try a tool name, workflow, command, dataset term, or model name such as VS Code, venv, hydride, pix2pix, QA, or HPC.</p>
        </div>
      )}
    </>
  );
}

function LessonPage({
  lesson,
  config,
  onBack,
  onOpen
}: {
  lesson: Lesson;
  config: EnvironmentConfig | null;
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  return (
    <article className="lesson-page">
      <button className="back-button" type="button" onClick={onBack}>
        <ArrowLeft size={18} />
        Dashboard
      </button>

      <div className="lesson-hero">
        <div>
          <p className="eyebrow">{lesson.category}</p>
          <h1>{lesson.title}</h1>
          <p>{lesson.summary}</p>
          <div className="lesson-meta">
            <span>
              <Clock3 size={16} />
              {lesson.durationMinutes} min
            </span>
            <span>
              <Gauge size={16} />
              {lesson.level}
            </span>
            <span>
              <Tags size={16} />
              {lesson.tags.join(", ")}
            </span>
          </div>
        </div>
        <LessonVisual kind={lesson.visual} />
      </div>

      <section className="prereq-strip">
        <strong>Prerequisites</strong>
        <span>{lesson.prerequisites.join(", ")}</span>
      </section>

      {lesson.sections.map((section) => (
        <section className="lesson-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, index) => (
            <BlockRenderer block={block} key={`${section.heading}-${index}`} />
          ))}
        </section>
      ))}

      {lesson.links.length > 0 ? (
        <section className="lesson-section">
          <h2>Internal links</h2>
          <div className="link-row">
            {lesson.links.map((link) => (
              <a key={link.label} className="resource-link" href={config?.[link.configKey] ?? "#"}>
                {link.label}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {lesson.nextLessonIds.length > 0 ? (
        <section className="lesson-section">
          <h2>Next lessons</h2>
          <div className="next-row">
            {lesson.nextLessonIds.map((id) => {
              const next = getLessonById(id);
              if (!next) {
                return null;
              }
              return (
                <button key={id} className="next-button" type="button" onClick={() => onOpen(id)}>
                  {categoryIcons[next.category] ?? <BookOpen size={18} />}
                  {next.title}
                </button>
              );
            })}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function BlockRenderer({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "bullets":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "code":
      return <CodeBlock language={block.language} code={block.code} />;
    case "callout":
      return (
        <div className="callout">
          <strong>{block.title}</strong>
          <p>{block.text}</p>
        </div>
      );
    case "equation":
      return <div className="equation">{block.text}</div>;
    case "image":
      return (
        <figure className="tutorial-figure">
          <img src={block.src} alt={block.alt} />
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    default:
      return null;
  }
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await copyText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>{language}</span>
        <button type="button" onClick={handleCopy} aria-label="Copy code">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "true");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);
  if (!copied) {
    throw new Error("Copy failed");
  }
}

function blockText(block: LessonBlock): string[] {
  switch (block.type) {
    case "paragraph":
    case "equation":
      return [block.text];
    case "image":
      return [block.alt, block.caption];
    case "bullets":
    case "steps":
      return block.items;
    case "code":
      return [block.code];
    case "callout":
      return [block.title, block.text];
    default:
      return [];
  }
}

export default App;
