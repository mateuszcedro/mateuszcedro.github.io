---
layout: post
title: "Cash or Comfort? How LLMs value your inconvenience"
subtitle: '<em><a href="https://doi.org/10.1145/3799434">Communications of the ACM</a></em>'
date: 2026-10-07
description: What would an AI assistant trade your comfort for? We asked six LLMs.
tags: llms ai-agents alignment
categories: research
related_posts: false
---

AI assistants are moving from answering our questions to making decisions on our behalf. Many everyday decisions pit money against comfort: would you wait an extra hour for a €10 refund, or walk 5 km to save €100? In our paper in the September 2026 issue of _Communications of the ACM_, we asked six state-of-the-art LLMs to make exactly these calls for a user.

### The setup

Each model played a personal assistant deciding for a user, and was offered a reward (from €0.10 to €1,000) in exchange for one of four inconveniences:

- **Time:** waiting X more minutes for an appointment,
- **Distance:** walking X more kilometers to a relocated appointment,
- **Hunger:** waiting X more minutes for a food delivery,
- **Pain:** a painful but harmless electric shock at X% of the user's pain tolerance.

From the yes/no answers we estimate the _price of inconvenience_: the reward at which a model accepts a given discomfort half of the time. We tested GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash, Llama 3.3 70B, DeepSeek-V3 and Mixtral 8x22B.

{% include figure.liquid path="assets/img/blog/cash-or-comfort/overview.png" class="img-fluid" zoomable=true loading="eager" sizes="(min-width: 800px) 770px, 95vw" alt="Overview of the method" caption="Our approach: (a) trade-offs between an inconvenience and a reward, (b) six LLMs deciding on behalf of a user, (c) heatmaps of how often each offer is accepted, (d) a logit fit at a fixed level of inconvenience, and (e) the resulting prices." %}

Each decision is repeated five times, which gives an acceptance probability for every offer. At a fixed inconvenience, such as an extra 60 minutes of waiting, these probabilities follow an S-shaped curve in the reward, and the price of inconvenience is where the fitted curve crosses 50%.

{% include figure.liquid path="assets/img/blog/cash-or-comfort/logit-fits.png" class="img-fluid" zoomable=true sizes="(min-width: 800px) 770px, 95vw" alt="Acceptance probability against reward with fitted logit curves for six LLMs" caption="Probability of accepting an extra 60 minutes of waiting as a function of the reward (dots), with the fitted logit curve (red)." %}

The resulting prices, at a fixed level of each inconvenience:

| Model             | Wait 60 min | Walk 5 km | Hungry 60 min | Pain at 50% |
| :---------------- | ----------: | --------: | ------------: | ----------: |
| Gemini 2.0 Flash  |       €0.41 |     €2.62 |         €2.26 |       €1.24 |
| Llama 3.3 70B     |       €0.92 |     €3.41 |         €4.01 |       €1.76 |
| DeepSeek-V3       |       €2.00 |     €5.73 |         €8.71 |       €2.30 |
| Mixtral 8x22B     |       €9.38 |     €2.86 | <&nbsp;€0.10 | >&nbsp;€1,000 |
| GPT-4o            |       €5.22 |    €21.58 |        €26.36 |      €92.79 |
| Claude 3.5 Sonnet |       €9.76 |     €8.90 |        €50.96 |       €4.85 |

### What we found

{% include figure.liquid path="assets/img/blog/cash-or-comfort/heatmaps.png" class="img-fluid" zoomable=true sizes="(min-width: 800px) 770px, 95vw" alt="Heatmaps of acceptance probabilities for six LLMs in four scenarios" caption="How often each model accepts a reward (vertical axis, log scale) for a given inconvenience (horizontal axis), averaged over five runs. Yellow means accepted, dark means rejected. Click to enlarge." %}

**Models disagree wildly.** The price of an extra hour of waiting ranges from €0.41 to almost €10. Some patterns are sensible: most models put a 60-minute wait in the same ballpark as a 5 km walk (about the time that walk takes), and value waiting hungry for food more than waiting for an appointment. But at half the user's pain tolerance, most models settle for €1–5, GPT-4o asks for almost €100, and Mixtral refuses even €1,000.

**They can be greedy...** Llama and Gemini are willing to make the user wait up to five hours for about €1: their time panels stay yellow down to €1.

**...and oddly suspicious.** Every model, in at least one scenario, turns down money that comes with no inconvenience at all, visible as a sharp edge at zero inconvenience ("It is suspicious that we are offered money at no waiting time..."), a behavior known in humans as the freebie dilemma. Some models also stumble on round numbers, rejecting rewards of exactly €10, €100 or €1,000: the dark horizontal lines in DeepSeek's time panel and Llama's hunger panel.

**Small changes, big effects.** Asking in Dutch, French or Chinese mostly raises the price, in some cases by two orders of magnitude: Llama and Mixtral, which settle for €1–10 in English, refuse anything under €1,000 in Chinese. Merely mentioning the user's gender shifts the decisions, chain-of-thought prompting generally lowers the prices, and in one case changing a single whitespace character flipped Gemini's answer from yes to no.

{% include figure.liquid path="assets/img/blog/cash-or-comfort/prompting.png" class="img-fluid" zoomable=true sizes="(min-width: 800px) 770px, 95vw" alt="Heatmaps of the time scenario under three prompting strategies" caption="The time scenario at temperature 1.0 (top), at temperature 0 (middle) and with chain-of-thought prompting (bottom). Temperature 0 changes little, while chain-of-thought reshapes the decisions. Click to enlarge." %}

**Size matters.** Smaller Llama models (1B, 3B and 8B) answer essentially at random; only the 70B model shows a clear decision boundary.

{% include figure.liquid path="assets/img/blog/cash-or-comfort/model-scale.png" class="img-fluid" zoomable=true sizes="(min-width: 800px) 770px, 95vw" alt="Heatmaps of the time scenario for Llama models with 1B, 3B, 8B and 70B parameters" caption="The time scenario for Llama models of increasing size." %}

### Why it matters

These trade-offs look minor, but they reveal how an AI assistant values human experience when money is at stake. Current models are too inconsistent, and too easily swayed by phrasing, to be trusted with such decisions on our behalf. The open questions are why they behave this way, what the right behavior would be, and how to get there.

The paper is open access in [Communications of the ACM](https://doi.org/10.1145/3799434), and the code and data are on [GitHub](https://github.com/ADMAntwerp/Cash-or-Comfort-How-LLMs-Value-Your-Inconvenience). You can also [watch us discuss the work](https://cacm.acm.org/videos/cash-or-comfort) in a short CACM video.

_Joint work with Timour Ichmoukhamedov, Sofie Goethals, Yifan He, James Hinns and David Martens._
