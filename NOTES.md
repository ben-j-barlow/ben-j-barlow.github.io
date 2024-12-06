# NOTES

## Removed features 
* In `cv.md`, removed path to CV PDF (field `cv_pdf: `) which removed PDF logo on CV page.
* In `config.yml`: edited `jekyll-archives:` from `enabled: [year, tags, categories]` and removed categories
* In `config.yml`: `enable_darkmode: true` set to false `# enables switching between light/dark modes`


## Potential future content
* Academic history comment: My undergraduate studies taught foundations in mathematics, statistics, and computer science. My postgraduate programme comprised statistics courses in Bayesian methods, but was dominated by ML courses in pattern recognition, probabilistic ML, reinforcement learning, and deep learning.

## Help
* Article for importing medium: https://medium.com/@suman.maity112/how-do-i-cross-post-medium-articles-to-github-pages-powered-by-jekyll-1cdf174bc674

## Commands

```
bundle update && bundle install
curl https://medium.com/feed/@ben-j-barlow > .rss.xml
bundle exec jekyll import rss --source .rss.xml
```

```
bundle update && bundle install
bundle exec jekyll import rss \
--source https://medium.com/feed/@ben-j-barlow \
--canonical_link true \
--extract_tags category
```

```
bundle exec jekyll import medium \
--username @ben-j-barlow
```
bundle exec jekyll import medium \
--username <medium username>