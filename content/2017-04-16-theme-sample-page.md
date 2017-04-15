---
title: "Theme Sample Page"
description: "A sample page shows how this theme looks like"
date: "2017-04-16"
slug: "theme-sample-page"
type: "post"
---

## Typography

This is a typical paragraphy, which is probably the most used element in a blog post. You could use **Bold**, *Italic*, `inline code`, etc. on the page.



## Images

There are two ways to insert images. Markdown and Shortcode.

Markdown

```
![alt](path/to/image.jpg)
```

Shortcode

```
{{</* figure src="path/to/image.jpg" title="Caption" attr="Zhe" attrlink="https://twitter.com" */>}}
```

## Youtube

This shortcode embeds a responsive video player for YouTube videos. Only the ID of the video is required, e.g.:

https://www.youtube.com/watch?v=w7Ft2ymGmfc

Copy the ID from behind v= and pass it to the shortcode:

```
{{</* youtube w7Ft2ymGmfc */>}}
```

{{< youtube w7Ft2ymGmfc >}}


## GitHub gists

Including code snippets with GitHub gists while writing a tutorial is common situation bloggers face. With a given URL of the gist, e.g.:

https://gist.github.com/spf13/7896402
pass the owner and the ID of the gist to the shortcode:

```
{{</* gist spf13 7896402 */>}}
```

{{< gist spf13 7896402 >}}

If the gist contains several files and you want to quote just one of them, you can pass the filename (quoted) as an optional third argument:

```
{{</* gist spf13 7896402 "img.html" */>}}
```

