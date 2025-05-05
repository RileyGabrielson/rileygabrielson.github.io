---
layout: post
title:  "Recreating My First Program"
date:   2025-05-02 10:43:56 -0600
categories:
---

When I was 11 years old, my dad (an IT manager) thought I might have fun learning to program. He sat me down on our home computer, showed me some basic syntax and documentation, and let me go.

**Oh boy, I was hooked.**

Inside a little text file, I discovered a new kind of playground. I spent hours building choose-your-own-adventure style programs that you ran in the terminal. I wrote convoluted statements, dozens of global variables, and basically wrote the kind of code you would expect from an 11 year old. I had no idea what a keyboard interrupt was, so anytime I had an infinite loop (which was often), I would restart the machine by pressing the power button.

It would be 12 years before I came back to programming and really dedicated myself to it. But it all started with those first scripts. 

In the spirit of nostalgia, I decided to remake one of those programs.

## The Language

<img src="/static/kixtart-logo.png" style="width:450px" />

My dad set me up with `KiXtart`, a scripting language for Windows. It was created in 1991, and the idea of the language was to create logon scripts, hence the name that almost reads as "kick start". It is listed on their website as "Careware", and they ask that if you enjoy using the language that you donate to charity.

> Rather than commercializing KiXtart, I would like to turn its value into something truly positive. Specifically, I would like to use its value to help people who absolutely need and deserve our support.
>
> [kixtart.org](http://www.kixtart.org/)

I installed [wine](https://www.winehq.org/) on my linux machine, downloaded KiXtart version 4.70, and started with hello world.

```js
? "Hello World!"
```

## The Program

Now it's time to familiarize myself with the language. 11 year old me did not have very many tools, so it wasn't too much reading: global variables, if statements, while loops, user input, and goto statements. 

The [source code](https://github.com/RileyGabrielson/first-program/blob/master/adventure_naive.kix) is as faithful to my 11 year old self as I could manage. This quadruple nested if statement should tell you all that you need to know:

```js
IF $user_input == "1"
  GOSUB "Train"  
ELSE
  IF $user_input == "2"
    GOSUB "Dungeon"  
  ELSE
    IF $user_input == "3"
      GOSUB "Heal"  
    ELSE
      IF $user_input == "4"
        GOSUB "DisplayStats"  
      ELSE
        IF $user_input == "q"
          ; Do Nothing, quit in main menu
        ELSE
          ? "Invalid input, try again"
        ENDIF
      ENDIF
    ENDIF
  ENDIF
ENDIF
```

The script prompts you for some details about your character, and then has you choose between training, dungeon crawling, or healing, till you get bored and quit. As I recall, anything much more complex than that became too hard for me to maintain.

Here is how it looks:

![first-program](/static/first-program.gif)

\*chef's kiss\*

## The Experience

It was surreal to be back in that original text file, writing a silly game to show people. Those ugly goto statements have been rattling around in my brain for a long time, and writing them down again was strangely cathartic. It seems that 11 year old me and today me are both adept at writing dumpster fires in obscure scripting languages :)

Recreating this program taught me something important: I have always liked building things. There's still that same thrill when you get something working, that same frustration when it doesn't, and that same satisfaction when you finally figure it out. The tools have evolved, but the fundamental experience of creating something from nothing is still... magical. The satisfaction of seeing your creation working for the first time has to be a thread that ties every software engineer together.

How did your programming journey start? It might be illuminating to go back to your roots, if only to see you how far you have come.

## Additional Resources

- [KiXtart Command Reference](http://www.kixtart.org/?p=commandRef)
- I thought it would be cool to make an LSP for the KiXtart language. However, after a few hours of trying to prompt Claude into defining the shape of the KiXtart language, my willpower quickly drained. I was happy to abandon [the project](https://github.com/RileyGabrielson/kixtart-lsp) as soon as it stopped being fun. May it stand in my github profile as a reminder that not every idea is worth finishing.