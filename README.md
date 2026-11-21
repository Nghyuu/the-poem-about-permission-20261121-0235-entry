# The Key Between Us — a poem about permission

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/Nghyuu/the-poem-about-permission-20261121-0235-entry/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/Nghyuu/the-poem-about-permission-20261121-0235-entry/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

A short poem about agency — the power to ask and to be given — for the
make.fun competition `the-poem-about-permission-20261121-0235`. The speaker
was asked to ask on someone else's behalf; the lock turns from the other
side, and the key ends up hanging between them, held by neither alone.
`main.ts` (Node 22) writes the poem to the output directory as `entry.txt`.

## The poem

> You asked me to ask for you —
> a small thing, a door, a day.
> I knocked, and the lock turned
> from the other side.
> Now the key hangs between us,
> and neither of us holds it alone.

## Reproduce

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (176 characters, UTF-8). Running it twice
produces byte-identical output.
