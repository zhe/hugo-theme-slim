# Slim

Slim is a minimal, clean and beautiful theme for [Hugo](http://gohugo.io/).

![Slim screenshot](https://github.com/zhe/hugo-theme-slim/blob/master/images/screenshot.png)

[Demo](http://zhezhang.co).

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
```

if you use `config.yaml`, it could look like:

```
params:
  Subtitle: "Your site's subtitle/tagline"
  GithubID: "Your Github ID"
  TwitterID: "Your Twitter ID"
  AnalyticsID: "Your Google Analytics tracking code"
```

## Build your site

```
hugo server -t slim
```


## License

Open sourced under [MIT license](https://github.com/zhe/hugo-theme-slim/blob/master/LICENSE.md).
