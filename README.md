# Slim

Slim is a minimal, clean and beautiful theme for [Hugo](http://gohugo.io/).

![Slim screenshot](https://github.com/zhe/hugo-theme-slim/blob/master/images/screenshot.png)

[Demo](http://themes.gohugo.io/theme/slim).

## Installation

```
mkdir themes
cd themes
git clone https://github.com/zhe/hugo-theme-slim slim
```

See the [official docs](http://gohugo.io/themes/installing) for more information.

## Configuration
You could add `params` into your site's `config.toml` file:

```
[params]
  Subtitle = "Your site's subtitle/tagline"
  GithubID = "Your Github ID"
  TwitterID = "Your Twitter ID"
  AnalyticsID = "Your Google Analytics tracking code"
  DisqusShortname = "Your Disqus shortname"
  Summary = true  # takes true or false
  Content = false  # takes true or false
  # if both are set to true, summary is shown.
  # FooterMsg = "Copyright Me 2016. Powered by Hugo."
```

if you use `config.yaml`, it could look like:

```
params:
  Subtitle: "Your site's subtitle/tagline"
  GithubID: "Your Github ID"
  TwitterID: "Your Twitter ID"
  AnalyticsID: "Your Google Analytics tracking code"
  DisqusShortname: "Your Disqus shortname"
  Summary: true # takes true or false
  Content: false # takes true or false
  # if both are set to true, summary is shown
  # FooterMsg: "Custom footer message. Powered by Hugo."
```

### Enable Disqus to your post

1. Add your Disqus Shortname to the site config file;
2. You can enable Disqus per-post, by adding `comments: true` (YAML) or `comments = true` (TOML) in the front matter of your post. To disable it, you can either change the value to `false` or just not include `comments` variable and its value at all. 

## Build your site

```
hugo server -t slim
```


## License

Open sourced under [MIT license](https://github.com/zhe/hugo-theme-slim/blob/master/LICENSE.md).
