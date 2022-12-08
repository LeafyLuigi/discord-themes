# Discord Themes

This repo is for where I put the (mini) themes I make for Discord.

"Whitney" file taken from Overimagine1's old-discord-font repo, linked below.

## Contributors:

| <a href="https://github.com/LeafyLuigi" target="_blank"> <img src="https://avatars.githubusercontent.com/u/13402990?v=4" alt="" width="96px" height="96px"> </a> | 
|:-:|
| LeafyLuigi |
| <a href="https://github.com/LeafyLuigi/discord-themes/tree/master/pyrite" target="_blank">Pyrite</a> |

### Big Thanks:

| <a href="https://github.com/Overimagine1" target="_blank"> <img src="https://avatars.githubusercontent.com/u/79660414?v=4" alt="" width="48px" height="48px"/> </a> |
|:-:|
| Overimagine1 |
| <a href="https://github.com/Overimagine1/old-discord-font" target="_blank">"Whitney" file</a> |

### Building from scratch:

#### I use Linux and as such the package.json syntax needs to be adjusted if you use Windows.
#### The wording in this section is very poor.

The class list is a large SCSS map with the ability to call sub-maps (_ie #{c(foo bar baz)} calls $classes: (foo:( bar: ("baz": "className")))_) if any (sub)^*n*-sub-maps are defined.

Within the `package.json` file, you'll find some bash commands. It's a mess and needs updating like finding a way to make them all work without manually adding (or removing) a command (or 5) to the file per theme. To add to this, follow what's already there and add to `copyClasses`, `test` and `build`. You'll also need to add the following folder to the theme you want to add: `$themeName/source/classes` as the `cp` command may not make a directory should it doesn't exist. The `_classes.scss` file could probably be renamed to `_index.scss` and likely wouldn't change all too much. Most `_index.scss` files are only redirects anyway.

The classes list uses a format of `#{c($category $class)}` where both `$category` and `$class` are descriptive. It also adds a preceding `.` to the class name upon `test` or `build`, meaning IDs (which use #) and HTML elements can't be used for the initial character. That syntax also causes an error if the file you're editing lacks `@use "classes" as *;`, the classes file hasn't been called _at all_ or whatever being used in place of `"classes"` (in Pyrite's case this is "backend") hasn't been used as *.
