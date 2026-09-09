'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, stagger, createScope } from 'animejs';
import { ArrowUpRight, ArrowDown, Code2, Pause, Play } from 'lucide-react';
import { profile, projects } from './portfolio-content';

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [motion, setMotion] = useState(false);

  // Respect the visitor's accessibility preference before starting motion.
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!motion) return;
    // A scope keeps animations inside this page and cleans up on navigation.
    const scope = createScope({ root }).add(() => {
      animate('.hero-line', { y: [32, 0], opacity: [0, 1], delay: stagger(110), duration: 1000, ease: 'outExpo' });
      animate('.motion-bar', { scaleY: [0.22, 1, 0.22], delay: stagger(65, { from: 'center' }), duration: 2800, loop: true, ease: 'inOutSine' });
      animate('.orbit', { rotate: [0, 360], duration: 24000, loop: true, ease: 'linear' });
    });
    return () => scope.revert();
  }, [motion]);

  return (
    <main ref={root} id="top">
      <a className="skip-link" href="#work">Skip to projects</a>
      <header className="navigation wrap">
        <a href="#top" className="wordmark" aria-label="Reign Santiago home">rs<span>✳</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Connect <ArrowUpRight size={15}/></a></nav>
        <a className="github-nav" href={profile.github}>GitHub <ArrowUpRight size={16}/></a>
      </header>

      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="status-dot"/> A WORK IN PROGRESS. JUST LIKE ME.</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="intro hero-line">Hey, I’m {profile.firstName}.</p>
            <h1 id="hero-title"><span className="hero-line">Curiosity.</span><span className="hero-line">Code.</span><span className="hero-line accent">A little motion.</span></h1>
            <p className="hero-description hero-line">{profile.description}</p>
            <a className="primary-link" href="#work">Explore my work <ArrowDown size={19}/></a>
          </div>
          <div className="motion-panel">
            <div className="panel-top"><span>EXPERIMENT 001</span><span className="tiny-cross">+</span></div>
            <div className="motion-field" aria-hidden="true">
              <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
              <div className="bars">{Array.from({ length: 23 }, (_, i) => <span className="motion-bar" key={i} style={{ height: `${38 + Math.sin(i / 22 * Math.PI) * 62}%` }}/>)}</div>
              <span className="field-center">✳</span>
            </div>
            <div className="panel-bottom"><span>IDEAS, IN MOTION</span><button onClick={() => setMotion(!motion)} aria-label={motion ? 'Pause animations' : 'Play animations'} aria-pressed={motion}>{motion ? <Pause size={15}/> : <Play size={15}/>} {motion ? 'Pause' : 'Play'}</button></div>
          </div>
        </div>
        <div className="hero-footer"><span>REIGN NIEL SANTIAGO</span><span>LEARNING BY BUILDING <span className="accent">↗</span></span><a href="#work">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / THE WORK</p><h2 id="work-title">Small starts.<br/>Real possibilities.</h2></div><p>A growing collection of projects,<br/>experiments, and things I’m figuring out.</p></div>
        <div className="projects">{projects.map((project, i) => <article className={`project project-${i}`} key={project.title}>
          <div className="project-visual" aria-hidden="true"><span className="project-index">0{i + 1}</span>{i === 0 ? <div className="project-type">SANTIAGO<br/><span>ELECTRIC</span><small>COMPANY WEBSITE / IN DEVELOPMENT</small></div> : <div className="portfolio-type">hello<span>world.</span><small>A PERSONAL SPACE ON THE INTERNET</small></div>}<span className="visual-plus">+</span></div>
          <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
          <h3>{project.title}</h3><p>{project.description}</p>
          <a className="text-link" href={project.href}>{project.linkLabel} <ArrowUpRight size={17}/></a>
        </article>)}</div>
      </section>

      <section className="about wrap" id="about" aria-labelledby="about-title"><p className="eyebrow">02 / THE PERSON</p><div className="about-grid"><h2 id="about-title">At the beginning.<br/><span className="muted">Going somewhere.</span></h2><div><p className="about-lead">I’m {profile.name}, and I’m learning to turn ideas into things you can actually use.</p><p>I’m new to coding. This portfolio is part of the process: a place to try, learn, and make each version a little better. Right now, I’m exploring websites, thoughtful design, and the way motion makes a page feel alive.</p><div className="learning-tags"><span>Web development</span><span>Creative coding</span><span>Learning in public</span></div></div></div><div className="now"><span><span className="status-dot"/> CURRENTLY EXPLORING</span><p>From my first website to my next idea.</p><span>ONE COMMIT AT A TIME ↗</span></div></section>

      <section className="contact wrap" id="contact"><p className="eyebrow">03 / WHAT’S NEXT?</p><h2>Good things start<br/>with <a href={profile.github}>a connection.<ArrowUpRight/></a></h2><div className="contact-bottom"><p>Follow the projects. Share an idea.<br/>Let’s see where it goes.</p><a className="primary-link" href={profile.github}><Code2 size={19}/> Find me on GitHub <ArrowUpRight size={18}/></a></div></section>
      <footer className="footer wrap"><a href="#top" className="wordmark">rs<span>✳</span></a><p>© {new Date().getFullYear()} {profile.name}</p><span>ALWAYS A WORK IN PROGRESS.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
