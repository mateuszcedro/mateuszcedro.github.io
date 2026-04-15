---
layout: page
title: software
permalink: /software/
description: Open-source software and research code.
nav: true
nav_order: 5
---

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
