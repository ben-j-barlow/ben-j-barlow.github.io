<!-- blog.md -->
---
layout: default
title: Blog
permalink: /blog/
---

# Blog Posts

{% for post in site.posts %}
  * {{ post.date | date: "%B %d, %Y" }} - [{{ post.title }}]({{ post.url }})
{% endfor %}