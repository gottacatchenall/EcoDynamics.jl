import{_ as i,c as a,a5 as t,o as n}from"./chunks/framework.Df4_ywaV.js";const l="/MetacommunityDynamics.jl/dev/assets/itjartv.aiGJPjxw.png",e="/MetacommunityDynamics.jl/dev/assets/macxnun.BLHFzArw.png",p="/MetacommunityDynamics.jl/dev/assets/nltgrqn.Y7L6lkmZ.png",h="/MetacommunityDynamics.jl/dev/assets/peflavt.B6L0iU1l.png",k="/MetacommunityDynamics.jl/dev/assets/ivxfbyi.xIXmP8IA.png",d="/MetacommunityDynamics.jl/dev/assets/egvghvo.CDf5QqUs.png",r="/MetacommunityDynamics.jl/dev/assets/ncvpdls.DKWNUJbD.png",o="/MetacommunityDynamics.jl/dev/assets/gpunflc.B2g2Vt2O.png",g="/MetacommunityDynamics.jl/dev/assets/ewrdiik.rOBVUM4Z.png",c="/MetacommunityDynamics.jl/dev/assets/lamdswq.DlRNNbYo.png",E="/MetacommunityDynamics.jl/dev/assets/kwotwax.JU79pAcl.png",B=JSON.parse('{"title":"Getting started with MetacommunityDynamics.jl","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/01_getting_started.md","filePath":"tutorials/01_getting_started.md","lastUpdated":null}'),y={name:"tutorials/01_getting_started.md"};function u(m,s,b,C,F,v){return n(),a("div",null,s[0]||(s[0]=[t('<h1 id="Getting-started-with-MetacommunityDynamics.jl" tabindex="-1">Getting started with <code>MetacommunityDynamics.jl</code> <a class="header-anchor" href="#Getting-started-with-MetacommunityDynamics.jl" aria-label="Permalink to &quot;Getting started with `MetacommunityDynamics.jl` {#Getting-started-with-MetacommunityDynamics.jl}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Abstract</p><p>In this tutorial, we create and simulate a simple model of community dynamics. We will then build a customized model. Then we&#39;ll make it spatial. Then we&#39;ll add stochasticity. Then we&#39;ll add niche effects. And that&#39;ll be the end of this tutorial.</p></div><p>In this tutorial, we will learn how to use <code>MetacommunityDynamics.jl</code> from scratch. We&#39;ll start by learning how to simulate Lotka-Volterra dynamics, how to adjust model parameters and how to change differential equation solvers. In the secont part, we&#39;ll focus on how MetacommunityDynamics.jl enables reaction-diffusion dynamics on spatial graphs, where we&#39;ll simulate how dispersal causes an LV system across many patches to become synchronized.</p><p>Let&#39;s start by loading the package. If you have not installed Julia or MetacommunityDynamics, see this <a href="./TODO">installation guide</a>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MetacommunityDynamics</span></span></code></pre></div><h2 id="A-simple-Lotka-Volterra-Model" tabindex="-1">A simple Lotka-Volterra Model <a class="header-anchor" href="#A-simple-Lotka-Volterra-Model" aria-label="Permalink to &quot;A simple Lotka-Volterra Model {#A-simple-Lotka-Volterra-Model}&quot;">​</a></h2><p><code>MetacommunityDynamics.jl</code> includes a library of many common models for population and community dynamics.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TrophicLotkaVolterra</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\x1B[34mLocal\x1B[39m \x1B[1mTrophicLotkaVolterra\x1B[22m</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lv)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A \x1B[34mTrophicLotkaVolterra\x1B[39m \x1B[32mLocal\x1B[39m \x1B[1m\x1B[38;2;166;134;235mProblem\x1B[39m\x1B[22m</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">traj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prob);</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(traj)</span></span></code></pre></div><p><img src="'+l+`" alt=""></p><h3 id="Changing-parameters" tabindex="-1">Changing parameters <a class="header-anchor" href="#Changing-parameters" aria-label="Permalink to &quot;Changing parameters {#Changing-parameters}&quot;">​</a></h3><p>foo</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lv_custom_params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TrophicLotkaVolterra</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(λ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, γ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">traj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lv_custom_params))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(traj)</span></span></code></pre></div><p><img src="`+e+`" alt=""></p><h3 id="Changing-the-simulation-length" tabindex="-1">Changing the simulation length <a class="header-anchor" href="#Changing-the-simulation-length" aria-label="Permalink to &quot;Changing the simulation length {#Changing-the-simulation-length}&quot;">​</a></h3><p>foo</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lv, tspan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prob))</span></span></code></pre></div><p><img src="`+p+`" alt=""></p><h3 id="Changing-the-initial-condition" tabindex="-1">Changing the initial condition <a class="header-anchor" href="#Changing-the-initial-condition" aria-label="Permalink to &quot;Changing the initial condition {#Changing-the-initial-condition}&quot;">​</a></h3><p>foo</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lv, u0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prob))</span></span></code></pre></div><p><img src="`+h+`" alt=""></p><h3 id="Using-a-custom-differential-equation-solver" tabindex="-1">Using a custom differential-equation solver <a class="header-anchor" href="#Using-a-custom-differential-equation-solver" aria-label="Permalink to &quot;Using a custom differential-equation solver {#Using-a-custom-differential-equation-solver}&quot;">​</a></h3><p>bar</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DifferentialEquations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lv)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prob, solver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vern7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()))</span></span></code></pre></div><p><img src="`+k+`" alt=""></p><p>foo</p><h2 id="Making-our-model-spatial" tabindex="-1">Making our model spatial <a class="header-anchor" href="#Making-our-model-spatial" aria-label="Permalink to &quot;Making our model spatial {#Making-our-model-spatial}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coords </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Coordinates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(coords)</span></span></code></pre></div><p><img src="`+d+`" alt=""></p><p>foo</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DispersalKernel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(decay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, max_distance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(kern)</span></span></code></pre></div><p><img src="`+r+`" alt=""></p><p>bar</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SpatialGraph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(coords, kern);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg)</span></span></code></pre></div><p><img src="`+o+`" alt=""></p><p>foobar</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spatial_lv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> spatialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lv, sg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SpeciesPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\x1B[34mSpatial\x1B[39m \x1B[1mTrophicLotkaVolterra\x1B[22m</span></span></code></pre></div><p>very low migration</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">diffusion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Diffusion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\x1B[38;5;129m\x1B[1mDiffusion\x1B[22m\x1B[38;5;129m\x1B[39m matrix with base dispersal probability \x1B[34m\x1B[38;2;144;202;249m0.001\x1B[39m\x1B[34m\x1B[39m</span></span></code></pre></div><p>foobarbaz</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spatial_prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_lv, diffusion;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">numsites</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tspan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A \x1B[34mTrophicLotkaVolterra\x1B[39m \x1B[32mSpatial\x1B[39m \x1B[1m\x1B[38;2;166;134;235mProblem\x1B[39m\x1B[22m</span></span></code></pre></div><p>foo</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_prob)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)</span></span></code></pre></div><p><img src="`+g+`" alt=""></p><p>biz</p><p>Very high migration</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">diffusion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Diffusion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spatial_prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_lv, diffusion;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">numsites</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tspan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_prob)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)</span></span></code></pre></div><p><img src="`+c+`" alt=""></p><p>Notice the difference in synchrony</p><h2 id="Species-specific-dispersal" tabindex="-1">Species specific dispersal <a class="header-anchor" href="#Species-specific-dispersal" aria-label="Permalink to &quot;Species specific dispersal {#Species-specific-dispersal}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">diffusion_vec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Diffusion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Diffusion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spatial_prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_lv, diffusion_vec;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">numsites</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sg)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tspan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> simulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_prob)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makieplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)</span></span></code></pre></div><p><img src="`+E+`" alt=""></p><h2 id="Demographic-stochasticity" tabindex="-1">Demographic stochasticity <a class="header-anchor" href="#Demographic-stochasticity" aria-label="Permalink to &quot;Demographic stochasticity {#Demographic-stochasticity}&quot;">​</a></h2><p>something in the vector of diffusions + stochastic constructor is broken.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spatial_prob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spatial_lv, diffusion_vec, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GaussianDrift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tspan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A \x1B[34mTrophicLotkaVolterra\x1B[39m \x1B[32mSpatial\x1B[39m \x1B[1m\x1B[38;2;166;134;235mProblem\x1B[39m\x1B[22m</span></span></code></pre></div><h2 id="Local-environmental-variation-and-niche-effects" tabindex="-1">Local environmental variation and niche effects <a class="header-anchor" href="#Local-environmental-variation-and-niche-effects" aria-label="Permalink to &quot;Local environmental variation and niche effects {#Local-environmental-variation-and-niche-effects}&quot;">​</a></h2>`,64)]))}const D=i(y,[["render",u]]);export{B as __pageData,D as default};